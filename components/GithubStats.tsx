'use client';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubStats: React.FC = () => {
  const explicitTheme = {
    light: ['#312e81', '#831843', '#be185d', '#ec4899', '#f472b6'],
    dark: ['#312e81', '#831843', '#be185d', '#ec4899', '#f472b6'],
  };

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="bg-slate-900/50 border border-pink-500/20 rounded-2xl p-8 shadow-[0_0_30px_-10px_rgba(236,72,153,0.15)] backdrop-blur-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-medium text-white mb-2">GitHub Activity</h2>
          <p className="text-slate-400 text-sm">Real-time coding activity on GitHub (@mouislambd)</p>
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
