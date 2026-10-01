'use client';

import { motion } from 'framer-motion';
 
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
 
                <motion.div variants={item} className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32 mb-10">
                    <div className="w-full md:w-7/12 flex flex-col gap-6">
                        <motion.h1
                            variants={item}
                            className="font-display text-3xl sm:text-4xl font-medium leading-tight text-[#1A202C]"
                        >
                            About Me
                        </motion.h1>
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
                        <motion.div
                            variants={item}
                            whileHover={{ scale: 1.02, borderColor: '#E05A47', boxShadow: '0 10px 15px -3px rgba(224, 90, 71, 0.2)' }}
                            className="inline-flex flex-col gap-2 bg-white border border-[#1A202C]/10 rounded-xl px-5 py-4 w-full cursor-default transition-colors duration-300"
                        >
                            <span className="font-mono text-[11px] tracking-wide text-[#E05A47]">
                                CURRENTLY LEARNING
                            </span>
                            <motion.span 
                                whileHover={{ color: '#E05A47' }}
                                className="text-[#1A202C] text-sm sm:text-base transition-colors duration-300"
                            >
                                Python, Data Science &amp; Machine Learning fundamentals
                            </motion.span>
                        </motion.div>
                    </div>
                    
                    <div className="w-full md:w-4/12 flex justify-end items-start shrink-0">
                        <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-2xl border-2 border-[#E05A47] bg-white shadow-xl shadow-coral/20">
                            <img
                                src="/images/2nd.jpeg"
                                alt="Kanich Fatema Mou"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </motion.div>
 
                <motion.div variants={item} className="mt-16">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E05A47] to-[#C84B31] mb-10">
                        My Journey
                    </h2>
 
                    <div className="flex flex-col">
                        {timeline.map((point, index) => (
                            <motion.div 
                                key={point.year} 
                                className="flex gap-6 group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full bg-[#E05A47] group-hover:scale-150 transition-transform duration-300 shrink-0 mt-1.5" />
                                    {index !== timeline.length - 1 && (
                                        <div className="w-px flex-1 bg-[#1A202C]/10 my-2 group-hover:bg-[#E05A47]/50 transition-colors" />
                                    )}
                                </div>
                                <div className="pb-10">
                                    <span className="font-mono text-xs font-semibold text-[#E05A47]">
                                        {point.year}
                                    </span>
                                    <h3 className="text-[#1A202C] text-lg sm:text-xl font-bold mt-1 group-hover:text-[#E05A47] transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#4A5568] text-sm mt-2 max-w-md group-hover:text-[#2D3748] transition-colors">
                                        {point.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}