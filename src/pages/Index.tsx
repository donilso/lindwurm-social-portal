
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FormSection from '@/components/FormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-[#0158ab]">
      <Header />
      <Hero />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Index;
