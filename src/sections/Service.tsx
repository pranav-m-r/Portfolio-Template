import React from 'react';
import { Service as ServiceType } from '../types';
import serviceData from '../data/service.json';

const Service: React.FC = () => {
  return (
    <section id="service" className="py-12 bg-white dark:bg-[#050507] border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sticky top-4">Service</h2>
          </div>

          <div className="flex-1 space-y-3">
            {(serviceData as ServiceType[]).map((item, index) => (
              <div 
                key={index} 
                className="group p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-2">
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors hover:underline"
                    >
                      {item.role}
                    </a>
                  ) : (
                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.role}
                    </h3>
                  )}
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4 flex-shrink-0">
                    {item.period}
                  </span>
                </div>
                {item.organization && (
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {item.organization}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
