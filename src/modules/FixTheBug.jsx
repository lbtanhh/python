import React, { useState, useEffect } from 'react';
import { bugFixes } from '../data/bugFixes';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';
import { runPython } from '../utils/pyodideHelper';

/**
 * FixTheBug Module - Module học từ lỗi sai (sửa code sai)
 */
const FixTheBug = () => {
  const [selectedBug, setSelectedBug] = useState(bugFixes[0]);
  const [code, setCode] = useState(selectedBug.buggyCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  // Reset code khi chọn bài khác
  useEffect(() => {
    setCode(selectedBug.buggyCode);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
  }, [selectedBug]);

  // Chạy code và kiểm tra
  const handleRun = async () => {
    setIsRunning(true);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');

    try {
      // Tạo input mẫu để test
      let inputString = '';
      if (selectedBug.id === 1 || selectedBug.id === 2) {
        // Điểm số
        inputString = '6';
      } else if (selectedBug.id === 3) {
        // Tuổi
        inputString = '18';
      } else if (selectedBug.id === 4) {
        // Số
        inputString = '15';
      }

      const result = await runPython(code, inputString);

      if (result.error) {
        // Code vẫn còn lỗi
        setError(result.error);
        setStatus('error');
        setStatusMessage('❌ Code vẫn còn lỗi! Hãy kiểm tra lại.');
      } else {
        // Code chạy được, kiểm tra xem có đúng không
        setOutput(result.output);

        // So sánh với code đúng (chạy code đúng để lấy output mẫu)
        const correctResult = await runPython(selectedBug.correctCode, inputString);
        const userOutput = result.output.trim();
        const expectedOutput = correctResult.output.trim();

        if (userOutput === expectedOutput) {
          setStatus('success');
          setStatusMessage('✅ Chúc mừng! Bạn đã sửa đúng rồi! 🎉');
        } else {
          setStatus('warning');
          setStatusMessage('⚠️ Code chạy được nhưng kết quả chưa đúng. Hãy kiểm tra lại logic!');
        }
      }
    } catch (e) {
      setError(`Lỗi: ${e.message || String(e)}`);
      setStatus('error');
      setStatusMessage('❌ Có lỗi xảy ra!');
    } finally {
      setIsRunning(false);
    }
  };

  // Reset code về code sai ban đầu
  const handleReset = () => {
    setCode(selectedBug.buggyCode);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
  };

  // Xem code đúng (hint)
  const handleShowHint = () => {
    const confirmed = window.confirm(
      'Bạn có chắc muốn xem code đúng? (Sẽ thay thế code hiện tại)'
    );
    if (confirmed) {
      setCode(selectedBug.correctCode);
      setOutput('');
      setError(null);
      setStatus(null);
      setStatusMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex overflow-hidden">
        {/* Content Panel - Left */}
        <div className="w-1/3 bg-white border-r border-gray-300 overflow-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              🐛 Sai Rồi Sửa
            </h1>

            {/* Bug Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn bài:
              </label>
              <select
                value={selectedBug.id}
                onChange={(e) => {
                  const bug = bugFixes.find((b) => b.id === parseInt(e.target.value));
                  if (bug) setSelectedBug(bug);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {bugFixes.map((bug) => (
                  <option key={bug.id} value={bug.id}>
                    {bug.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Bug Description */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <h2 className="text-lg font-semibold text-orange-900 mb-2">
                {selectedBug.title}
              </h2>
              <div className="text-sm text-orange-800 whitespace-pre-line mb-3">
                {selectedBug.description}
              </div>
              <div className="text-xs text-orange-700 bg-orange-100 p-2 rounded">
                💡 Đọc kỹ mô tả lỗi và tìm cách sửa!
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleReset}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium transition-all"
              >
                🔄 Reset về Code Sai
              </button>
              <button
                onClick={handleShowHint}
                className="w-full px-4 py-2 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 rounded-md font-medium transition-all"
              >
                💡 Xem Code Đúng (Hint)
              </button>
            </div>
          </div>
        </div>

        {/* Code Editor - Middle */}
        <div className="w-1/3 border-r border-gray-300">
          <CodeEditor
            code={code}
            onChange={setCode}
            onRun={handleRun}
            isRunning={isRunning}
          />
        </div>

        {/* Output Panel - Right */}
        <div className="w-1/3">
          <OutputPanel
            output={output}
            error={error}
            status={status}
            statusMessage={statusMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default FixTheBug;

