'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import GithubStats from '@/components/GithubStats';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProjects() {
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            
            // Show only the latest 2 projects
            setProjects(data?.slice(0, 2) || []);
        } catch (e) {
            console.error('Error fetching projects from Supabase', e);
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
