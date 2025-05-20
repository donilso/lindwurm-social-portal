
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FormSection from '@/components/FormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-[#0158ab]">
      <Header />
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6 mt-28">
        <div className="w-full md:w-1/2">
          <Hero />
        </div>
        <div className="w-full md:w-1/2">
          <FormSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
