import React from 'react';
import { motion } from 'framer-motion';
import { Users, Activity, AlertTriangle, Smartphone, Clock } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';
import { DASHBOARD_STATS } from '../../services/sampleData';

export default function OverviewKPI({ historyCount = 0 }) {
  const totalAnalyzed = DASHBOARD_STATS.totalAnalyzed + historyCount;

  const kpis = [
    {
      label: 'Total Assessments',
      numericValue: totalAnalyzed,
      prefix: '',
      suffix: '',
      decimals: 0,
      change: '+12% this month',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
      glow: 'glow-blue',
    },
    {
      label: 'Avg Mental Health Score',
      numericValue: DASHBOARD_STATS.avgScore,
      prefix: '',
      suffix: ' / 10',
      decimals: 2,
      change: 'Moderate range',
      icon: Activity,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
      glow: 'glow-amber',
    },
    {
      label: 'High Stress Rate',
      numericValue: DASHBOARD_STATS.highRiskPercentage,
      prefix: '',
      suffix: '%',
      decimals: 1,
      change: 'Requires attention',
      icon: AlertTriangle,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10 border-rose-500/20',
      glow: 'glow-red',
    },
    {
      label: 'Top Impact Platform',
      textValue: DASHBOARD_STATS.topPlatform,
      change: 'Highest usage load',
      icon: Smartphone,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
      glow: 'glow-purple',
    },
    {
      label: 'Avg Daily Screen Time',
      numericValue: DASHBOARD_STATS.avgScreenTimeHours,
      prefix: '',
      suffix: ' hrs',
      decimals: 1,
      change: 'Student average',
      icon: Clock,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20',
      glow: 'glow-emerald',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8"
    >
      {kpis.map((kpi, idx) => {
        const Icon = kpi.icon;
        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            className={`glass-card rounded-2xl p-4 md:p-5 border ${kpi.glow} transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">{kpi.label}</span>
              <div className={`p-2 rounded-xl border ${kpi.bgColor} shadow-inner`}>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
            </div>
            
            <div className="text-2xl md:text-3xl font-extrabold font-heading text-white tracking-tight">
              {kpi.textValue ? (
                <span>{kpi.textValue}</span>
              ) : (
                <AnimatedCounter 
                  value={kpi.numericValue} 
                  decimals={kpi.decimals}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  duration={1.4}
                />
              )}
            </div>
            <div className="text-[11px] font-medium text-slate-400 mt-1.5 flex items-center gap-1">
              {kpi.change}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
