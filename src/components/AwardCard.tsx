import React from 'react';
import { Award } from '../types';
import { FiAward } from 'react-icons/fi';

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  return (
    <div className="group bg-white dark:bg-gray-900/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-100 dark:border-gray-800">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
            <FiAward className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            {award.link ? (
              <a 
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors hover:underline"
              >
                {award.title}
              </a>
            ) : (
              <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {award.title}
              </h3>
            )}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4">{award.year}</span>
          </div>
          
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {award.organization}
          </p>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {award.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
