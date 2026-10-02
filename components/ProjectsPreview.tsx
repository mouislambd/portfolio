'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import ParticleNetwork from './ParticleNetwork';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export default function ProjectsPreview({ projects }: { projects: any[] }) {
    return (
        <section id="projects" className="relative px-6 py-24 overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-5xl mx-auto"
            >
                <motion.div
                    variants={item}
                    className="flex items-end justify-between mb-10"
                >
                    <div>
                        <span className="block font-mono text-xs tracking-[0.2em] text-[#E05A47] mb-3">
                            preview
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1A202C]">
                            Selected Work
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="hidden sm:flex items-center gap-1.5 text-sm text-[#4A5568] hover:text-[#E05A47] transition-colors focus-ring"
                    >
                        View all
                        <FiArrowRight size={14} />
                    </Link>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5">
                    {projects.map((project: any) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-[#1A202C]/15 rounded-2xl p-6 transition-colors hover:border-[#E05A47]/40"
                        >
                            <div className="w-full h-48 rounded-xl mb-5 overflow-hidden relative bg-[#1A202C]">
                                {project.previewImage ? (
                                    <img 
                                        src={project.previewImage} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover" 
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#C84B31]/40 to-[#1A202C]/60" />
                                        <h3 className="text-white font-display text-xl font-bold relative z-10 px-4 text-center drop-shadow-md">
                                            {project.title}
                                        </h3>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-[#1A202C] text-lg font-medium mb-1.5">
                                {project.title}
                            </h3>
                            <p className="text-[#4A5568] text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tags?.split(',')?.map((t: string) => (
                                    <span
                                        key={t}
                                        className="font-mono text-[11px] text-[#E05A47]/80 bg-[#E05A47]/10 rounded-md px-2 py-1"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-[#1A202C] hover:text-[#E05A47] transition-colors focus-ring"
                                >
                                    <FiExternalLink size={14} />
                                    Live
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-[#4A5568] hover:text-[#E05A47] transition-colors focus-ring"
                                >
                                    <FiGithub size={14} />
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}