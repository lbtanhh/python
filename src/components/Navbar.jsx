import React, { useState } from 'react';

/**
 * Navbar Component - Thanh menu trên cùng (Responsive)
 */
const Navbar = ({ activeModule, setActiveModule }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold">🐍 Python Learn</span>
            <span className="hidden sm:inline text-sm opacity-80">Học Python vui vẻ!</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-500 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-2 border-t border-blue-500">
            <div className="flex flex-col space-y-1 pt-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveModule(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all text-left ${
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;

