import React from 'react';
import { Publication } from '../types';
import { FiFileText, FiGithub, FiExternalLink } from 'react-icons/fi';
import personalData from '../data/personal.json';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  // Function to highlight user's name in author list
  const highlightAuthorName = (authors: string) => {
    const parts = authors.split(personalData.name);
    if (parts.length === 1) return authors; // Name not found
    
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="font-bold text-gray-600 dark:text-gray-400">{personalData.name}</span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="group relative bg-white dark:bg-gray-900/50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {publication.status} • {publication.year}
          </span>
          <div className="flex gap-3">
            {publication.links.paper && (
              <a
                href={publication.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-xs font-medium"
              >
                <FiFileText className="w-4 h-4" />
                <span>Paper</span>
              </a>
            )}
            {publication.links.code && (
              <a
                href={publication.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors text-xs font-medium"
              >
                <FiGithub className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {publication.links.info && (
              <a
                href={publication.links.info}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors text-xs font-medium"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Info</span>
              </a>
            )}
          </div>
        </div>

        {publication.link ? (
          <a 
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight hover:underline inline-block"
          >
            {publication.title}
          </a>
        ) : (
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
            {publication.title}
          </h3>
        )}

        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 italic">
          {highlightAuthorName(publication.authors)}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {publication.venue}
          </p>
          {publication.award && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium flex items-center gap-1">
              <span>🏆</span>
              {publication.award}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
