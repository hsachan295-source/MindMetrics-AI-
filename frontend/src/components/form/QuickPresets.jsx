import React from 'react';
import { PRESET_PROFILES } from '../../services/sampleData';
import { Sparkles } from 'lucide-react';

export default function QuickPresets({ onSelectPreset }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-3">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>Quick Test Presets (Load Sample Student Profiles)</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {PRESET_PROFILES.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelectPreset(preset.data)}
            className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-blue-500/50 text-left transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">{preset.icon}</span>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                {preset.name}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
              {preset.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
