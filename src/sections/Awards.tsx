import React from 'react';
import AwardCard from '../components/AwardCard';
import awardsData from '../data/awards.json';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-12 bg-white dark:bg-[#050507] border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sticky top-4">Honors & Awards</h2>
          </div>

          <div className="flex-1 space-y-4">
          {awardsData.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
