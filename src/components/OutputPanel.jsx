import React from 'react';

/**
 * OutputPanel Component - Hiển thị kết quả chạy code, lỗi, và trạng thái
 */
const OutputPanel = ({ output, error, status, statusMessage }) => {
  const hasOutput = output || error || statusMessage;

  return (
    <div className="flex flex-col h-full bg-gray-50 border-l border-gray-300">
      {/* Header */}
      <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
        <span className="text-sm font-medium text-gray-700">📊 Output</span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {!hasOutput && (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">👈</div>
              <p className="text-sm">Chạy code để xem kết quả ở đây</p>
            </div>
          </div>
        )}

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`mb-4 p-3 rounded-lg ${
              status === 'success'
                ? 'bg-green-100 border border-green-300 text-green-800'
                : status === 'error'
                ? 'bg-red-100 border border-red-300 text-red-800'
                : 'bg-yellow-100 border border-yellow-300 text-yellow-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              {status === 'success' && <span className="text-xl">✅</span>}
              {status === 'error' && <span className="text-xl">❌</span>}
              {status === 'warning' && <span className="text-xl">⚠️</span>}
              <span className="font-medium">{statusMessage}</span>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <span className="text-red-600 font-bold">❌ Lỗi:</span>
              <pre className="flex-1 text-sm text-red-700 whitespace-pre-wrap font-mono">
                {error}
              </pre>
            </div>
          </div>
        )}

        {/* Output */}
        {output && (
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-600 mb-2">Kết quả:</div>
            <pre className="p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 whitespace-pre-wrap font-mono">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;

