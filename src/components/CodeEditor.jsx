import React, { useRef } from 'react';

/**
 * CodeEditor Component - Editor để viết Python code
 * Sử dụng textarea đơn giản với syntax highlighting cơ bản
 */
const CodeEditor = ({ code, onChange, onRun, isRunning, stdin, onStdinChange }) => {
  const textareaRef = useRef(null);

  // Handle Tab key để thụt lề
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      onChange(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
    }

    // Ctrl/Cmd + Enter để chạy code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      onRun();
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-900 text-gray-100 overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-800 px-3 md:px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-xs md:text-sm font-medium text-gray-300">📝 Code Editor</span>
          <span className="hidden md:inline text-xs text-gray-500">Python</span>
        </div>
        <button
          onClick={onRun}
          disabled={isRunning}
          className={`px-4 md:px-4 py-2 md:py-1.5 rounded-md font-medium transition-all text-sm md:text-sm ${
            isRunning
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white active:bg-green-800'
          }`}
        >
          {isRunning ? '⏳ Đang chạy...' : '▶️ Run'}
        </button>
      </div>

      {/* Editor */}
      <div className="flex-1 relative overflow-hidden">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-full p-3 md:p-4 font-mono text-base md:text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none overflow-auto"
          placeholder="# Nhập code Python của bạn ở đây..."
          spellCheck={false}
          style={{
            tabSize: 4,
          }}
        />
      </div>

      {/* Stdin */}
      {typeof onStdinChange === 'function' && (
        <div className="bg-gray-800 px-3 md:px-4 py-3 border-t border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-300">⌨️ Input (stdin)</span>
            <span className="hidden md:inline text-[11px] text-gray-500">Mỗi dòng = 1 lần input()</span>
          </div>
          <textarea
            value={stdin ?? ''}
            onChange={(e) => onStdinChange(e.target.value)}
            className="w-full p-2 font-mono text-sm md:text-xs bg-gray-900 text-gray-100 resize-none focus:outline-none border border-gray-700 rounded"
            placeholder={'Ví dụ:\n10\n5'}
            rows={3}
            spellCheck={false}
          />
          <span className="md:hidden text-[10px] text-gray-500 mt-1 block">Mỗi dòng = 1 lần input()</span>
        </div>
      )}

      {/* Footer hint */}
      <div className="bg-gray-800 px-3 md:px-4 py-1.5 border-t border-gray-700">
        <span className="text-xs text-gray-500 md:hidden">
          💡 Tip: Nhấn nút Run để chạy code
        </span>
        <span className="hidden md:inline text-xs text-gray-500">
          💡 Tip: Nhấn Ctrl/Cmd + Enter để chạy code nhanh
        </span>
      </div>
    </div>
  );
};

export default CodeEditor;

