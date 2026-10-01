'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import AnimatedProjectCard from './AnimatedProjectCard';

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
    videoUrl?: string;
};

export default function Projects() {
    const [query, setQuery] = useState('');
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch from API
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => {
                let apiProjects = [];
                if (data.success) {
                    apiProjects = data.projects;
                }
                
                // Merge with localStorage projects
                const saved = localStorage.getItem('projects');
                const localProjects = saved ? JSON.parse(saved) : [];
                
                // Normalize local projects to match API structure
                const normalizedLocal = localProjects.map((lp: any) => ({
                    _id: lp.id?.toString() || Math.random().toString(),
                    title: lp.title,
                    description: lp.description,
                    tech: lp.tags ? lp.tags.split(',') : [],
                    liveLink: lp.live,
                    githubLink: lp.github,
                }));
                
                // Combine and remove duplicates based on title
                const allProjects = [...apiProjects, ...normalizedLocal.filter((nl: any) => !apiProjects.find((ap: any) => ap.title === nl.title))];
                setProjects(allProjects);
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
                className="absolute -top-40 -right-20 w-[420px] h-[420px] rounded-full bg-[#E05A47] opacity-10 blur-3xl pointer-events-none"
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
                    className="block font-mono text-xs tracking-[0.2em] text-[#E05A47] mb-4"
                >
                    INDEX / 004
                </motion.span>

                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-medium leading-tight text-[#1A202C] mb-4"
                >
                    Projects
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-[#4A5568] text-sm sm:text-base max-w-xl mb-8"
                >
                    Search by name, tech, or keyword e.g. try javascript or
                    mongodb.
                </motion.p>

                <motion.div variants={item} className="relative max-w-md mb-12">
                    <FiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]"
                        size={16}
                    />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects..."
                        className="w-full bg-white border border-[#1A202C]/10 rounded-xl pl-10 pr-4 py-3 text-sm text-[#1A202C] placeholder:text-[#718096] focus-ring focus:border-[#E05A47]/50 outline-none transition-colors"
                    />
                </motion.div>

                {loading ? (
                    <p className="text-[#718096] text-sm">Loading projects...</p>
                ) : (
                    <motion.div layout className="grid sm:grid-cols-2 gap-5">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                    <AnimatedProjectCard
                                        key={project._id}
                                        title={project.title}
                                        description={project.description}
                                        tech={project.tech}
                                        liveLink={project.liveLink}
                                        githubLink={project.githubLink}
                                        // videoUrl={project.videoUrl} 
                                        // fallbackImageUrl={project.previewImage}
                                    />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {!loading && filtered.length === 0 && (
                    <p className="text-[#718096] text-sm mt-8">
                        No projects match &quot;{query}&quot;.
                    </p>
                )}
            </motion.div>
        </section>
    );
}