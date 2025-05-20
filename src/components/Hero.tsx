
import React from 'react';
import SocialButton from './SocialButton';

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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            LINDWURM RECORDS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Independent music label showcasing innovative sounds and visionary artists
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <SocialButton 
              type="instagram" 
              link="https://instagram.com/lindwurmrecords"
            />
            <SocialButton 
              type="whatsapp" 
              link="https://chat.whatsapp.com/your-group-link" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
