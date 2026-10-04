'use client';

import { motion } from 'framer-motion';
import { FiShield, FiSearch, FiLayers } from 'react-icons/fi';

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

const attributes = [
    {
        title: 'Ethical Intentions',
        description: 'I prioritize honesty, fairness, and strict moral integrity in every decision.',
        icon: FiShield,
    },
    {
        title: 'Critical Thinking',
        description: 'I enjoy deeply questioning assumptions, evaluating edge cases, and uncovering root issues before acting.',
        icon: FiSearch,
    },
    {
        title: 'Analytical Mindset',
        description: 'I like breaking down complex ideas, analyzing overall patterns, and moving forward with clarity.',
        icon: FiLayers,
    },
];

export default function Attributes() {
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
                    INDEX / 007
                </motion.span>

                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E05A47] to-[#C84B31] mb-4"
                >
                    Attributes
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-[#4A5568] text-sm sm:text-base max-w-lg mb-12"
                >
                    Core principles and mindsets that guide my approach to work and life.
                </motion.p>

                <div className="grid gap-6">
                    {attributes.map((attr) => (
                        <motion.div
                            key={attr.title}
                            variants={item}
                            whileHover={{ y: -5, borderColor: '#E05A47' }}
                            className="bg-white border border-[#1A202C]/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#E05A47]/10 flex gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#E05A47]/10 flex items-center justify-center shrink-0">
                                <attr.icon className="text-[#E05A47]" size={24} />
                            </div>
                            <div>
                                <h2 className="text-[#1A202C] text-lg font-bold mb-2">
                                    {attr.title}
                                </h2>
                                <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed">
                                    {attr.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
