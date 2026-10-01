import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface AnimatedProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    liveLink: string;
    githubLink: string;
    videoUrl?: string;
    fallbackImageUrl?: string;
}

const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = ({
    title,
    description,
    tech,
    liveLink,
    githubLink,
    videoUrl,
    fallbackImageUrl,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -4 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="bg-white border border-[#1A202C]/10 rounded-2xl p-6 transition-colors hover:border-[#E05A47]/40 overflow-hidden"
        >
            {/* Project Media Container */}
            <div className="w-full h-48 rounded-xl mb-5 overflow-hidden relative bg-gray-100">
                {videoUrl ? (
                    <video
                        src={videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                    />
                ) : (
                    <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#1A202C] animate-gradient bg-gradient-to-br from-[#E05A47] to-[#1A202C]">
                        {/* Particles */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bg-white rounded-full opacity-15"
                                    style={{
                                        width: Math.random() * 8 + 4,
                                        height: Math.random() * 8 + 4,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -40, 0],
                                        x: [0, 20, 0],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                        <h2 className="text-white font-display text-2xl font-bold relative z-10 drop-shadow-lg shimmer-text">
                            {title}
                        </h2>
                    </div>
                )}
                {/* Fallback image could be implemented as an img tag with onError handler */}
            </div>

            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#1A202C] text-lg font-medium mb-1.5"
            >
                {title}
            </motion.h3>
            <p className="text-[#4A5568] text-sm mb-4 line-clamp-2">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
                {tech.map((t) => (
                    <span
                        key={t}
                        className="font-mono text-[11px] text-[#E05A47]/80 bg-[#E05A47]-dim rounded-md px-2 py-1"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#1A202C] hover:text-[#E05A47] transition-colors focus-ring"
                >
                    <FiExternalLink size={14} />
                    Live
                </a>

                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#4A5568] hover:text-[#E05A47] transition-colors focus-ring"
                >
                    <FiGithub size={14} />
                    Code
                </a>
            </div>
        </motion.div>
    );
};

export default AnimatedProjectCard;
