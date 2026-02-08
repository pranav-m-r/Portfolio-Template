import React from 'react';
import PublicationCard from '../components/PublicationCard';
import publicationsData from '../data/publications.json';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-12 bg-white dark:bg-[#050507] border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sticky top-4">Publications</h2>
          </div>

          <div className="flex-1 space-y-4">
          {publicationsData.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
