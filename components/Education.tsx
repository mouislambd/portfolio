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
                className="absolute -top-40 -right-20 w-[420px] h-[420px] rounded-full bg-[#E05A47] opacity-10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-3xl mx-auto"
            >
                <motion.span
                    variants={item}
                    className="block font-mono text-xs tracking-[0.2em] text-[#E05A47] mb-4"
                >
                    INDEX / 006
                </motion.span>

                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E05A47] to-[#C84B31] mb-4"
                >
                    Education
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-[#4A5568] text-sm sm:text-base max-w-lg mb-12"
                >
                    Academic background, courses completed, and the languages I work with.
                </motion.p>

                {/* Institution Card */}
                <motion.div
                    variants={item}
                    whileHover={{ y: -5, borderColor: '#E05A47' }}
                    className="bg-white border border-[#1A202C]/10 rounded-2xl p-6 sm:p-8 mb-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#E05A47]/10"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#E05A47]/10 flex items-center justify-center shrink-0">
                            <FiBookOpen className="text-[#E05A47]" size={20} />
                        </div>
                        <div>
                            <h2 className="text-[#1A202C] text-lg font-bold">
                                Diploma in Engineering (Computer Science)
                            </h2>
                            <p className="text-[#4A5568] text-sm mt-1">
                                Rangpur Ideal Institute of Technology (RIIT)
                            </p>
                            <p className="font-mono text-xs text-[#E05A47] mt-2">
                                2023 — 2027 (In sha Allah)
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Courses */}
                <motion.div variants={item} className="mb-12">
                    <h3 className="font-display text-xl font-bold text-[#1A202C] mb-5">
                        Courses
                    </h3>

                    <div className="flex flex-col gap-4">
                        <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 bg-white border border-[#1A202C]/10 rounded-xl p-5 transition-all duration-200 hover:border-[#E05A47]"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#E05A47] mt-2 shrink-0" />
                            <div className="flex-1">
                                <p className="text-[#1A202C] text-sm sm:text-base font-semibold">
                                    Web Development — Programming Hero
                                </p>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-[#E05A47] text-xs font-mono font-bold">
                                        Completed
                                    </p>
                                    <a
                                        href="/images/certificet.png"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#E05A47] text-xs font-bold font-mono hover:underline flex items-center gap-1"
                                    >
                                        View Certificate ↗
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 bg-white border border-[#1A202C]/10 rounded-xl p-5 transition-all duration-200 hover:border-[#E05A47]"
                        >
                            <span className="w-2 h-2 rounded-full border border-[#1A202C]/30 mt-2 shrink-0" />
                            <div>
                                <p className="text-[#1A202C] text-sm sm:text-base font-semibold">
                                    Data Science
                                </p>
                                <p className="text-[#718096] text-xs mt-1 font-mono">
                                    Next step, In sha Allah
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Languages */}
                <motion.div variants={item} className="grid sm:grid-cols-2 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FiCode className="text-[#E05A47]" size={16} />
                            <h3 className="font-display text-lg font-bold text-[#1A202C]">
                                Programming Languages
                            </h3>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {programmingLanguages.map((lang) => (
                                <motion.div
                                    key={lang.name}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center justify-between bg-white border border-[#1A202C]/10 rounded-lg px-4 py-3 transition-all duration-200 hover:border-[#E05A47]"
                                >
                                    <span className="text-[#1A202C] text-sm font-semibold">{lang.name}</span>
                                    {lang.note && (
                                        <span className="text-[#E05A47] text-[11px] font-mono font-bold">
                                            {lang.note}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FiGlobe className="text-[#E05A47]" size={16} />
                            <h3 className="font-display text-lg font-bold text-[#1A202C]">
                                Spoken Languages
                            </h3>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {spokenLanguages.map((lang) => (
                                <motion.div
                                    key={lang.name}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center justify-between bg-white border border-[#1A202C]/10 rounded-lg px-4 py-3 transition-all duration-200 hover:border-[#E05A47]"
                                >
                                    <span className="text-[#1A202C] text-sm font-semibold">{lang.name}</span>
                                    <span className="text-[#E05A47] text-[11px] font-mono font-bold">
                                        {lang.level}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Future Growth */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-start gap-4 border-l-2 border-[#E05A47] pl-5 bg-white/50 py-2 rounded-r-lg"
                >
                    <FiTrendingUp className="text-[#E05A47] mt-1 shrink-0" size={18} />
                    <p className="text-[#4A5568] text-sm sm:text-base font-medium">
                        Looking ahead, planning to grow further through advanced skills
                        training and university-level academic pursuits, In sha Allah.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}


