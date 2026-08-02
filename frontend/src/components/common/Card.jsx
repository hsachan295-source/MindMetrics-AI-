import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  title,
  subtitle,
  action,
  icon: Icon,
  gradientHeader = false,
  glowColor = null, // 'red' | 'amber' | 'emerald' | 'purple' | 'blue'
  animate = true,
  ...props
}) {
  const glowClasses = {
    red: 'glow-red',
    rose: 'glow-red',
    amber: 'glow-amber',
    orange: 'glow-amber',
    emerald: 'glow-emerald',
    green: 'glow-emerald',
    purple: 'glow-purple',
    blue: 'glow-blue',
  };

  const glowClass = glowColor ? glowClasses[glowColor] || '' : '';

  const Component = animate ? motion.div : 'div';
  const motionProps = animate ? {
    whileHover: { y: -4, transition: { duration: 0.25, ease: 'easeOut' } },
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' }
  } : {};

  return (
    <Component
      className={`glass-card rounded-2xl p-5 md:p-6 ${glowClass} ${className}`}
      {...motionProps}
      {...props}
    >
      {(title || subtitle || Icon || action) && (
        <div className="flex items-center justify-between mb-5 border-b border-slate-800/60 pb-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-blue-400 shadow-inner">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <div>
              {title && (
                <h3 className={`text-lg font-bold font-heading tracking-tight ${gradientHeader ? 'gradient-text' : 'text-slate-100'}`}>
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-xs text-slate-400 mt-0.5 font-sans">{subtitle}</p>
              )}
            </div>
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </Component>
  );
}
