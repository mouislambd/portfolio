'use client';

import { useEffect, useState } from 'react';
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

type Project = {
    _id: string;
    title: string;
    description: string;
    tech: string[];
    liveLink: string;
    githubLink: string;
    previewImage?: string;
};

export default function ProjectsPreview() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setProjects(data.projects);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const featured = projects.slice(0, 2);

    if (loading) {
        return (
            <section className="relative px-6 py-24">
                <div className="max-w-5xl mx-auto text-[#718096] text-sm">
                    Loading projects...
                </div>
            </section>
        );
    }

    return (
        <section className="relative px-6 py-24 overflow-hidden">
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
                            previw
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
                    {featured.map((project) => (
                        <motion.div
                            key={project._id}
                            variants={item}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-[#1A202C]/15 rounded-2xl p-6 transition-colors hover:border-[#E05A47]/40"
                        >
                            <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[#E05A47]/10 via-[#FDFBF7] to-[#FDFBF7] mb-5 flex items-center justify-center">
                                <span className="font-display text-2xl text-[#E05A47]/80">
                                    {project.title}
                                </span>
                            </div>

                            <h3 className="text-[#1A202C] text-lg font-medium mb-1.5">
                                {project.title}
                            </h3>
                            <p className="text-[#4A5568] text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t) => (
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
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-[#1A202C] hover:text-[#E05A47] transition-colors focus-ring"
                                >
                                    <FiExternalLink size={14} />
                                    Live
                                </a>
                                <a
                                    href={project.githubLink}
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

                <motion.div variants={item} className="flex sm:hidden justify-center mt-8">
                    <Link
                        href="/projects"
                        className="flex items-center gap-1.5 text-sm text-[#4A5568] hover:text-[#E05A47] transition-colors focus-ring"
                    >
                        View all projects
                        <FiArrowRight size={14} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}


