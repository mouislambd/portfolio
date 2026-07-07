'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCompass } from 'react-icons/fi';

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

export default function NotFound() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-coral opacity-10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-md text-center"
            >
                <motion.span
                    variants={item}
                    className="block font-mono text-xs tracking-[0.2em] text-coral mb-6"
                >
                    — ERROR / 404
                </motion.span>

                <motion.div
                    variants={item}
                    className="flex items-center justify-center gap-4 mb-6"
                >
                    <span className="font-display text-6xl sm:text-7xl font-medium text-text-primary">
                        4
                    </span>
                    <div className="w-14 h-14 rounded-full bg-coral-dim flex items-center justify-center">
                        <FiCompass className="text-coral" size={26} />
                    </div>
                    <span className="font-display text-6xl sm:text-7xl font-medium text-text-primary">
                        4
                    </span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="font-display text-xl sm:text-2xl font-medium text-text-primary mb-3"
                >
                    This page doesn&apos;t exist
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-text-secondary text-sm sm:text-base mb-10"
                >
                    The page you&apos;re looking for might have been moved, renamed,
                    or never existed in the first place.
                </motion.p>

                <motion.div variants={item}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-coral text-ink font-medium text-sm rounded-xl px-6 py-3 hover:opacity-90 transition-opacity focus-ring"
                    >
                        <FiArrowLeft size={16} />
                        Back to Home
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}