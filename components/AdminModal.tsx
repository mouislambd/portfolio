'use client';
import { FiX } from 'react-icons/fi';

export default function AdminModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md px-6">
      <div className="bg-ink-card p-8 rounded-lg w-full max-w-md border border-ink-line">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-display text-text-primary">Admin Panel</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-coral">
            <FiX size={24} />
          </button>
        </div>
        <div className="space-y-4">
          {['Name', 'Email', 'LinkedIn', 'GitHub', 'Location'].map((section) => (
            <div key={section}>
              <label className="block text-sm text-text-secondary mb-1">{section}</label>
              <input type="text" className="w-full bg-ink border border-ink-line rounded px-3 py-2 text-text-primary focus:border-coral outline-none" />
            </div>
          ))}
          <button onClick={onClose} className="w-full bg-coral text-ink font-medium rounded py-2 hover:opacity-90">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
