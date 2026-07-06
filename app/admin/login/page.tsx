'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (data.success) {
                router.push('/admin/add-project');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch {
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm flex flex-col gap-5 bg-ink-card border border-ink-line rounded-2xl p-8"
            >
                <h1 className="font-display text-2xl font-medium text-text-primary text-center mb-2">
                    Admin Login
                </h1>

                <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">
                        EMAIL
                    </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-ink border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono text-text-muted mb-2">
                        PASSWORD
                    </label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-ink border border-ink-line rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:border-coral/50 transition-colors"
                    />
                </div>

                {error && <p className="text-coral-soft text-sm">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-coral text-ink font-medium text-sm rounded-xl px-6 py-3 hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </section>
    );
}