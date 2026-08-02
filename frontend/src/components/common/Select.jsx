import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  error,
  helperText,
  icon: Icon,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 font-sans ${className}`}>
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-slate-300 flex items-center gap-1">
          {label}
          {required && <span className="text-rose-400">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full glass-input rounded-lg text-sm text-slate-100 bg-[#0D121F] py-2.5 ${
            Icon ? 'pl-9' : 'pl-3.5'
          } pr-9 appearance-none cursor-pointer ${error ? 'border-rose-500/80' : ''}`}
          {...props}
        >
          {options.map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const lbl = typeof opt === 'object' ? opt.label : opt;
            return (
              <option key={val} value={val} className="bg-[#0D121F] text-slate-100 py-1">
                {lbl}
              </option>
            );
          })}
        </select>
        <div className="absolute right-3 text-slate-400 pointer-events-none">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      {error ? (
        <span className="text-xs text-rose-400 mt-0.5">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-slate-400 mt-0.5">{helperText}</span>
      ) : null}
    </div>
  );
}
