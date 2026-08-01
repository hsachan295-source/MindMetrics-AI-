import React from 'react';
import { Activity, Server, Sparkles, Brain, CheckCircle2, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Navbar({ onToggleSidebar }) {
  const { isBackendLive, setActivePage } = useApp();

  return (
    <nav className="h-16 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 lg:hidden"
          aria-label="Toggle Navigation Sidebar"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div 
          onClick={() => setActivePage('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-teal-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Brain className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-white">MindMetrics</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                AI Pro
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Mental Health & Screen Analytics</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Backend Status Indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs">
          <Server className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-300">FastAPI API:</span>
          {isBackendLive ? (
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Connected
            </span>
          ) : (
            <span className="flex items-center gap-1 text-amber-400 font-semibold" title="Running in simulated mode">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Offline (Simulated)
            </span>
          )}
        </div>

        {/* Quick Predict Action Button */}
        <button
          onClick={() => setActivePage('predict')}
          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>New Assessment</span>
        </button>
      </div>
    </nav>
  );
}
