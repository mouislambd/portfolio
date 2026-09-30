'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
 
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
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
 
const timeline = [
    {
        year: '2023',
        title: 'Started CST',
        description:
            'Began my Computer Science & Technology journey, building a strong foundation in programming and software development.',
    },
    {
        year: '2025',
        title: 'Started Web Development',
        description:
            'Started learning modern web development and built multiple full-stack applications using the MERN stack.',
    },
    {
        year: '2026',
        title: 'Full-Stack Developer',
        description:
            'Completed my Full-Stack Web Development journey and am now transitioning toward Machine Learning, Data Science, and AI Engineering.',
    },
    {
        year: '2027 (In Shaa Allah)',
        title: 'CST Graduation',
        description:
            'Expected to complete my Computer Science & Technology diploma while continuing my journey in AI and Data Science.',
    },
];
 
export default function About() {
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
                className="max-w-3xl mx-auto"
            >
                <motion.span
                    variants={item}
                    className="block font-mono text-xs tracking-[0.2em] text-[#E05A47] mb-4"
                >
                    INDEX / 002
                </motion.span>
 
                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-medium leading-tight text-[#1A202C] mb-8"
                >
                    About Me
                </motion.h1>
 
                <motion.div variants={item} className="flex flex-col md:flex-row items-center gap-16 mb-10">
                    <div className="space-y-4 text-[#4A5568] text-sm sm:text-base leading-relaxed">
                        <p>
                            CST student and Full-Stack Web Developer with hands-on experience building modern web applications using the MERN stack. <br />
                            Skilled in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, and Firebase. Passionate about building scalable, user-friendly, and high-performance web applications.
                            Experienced in developing responsive full-stack applications, integrating authentication, databases, and modern backend services while following clean code and best practices.
                        </p>
                        <p>
                            Short-term goal: Grow as a professional Full-Stack Developer by building impactful real-world applications.
                            Long-term goal: Transition into Data Science and AI Engineering, applying strong software engineering skills to create intelligent, data-driven solutions.
                        </p>
                        <p className="text-[#E05A47]/80">
                            I believe in shipping code, learning in public, and letting
                            projects speak louder than words.
                        </p>
                    </div>
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-2xl border-4 border-[#E05A47] bg-white shadow-xl shadow-coral/20 shrink-0">
                        <Image
                            src="/images/2nd.jpeg"
                            alt="Kanich Fatema Mou"
                            fill
                            sizes="(max-width: 768px) 256px, 288px"
                            className="object-cover object-center"
                        />
                    </div>
                </motion.div>
 
                <motion.div
                    variants={item}
                    className="mt-10 inline-flex flex-col gap-2 bg-white border border-[#1A202C]/10 rounded-xl px-5 py-4"
                >
                    <span className="font-mono text-[11px] tracking-wide text-[#E05A47]">
                        CURRENTLY LEARNING
                    </span>
                    <span className="text-[#1A202C] text-sm sm:text-base">
                        Python, Data Science &amp; Machine Learning fundamentals
                    </span>
                </motion.div>
 
                <motion.div variants={item} className="mt-16">
                    <h2 className="font-display text-xl sm:text-2xl font-medium text-[#1A202C] mb-8">
                        My Journey
                    </h2>
 
                    <div className="flex flex-col">
                        {timeline.map((point, index) => (
                            <div key={point.year} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#E05A47] shrink-0 mt-1.5" />
                                    {index !== timeline.length - 1 && (
                                        <span className="w-px flex-1 border-[#1A202C]/15 my-1" />
                                    )}
                                </div>
                                <div className="pb-10">
                                    <span className="font-mono text-xs text-[#718096]">
                                        {point.year}
                                    </span>
                                    <h3 className="text-[#1A202C] text-base sm:text-lg font-medium mt-1">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#4A5568] text-sm mt-1 max-w-md">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}