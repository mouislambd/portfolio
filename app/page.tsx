'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';

const INITIAL_PROJECTS = [
  { id: 1, title: 'Project One', description: 'Desc', image: '/pic.png', live: '#', github: '#', tags: 'tag1,tag2', featured: true },
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
