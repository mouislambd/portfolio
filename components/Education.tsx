'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiGlobe, FiTrendingUp } from 'react-icons/fi';

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

const programmingLanguages = [
    { name: 'Python', note: 'Primary focus going forward' },
    { name: 'JavaScript', note: '' },
    { name: 'TypeScript', note: '' },
    { name: 'Java', note: '' },
];

const spokenLanguages = [
    { name: 'Bangla', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Understandable' },
];

export default function Education() {
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
                className="max-w-3xl mx-auto"
            >
                <motion.span
                    variants={item}
                    className="block font-mono text-xs tracking-[0.2em] text-coral mb-4"
                >
                    INDEX / 006
                </motion.span>

                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-medium leading-tight text-text-primary mb-4"
                >
                    Education
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-text-secondary text-sm sm:text-base max-w-lg mb-12"
                >
                    Academic background, courses completed, and the languages I work with.
                </motion.p>

                {/* Institution Card */}
                <motion.div
                    variants={item}
                    className="bg-ink-card border border-ink-line rounded-2xl p-6 sm:p-8 mb-8"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-coral-dim flex items-center justify-center shrink-0">
                            <FiBookOpen className="text-coral" size={20} />
                        </div>
                        <div>
                            <h2 className="text-text-primary text-lg font-medium">
                                Diploma in Engineering (Computer Science)
                            </h2>
                            <p className="text-text-secondary text-sm mt-1">
                                Rangpur Ideal Institute of Technology (RIIT)
                            </p>
                            <p className="font-mono text-xs text-text-muted mt-2">
                                2023 — 2027 (In sha Allah)
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Courses */}
                <motion.div variants={item} className="mb-12">
                    <h3 className="font-display text-xl font-medium text-text-primary mb-5">
                        Courses
                    </h3>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4 bg-ink-card border border-ink-line rounded-xl p-5">
                            <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0" />
                            <div>
                                <p className="text-text-primary text-sm sm:text-base font-medium">
                                    Web Development — Programming Hero
                                </p>
                                <p className="text-coral-soft text-xs mt-1 font-mono">
                                    Completed
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-ink-card border border-ink-line rounded-xl p-5">
                            <span className="w-2 h-2 rounded-full bg-ink-line mt-2 shrink-0" />
                            <div>
                                <p className="text-text-primary text-sm sm:text-base font-medium">
                                    Data Science
                                </p>
                                <p className="text-text-muted text-xs mt-1 font-mono">
                                    Next step, In sha Allah
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Languages */}
                <motion.div variants={item} className="grid sm:grid-cols-2 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FiCode className="text-coral" size={16} />
                            <h3 className="font-display text-lg font-medium text-text-primary">
                                Programming Languages
                            </h3>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {programmingLanguages.map((lang) => (
                                <div
                                    key={lang.name}
                                    className="flex items-center justify-between bg-ink-card border border-ink-line rounded-lg px-4 py-2.5"
                                >
                                    <span className="text-text-primary text-sm">{lang.name}</span>
                                    {lang.note && (
                                        <span className="text-coral-soft text-[11px] font-mono">
                                            {lang.note}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FiGlobe className="text-coral" size={16} />
                            <h3 className="font-display text-lg font-medium text-text-primary">
                                Spoken Languages
                            </h3>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {spokenLanguages.map((lang) => (
                                <div
                                    key={lang.name}
                                    className="flex items-center justify-between bg-ink-card border border-ink-line rounded-lg px-4 py-2.5"
                                >
                                    <span className="text-text-primary text-sm">{lang.name}</span>
                                    <span className="text-text-muted text-[11px] font-mono">
                                        {lang.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Future Growth */}
                <motion.div
                    variants={item}
                    className="flex items-start gap-4 border-l-2 border-coral/40 pl-5"
                >
                    <FiTrendingUp className="text-coral mt-1 shrink-0" size={18} />
                    <p className="text-text-secondary text-sm sm:text-base">
                        Looking ahead, planning to grow further through advanced skills
                        training and university-level academic pursuits, In sha Allah.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}