import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Surtey Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold text-[#1a2b4a] tracking-tight">
              SURTEY
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
