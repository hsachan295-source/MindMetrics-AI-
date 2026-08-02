import React from 'react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  Legend 
} from 'recharts';
import Card from '../common/Card';
import { TrendingUp } from 'lucide-react';
import { DASHBOARD_STATS } from '../../services/sampleData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl shadow-2xl text-slate-100 text-xs sm:text-sm min-w-[200px] space-y-2 font-sans">
        <div className="font-bold text-white border-b border-slate-800 pb-1.5 flex justify-between items-center">
          <span>Daily Screen Time:</span>
          <span className="text-blue-400">{label}</span>
        </div>
        <div className="space-y-1.5 pt-1">
          {payload.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.name}:</span>
              </span>
              <span className="font-semibold text-white">
                {item.value} {item.dataKey === 'avgScore' ? '/ 10' : 'hrs'}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function UsageChart() {
  return (
    <Card
      title="Daily Usage vs Mental Health & Sleep Impact"
      subtitle="Correlation dataset of daily social media screen hours against stress scores & sleep quality."
      icon={TrendingUp}
      glowColor="blue"
    >
      <div 
        className="h-80 w-full pt-2 overflow-visible relative focus:outline-none focus:ring-1 focus:ring-slate-700 rounded-xl"
        tabIndex={0}
        role="region"
        aria-label="Daily usage vs mental health and sleep impact chart"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={DASHBOARD_STATS.usageVsScore} margin={{ top: 15, right: 15, left: -15, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
            <XAxis 
              dataKey="hours" 
              stroke="#475569" 
              tick={{ fill: '#cbd5e1', fontSize: 13, fontWeight: 500 }} 
              tickLine={false} 
              axisLine={{ stroke: '#475569' }}
            />
            <YAxis 
              stroke="#475569" 
              tick={{ fill: '#cbd5e1', fontSize: 13, fontWeight: 500 }} 
              domain={[0, 10]} 
              tickLine={false} 
              axisLine={{ stroke: '#475569' }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255, 255, 255, 0.04)' }}
              wrapperStyle={{ zIndex: 1000, outline: 'none' }}
              allowEscapeViewBox={{ x: true, y: true }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '12px', fontSize: '12px', color: '#cbd5e1' }} 
            />
            <Bar 
              dataKey="avgScore" 
              name="Mental Stress Score (1-10)" 
              fill="#3b82f6" 
              radius={[6, 6, 0, 0]} 
              animationDuration={800}
            />
            <Line 
              type="monotone" 
              dataKey="sleep" 
              name="Avg Sleep Hours" 
              stroke="#10b981" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#10b981', stroke: '#0f172a', strokeWidth: 2 }} 
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="study" 
              name="Avg Study Hours" 
              stroke="#f59e0b" 
              strokeWidth={2.5} 
              dot={{ r: 4, fill: '#f59e0b', stroke: '#0f172a', strokeWidth: 2 }} 
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
