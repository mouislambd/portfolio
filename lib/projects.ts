export type Project = {
    title: string;
    description: string;
    tech: string[];
    liveLink: string;
    githubLink: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: 'BiblioDrop',
        description: 'Full-stack book delivery management system.',
        tech: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
        liveLink: 'https://bibliodrop-client-sand.vercel.app',
        githubLink: 'https://github.com/mouislambd',
    },
    {
        title: 'DocAppoint',
        description: 'Doctor appointment booking platform.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveLink: 'https://docappoint-client-qc91.vercel.app',
        githubLink: 'https://github.com/mouislambd',
    },
    // নতুন project যোগ করতে এখানে একটা নতুন object push করো, যেমন:
    // {
    //   title: 'Bengal Basket',
    //   description: 'Food delivery platform.',
    //   tech: ['Next.js', 'MongoDB'],
    //   liveLink: '...',
    //   githubLink: '...',
    // },
];