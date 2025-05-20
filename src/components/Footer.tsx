
import React from 'react';
import { Instagram, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-10 text-[#0158ab]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-medium">LINDWURM RECORDS</p>
            <p className="text-sm text-[#0158ab]/70 mt-1">Independent Music Label</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://instagram.com/lindwurmrecords" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#0158ab]/80 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://chat.whatsapp.com/your-group-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#0158ab]/80 transition-colors"
            >
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#0158ab]/10 mt-8 pt-8 text-sm text-center text-[#0158ab]/70">
          <p>&copy; {currentYear} Lindwurm Records. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:info@lindwurmrecords.world" className="hover:text-[#0158ab] underline">
              info@lindwurmrecords.world
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
