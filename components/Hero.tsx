'use client';

import { motion, animate } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';

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
                        className="font-display text-4xl sm:text-5xl md:text-[52px] font-medium leading-[1.05] tracking-tight text-[#1A202C]"
                    >
                        Kanich
                        <br />
                        Fatema Mou
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="mt-8 border-l-2 border-[#E05A47]/40 pl-5 flex flex-col gap-1"
                    >
                        <motion.span
                            whileHover={{ x: 5, color: '#E05A47' }}
                            className="text-[#1A202C] text-sm sm:text-base cursor-default"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.span
                            whileHover={{ x: 5, color: '#E05A47', textShadow: '0 0 8px rgba(224, 90, 71, 0.4)' }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-[#4A5568] text-sm sm:text-base cursor-default"
                        >
                            Future Data Scientist
                        </motion.span>
                        <motion.span
                            whileHover={{ x: 5, color: '#E05A47', textShadow: '0 0 8px rgba(224, 90, 71, 0.4)' }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="text-[#E05A47]/80 text-sm sm:text-base cursor-default"
                        >
                            Aspiring AI Engineer, In sha Allah
                        </motion.span>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="mt-10 grid grid-cols-3 gap-px border-[#1A202C]/15 rounded-xl overflow-hidden border border-[#1A202C]/10 max-w-lg"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white px-4 py-4 sm:px-5 sm:py-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#C84B31]/20"
                            onClick={() => {
                                const element = document.getElementById('projects');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <div className="text-[#C84B31] text-lg sm:text-xl font-medium">
                                <Counter value={9} />
                            </div>
                            <div className="text-[#1A202C] text-[11px] mt-1">
                                projects shipped
                            </div>
                        </motion.div>
                        <div className="bg-white px-4 py-4 sm:px-5 sm:py-5">
                            <div className="text-[#1A202C] text-lg sm:text-xl font-medium">
                                MERN
                            </div>
                            <div className="text-[#4A5568] text-[11px] mt-1">
                                core stack
                            </div>
                        </div>
                        <div className="bg-white px-4 py-4 sm:px-5 sm:py-5">
                            <div className="text-[#C84B31] text-lg sm:text-xl font-medium">
                                Open
                            </div>
                            <div className="text-[#4A5568] text-[11px] mt-1">
                                to work
                            </div>
                        </div>
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

                <div
                    className="relative"
                >
                    <div 
                        className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-2xl border-2 border-[#E05A47] bg-white shadow-xl shadow-coral/20"
                    >
                        <Image
                            src="/images/portfolio.jpg"
                            alt="Kanich Fatema Mou"
                            fill
                            sizes="(max-width: 768px) 256px, 288px"
                            className="object-cover object-left"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}