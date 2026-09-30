'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';

const INITIAL_PROJECTS = [
  { 
    id: 1, 
    title: "keep-keeper", 
    description: "Fully functional productivity web application/note-taking app.", 
    image: "/pic.png", 
    live: "https://keenkeeper-beryl.vercel.app/", 
    github: "https://github.com/mouislambd/assignment-7.git", 
    tags: "Next.js,Tailwind CSS,React", 
    featured: true 
  },
  { 
    id: 2, 
    title: "github-issues-trackers", 
    description: "GitHub issues tracker app.", 
    image: "/pic.png", 
    live: "#", 
    github: "#", 
    tags: "JavaScript,OpenWeather API,Tailwind", 
    featured: false 
  },
];

export default function Home() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  return (
    <main>
      <Hero />
      <ProjectsPreview projects={projects} />
    </main>
  );
}
