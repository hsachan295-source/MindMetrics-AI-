import React from 'react';

export default function ScoreGauge({ score }) {
  // Score ranges from 1.00 to 10.00
  const normalizedScore = Math.min(10, Math.max(1, score));
  const percentage = (normalizedScore / 10) * 100;
  
  // Color determination based on score
  let gaugeColor = '#10b981'; // Low stress (emerald)
  if (normalizedScore >= 8.0) gaugeColor = '#8b5cf6'; // Critical (purple)
  else if (normalizedScore >= 6.5) gaugeColor = '#ef4444'; // High (red)
  else if (normalizedScore >= 4.0) gaugeColor = '#f59e0b'; // Moderate (amber)

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
          {/* Track Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#1e293b"
            strokeWidth="12"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={gaugeColor}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Content */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold text-white tracking-tight">
            {normalizedScore.toFixed(1)}
          </span>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
            Out of 10.0
          </span>
        </div>
      </div>
    </div>
  );
}
