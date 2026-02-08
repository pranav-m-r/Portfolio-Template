import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import experienceData from '../data/experience.json';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  // Combine research and industry experience only
  const allExp = experienceData.filter(exp => exp.type === 'research' || exp.type === 'industry') as ExperienceType[];

  return (
    <section id="experience" className="py-12 bg-white dark:bg-[#050507] border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sticky top-4">Experience</h2>
          </div>

          <div className="flex-1 space-y-4">
          {allExp.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
