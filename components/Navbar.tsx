'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Education', href: '/education' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Admin', href: '/admin/login' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/mouislambd', icon: FiGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kanich-fatimah-mou', icon: FiLinkedin },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-ink/80 backdrop-blur-md border-b border-ink-line'
          : 'bg-transparent border-b border-transparent'
          }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-mono text-sm tracking-wider text-text-primary focus-ring"
          >
            Kanich Fatema Mou
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-mono tracking-wide transition-colors focus-ring ${active ? 'text-coral' : 'text-text-secondary hover:text-text-primary'
                      }`}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-coral"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-text-primary focus-ring"
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex justify-end px-6 py-5">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-text-primary focus-ring"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <motion.ul
              className="flex flex-col items-center justify-center gap-8 mt-16"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-display text-3xl ${pathname === link.href ? 'text-coral' : 'text-text-primary'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex justify-center gap-6 mt-16">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-coral transition-colors focus-ring"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}