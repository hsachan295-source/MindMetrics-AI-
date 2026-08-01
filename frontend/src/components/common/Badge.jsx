import React from 'react';

export default function Badge({
  children,
  variant = 'blue', // blue | emerald | amber | red | purple | slate
  size = 'md', // sm | md
  className = '',
}) {
  const variants = {
    blue: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    red: 'bg-red-500/15 text-red-400 border-red-500/30',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    slate: 'bg-slate-700/40 text-slate-300 border-slate-600/40',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-full border ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
