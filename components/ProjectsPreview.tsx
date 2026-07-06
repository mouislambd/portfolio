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
                <div className="max-w-5xl mx-auto text-text-muted text-sm">
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
                        <span className="block font-mono text-xs tracking-[0.2em] text-coral mb-3">
                            previw
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary">
                            Selected Work
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="hidden sm:flex items-center gap-1.5 text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
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
                            className="bg-ink-card border border-ink-line rounded-2xl p-6 transition-colors hover:border-coral/40"
                        >
                            <div className="w-full h-36 rounded-xl bg-gradient-to-br from-coral/20 via-ink to-ink mb-5 flex items-center justify-center">
                                <span className="font-display text-2xl text-coral-soft">
                                    {project.title}
                                </span>
                            </div>

                            <h3 className="text-text-primary text-lg font-medium mb-1.5">
                                {project.title}
                            </h3>
                            <p className="text-text-secondary text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-[11px] text-coral-soft bg-coral-dim rounded-md px-2 py-1"
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
                                    className="flex items-center gap-1.5 text-sm text-text-primary hover:text-coral transition-colors focus-ring"
                                >
                                    <FiExternalLink size={14} />
                                    Live
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
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
                        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
                    >
                        View all projects
                        <FiArrowRight size={14} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}