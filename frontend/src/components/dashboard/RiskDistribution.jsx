import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import Card from '../common/Card';
import { PieChart as PieIcon } from 'lucide-react';
import { DASHBOARD_STATS } from '../../services/sampleData';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-3.5 rounded-xl shadow-2xl text-slate-100 text-xs min-w-[170px] space-y-1.5 font-sans">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.color }} />
          <span className="font-bold text-white text-xs">{data.level}</span>
        </div>
        <div className="flex justify-between items-center text-slate-300 pt-0.5">
          <span>Students:</span>
          <span className="font-semibold text-white">{data.count}</span>
        </div>
        <div className="flex justify-between items-center text-slate-300">
          <span>Share:</span>
          <span className="font-semibold text-slate-200">{data.percentage}</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function RiskDistribution() {
  return (
    <Card
      title="Stress Risk Distribution"
      subtitle="Proportion of surveyed students across stress level categories."
      icon={PieIcon}
      glowColor="amber"
    >
      <div className="h-72 w-full flex flex-col items-center justify-center relative">
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={DASHBOARD_STATS.stressDistribution}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
              dataKey="count"
              nameKey="level"
              animationDuration={1000}
            >
              {DASHBOARD_STATS.stressDistribution.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke="#0f172a" 
                  strokeWidth={2}
                  style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.3))' }}
                />
              ))}
            </Pie>
            <Tooltip 
              content={<CustomTooltip />} 
              wrapperStyle={{ zIndex: 1000, outline: 'none' }}
              allowEscapeViewBox={{ x: true, y: true }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Legend Pills */}
        <div className="grid grid-cols-2 gap-2 w-full pt-1 border-t border-slate-800/80">
          {DASHBOARD_STATS.stressDistribution.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800/60">
              <span className="flex items-center gap-1.5 text-slate-300 truncate">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="truncate">{item.level}</span>
              </span>
              <span className="font-semibold text-slate-200 ml-1">{item.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
