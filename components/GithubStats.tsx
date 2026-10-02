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
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="bg-[#1E1E1E] border border-white/10 rounded-2xl p-8 shadow-xl">
        <div className="mb-8">
          <span className="text-[#C84B31] uppercase tracking-widest text-xs font-semibold">Contributions</span>
          <h2 className="text-3xl font-bold text-white mt-1">GitHub Activity</h2>
          <p className="text-gray-400 text-sm mt-1 mb-6">Real-time coding activity on GitHub (@mouislambd)</p>
        </div>
        
        <div className="overflow-x-auto pb-4">
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
