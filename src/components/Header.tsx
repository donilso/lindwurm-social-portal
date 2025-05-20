
import React from 'react';

const Header = () => {
  return (
    <header className="py-6 px-6 md:px-10 w-full border-b border-[#0158ab]/10 backdrop-blur-sm bg-white/90 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-[#0158ab] tracking-tight">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/537fa95e-6c23-4515-a242-e88904fdc034.png" 
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
