'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/ProjectsPreview';
import GithubStats from '@/components/GithubStats';
import { supabase } from '@/lib/supabase';

function Skeleton() {
  return (
    <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto px-6">
      {[1, 2].map((i) => (
        <div key={i} className="bg-gray-200 animate-pulse rounded-2xl h-80"></div>
      ))}
    </div>
  );
}

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    }

    fetchProjects();
  }, []);

  return (
    <main>
      <Hero />
      {loading ? <Skeleton /> : <ProjectsPreview projects={projects} />}
      <GithubStats />
    </main>
  );
}
