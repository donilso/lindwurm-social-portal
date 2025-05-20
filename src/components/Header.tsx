
import React from 'react';

const Header = () => {
  return (
    <header className="py-6 px-6 md:px-10 w-full border-b border-lindwurm-dark/10 backdrop-blur-sm bg-black/20 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/5ddf8351-2717-4d54-bf55-6e59008c3fbd.png" 
              alt="LINDWURM RECORDS" 
              className="h-12"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
