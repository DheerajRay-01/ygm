import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover"></div>
      
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        
        {/* Logo Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img 
            src="/ygm_logo.png" 
            alt="YGM Logo" 
            className="w-44 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* Links Section */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
          {["Home", "About Us", "Services", "Clients", "Contact", "Privacy Policy"].map((link, idx) => (
            <a 
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="relative mt-10 flex justify-center gap-6 text-xl">
        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="relative w-4/5 mx-auto my-6 border-t border-gray-700"></div>

      {/* Copyright */}
      <div className="relative text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">YGM</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
