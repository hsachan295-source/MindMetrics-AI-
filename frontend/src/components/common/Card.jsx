import React from 'react';

export default function Card({
  children,
  className = '',
  title,
  subtitle,
  action,
  icon: Icon,
  gradientHeader = false,
  ...props
}) {
  return (
    <div
      className={`glass-card rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-slate-700/80 ${className}`}
      {...props}
    >
      {(title || subtitle || Icon || action) && (
        <div className="flex items-center justify-between mb-5 border-b border-slate-800/60 pb-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-blue-400">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <div>
              {title && (
                <h3 className={`text-lg font-semibold tracking-tight ${gradientHeader ? 'gradient-text' : 'text-slate-100'}`}>
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
