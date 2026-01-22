import React, { useState, useEffect } from 'react';
import { getParts, getSectionsByPart, getExercisesByPartAndSection } from '../data/exercises';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';
import { runPython } from '../utils/pyodideHelper';

/**
 * ExerciseJudge Module - Module làm bài tập với chấm tự động
 */
const ExerciseJudge = () => {
  const [selectedPart, setSelectedPart] = useState(1);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [code, setCode] = useState('');
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [testResults, setTestResults] = useState([]);

  const parts = getParts();

  // Khởi tạo: chọn phần đầu tiên và section đầu tiên (chỉ chạy 1 lần khi mount)
  useEffect(() => {
    const partsList = getParts();
    if (partsList.length > 0) {
      const firstPart = partsList[0].part;
      const sections = getSectionsByPart(firstPart);
      if (sections.length > 0) {
        setSelectedSection(sections[0]);
        const exercises = getExercisesByPartAndSection(firstPart, sections[0]);
        if (exercises.length > 0) {
          setSelectedExercise(exercises[0]);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Khi chọn phần khác, reset về section đầu tiên
  useEffect(() => {
    if (selectedPart) {
      const sections = getSectionsByPart(selectedPart);
      if (sections.length > 0) {
        setSelectedSection(sections[0]);
        const exercises = getExercisesByPartAndSection(selectedPart, sections[0]);
        if (exercises.length > 0) {
          setSelectedExercise(exercises[0]);
        }
      }
    }
  }, [selectedPart]);

  // Khi chọn section khác, chọn bài đầu tiên
  useEffect(() => {
    if (selectedPart && selectedSection) {
      const exercises = getExercisesByPartAndSection(selectedPart, selectedSection);
      if (exercises.length > 0) {
        setSelectedExercise(exercises[0]);
      }
    }
  }, [selectedPart, selectedSection]);

  // Khi chọn bài khác, reset code và stdin
  useEffect(() => {
    if (selectedExercise) {
      setCode(selectedExercise.starterCode);
      setStdin(selectedExercise.hiddenTests?.[0]?.input || '');
      setOutput('');
      setError(null);
      setStatus(null);
      setStatusMessage('');
      setTestResults([]);
    }
  }, [selectedExercise]);

  const getDefaultInputForExercise = (exercise) => {
    return exercise?.hiddenTests?.[0]?.input || '';
  };

  // Chạy code (không check)
  const handleRun = async () => {
    setIsRunning(true);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
    setTestResults([]);

    try {
      const result = await runPython(code, stdin);

      if (result.error) {
        setError(result.error);
        setStatus('error');
      } else {
        setOutput(result.output);
        setStatus('success');
        setStatusMessage('✅ Code đã chạy! (Đây chỉ là test mẫu, bấm "Run & Check" để chấm điểm)');
      }
    } catch (e) {
      setError(`Lỗi: ${e.message || String(e)}`);
      setStatus('error');
    } finally {
      setIsRunning(false);
    }
  };

  // Chạy và chấm điểm
  const handleRunAndCheck = async () => {
    setIsChecking(true);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
    setTestResults([]);

    try {
      const results = [];
      let allPassed = true;
      let firstFailedTest = null;

      // Chạy tất cả hidden tests
      for (let i = 0; i < selectedExercise.hiddenTests.length; i++) {
        const test = selectedExercise.hiddenTests[i];
        
        const result = await runPython(code, test.input);
        const actualOutput = result.output.trim();
        const expectedOutput = test.output.trim();
        
        const passed = actualOutput === expectedOutput;
        
        results.push({
          testNumber: i + 1,
          passed,
          input: test.input,
          expected: expectedOutput,
          actual: actualOutput,
          error: result.error,
        });

        if (!passed && allPassed) {
          allPassed = false;
          firstFailedTest = i + 1;
          
          // Hiển thị output của test đầu tiên bị lỗi
          if (result.error) {
            setError(result.error);
          } else {
            setOutput(`Test ${i + 1}:\nInput: ${test.input.replace(/\n/g, ', ')}\nExpected: ${expectedOutput}\nGot: ${actualOutput}`);
          }
        }
      }

      setTestResults(results);

      // Hiển thị kết quả tổng thể
      if (allPassed) {
        setStatus('success');
        setStatusMessage(`✅ Chúc mừng! Bạn đã làm đúng tất cả ${selectedExercise.hiddenTests.length} test!`);
        setOutput('Tất cả test đều đúng! 🎉');
      } else {
        setStatus('error');
        setStatusMessage(`❌ Sai test ${firstFailedTest}. Hãy kiểm tra lại code của bạn!`);
      }
    } catch (e) {
      setError(`Lỗi: ${e.message || String(e)}`);
      setStatus('error');
      setStatusMessage('❌ Có lỗi xảy ra khi chạy test!');
    } finally {
      setIsChecking(false);
    }
  };

  // Reset code về ban đầu
  const handleReset = () => {
    if (selectedExercise) {
      setCode(selectedExercise.starterCode);
      setStdin(getDefaultInputForExercise(selectedExercise));
      setOutput('');
      setError(null);
      setStatus(null);
      setStatusMessage('');
      setTestResults([]);
    }
  };

  const currentSections = selectedPart ? getSectionsByPart(selectedPart) : [];
  const currentExercises = selectedPart && selectedSection 
    ? getExercisesByPartAndSection(selectedPart, selectedSection) 
    : [];

  const partColors = {
    1: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-900', title: 'text-green-800' },
    2: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900', title: 'text-yellow-800' },
    3: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', title: 'text-orange-800' },
    4: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', title: 'text-blue-800' },
  };

  const currentPartInfo = parts.find(p => p.part === selectedPart);
  const currentColor = partColors[selectedPart] || partColors[1];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex overflow-hidden">
        {/* Content Panel - Left */}
        <div className="w-1/3 bg-white border-r border-gray-300 overflow-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              📝 Bài Tập Python
            </h1>

            {/* Part Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn phần:
              </label>
              <select
                value={selectedPart}
                onChange={(e) => {
                  setSelectedPart(parseInt(e.target.value));
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {parts.map((part) => (
                  <option key={part.part} value={part.part}>
                    {part.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Section Selector */}
            {currentSections.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chọn mục:
                </label>
                <select
                  value={selectedSection || ''}
                  onChange={(e) => {
                    setSelectedSection(e.target.value);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {currentSections.map((section) => (
                    <option key={section} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Exercise Selector */}
            {currentExercises.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chọn bài tập:
                </label>
                <select
                  value={selectedExercise?.id || ''}
                  onChange={(e) => {
                    const exercise = currentExercises.find((ex) => ex.id === parseInt(e.target.value));
                    if (exercise) setSelectedExercise(exercise);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {currentExercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.id}>
                      {exercise.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Exercise Description */}
            {selectedExercise && (
              <div className={`${currentColor.bg} ${currentColor.border} border rounded-lg p-4 mb-4`}>
                <div className={`text-xs font-semibold ${currentColor.title} mb-1`}>
                  {currentPartInfo?.title}
                </div>
                <div className={`text-xs ${currentColor.text} mb-2`}>
                  {selectedExercise.section}
                </div>
                <h2 className={`text-lg font-semibold ${currentColor.text} mb-2`}>
                  {selectedExercise.title}
                </h2>
                <div className={`text-sm ${currentColor.text} whitespace-pre-line`}>
                  {selectedExercise.description}
                </div>
              </div>
            )}

            {/* Test Results Summary */}
            {testResults.length > 0 && (
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  Kết quả test:
                </div>
                <div className="space-y-1">
                  {testResults.map((result) => (
                    <div
                      key={result.testNumber}
                      className={`px-3 py-1 rounded text-xs ${
                        result.passed
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      Test {result.testNumber}: {result.passed ? '✅ Đúng' : '❌ Sai'}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleReset}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium transition-all"
              >
                🔄 Reset Code
              </button>
              <button
                onClick={handleRunAndCheck}
                disabled={isChecking || isRunning || !selectedExercise}
                className={`w-full px-4 py-2 rounded-md font-medium transition-all ${
                  isChecking || isRunning || !selectedExercise
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isChecking ? '⏳ Đang chấm...' : '✅ Run & Check'}
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
            isRunning={isRunning || isChecking}
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

export default ExerciseJudge;
