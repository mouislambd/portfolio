'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';

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

const imageReveal = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
            <div
                className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full bg-coral opacity-10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto w-full pt-32 pb-16 grid md:grid-cols-[1.3fr_auto] gap-12 items-center">
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.span
                        variants={item}
                        className="block font-mono text-xs tracking-[0.2em] text-coral mb-4"
                    >

                    </motion.span>

                    <motion.h1
                        variants={item}
                        className="font-display text-4xl sm:text-5xl md:text-[52px] font-medium leading-[1.05] tracking-tight text-text-primary"
                    >
                        Kanich
                        <br />
                        Fatema Mou
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="mt-8 border-l-2 border-coral/40 pl-5 flex flex-col gap-1"
                    >
                        <span className="text-text-primary text-sm sm:text-base">
                            Full Stack Developer
                        </span>
                        <span className="text-text-secondary text-sm sm:text-base">
                            Future Data Scientist
                        </span>
                        <span className="text-coral-soft text-sm sm:text-base">
                            Aspiring AI Engineer, Inshallah
                        </span>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="mt-10 grid grid-cols-3 gap-px bg-ink-line rounded-xl overflow-hidden border border-ink-line max-w-lg"
                    >
                        <div className="bg-ink-card px-4 py-4 sm:px-5 sm:py-5">
                            <div className="text-text-primary text-lg sm:text-xl font-medium">
                                2+
                            </div>
                            <div className="text-text-muted text-[11px] mt-1">
                                projects shipped
                            </div>
                        </div>
                        <div className="bg-ink-card px-4 py-4 sm:px-5 sm:py-5">
                            <div className="text-text-primary text-lg sm:text-xl font-medium">
                                MERN
                            </div>
                            <div className="text-text-muted text-[11px] mt-1">
                                core stack
                            </div>
                        </div>
                        <div className="bg-ink-card px-4 py-4 sm:px-5 sm:py-5">
                            <div className="text-coral-soft text-lg sm:text-xl font-medium">
                                Open
                            </div>
                            <div className="text-text-muted text-[11px] mt-1">
                                to work
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="mt-12 max-w-lg">
                        <motion.span
                            className="font-mono text-[11px] tracking-wide text-text-muted flex items-center gap-2"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            scroll to explore <FiArrowDown size={12} />
                        </motion.span>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={imageReveal}
                    initial="hidden"
                    animate="show"
                    className="relative"
                >
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-2xl  border-4 border-coral bg-ink-card shadow-xl shadow-coral/20">
                        <Image
                            src="/images/portfolio.jpg"
                            alt="Kanich Fatema Mou"
                            fill
                            sizes="(max-width: 768px) 256px, 288px"
                            className="object-cover object-left"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}