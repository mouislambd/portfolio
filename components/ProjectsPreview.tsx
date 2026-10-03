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
        <section id="projects" className="relative px-6 py-24 overflow-hidden bg-[#080b10]">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-6xl mx-auto"
            >
                <motion.div variants={item} className="mb-16 text-center">
                    <h2 className="font-display text-4xl font-medium text-white mb-4">Selected Work</h2>
                    <div className="h-1 w-20 bg-[#00ffa3] mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project: any, index: number) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            whileHover={{ scale: 1.02 }}
                            className={`group relative bg-[#0d1117] rounded-2xl p-1 border border-white/10 hover:border-[#00ffa3]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,163,0.15)] ${project.featured ? 'md:col-span-2' : ''}`}
                        >
                            <div className="absolute top-4 left-4 z-10 font-mono text-white/50 text-xl font-bold">
                                0{index + 1}
                            </div>
                            
                            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#1a1f26] to-[#080b10] animate-gradient" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
                                
                                <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link href={project.live || '#'} target="_blank" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#00ffa3] hover:text-[#080b10] transition-colors"><FiExternalLink /></Link>
                                    <Link href={project.github || '#'} target="_blank" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#00ffa3] hover:text-[#080b10] transition-colors"><FiGithub /></Link>
                                </div>
                            </div>

                            <div className="px-4 pb-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags?.split(',')?.map((t: string) => (
                                        <span key={t} className="px-2 py-1 bg-[#00ffa3]/10 text-[#00ffa3] text-xs font-mono rounded-full border border-[#00ffa3]/20">
                                            {t.trim()}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}