import React from 'react';
import { 
  LayoutDashboard, 
  BrainCircuit, 
  History, 
  BookOpen, 
  Settings, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Sidebar({ isOpen, onClose }) {
  const { activePage, setActivePage, history } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Analytics Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'predict', label: 'Mental Assessment', icon: BrainCircuit, badge: 'AI' },
    { id: 'history', label: 'Prediction Logs', icon: History, badge: history.length > 0 ? history.length : null },
    { id: 'resources', label: 'Wellness Resources', icon: BookOpen, badge: null },
    { id: 'settings', label: 'System Settings', icon: Settings, badge: null },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed lg:static top-16 bottom-0 left-0 z-40 w-64 bg-[#0D121F] border-r border-[#1F2937] p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          <div>
            <p className="px-3 text-[11px] font-bold font-heading text-slate-500 uppercase tracking-wider mb-3">
              Main Navigation
            </p>
            <nav className="space-y-1.5 font-sans">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative group cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/20 to-transparent text-blue-400 font-semibold border-l-4 border-blue-500 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive ? 'bg-blue-500 text-white shadow-sm' : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-4 border-t border-[#1F2937]">
            <div className="p-4 rounded-xl bg-gradient-to-b from-slate-900/80 to-[#131826] border border-[#1F2937]">
              <div className="flex items-center gap-2 text-xs font-bold font-heading text-slate-200 mb-1">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>FastAPI ML Engine</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed mb-3">
                Random Forest classifier trained on 1,400+ student records.
              </p>
              <button
                onClick={() => {
                  setActivePage('settings');
                  onClose();
                }}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 font-sans cursor-pointer"
              >
                <span>View API Docs</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer info in sidebar */}
        <div className="pt-4 border-t border-[#1F2937] flex items-center gap-2 text-xs text-slate-500 font-sans px-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Production Ready • MindMetrics AI</span>
        </div>
      </aside>
    </>
  );
}
