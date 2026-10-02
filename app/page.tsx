'use client';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import GithubStats from '@/components/GithubStats';
import Footer from '@/components/Footer';

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Fetch from API
    fetch('/api/projects', { cache: 'no-store' } as any)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
            // Sort by date descending
            const sortedProjects = [...data.projects].sort((a, b) => {
                const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
                const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
                return dateB - dateA;
            });
            setProjects(sortedProjects);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <Hero />
      <ProjectsPreview projects={projects} />
      <GithubStats />
      <Footer />
    </main>
  );
}
