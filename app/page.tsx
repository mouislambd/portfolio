'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import GithubStats from '@/components/GithubStats';

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProjects() {
        try {
            const res = await fetch('/api/projects');
            const data = await res.json();
            if (data.success) {
                // Show only the latest 2 projects
                setProjects(data.projects.slice(0, 2));
            }
        } catch (e) {
            console.error('Error fetching projects', e);
        }
    }

    fetchProjects();
  }, []);

  return (
    <main>
      <Hero />
      <ProjectsPreview projects={projects} />
      <GithubStats />
    </main>
  );
}
