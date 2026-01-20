import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MiniGame from './modules/MiniGame';
import ExerciseJudge from './modules/ExerciseJudge';
import RealWorldProblems from './modules/RealWorldProblems';
import FixTheBug from './modules/FixTheBug';
import { loadPyodide } from './utils/pyodideHelper';

/**
 * App Component - Component chính của ứng dụng
 * Quản lý routing giữa các modules và load Pyodide
 */
function App() {
  const [activeModule, setActiveModule] = useState('minigame');
  const [isLoadingPyodide, setIsLoadingPyodide] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  // Load Pyodide khi component mount
  useEffect(() => {
    const initPyodide = async () => {
      try {
        setIsLoadingPyodide(true);
        setLoadingError(null);
        await loadPyodide();
        setIsLoadingPyodide(false);
      } catch (error) {
        console.error('Error loading Pyodide:', error);
        setLoadingError('Không thể tải Pyodide. Vui lòng kiểm tra kết nối internet.');
        setIsLoadingPyodide(false);
      }
    };

    initPyodide();
  }, []);

  // Render module dựa trên activeModule
  const renderModule = () => {
    switch (activeModule) {
      case 'minigame':
        return <MiniGame />;
      case 'exercise':
        return <ExerciseJudge />;
      case 'realworld':
        return <RealWorldProblems />;
      case 'fixbug':
        return <FixTheBug />;
      default:
        return <MiniGame />;
    }
  };

  // Loading screen khi đang load Pyodide
  if (isLoadingPyodide) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🐍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Đang tải Python Runtime...
          </h2>
          <p className="text-gray-600">Vui lòng đợi trong giây lát</p>
          <div className="mt-4 w-64 bg-gray-200 rounded-full h-2 mx-auto">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Error screen nếu không load được Pyodide
  if (loadingError) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Lỗi tải Pyodide</h2>
          <p className="text-gray-600 mb-4">{loadingError}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Tải lại trang
          </button>
        </div>
      </div>
    );
  }

  // Main app layout
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar activeModule={activeModule} setActiveModule={setActiveModule} />

      {/* Main Content - 3 columns layout */}
      <div className="flex-1 overflow-hidden">
        {renderModule()}
      </div>
    </div>
  );
}

export default App;

