
import React from 'react';
import { Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full">
        <img 
          src="/lovable-uploads/b821745d-4ee5-4bda-8472-559f3ac8a4ce.png" 
          alt="LWR Coffee Date" 
          className="w-full max-w-full mx-auto mb-6"
        />
        
        <div className="flex items-center justify-center gap-4 text-[#0158ab]">
          <Coffee size={24} />
          <span className="text-xl font-medium">14.06 @ LWR HQ</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
