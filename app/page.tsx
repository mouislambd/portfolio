'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import GithubStats from '@/components/GithubStats';

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Fetch from API
    fetch('/api/projects', { cache: 'no-store' } as any)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
            // Sort by date descending and take top 2
            const sortedProjects = [...data.projects].sort((a, b) => {
                const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
                const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
                return dateB - dateA;
            });
            // Ensure newest are at the front, then slice the first 2
            setProjects(sortedProjects.slice(0, 2));
        }
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <Hero />
      <ProjectsPreview projects={projects} />
      <GithubStats />
    </main>
  );
}
