
import React from 'react';
import NotionForm from './NotionForm';

const FormSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-lindwurm-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Connect With Us
          </h2>
          <p className="text-gray-300 text-center mb-10 text-lg">
            Submit your details in the form below to stay updated with our latest releases and events
          </p>
          <NotionForm />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
