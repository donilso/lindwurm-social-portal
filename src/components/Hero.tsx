
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-lindwurm-dark via-lindwurm-dark/90 to-black z-0"></div>
      
      {/* Animated circles in the background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lindwurm-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lindwurm-secondary/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-horizon">
            LWR Coffee Date
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-arial">
            Welcome to our first Volume of Lindwurm Records Coffee Date. 
            Enjoy coffee, snacks and life-sets with the music we love at the moment.
            <br /><br />
            Come as you are, but bring your best vibes! 🤎
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
