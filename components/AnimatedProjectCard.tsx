import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ParticleNetwork from './ParticleNetwork';

interface AnimatedProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    liveLink: string;
    githubLink: string;
    videoUrl?: string;
    previewImage?: string;
    imagePath?: string;
}

const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = ({
    title,
    description,
    tech,
    liveLink,
    githubLink,
    videoUrl,
    previewImage,
    imagePath,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative bg-white border border-[#1A202C]/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#E05A47]/40 hover:shadow-2xl hover:shadow-[#E05A47]/10 overflow-hidden"
            style={{ perspective: 1000 }}
        >
            {/* Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-[#E05A47]/30" />

            {/* Project Media Container */}
            <div className="w-full h-48 rounded-xl mb-5 overflow-hidden relative bg-[#1A202C]">
                {(imagePath || previewImage) ? (
                    <img 
                        src={imagePath || previewImage} 
                        alt={title} 
                        className="w-full h-full object-cover" 
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ParticleNetwork />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C84B31]/40 to-[#1A202C]/60" />
                        <h2 className="text-white font-display text-xl font-bold relative z-10 px-4 text-center drop-shadow-md">
                            {title}
                        </h2>
                    </div>
                )}
            </div>

            <motion.h3
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
                        className="font-mono text-[11px] text-[#E05A47]/80 bg-[#E05A47]/5 rounded-md px-2 py-1"
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
