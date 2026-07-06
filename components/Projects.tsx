'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiSearch } from 'react-icons/fi';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
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

export default function Projects() {
    const [query, setQuery] = useState('');
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

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return projects;
        return projects.filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tech.some((t) => t.toLowerCase().includes(q))
        );
    }, [query, projects]);

    return (
        <section className="relative min-h-screen px-6 pt-32 pb-24 overflow-hidden">
            <div
                className="absolute -top-40 -right-20 w-[420px] h-[420px] rounded-full bg-coral opacity-10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto"
            >
                <motion.span
                    variants={item}
                    className="block font-mono text-xs tracking-[0.2em] text-coral mb-4"
                >
                    INDEX / 004
                </motion.span>

                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-medium leading-tight text-text-primary mb-4"
                >
                    Projects
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-text-secondary text-sm sm:text-base max-w-xl mb-8"
                >
                    Search by name, tech, or keyword e.g. try javascript or
                    mongodb.
                </motion.p>

                <motion.div variants={item} className="relative max-w-md mb-12">
                    <FiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                        size={16}
                    />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects..."
                        className="w-full bg-ink-card border border-ink-line rounded-xl pl-10 pr-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-ring focus:border-coral/50 outline-none transition-colors"
                    />
                </motion.div>

                {loading ? (
                    <p className="text-text-muted text-sm">Loading projects...</p>
                ) : (
                    <motion.div layout className="grid sm:grid-cols-2 gap-5">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <motion.div
                                    key={project._id}
                                    layout
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3 }}
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
                        </AnimatePresence>
                    </motion.div>
                )}

                {!loading && filtered.length === 0 && (
                    <p className="text-text-muted text-sm mt-8">
                        No projects match &quot;{query}&quot;.
                    </p>
                )}
            </motion.div>
        </section>
    );
}