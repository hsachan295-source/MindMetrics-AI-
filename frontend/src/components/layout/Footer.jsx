import React from 'react';
import { Heart, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800/80 py-6 px-4 md:px-8 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span>Student Mental Health & Social Media Impact System</span>
        <span>•</span>
        <span>Powered by FastAPI & ML Model</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-slate-400">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>for Student Well-being</span>
        </div>
      </div>
    </footer>
  );
}
