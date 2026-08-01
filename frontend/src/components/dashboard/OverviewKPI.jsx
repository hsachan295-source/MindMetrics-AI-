import React from 'react';
import { Users, Activity, AlertTriangle, Smartphone, Clock } from 'lucide-react';
import Card from '../common/Card';
import { DASHBOARD_STATS } from '../../services/sampleData';

export default function OverviewKPI({ historyCount }) {
  const kpis = [
    {
      label: 'Total Assessments',
      value: (DASHBOARD_STATS.totalAnalyzed + historyCount).toLocaleString(),
      change: '+12% this month',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      label: 'Avg Mental Health Score',
      value: `${DASHBOARD_STATS.avgScore} / 10`,
      change: 'Moderate range',
      icon: Activity,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      label: 'High Stress Rate',
      value: `${DASHBOARD_STATS.highRiskPercentage}%`,
      change: 'Requires attention',
      icon: AlertTriangle,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10 border-rose-500/20',
    },
    {
      label: 'Top Impact Platform',
      value: DASHBOARD_STATS.topPlatform,
      change: 'Highest usage load',
      icon: Smartphone,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      label: 'Avg Daily Screen Time',
      value: `${DASHBOARD_STATS.avgScreenTimeHours} hrs`,
      change: 'Student average',
      icon: Clock,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10 border-teal-500/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {kpis.map((kpi, idx) => {
        const Icon = kpi.icon;
        return (
          <div
            key={idx}
            className="glass-card rounded-2xl p-4 border border-slate-800 hover:border-slate-700 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-400">{kpi.label}</span>
              <div className={`p-2 rounded-xl border ${kpi.bgColor}`}>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{kpi.value}</div>
            <div className="text-[11px] text-slate-400 mt-1">{kpi.change}</div>
          </div>
        );
      })}
    </div>
  );
}
