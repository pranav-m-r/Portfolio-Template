import React from 'react';
import { Education } from '../types';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900/50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
      <div className="p-4 flex gap-4">
        {/* Logo/Icon */}
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
          {education.logo ? (
            <img 
              src={education.logo} 
              alt={education.institution}
              className="w-full h-full object-contain p-2"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <span className="text-3xl">🎓</span>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              {education.link ? (
                <a 
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1 hover:underline inline-block"
                >
                  {education.institution}
                </a>
              ) : (
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                  {education.institution}
                </h3>
              )}
              <p className="font-semibold text-sm text-gray-800 dark:text-gray-300 mb-1">
                {education.degree}
              </p>
              {education.minor && (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Minor: {education.minor}
                </p>
              )}
            </div>
            <div className="text-right text-xs text-gray-600 dark:text-gray-400 flex-shrink-0 ml-4">
              <div className="flex items-center justify-end gap-1 mb-1">
                <FiCalendar className="w-3 h-3" />
                <span>{education.period}</span>
              </div>
              <div className="flex items-center justify-end gap-1">
                <FiMapPin className="w-3 h-3" />
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          {/* GPA/Score */}
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-primary-700 dark:text-primary-400">{education.metric}:</span>
            <span className="text-gray-700 dark:text-gray-300">{education.score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
