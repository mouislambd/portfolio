'use client';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import Footer from '@/components/Footer';

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Load projects from local storage or fetch from API
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
    }
  }, []);

  return (
    <main>
      <Hero />
      <ProjectsPreview projects={projects} />
      <Footer />
    </main>
  );
}
