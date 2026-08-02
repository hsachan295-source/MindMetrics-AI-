import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../common/AnimatedCounter';

export default function ScoreGauge({ score }) {
  // Score ranges from 1.00 to 10.00
  const normalizedScore = Math.min(10, Math.max(1, score));
  const percentage = (normalizedScore / 10) * 100;
  
  // Risk assessment logic & colors
  let statusText = 'Low Stress';
  let badgeBg = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
  let pulseGlow = 'rgba(16, 185, 129, 0.35)';
  let gradientStops = {
    start: '#10b981',
    end: '#06b6d4'
  };

  if (normalizedScore >= 8.0) {
    statusText = 'Critical Risk';
    badgeBg = 'bg-purple-500/15 text-purple-400 border-purple-500/30';
    pulseGlow = 'rgba(168, 85, 247, 0.35)';
    gradientStops = { start: '#a855f7', end: '#ec4899' };
  } else if (normalizedScore >= 6.5) {
    statusText = 'High Stress';
    badgeBg = 'bg-rose-500/15 text-rose-400 border-rose-500/30';
    pulseGlow = 'rgba(244, 63, 94, 0.35)';
    gradientStops = { start: '#ef4444', end: '#f43f5e' };
  } else if (normalizedScore >= 4.0) {
    statusText = 'Moderate Stress';
    badgeBg = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
    pulseGlow = 'rgba(245, 158, 11, 0.35)';
    gradientStops = { start: '#f59e0b', end: '#eab308' };
  }

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center p-2">
      {/* Subtle Pulsing Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-56 h-56 rounded-full filter blur-2xl pointer-events-none"
        style={{ backgroundColor: pulseGlow }}
      />

      {/* Main SVG Gauge Container */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90 filter drop-shadow-xl" viewBox="0 0 210 210">
          <defs>
            <linearGradient id="scoreGaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientStops.start} />
              <stop offset="100%" stopColor={gradientStops.end} />
            </linearGradient>

            <filter id="hero-gauge-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor={gradientStops.start} floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Track Circle */}
          <circle
            cx="105"
            cy="105"
            r={radius}
            stroke="#1F2937"
            strokeWidth="14"
            fill="transparent"
          />

          {/* Animated Progress Circle */}
          <motion.circle
            cx="105"
            cy="105"
            r={radius}
            stroke="url(#scoreGaugeGradient)"
            strokeWidth="14"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: targetOffset }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            strokeLinecap="round"
            fill="transparent"
            style={{ filter: 'url(#hero-gauge-glow)' }}
          />
        </svg>

        {/* Center Score & Status Pill */}
        <div className="absolute flex flex-col items-center justify-center text-center space-y-1">
          <div className="flex items-baseline gap-1 font-heading text-white tracking-tight">
            <span className="text-5xl md:text-6xl font-extrabold">
              <AnimatedCounter value={normalizedScore} decimals={1} duration={0.8} />
            </span>
            <span className="text-sm font-semibold text-slate-400 font-sans">/ 10</span>
          </div>

          <div
            className={`mt-1.5 px-3 py-1 rounded-full text-xs font-bold border font-sans tracking-wide shadow-sm ${badgeBg}`}
          >
            {statusText}
          </div>
        </div>
      </div>
    </div>
  );
}
