"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

export default function ProjectsPreview() {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        supabase.from("projects").select("*")
            .order("created_at", { ascending: false })
            .then(({ data }) => setProjects(data || []));
    }, []);

    return (
        <section className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E05A47]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10">
                <div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E05A47] block mb-3">
                        Featured Projects
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1A202C]">
                        Selected Work
                    </h2>
                </div>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#E05A47] hover:text-[#1A202C] transition-colors mt-4 md:mt-0 group"
                >
                    <span>View all projects</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {projects.slice(0, 2).map((p, i) => {
                    const tags = p.tags ? p.tags.split(',').map((t: string) => t.trim()).filter(Boolean) : [];
                    return (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group relative bg-white/90 backdrop-blur-xl border border-[#1A202C]/10 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:shadow-[#E05A47]/10 hover:border-[#E05A47]/35 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                        >
                            {/* Subtle Ambient Glow on Hover */}
                            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-gradient-to-br from-[#E05A47]/10 to-[#31AAA9]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div>
                                {/* Project Thumbnail Container */}
                                <div className="relative w-full h-60 rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-inner">
                                    {p.image ? (
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            referrerPolicy="no-referrer"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#E05A47]/25 to-[#31AAA9]/25 flex items-center justify-center text-4xl">
                                            🚀
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white text-xs font-mono bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                                            Explore Project
                                        </span>
                                    </div>
                                </div>

                                {/* Tags */}
                                {tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="font-mono text-[11px] font-medium text-[#E05A47] bg-[#E05A47]/8 px-3 py-1 rounded-full border border-[#E05A47]/15"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Title & Description */}
                                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1A202C] group-hover:text-[#E05A47] transition-colors mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed mb-8 line-clamp-3">
                                    {p.description}
                                </p>
                            </div>

                            {/* Actions / Links */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                {p.live && (
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E05A47]/20 border border-[#E05A47]/40 text-[#e2e6ec] text-sm font-medium hover:bg-[#E05A47] hover:text-white transition-all shadow-sm focus-ring"
                                    >
                                        <FiExternalLink size={15} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {p.github && (
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-[#9aa3af] text-sm font-medium hover:border-[#E05A47] hover:text-white transition-all focus-ring"
                                    >
                                        <FiGithub size={15} />
                                        <span>Source Code</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}