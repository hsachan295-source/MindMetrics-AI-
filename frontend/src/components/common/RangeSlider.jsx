import React from 'react';

export default function RangeSlider({
  label,
  id,
  value,
  onChange,
  min = 0,
  max = 24,
  step = 0.5,
  unit = 'hrs',
  icon: Icon,
  className = '',
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
          {Icon && <Icon className="w-4 h-4 text-blue-400" />}
          {label}
        </label>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {value} {unit}
        </span>
      </div>
      <div className="relative flex items-center">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          style={{
            background: `linear-gradient(to right, #369eff 0%, #369eff ${percentage}%, #1e293b ${percentage}%, #1e293b 100%)`
          }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-slate-500 px-0.5">
        <span>{min} {unit}</span>
        <span>{(max / 2)} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
}
