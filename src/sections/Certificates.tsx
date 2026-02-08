import React from 'react';
import AwardCard from '../components/AwardCard';
import certificatesData from '../data/certificates.json';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-12 bg-white dark:bg-[#050507] border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sticky top-4">Certifications</h2>
          </div>

          <div className="flex-1 space-y-4">
          {certificatesData.map((cert) => (
            <AwardCard key={cert.id} award={cert} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
