import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../common/AnimatedCounter';

export default function ScoreGauge({ score }) {
  // Score ranges from 1.00 to 10.00
  const normalizedScore = Math.min(10, Math.max(1, score));
  const percentage = (normalizedScore / 10) * 100;
  
  // Color determination based on score
  let gaugeColor = '#10b981'; // Low stress (emerald)
  let glowColor = 'rgba(16, 185, 129, 0.4)';
  if (normalizedScore >= 8.0) {
    gaugeColor = '#8b5cf6'; // Critical (purple)
    glowColor = 'rgba(139, 92, 246, 0.4)';
  } else if (normalizedScore >= 6.5) {
    gaugeColor = '#ef4444'; // High (red)
    glowColor = 'rgba(239, 68, 68, 0.4)';
  } else if (normalizedScore >= 4.0) {
    gaugeColor = '#f59e0b'; // Moderate (amber)
    glowColor = 'rgba(245, 158, 11, 0.4)';
  }

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90 filter drop-shadow-lg" viewBox="0 0 160 160">
          <defs>
            <filter id="gauge-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={gaugeColor} floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Track Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#1e293b"
            strokeWidth="12"
            fill="transparent"
          />

          {/* Animated Progress Circle */}
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            stroke={gaugeColor}
            strokeWidth="12"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: targetOffset }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
            fill="transparent"
            style={{ filter: 'url(#gauge-glow)' }}
          />
        </svg>

        {/* Center Content with Count-Up Number */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <div className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            <AnimatedCounter value={normalizedScore} decimals={1} duration={1.4} />
          </div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
            Out of 10.0
          </span>
        </div>
      </div>
    </div>
  );
}
