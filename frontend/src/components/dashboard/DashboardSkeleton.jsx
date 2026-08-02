import React from 'react';

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-2">
          <div className="h-8 w-72 bg-slate-800/80 rounded-xl" />
          <div className="h-4 w-96 max-w-full bg-slate-800/50 rounded-lg" />
        </div>
        <div className="h-10 w-48 bg-slate-800/80 rounded-xl" />
      </div>

      {/* KPI Cards Skeleton (5 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="glass-card rounded-2xl p-5 border border-slate-800/60 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-3 w-24 bg-slate-800 rounded" />
              <div className="w-8 h-8 rounded-xl bg-slate-800" />
            </div>
            <div className="h-8 w-28 bg-slate-800/90 rounded-lg" />
            <div className="h-3 w-20 bg-slate-800/50 rounded" />
          </div>
        ))}
      </div>

      {/* Charts Grid Row 1 Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-slate-800/60 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800" />
              <div className="space-y-1.5">
                <div className="h-5 w-48 bg-slate-800 rounded" />
                <div className="h-3 w-64 bg-slate-800/60 rounded" />
              </div>
            </div>
          </div>
          <div className="h-72 w-full bg-slate-900/60 rounded-xl border border-slate-800/40" />
        </div>

        <div className="glass-card rounded-2xl p-6 border border-slate-800/60 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800" />
              <div className="space-y-1.5">
                <div className="h-5 w-36 bg-slate-800 rounded" />
                <div className="h-3 w-44 bg-slate-800/60 rounded" />
              </div>
            </div>
          </div>
          <div className="h-72 w-full bg-slate-900/60 rounded-xl border border-slate-800/40 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-slate-800" />
          </div>
        </div>
      </div>

      {/* Charts Grid Row 2 Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6 border border-slate-800/60 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
            <div className="w-9 h-9 rounded-xl bg-slate-800" />
            <div className="space-y-1.5">
              <div className="h-5 w-44 bg-slate-800 rounded" />
              <div className="h-3 w-60 bg-slate-800/60 rounded" />
            </div>
          </div>
          <div className="h-72 w-full bg-slate-900/60 rounded-xl border border-slate-800/40" />
        </div>

        <div className="glass-card rounded-2xl p-6 border border-slate-800/60 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
            <div className="w-9 h-9 rounded-xl bg-slate-800" />
            <div className="space-y-1.5">
              <div className="h-5 w-40 bg-slate-800 rounded" />
              <div className="h-3 w-52 bg-slate-800/60 rounded" />
            </div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-14 bg-slate-900/60 rounded-xl border border-slate-800/40" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
