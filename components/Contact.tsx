'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';

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

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
    const [status, setStatus] = useState<Status>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData,
            });
            const result = await res.json();

            if (result.success) {
                setStatus('success');
                e.currentTarget.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="relative min-h-screen px-6 pt-32 pb-24 overflow-hidden">
            <div
                className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full bg-coral opacity-10 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-2xl mx-auto"
            >
                <motion.span
                    variants={item}
                    className="block font-mono text-xs tracking-[0.2em] text-coral mb-4"
                >
                    INDEX / 005
                </motion.span>

                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-medium leading-tight text-text-primary mb-4"
                >
                    Contact
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-text-secondary text-sm sm:text-base max-w-lg mb-12"
                >
                    Have a role, project, or idea in mind? Send a message  it lands
                    directly in my inbox.
                </motion.p>

                <motion.form
                    variants={item}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="77e383e9-57db-42cb-a65d-3095a547aef3"
                    />
                    <input
                        type="hidden"
                        name="subject"
                        value="New message from portfolio contact form"
                    />

                    <div>
                        <label
                            htmlFor="name"
                            className="block text-xs font-mono text-text-muted mb-2"
                        >
                            NAME
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-ring focus:border-coral/50 outline-none transition-colors"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs font-mono text-text-muted mb-2"
                        >
                            EMAIL
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-ring focus:border-coral/50 outline-none transition-colors"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-xs font-mono text-text-muted mb-2"
                        >
                            MESSAGE
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus-ring focus:border-coral/50 outline-none transition-colors"
                            placeholder="Tell me about the opportunity..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex items-center justify-center gap-2 bg-coral text-ink font-medium text-sm rounded-xl px-6 py-3.5 transition-opacity hover:opacity-90 disabled:opacity-50 focus-ring mt-2"
                    >
                        {status === 'success' ? (
                            <>
                                <FiCheck size={16} />
                                Message sent
                            </>
                        ) : status === 'sending' ? (
                            'Sending...'
                        ) : (
                            <>
                                <FiSend size={16} />
                                Send message
                            </>
                        )}
                    </button>

                    {status === 'error' && (
                        <p className="text-coral-soft text-sm">
                            delivary your message  insha-allah
                        </p>
                    )}
                </motion.form>

                <motion.div
                    variants={item}
                    className="mt-16 pt-8 border-t border-ink-line flex items-center gap-6"
                >
                    <a
                        href="https://github.com/mouislambd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
                    >
                        <FiGithub size={16} />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kanich-fatimah-mou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
                    >
                        <FiLinkedin size={16} />
                        LinkedIn
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}