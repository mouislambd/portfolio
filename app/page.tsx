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
            // Ensure previewImage is mapped from image if necessary
            const normalized = parsed.map((p: any) => ({
                ...p,
                previewImage: p.previewImage || p.image // Check both potential property names
            }));
            // Slice the first 2
            setProjects(normalized.slice(0, 2));
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
