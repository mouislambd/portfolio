'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import AdminModal from '@/components/AdminModal';

const INITIAL_PROJECTS = [
  { id: 1, title: 'Project One', description: 'Desc', image: '/pic.png', live: '#', github: '#', tags: 'tag1,tag2', featured: true },
];

export default function Home() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <main>
      <Hero />
      <ProjectsPreview projects={projects} />
      <button onClick={() => setIsAdminOpen(true)} className="fixed bottom-4 right-4 bg-[#E05A47] text-white p-2 rounded-full">Admin</button>
      {isAdminOpen && <AdminModal onClose={() => setIsAdminOpen(false)} projects={projects} setProjects={setProjects} />}
    </main>
  );
}
