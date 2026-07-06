'use client';

import { motion } from 'framer-motion';
import {
    SiHtml5,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiGithub,
    SiVercel,
    SiNumpy,
    SiPandas,
    SiTypescript,
} from 'react-icons/si';
import { FiServer, FiDatabase, FiCpu, FiBarChart2 } from 'react-icons/fi';
import type { IconType } from 'react-icons';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
};

type Skill = { name: string; icon: IconType };

const skillGroups: { title: string; skills: Skill[] }[] = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', icon: SiHtml5 },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'JavaScript (ES6+)', icon: SiJavascript },
            { name: 'TypeScript (ES6+)', icon: SiTypescript },
            { name: 'React.js', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
        ],
    },
    {
        title: 'Backend & Tools',
        skills: [
            { name: 'Python', icon: SiPython },
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiExpress },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Firebase', icon: SiFirebase },
            { name: 'REST API', icon: FiServer },
            { name: 'Git & GitHub', icon: SiGit },
            { name: 'Vercel', icon: SiVercel },
        ],
    },
    {
        title: 'Future Stack',
        skills: [
            { name: 'TypeScript (ES6+)', icon: SiTypescript },
            { name: 'Machine Learning', icon: FiCpu },
            { name: 'Data Science', icon: FiDatabase },
            { name: 'NumPy & Pandas', icon: SiNumpy },
            { name: 'Data Visualization', icon: FiBarChart2 },
            { name: 'AI Engineering', icon: FiCpu },
        ],
    },
];

export default function Skills() {
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
                className="max-w-4xl mx-auto"
            >
                <motion.span
                    variants={item}
                    className="block font-mono text-xs tracking-[0.2em] text-coral mb-4"
                >
                    INDEX / 003
                </motion.span>

                <motion.h1
                    variants={item}
                    className="font-display text-3xl sm:text-4xl font-medium leading-tight text-text-primary mb-4"
                >
                    Skills
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-text-secondary text-sm sm:text-base max-w-xl mb-16"
                >
                    A specialized selection of technologies I use to build robust and
                    scalable applications.
                </motion.p>

                {skillGroups.map((group) => (
                    <div key={group.title} className="mb-14">
                        <motion.h2
                            variants={item}
                            className="font-mono text-sm tracking-[0.15em] text-coral uppercase mb-5 flex items-center gap-3"
                        >
                            <span className="w-6 h-px bg-coral" />
                            {group.title}
                        </motion.h2>

                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-start gap-3 bg-ink-card border border-ink-line rounded-2xl px-5 py-6 cursor-default transition-colors duration-200 hover:border-coral hover:bg-coral-dim"
                  >
                    <Icon className="text-coral-soft shrink-0" size={28} />
                    <span className="text-text-primary text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}