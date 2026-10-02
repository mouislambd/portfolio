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
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Activity Header */}
      <span className="text-[#C84B31] uppercase tracking-widest text-xs font-semibold">Activity</span>
      <h2 className="text-3xl font-bold text-white mt-1 mb-2">GitHub Contributions</h2>
      <p className="text-gray-400 text-sm mb-8">Real-time coding activity on GitHub (@mouislambd)</p>

      {/* Calendar Wrapper - Native rendering without background container */}
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
    </section>
  );
};

export default GithubStats;
