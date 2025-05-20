
import React from 'react';
import { Instagram, WhatsApp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lindwurm-dark py-10 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-medium">LINDWURM RECORDS</p>
            <p className="text-sm text-gray-400 mt-1">Independent Music Label</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://instagram.com/lindwurmrecords" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://chat.whatsapp.com/your-group-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <WhatsApp size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {currentYear} Lindwurm Records. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:info@lindwurmrecords.world" className="hover:text-white underline">
              info@lindwurmrecords.world
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
