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
                setProjects(data.projects);
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
