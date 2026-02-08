import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMapPin } from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi';
import personalData from '../data/personal.json';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-[#050507] pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">{personalData.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              {personalData.title}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
              <FiMapPin className="w-5 h-5" />
              <span>{personalData.location}</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {personalData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href={personalData.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all"
                aria-label="Google Scholar"
              >
                <HiAcademicCap className="w-6 h-6" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-80 h-80 mr-8">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                {/* Rotating gradient ring */}
                <div className="absolute inset-[-15px] rounded-full bg-gradient-to-r from-primary-400 via-indigo-500 to-primary-600 opacity-20 blur-2xl animate-spin-slow"></div>
                
                {/* Pulsing rings */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-primary-300 dark:border-primary-600 opacity-30 animate-ping-slow"></div>
                <div className="absolute inset-[-12px] rounded-full border-2 border-indigo-300 dark:border-indigo-600 opacity-20 animate-ping-slower"></div>
                
                {/* Floating particles with blue theme */}
                <div className="absolute top-0 left-8 w-4 h-4 bg-primary-400 rounded-full animate-float-1 opacity-80"></div>
                <div className="absolute top-8 right-0 w-3 h-3 bg-indigo-400 rounded-full animate-float-2 opacity-80"></div>
                <div className="absolute bottom-16 left-0 w-4 h-4 bg-blue-400 rounded-full animate-float-3 opacity-80"></div>
                <div className="absolute bottom-0 right-8 w-3 h-3 bg-primary-500 rounded-full animate-float-4 opacity-80"></div>
                <div className="absolute top-1/2 right-4 w-3 h-3 bg-indigo-500 rounded-full animate-float-5 opacity-80"></div>
              </div>
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary-400 dark:border-primary-500">
                {personalData.profileImage ? (
                  <img 
                    src={personalData.profileImage} 
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <span className="text-8xl">👤</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
