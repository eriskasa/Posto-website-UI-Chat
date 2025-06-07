import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-8 bg-transparent border-t border-gray-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            Posto
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-8 mb-4 md:mb-0">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm md:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm md:text-base">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm md:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm md:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center md:text-left mt-8 pt-8 border-t border-gray-700/50">
          <p className="text-sm text-gray-400">
            &copy; 2025 Posto. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;