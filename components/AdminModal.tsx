'use client';
import { useState } from 'react';
import { FiX, FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

export default function AdminModal({ onClose }: { onClose: () => void }) {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project One', description: 'Desc', image: '/pic.png', live: '#', github: '#', tags: 'tag1,tag2', featured: true },
  ]);
  const [newProject, setNewProject] = useState({ title: '', description: '', image: '', live: '', github: '', tags: '', featured: false });

  const addProject = () => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setNewProject({ title: '', description: '', image: '', live: '', github: '', tags: '', featured: false });
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A202C]/95 backdrop-blur-md px-6">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl border border-[#1A202C]/10 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-display text-[#1A202C]">Admin Panel</h2>
          <button onClick={onClose} className="text-[#4A5568] hover:text-[#E05A47]">
            <FiX size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-display mb-3">Profile</h3>
            {['Name', 'Email', 'LinkedIn', 'GitHub', 'Location'].map((section) => (
              <div key={section} className="mb-2">
                <label className="block text-sm text-[#4A5568] mb-1">{section}</label>
                <input type="text" className="w-full bg-gray-100 border border-[#1A202C]/10 rounded px-3 py-2 text-[#1A202C] focus:border-[#E05A47] outline-none" />
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-display mb-3">Projects</h3>
            <div className="space-y-2 mb-4">
              {projects.map(p => (
                <div key={p.id} className="flex justify-between items-center p-3 bg-gray-50 rounded border border-[#1A202C]/5">
                  <span className="text-sm">{p.title}</span>
                  <div className="flex gap-2">
                    <button className="text-[#4A5568] hover:text-[#31AAA9]"><FiEdit2 /></button>
                    <button onClick={() => deleteProject(p.id)} className="text-[#4A5568] hover:text-[#E05A47]"><FiTrash2 /></button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-50 rounded border border-[#1A202C]/5 space-y-2">
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
              <button onClick={addProject} className="w-full flex items-center justify-center gap-2 bg-[#1A202C] text-white font-medium rounded py-2 hover:opacity-90">
                <FiPlus /> Add Project
              </button>
            </div>
          </div>

          <button onClick={onClose} className="w-full bg-[#E05A47] text-[#FDFBF7] font-medium rounded py-2 hover:opacity-90">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}




