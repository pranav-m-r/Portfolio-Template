import React from 'react';
import { FiHeart } from 'react-icons/fi';
import personalData from '../data/personal.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#050507] text-gray-700 dark:text-gray-300 border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p className="text-sm flex items-center">
            Made with <FiHeart className="w-4 h-4 mx-1 text-red-500" /> using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
