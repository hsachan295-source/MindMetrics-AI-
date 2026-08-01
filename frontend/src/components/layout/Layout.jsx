import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toast } = useApp();

  const toastIcons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-400 shrink-0" />,
  };

  const toastBg = {
    success: 'bg-emerald-950/90 border-emerald-500/50 text-emerald-100',
    warning: 'bg-amber-950/90 border-amber-500/50 text-amber-100',
    error: 'bg-rose-950/90 border-rose-500/50 text-rose-100',
    info: 'bg-blue-950/90 border-blue-500/50 text-blue-100',
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 animate-bounce-in">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-md text-sm font-medium ${
              toastBg[toast.type] || toastBg.info
            }`}
          >
            {toastIcons[toast.type] || toastIcons.info}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
