import React from 'react';
import { Experience } from '../types';

interface TeachingCardProps {
  teaching: Experience;
}

const TeachingCard: React.FC<TeachingCardProps> = ({ teaching }) => {
  return (
    <div className="group bg-white dark:bg-gray-900/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-100 dark:border-gray-800">
      <div className="flex gap-4">
        {/* Image Section */}
        <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center p-1.5 overflow-hidden border border-gray-200 dark:border-gray-700">
          {teaching.image && (
            <img 
              src={teaching.image} 
              alt={teaching.organization}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            {teaching.link ? (
              <a 
                href={teaching.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors hover:underline"
              >
                {teaching.role}
              </a>
            ) : (
              <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {teaching.role}
              </h3>
            )}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4">{teaching.period}</span>
          </div>
          
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {teaching.organization}
          </p>
          
          {teaching.courses && teaching.courses.length > 0 ? (
            <ul className="space-y-1">
              {teaching.courses.map((course, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                    <div className="flex-1">
                      <span>{course.name}</span>
                      {course.instructor && (
                        <span className="text-gray-600 dark:text-gray-400"> - {course.instructor}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-4 flex-shrink-0">{course.semester}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-1">
              {teaching.highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                  <span className="flex-1">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeachingCard;
