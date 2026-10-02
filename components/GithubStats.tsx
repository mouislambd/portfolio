'use client';

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const GithubStats: React.FC = () => {
  const explicitTheme = {
    light: ['#312e81', '#831843', '#be185d', '#ec4899', '#f472b6'],
    dark: ['#312e81', '#831843', '#be185d', '#ec4899', '#f472b6'],
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-[#1c232d] border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-xl">
        {/* Category Label */}
        <span className="text-[#C84B31] uppercase tracking-widest text-xs font-semibold block mb-1">
          CONTRIBUTIONS
        </span>

        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
          GitHub Activity
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-6">
          Real-time coding activity on GitHub (@mouislambd)
        </p>

        {/* Calendar Container with responsive overflow */}
        <div className="overflow-x-auto pb-2">
          <GitHubCalendar 
            username="mouislambd" 
            theme={explicitTheme}
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
