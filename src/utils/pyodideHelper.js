/**
 * Pyodide Helper - Quản lý Pyodide runtime và các hàm chạy Python code
 * Load Pyodide từ CDN và cung cấp các helper functions
 */

let pyodideInstance = null;
let isLoading = false;
let loadPromise = null;

/**
 * Load Pyodide từ CDN (chỉ load 1 lần)
 */
export const loadPyodide = async () => {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  if (isLoading) {
    return loadPromise;
  }

  isLoading = true;
  loadPromise = (async () => {
    try {
      // Kiểm tra xem Pyodide đã được load chưa
      if (!window.loadPyodide) {
        // Load Pyodide từ CDN bằng cách thêm script tag
        await new Promise((resolve, reject) => {
          // Kiểm tra xem script đã được thêm chưa
          const existingScript = document.querySelector('script[src*="pyodide"]');
          
          if (existingScript) {
            // Script đã có, đợi load
            const checkInterval = setInterval(() => {
              if (window.loadPyodide) {
                clearInterval(checkInterval);
                resolve();
              }
            }, 100);
            setTimeout(() => {
              clearInterval(checkInterval);
              reject(new Error('Timeout waiting for Pyodide to load'));
            }, 30000);
          } else {
            // Tạo và thêm script mới
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
            script.onload = () => {
              // Đợi thêm một chút để đảm bảo window.loadPyodide đã sẵn sàng
              setTimeout(resolve, 100);
            };
            script.onerror = () => reject(new Error('Failed to load Pyodide script'));
            document.head.appendChild(script);
          }
        });
      }

      // Khởi tạo Pyodide
      if (!pyodideInstance) {
        pyodideInstance = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
        });
      }

      // Set up mock input function (stdout sẽ được set trong runPython)
      pyodideInstance.runPython(`
import sys
from io import StringIO

# Global variables
_input_queue = []
_stdout_capture = None

def mock_input(prompt=""):
    global _input_queue, _stdout_capture
    if _input_queue:
        value = _input_queue.pop(0)
        # Print prompt nếu có
        if prompt and _stdout_capture:
            _stdout_capture.write(str(prompt))
        return value
    return ""

# Override built-in input
import builtins
builtins.input = mock_input
      `);

      isLoading = false;
      return pyodideInstance;
    } catch (error) {
      isLoading = false;
      loadPromise = null;
      throw error;
    }
  })();

  return loadPromise;
};

/**
 * Chạy Python code với input tùy chọn
 * @param {string} code - Python code để chạy
 * @param {string} inputString - Input string (nhiều dòng cách nhau bởi \n)
 * @returns {Object} {output: string, error: string|null}
 */
export const runPython = async (code, inputString = '') => {
  try {
    // Đảm bảo Pyodide đã được load
    const pyodide = await loadPyodide();

    // Set up input queue (xử lý input trước)
    const inputs = inputString ? inputString.split('\n').map(line => line.trim()).filter(line => line !== '') : [];
    pyodide.runPython(`
_input_queue = ${JSON.stringify(inputs)}
    `);

    // Reset và set up stdout capture
    pyodide.runPython(`
import sys
from io import StringIO
_stdout_capture = StringIO()
sys.stdout = _stdout_capture
    `);

    // Chạy code
    let output = '';
    let error = null;

    try {
      pyodide.runPython(code);
      
      // Lấy output từ stdout capture
      pyodide.runPython('_stdout_capture.seek(0)');
      const outputResult = pyodide.runPython('_stdout_capture.read()');
      output = outputResult || '';
      
    } catch (e) {
      error = e.message || String(e);
      // Nếu là SyntaxError, format lại cho dễ đọc
      if (error.includes('SyntaxError')) {
        error = error.replace(/File "<exec>", line (\d+)/g, 'Dòng $1:');
      }
    } finally {
      // Restore stdout
      pyodide.runPython(`
import sys
sys.stdout = sys.__stdout__
      `);
    }

    // Trim output và loại bỏ ký tự null/whitespace thừa
    if (output) {
      // Tránh regex có control char (ESLint: no-control-regex)
      output = output.toString().trim().split('\x00').join('');
    }

    return { output: output || '', error };
  } catch (e) {
    return {
      output: '',
      error: `Lỗi: ${e.message || String(e)}`,
    };
  }
};

/**
 * Check xem Pyodide đã được load chưa
 */
export const isPyodideReady = () => {
  return pyodideInstance !== null;
};

