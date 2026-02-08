import React from 'react';
import newsData from '../data/news.json';
import { News as NewsType } from '../types';
import { FiCalendar } from 'react-icons/fi';

const News: React.FC = () => {
  return (
    <section id="news" className="py-12 bg-white dark:bg-[#050507] border-t-2 border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          <div className="w-64 flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sticky top-4">News</h2>
          </div>

          <div className="flex-1 space-y-2">
          {(newsData as NewsType[]).map((item) => (
            <div 
              key={item.id} 
              className="flex gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 w-40 flex-shrink-0">
                <FiCalendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 flex-1">
                {item.link ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline"
                  >
                    {item.summary}
                  </a>
                ) : (
                  item.summary
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
