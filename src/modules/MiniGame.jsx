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

  return (
    <div className="flex flex-col h-screen">
      {/* Content Panel - Left */}
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/3 bg-white border-r border-gray-300 overflow-auto">
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
              className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium transition-all"
            >
              🔄 Reset Code
            </button>
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

export default MiniGame;

