import React from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import personalData from '../data/personal.json';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-white dark:bg-[#050507] border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sticky top-4">Get In Touch</h2>
          </div>

          <div className="flex-1">
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FiMail className="w-5 h-5" />
                <span className="text-sm">{personalData.email}</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
                <span className="text-sm">Connect with me on LinkedIn!</span>
              </a>
            </div>

            <div className="p-4 bg-primary-50 dark:bg-gray-800 rounded-xl border border-primary-100 dark:border-gray-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold">Open to:</span> Research collaborations, internship opportunities, 
                and interesting projects in AI/ML and distributed systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
