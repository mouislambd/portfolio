import Link from 'next/link';
import { FiGithub, FiLinkedin, FiArrowUpRight, FiMail, FiPhone, FiDownload } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/mouislambd',
        icon: FiGithub,
        hoverColor: 'hover:text-[#f0f6fc] hover:bg-[#333]',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kanich-fatimah-mou',
        icon: FiLinkedin,
        hoverColor: 'hover:text-white hover:bg-[#0A66C2]',
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-ink-line px-6 py-14">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
                    <div>
                        <span className="block font-mono text-xs tracking-[0.2em] text-coral mb-3">
                            KANICH FATEMA MOU
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-medium text-text-primary max-w-sm leading-snug">
                            Let&apos;s build something worth shipping.
                        </h3>

                        <div className="flex flex-wrap items-center gap-4 mt-5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1.5 text-sm text-coral-soft hover:text-coral transition-colors focus-ring"
                            >
                                Get in touch
                                <FiArrowUpRight size={14} />
                            </Link>

                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-1.5 text-sm bg-coral text-ink font-medium rounded-lg px-4 py-2 hover:opacity-90 transition-opacity focus-ring"
                            >
                                <FiDownload size={14} />
                                Download CV
                            </a>
                        </div>

                        <div className="flex flex-col gap-2 mt-6">
                            <a
                                href="mailto:kanichfatema@outlook.com"
                                className="flex items-center gap-2 text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
                            >
                                <FiMail size={14} />
                                kanichfatema@outlook.com
                            </a>
                            <a
                                href="tel:YOUR_PHONE_NUMBER"
                                className="flex items-center gap-2 text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
                            >
                                <FiPhone size={14} />
                                Number: +880 1317592043
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 sm:items-end">
                        <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-text-secondary hover:text-coral transition-colors focus-ring"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-ink-card border border-ink-line text-text-secondary transition-all duration-300 hover:scale-110 hover:border-transparent focus-ring ${social.hoverColor}`}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-ink-line flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="font-mono text-[11px] text-text-muted">
                        © {year} Kanich Fatema Mou. All rights reserved.
                    </span>
                    <span className="font-mono text-[11px] text-text-muted">
                        Built with Next.js &amp; Tailwind CSS
                    </span>
                </div>
            </div>
        </footer>
    );
}