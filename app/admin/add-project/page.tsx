'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProjectPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [liveLink, setLiveLink] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    description,
                    tech,
                    liveLink,
                    githubLink,
                    previewImage,
                }),
            });
            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setTitle('');
                setDescription('');
                setTech('');
                setLiveLink('');
                setGithubLink('');
                setPreviewImage('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    return (
        <section className="relative min-h-screen px-6 pt-32 pb-24">
            <div className="max-w-xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="font-display text-2xl font-medium text-text-primary">
                        Add New Project
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-text-secondary hover:text-coral transition-colors"
                    >
                        Logout
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-xs font-mono text-text-muted mb-2">
                            TITLE
                        </label>
                        <input
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors"
                            placeholder="BiblioDrop"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-text-muted mb-2">
                            DESCRIPTION
                        </label>
                        <textarea
                            required
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors resize-none"
                            placeholder="Full-stack book delivery management system"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-text-muted mb-2">
                            TECH (comma separated)
                        </label>
                        <input
                            required
                            value={tech}
                            onChange={(e) => setTech(e.target.value)}
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors"
                            placeholder="Next.js, Express, MongoDB, Stripe"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-text-muted mb-2">
                            LIVE LINK
                        </label>
                        <input
                            value={liveLink}
                            onChange={(e) => setLiveLink(e.target.value)}
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors"
                            placeholder="https://bibliodrop.vercel.app"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-text-muted mb-2">
                            GITHUB LINK
                        </label>
                        <input
                            value={githubLink}
                            onChange={(e) => setGithubLink(e.target.value)}
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors"
                            placeholder="https://github.com/mouislambd/bibliodrop"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-text-muted mb-2">
                            PREVIEW IMAGE PATH (optional)
                        </label>
                        <input
                            value={previewImage}
                            onChange={(e) => setPreviewImage(e.target.value)}
                            className="w-full bg-ink-card border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors"
                            placeholder="/images/bibliodrop-preview.png"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="bg-coral text-ink font-medium text-sm rounded-xl px-6 py-3 hover:opacity-90 disabled:opacity-50 transition-opacity mt-2"
                    >
                        {status === 'sending' ? 'Adding...' : 'Add Project'}
                    </button>

                    {status === 'success' && (
                        <p className="text-coral-soft text-sm">Project added successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-coral-soft text-sm">Something went wrong. Try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
}