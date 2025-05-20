import React from 'react';

const Hero = () => {
  return <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with white overlay */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Animated circles in the background (keeping them light colored for white bg) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lindwurm-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lindwurm-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 animate-fade-in py-[50px]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-horizon text-[#0158ab]">LWR 
Coffee Date</h1>
          <p className="text-xl md:text-2xl text-[#0158ab] mb-8 font-arial">
            Join us for the first LWR Coffee Date.
            Enjoy coffee, snacks and LWR livesets with the music we love at the moment.
            <br /><br />
            Come as you are, but bring your best vibes! 🤎
          </p>
        </div>
      </div>
    </div>;
};

export default Hero;
