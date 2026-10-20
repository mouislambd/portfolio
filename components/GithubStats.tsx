'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const GithubStats: React.FC = () => {
  const explicitTheme = {
    light: ['#312e81', '#831843', '#be185d', '#ec4899', '#f472b6'],
    dark: ['#312e81', '#831843', '#be185d', '#ec4899', '#f472b6'],
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
      {/* Animated Activity Header */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-black tracking-wider bg-gradient-to-r from-[#C84B31] via-[#E86A50] to-[#E580A1] bg-clip-text text-transparent drop-shadow-lg"
      >
        ACTIVITY
      </motion.h2>
      
      {/* Subtitle */}
      <p className="text-gray-400 text-base md:text-lg mt-3 mb-10">
        Real-time coding activity on GitHub (@mouislambd)
      </p>

      {/* Centered Calendar Wrapper */}
      <div className="flex justify-center w-full overflow-x-auto pb-4">
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
