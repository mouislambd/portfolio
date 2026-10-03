'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

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
        <section id="projects" className="relative px-6 py-24 overflow-hidden bg-[#080b10] text-white">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-5xl mx-auto"
            >
                <div className="mb-16">
                    <h2 className="text-3xl font-medium mb-2">Selected Work</h2>
                    <div className="h-1 w-12 bg-white/20 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {projects.map((project: any, index: number) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            className={`bg-[#0d1117] rounded-xl border border-white/5 p-4 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-shadow ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-16'}`}
                        >
                            <div className="h-60 rounded-lg overflow-hidden mb-6 bg-white/5">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white/20">No Image</div>
                                )}
                            </div>

                            <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags?.split(',')?.map((t: string) => (
                                    <span key={t} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60">
                                        {t.trim()}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href={project.live || '#'} target="_blank" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
                                    <FiExternalLink size={14} /> Live
                                </Link>
                                <Link href={project.github || '#'} target="_blank" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
                                    <FiGithub size={14} /> Code
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}