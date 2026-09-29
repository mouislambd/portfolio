'use client';
import { FiX } from 'react-icons/fi';

export default function AdminModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A202C]/95 backdrop-blur-md px-6">
      <div className="bg-[#1A202C]-card p-8 rounded-lg w-full max-w-md border border-[#1A202C]/10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-display text-[#1A202C]">Admin Panel</h2>
          <button onClick={onClose} className="text-[#4A5568] hover:text-[#E05A47]">
            <FiX size={24} />
          </button>
        </div>
        <div className="space-y-4">
          {['Name', 'Email', 'LinkedIn', 'GitHub', 'Location'].map((section) => (
            <div key={section}>
              <label className="block text-sm text-[#4A5568] mb-1">{section}</label>
              <input type="text" className="w-full bg-[#1A202C] border border-[#1A202C]/10 rounded px-3 py-2 text-[#1A202C] focus:border-[#E05A47] outline-none" />
            </div>
          ))}
          <button onClick={onClose} className="w-full bg-[#E05A47] text-[#FDFBF7] font-medium rounded py-2 hover:opacity-90">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}


