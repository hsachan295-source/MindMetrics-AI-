import React from 'react';

export default function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  helperText,
  icon: Icon,
  min,
  max,
  step,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-slate-300 flex items-center gap-1">
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
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          required={required}
          className={`w-full glass-input rounded-xl text-sm text-slate-100 placeholder-slate-500 py-2.5 ${
            Icon ? 'pl-9' : 'pl-3.5'
          } pr-3.5 ${error ? 'border-rose-500/80 focus:ring-rose-500' : ''}`}
          {...props}
        />
      </div>
      {error ? (
        <span className="text-xs text-rose-400 mt-0.5">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-slate-400 mt-0.5">{helperText}</span>
      ) : null}
    </div>
  );
}
