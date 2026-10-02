'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import GithubStats from '@/components/GithubStats';

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Read from localStorage
    const saved = localStorage.getItem('projects');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Slice the first 2
            setProjects(parsed.slice(0, 2));
        } catch (e) {
            console.error('Error parsing projects from localStorage', e);
        }
    }
  }, []);

  return (
    <main>
      <Hero />
      <ProjectsPreview projects={projects} />
      <GithubStats />
    </main>
  );
}
