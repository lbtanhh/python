import React, { useState, useEffect } from 'react';
import { miniGames } from '../data/miniGames';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';
import { runPython } from '../utils/pyodideHelper';

/**
 * MiniGame Module - Module học Python qua mini game
 */
const MiniGame = () => {
  const [selectedGame, setSelectedGame] = useState(miniGames[0]);
  const [code, setCode] = useState(selectedGame.starterCode);
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const getDefaultInputForGame = (game) => {
    if (!game) return '';
    if (game.id === 1) {
      const randomGuess = Math.floor(Math.random() * 10) + 1;
      return String(randomGuess);
    }
    if (game.id === 2) return '10\n5';
    if (game.id === 3) return 'đúng';
    return '';
  };

  // Reset code khi chọn game khác
  useEffect(() => {
    setCode(selectedGame.starterCode);
    setStdin(getDefaultInputForGame(selectedGame));
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
  }, [selectedGame]);

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
      } else {
        setOutput(result.output);
        setStatus('success');
        setStatusMessage('🎮 Game đã chạy! Xem kết quả bên dưới.');
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
    setCode(selectedGame.starterCode);
    setOutput('');
    setError(null);
    setStatus(null);
    setStatusMessage('');
  };

  // Mobile: Tab-based layout
  const [activeTab, setActiveTab] = useState('problem');

  return (
    <div className="flex flex-col h-screen">
      {/* Mobile Tab Bar */}
      <div className="md:hidden bg-gray-100 border-b border-gray-300 flex">
        <button
          onClick={() => setActiveTab('problem')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
            activeTab === 'problem'
              ? 'bg-white text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🎮 Game
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
            activeTab === 'code'
              ? 'bg-white text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          💻 Code
        </button>
        <button
          onClick={() => setActiveTab('output')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
            activeTab === 'output'
              ? 'bg-white text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📊 Kết quả
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className={`${activeTab === 'problem' ? 'flex flex-col' : 'hidden'} md:flex w-full md:w-1/4 bg-white border-r border-gray-300 overflow-auto`}>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              🎮 Mini Game Python
            </h1>

            {/* Game Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chọn game:
              </label>
              <select
                value={selectedGame.id}
                onChange={(e) => {
                  const game = miniGames.find((g) => g.id === parseInt(e.target.value));
                  if (game) setSelectedGame(game);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {miniGames.map((game) => (
                  <option key={game.id} value={game.id}>
                    {game.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Game Description */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                {selectedGame.title}
              </h2>
              <div className="text-sm text-blue-800 whitespace-pre-line">
                {selectedGame.description}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="w-full px-4 py-3 md:py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium transition-all text-base md:text-sm"
            >
              🔄 Reset Code
            </button>
            {/* Mobile: Quick switch buttons */}
            <div className="md:hidden flex space-x-2 mt-2">
              <button
                onClick={() => setActiveTab('code')}
                className="flex-1 px-3 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-md font-medium transition-all text-sm"
              >
                → Code
              </button>
              <button
                onClick={() => {
                  handleRun();
                  setTimeout(() => setActiveTab('output'), 500);
                }}
                className="flex-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-md font-medium transition-all text-sm"
              >
                ▶️ Chạy
              </button>
            </div>
          </div>
        </div>

        {/* Code Editor - Middle */}
        <div className={`${activeTab === 'code' ? 'flex flex-col h-full' : 'hidden'} md:flex w-full md:w-2/5 md:min-w-0 border-r border-gray-300`}>
          <CodeEditor
            code={code}
            onChange={setCode}
            onRun={() => {
              handleRun();
              if (window.innerWidth < 768) {
                setTimeout(() => setActiveTab('output'), 500);
              }
            }}
            isRunning={isRunning}
            stdin={stdin}
            onStdinChange={setStdin}
          />
        </div>

        {/* Output Panel - Right */}
        <div className={`${activeTab === 'output' ? 'flex flex-col h-full' : 'hidden'} md:flex w-full md:w-[35%] md:min-w-0`}>
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

export default MiniGame;

