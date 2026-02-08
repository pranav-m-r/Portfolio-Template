import React from 'react';
import { Experience } from '../types';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const isTeaching = experience.type === 'teaching';
  
  return (
    <div className="group relative bg-white dark:bg-gray-900/50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 flex gap-4 p-4">
      {/* Image Section */}
      <div className="w-24 h-24 bg-white rounded-lg flex-shrink-0 flex items-center justify-center p-2 overflow-hidden border border-gray-200 dark:border-gray-700">
        {experience.image && (
          <img 
            src={experience.image} 
            alt={experience.organization}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            {experience.link ? (
              <a 
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors hover:underline inline-block"
              >
                {experience.role}
              </a>
            ) : (
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {experience.role}
              </h3>
            )}
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {experience.organization}
            </h4>
          </div>
          <div className="text-right text-xs text-gray-600 dark:text-gray-400 flex-shrink-0 ml-4">
            <div className="flex items-center justify-end gap-1 mb-1">
              <FiCalendar className="w-3 h-3" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center justify-end gap-1">
              <FiMapPin className="w-3 h-3" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* For teaching: show bullet points. For others: show first highlight as summary */}
        {isTeaching ? (
          <ul className="space-y-1">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                <span className="flex-1">{highlight}</span>
              </li>
            ))}
          </ul>
        ) : (
          experience.highlights.length > 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {experience.highlights[0]}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
