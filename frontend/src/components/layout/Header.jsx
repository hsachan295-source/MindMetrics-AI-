import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function Header({ title, description, actions, showBack = false }) {
  const { setActivePage } = useApp();

  return (
    <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/60 pb-5">
      <div>
        {showBack && (
          <button
            onClick={() => setActivePage('dashboard')}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-blue-400 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </button>
        )}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">{description}</p>
        )}
      </div>

      {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
    </header>
  );
}
