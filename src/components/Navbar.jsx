import React from 'react';

/**
 * Navbar Component - Thanh menu trên cùng
 */
const Navbar = ({ activeModule, setActiveModule }) => {
  const menuItems = [
    // { id: 'minigame', label: '🎮 Mini Game', icon: '🎮' },
    { id: 'exercise', label: '📝 Bài Tập', icon: '📝' },
    { id: 'realworld', label: '📚 Bài Toán Đời Sống', icon: '📚' },
    // { id: 'fixbug', label: '🐛 Sai Rồi Sửa', icon: '🐛' },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-full px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">🐍 Python Learn</span>
            <span className="text-sm opacity-80">Học Python vui vẻ!</span>
          </div>
          
          <div className="flex space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeModule === item.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'hover:bg-blue-500 text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

