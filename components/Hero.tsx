'use client';

import { motion, animate } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import Link from 'next/link';

function Counter({ value }: { value: number }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (v) => setDisplayValue(Math.floor(v)),
        });
        return () => controls.stop();
    }, [value]);

    return <span>{displayValue}+</span>;
}

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30, rotate: 2 },
    show: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const imageReveal = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
            <motion.div
                animate={{ 
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#E05A47] opacity-10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto w-full pt-32 pb-16 grid md:grid-cols-[1.3fr_auto] gap-12 items-center">
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.span
                        variants={item}
                        className="block font-mono text-xs tracking-[0.2em] text-[#E05A47] mb-4"
                    >
                    </motion.span>

                    <motion.h1
                        variants={item}
                        className="font-display text-5xl sm:text-6xl md:text-[84px] font-extrabold leading-[1.05] tracking-tight text-[#000000]"
                    >
                        Kanich
                        <br />
                        Fatema Mou
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="mt-8 border-l-4 border-[#E05A47] pl-6 flex flex-col gap-2"
                    >
                        <motion.span
                            whileHover={{ x: 5, color: '#E05A47' }}
                            className="text-[#000000] text-xl sm:text-2xl font-semibold cursor-default"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.span
                            whileHover={{ x: 5, color: '#E05A47', textShadow: '0 0 8px rgba(224, 90, 71, 0.4)' }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-[#4A5568] text-base sm:text-lg cursor-default"
                        >
                            Future Data Scientist
                        </motion.span>
                        <motion.span
                            whileHover={{ x: 5, color: '#E05A47', textShadow: '0 0 8px rgba(224, 90, 71, 0.4)' }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="text-[#E05A47]/80 text-base sm:text-lg cursor-default"
                        >
                            Aspiring AI Engineer, 
                        </motion.span>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="mt-12 grid grid-cols-3 gap-4 max-w-lg"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white p-6 rounded-2xl border-2 border-[#E05A47]/30 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#C84B31]/10"
                            onClick={() => {
                                const element = document.getElementById('projects');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <div className="text-[#C84B31] text-2xl font-bold">
                                <Counter value={9} />
                            </div>
                            <div className="text-[#1A202C] text-xs mt-2 uppercase tracking-wide font-medium">
                                Projects
                            </div>
                        </motion.div>
                        <motion.div 
                            className="bg-white p-6 rounded-2xl border-2 border-[#1A202C]/10 shadow-sm relative overflow-hidden"
                            animate={{
                                y: [0, -8, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-br from-[#E05A47]/30 via-transparent to-[#E05A47]/30 opacity-0"
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <div className="text-[#1A202C] text-2xl font-bold relative z-10">
                                MERN
                            </div>
                            <div className="text-[#4A5568] text-xs mt-2 uppercase tracking-wide font-medium relative z-10">
                                Stack
                            </div>
                        </motion.div>
                        <Link 
                            href="/contact"
                            className="group bg-white p-6 rounded-2xl border-2 border-[#E05A47]/30 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#C84B31]/10 hover:bg-[#E05A47]/5 block relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="text-[#C84B31] text-2xl font-bold">
                                    Open
                                </div>
                                <div className="text-[#4A5568] text-xs mt-2 uppercase tracking-wide font-medium flex items-center gap-1">
                                    to work <span className="text-[#E05A47]">(Click)</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E05A47] animate-pulse" />
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>

                    <motion.div variants={item} className="mt-12 max-w-lg">
                        <motion.span
                            className="font-mono text-[11px] tracking-wide text-[#718096] flex items-center gap-2"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            scroll to explore <FiArrowDown size={12} />
                        </motion.span>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="relative md:flex justify-center"
                >
                    <motion.div 
                        animate={{
                            borderColor: ['#ffffff', '#E05A47', '#ffffff'],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-2xl border-4 shadow-2xl shadow-[#E05A47]/20 ring-4 ring-[#E05A47]/20"
                    >
                        <img
                            src="/images/portfolio.png"
                            alt="Kanich Fatema Mou"
                            className="w-full h-full object-cover object-center scale-[1.3] transition-transform duration-500 hover:scale-[1.4]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}