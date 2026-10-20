'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const GithubStats: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
      {/* Animated Activity Header */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-black tracking-wider text-[#718096] italic drop-shadow-lg"
      >
        ACTIVITY
      </motion.h2>
      
      {/* Subtitle */}
      <p className="text-gray-500 text-base md:text-lg mt-3 mb-10">
        Real-time coding activity on GitHub (@mouislambd)
      </p>

      {/* Centered Calendar Wrapper */}
      <div className="flex justify-center w-full overflow-x-auto pb-4 glass-card p-6 sm:p-10 rounded-3xl">
        <GitHubCalendar 
          username="mouislambd" 
          blockSize={13}
          blockMargin={5}
          fontSize={14}
        />
      </div>
    </section>
  );
};

export default GithubStats;
