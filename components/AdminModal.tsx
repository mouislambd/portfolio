'use client';
import { useState } from 'react';
import { FiX, FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import { supabase } from '@/lib/supabase';

export default function AdminModal({ onClose, projects, setProjects }: { onClose: () => void, projects: any[], setProjects: any }) {
  const [newProject, setNewProject] = useState({ id: null, title: '', description: '', image: '', live: '', github: '', tags: '', featured: false });
  const [isEditing, setIsEditing] = useState(false);

  const saveProject = async () => {
    if (isEditing && newProject.id) {
        // Update
        const { error } = await supabase
            .from('projects')
            .update({
                title: newProject.title,
                description: newProject.description,
                image: newProject.image,
                live: newProject.live,
                github: newProject.github,
                tags: newProject.tags,
                featured: newProject.featured
            })
            .eq('id', newProject.id);

        if (error) {
            console.error('Error updating project:', error);
            return;
        }

        setProjects(projects.map(p => p.id === newProject.id ? { ...p, ...newProject } : p));
    } else {
        // Add
        const { data, error } = await supabase
            .from('projects')
            .insert([{
                title: newProject.title,
                description: newProject.description,
                image: newProject.image,
                live: newProject.live,
                github: newProject.github,
                tags: newProject.tags,
                featured: newProject.featured
            }])
            .select();

        if (error) {
            console.error('Error adding project:', error);
            return;
        }

        if (data) {
            setProjects([data[0], ...projects]);
        }
    }
    
    setNewProject({ id: null, title: '', description: '', image: '', live: '', github: '', tags: '', featured: false });
    setIsEditing(false);
  };

  const startEdit = (project: any) => {
    setNewProject({
        id: project.id,
        title: project.title,
        description: project.description,
        image: project.image,
        live: project.live,
        github: project.github,
        tags: project.tags,
        featured: project.featured
    });
    setIsEditing(true);
  };

  const deleteProject = async (id: number) => {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting project:', error);
      return;
    }

    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A202C]/95 backdrop-blur-md px-6">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl border border-[#1A202C]/10 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-display text-[#1A202C]">Manage Projects</h2>
          <button onClick={onClose} className="text-[#4A5568] hover:text-[#E05A47]">
            <FiX size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-medium">Current Projects</h4>
            </div>
            <div className="space-y-2 mb-4">
              {projects.map(p => (
                <div key={p.id} className="flex justify-between items-center p-3 bg-gray-50 rounded border border-[#1A202C]/5">
                  <span className="text-sm font-medium">{p.title}</span>
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(p)} className="text-[#4A5568] hover:text-[#31AAA9]"><FiEdit2 /></button>
                    <button onClick={() => deleteProject(p.id)} className="text-[#4A5568] hover:text-[#E05A47]"><FiTrash2 /></button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-50 rounded border border-[#1A202C]/5 space-y-2">
              <h4 className="text-sm font-medium mb-2">{isEditing ? 'Edit Project' : 'Add New Project'}</h4>
              <input type="text" placeholder="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} className="w-full text-sm p-2 rounded border" />
              <input type="text" placeholder="Description" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} className="w-full text-sm p-2 rounded border" />
              <input type="text" placeholder="Image Path" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} className="w-full text-sm p-2 rounded border" />
              <input type="text" placeholder="Live Link" value={newProject.live} onChange={e => setNewProject({...newProject, live: e.target.value})} className="w-full text-sm p-2 rounded border" />
              <input type="text" placeholder="GitHub Link" value={newProject.github} onChange={e => setNewProject({...newProject, github: e.target.value})} className="w-full text-sm p-2 rounded border" />
              <input type="text" placeholder="Tags (comma separated)" value={newProject.tags} onChange={e => setNewProject({...newProject, tags: e.target.value})} className="w-full text-sm p-2 rounded border" />
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={newProject.featured} onChange={e => setNewProject({...newProject, featured: e.target.checked})} />
                Featured
              </label>
              <button onClick={saveProject} className="w-full flex items-center justify-center gap-2 bg-[#1A202C] text-white font-medium rounded py-2 hover:opacity-90">
                <FiPlus /> {isEditing ? 'Update Project' : 'Add Project'}
              </button>
              {isEditing && (
                <button onClick={() => { setNewProject({ id: null, title: '', description: '', image: '', live: '', github: '', tags: '', featured: false }); setIsEditing(false); }} className="w-full text-sm text-gray-500 hover:underline mt-2">
                    Cancel Edit
                </button>
              )}
            </div>
          </div>

          <button onClick={onClose} className="w-full bg-[#E05A47] text-[#FDFBF7] font-medium rounded py-2 hover:opacity-90">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}




