import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover"></div>
      
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img 
            src="/ygm_logo.png" 
            alt="YGM Logo" 
            className="w-44 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
          />
        </div>

        {/* Links Section */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
          {["Home", "About Us", "Services", "Clients", "Contact", "Privacy Policy"].map((link, idx) => (
            <a 
              key={idx}
              href="#"
              className="hover:text-yellow-400 transition-colors duration-300 hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="relative mt-8 flex justify-center gap-6 text-xl">
        <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaFacebookF /></a>
        <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaTwitter /></a>
        <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaInstagram /></a>
        <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaLinkedinIn /></a>
      </div>

      {/* Copyright */}
      <div className="relative mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">YGM</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
