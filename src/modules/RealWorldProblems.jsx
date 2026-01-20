import React, { useState, useEffect } from 'react';
import { realWorldProblems } from '../data/realWorldProblems';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';
import { runPython } from '../utils/pyodideHelper';

/**
 * RealWorldProblems Module - Học Python qua bài toán đời sống
 */
const RealWorldProblems = () => {
  const [selectedProblem, setSelectedProblem] = useState(realWorldProblems[0]);
  const [code, setCode] = useState(selectedProblem.starterCode);
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const getDefaultInputForProblem = (problem) => {
    if (!problem) return '';
    switch (problem.id) {
      case 1: // Tính tiền nước
        return '25';
      case 2: // Xếp loại học sinh
        return '7.5';
      case 4: // Tính tổng tiền mua hàng
        return '3\n10000\n15000\n20000';
      case 5: // Tìm số lớn nhất
        return '5\n8\n3\n9\n2';
      case 12: // Đếm từ trong câu
        return 'Python là ngôn ngữ lập trình';
      case 13: // Kiểm tra mật khẩu
        return 'MyPass123';
      case 14: { // Game đoán số
        const secret = Math.floor(Math.random() * 100) + 1;
        let guesses = [];
        let current = 50;
        for (let i = 0; i < 10 && current !== secret; i++) {
          guesses.push(String(current));
          if (current < secret) {
            current = Math.min(current + Math.floor((secret - current) / 2), secret);
          } else {
            current = Math.max(current - Math.floor((current - secret) / 2), secret);
          }
        }
        guesses.push(String(secret));
        return guesses.join('\n');
      }
      default:
        return '';
    }
  };

  // Reset code khi chọn bài khác
  useEffect(() => {
    setCode(selectedProblem.starterCode);
    setStdin(getDefaultInputForProblem(selectedProblem));
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
    setShowSolution(false);
  }, [selectedProblem]);

  // Chạy code
  const handleRun = async () => {
    setIsRunning(true);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');

    try {
      const result = await runPython(code, stdin);

      if (result.error) {
        setError(result.error);
        setStatus('error');
        setStatusMessage('❌ Code có lỗi! Hãy kiểm tra lại.');
      } else {
        setOutput(result.output);
        setStatus('success');
        setStatusMessage('✅ Code đã chạy! Kiểm tra kết quả bên dưới.');
      }
    } catch (e) {
      setError(`Lỗi: ${e.message || String(e)}`);
      setStatus('error');
    } finally {
      setIsRunning(false);
    }
  };

  // Reset code về ban đầu
  const handleReset = () => {
    setCode(selectedProblem.starterCode);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
    setShowSolution(false);
  };

  // Hiển thị đáp án
  const handleShowSolution = () => {
    const confirmed = window.confirm(
      'Bạn có chắc muốn xem đáp án? (Sẽ thay thế code hiện tại)'
    );
    if (confirmed) {
      setCode(selectedProblem.solution);
      setShowSolution(true);
      setOutput('');
      setError(null);
      setStatus(null);
      setStatusMessage('');
    }
  };

  // Lọc bài theo concept
  const concepts = [...new Set(realWorldProblems.map(p => p.concept))];
  const [selectedConcept, setSelectedConcept] = useState('Tất cả');

  const filteredProblems = selectedConcept === 'Tất cả' 
    ? realWorldProblems 
    : realWorldProblems.filter(p => p.concept === selectedConcept);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex overflow-hidden">
        {/* Content Panel - Left */}
        <div className="w-1/3 bg-white border-r border-gray-300 overflow-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              📚 Bài Toán Đời Sống
            </h1>

            {/* Concept Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lọc theo khái niệm:
              </label>
              <select
                value={selectedConcept}
                onChange={(e) => {
                  setSelectedConcept(e.target.value);
                  // Chọn bài đầu tiên của concept mới
                  const filtered = e.target.value === 'Tất cả' 
                    ? realWorldProblems 
                    : realWorldProblems.filter(p => p.concept === e.target.value);
                  if (filtered.length > 0) {
                    setSelectedProblem(filtered[0]);
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Tất cả</option>
                {concepts.map((concept) => (
                  <option key={concept} value={concept}>
                    {concept}
                  </option>
                ))}
              </select>
            </div>

            {/* Problem Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn bài học:
              </label>
              <select
                value={selectedProblem.id}
                onChange={(e) => {
                  const problem = realWorldProblems.find(
                    (p) => p.id === parseInt(e.target.value)
                  );
                  if (problem) setSelectedProblem(problem);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filteredProblems.map((problem) => (
                  <option key={problem.id} value={problem.id}>
                    {problem.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Problem Description */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-purple-900">
                  {selectedProblem.title}
                </h2>
                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                  {selectedProblem.concept}
                </span>
              </div>
              <div className="text-sm text-purple-800 whitespace-pre-line">
                {selectedProblem.description}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleReset}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium transition-all"
              >
                🔄 Reset Code
              </button>
              <button
                onClick={handleShowSolution}
                className="w-full px-4 py-2 bg-purple-200 hover:bg-purple-300 text-purple-900 rounded-md font-medium transition-all"
              >
                💡 Xem Đáp Án
              </button>
            </div>

            {showSolution && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 Bạn đang xem đáp án. Hãy chạy code để xem kết quả!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Code Editor - Middle */}
        <div className="w-1/3 border-r border-gray-300">
          <CodeEditor
            code={code}
            onChange={setCode}
            onRun={handleRun}
            isRunning={isRunning}
            stdin={stdin}
            onStdinChange={setStdin}
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

export default RealWorldProblems;

