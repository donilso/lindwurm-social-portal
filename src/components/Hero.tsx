
import React from 'react';
import { Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-white py-8">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <img 
            src="/lovable-uploads/b821745d-4ee5-4bda-8472-559f3ac8a4ce.png" 
            alt="LWR Coffee Date" 
            className="w-full max-w-lg mx-auto mb-6"
          />
          
          <p className="text-xl md:text-2xl text-[#0158ab] mb-8 font-arial">
            Join us for the first LWR Coffee Date.
            Enjoy coffee, snacks and LWR livesets with the music we love at the moment.
            <br /><br />
            Come as you are, but bring your best vibes! 🤎
          </p>
          
          <div className="flex items-center justify-center gap-4 text-[#0158ab]">
            <Coffee size={24} />
            <span className="text-xl font-medium">14.06 @ LWR HQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
