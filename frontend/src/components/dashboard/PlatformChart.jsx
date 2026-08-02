import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell,
  LabelList
} from 'recharts';
import Card from '../common/Card';
import { Smartphone } from 'lucide-react';
import { DASHBOARD_STATS } from '../../services/sampleData';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const score = data.avgScore;
    let stressLevel = 'Low';
    let badgeBg = 'rgba(16, 185, 129, 0.15)';
    let badgeColor = '#10B981';
    let badgeBorder = 'rgba(16, 185, 129, 0.3)';

    if (score >= 7.0) {
      stressLevel = 'High';
      badgeBg = 'rgba(239, 68, 68, 0.15)';
      badgeColor = '#EF4444';
      badgeBorder = 'rgba(239, 68, 68, 0.3)';
    } else if (score >= 4.0) {
      stressLevel = 'Moderate';
      badgeBg = 'rgba(245, 158, 11, 0.15)';
      badgeColor = '#F59E0B';
      badgeBorder = 'rgba(245, 158, 11, 0.3)';
    }

    const students = data.students || data.users || 'N/A';
    const avgUsage = data.avgUsage !== undefined ? data.avgUsage : (data.usageHours || 'N/A');

    return (
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl shadow-2xl text-slate-100 text-xs sm:text-sm min-w-[220px] space-y-2.5 font-sans transition-all duration-200 pointer-events-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-medium text-slate-400">Platform:</span>
          <span className="font-bold text-white text-sm tracking-wide">{data.platform}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center gap-4">
            <span className="text-slate-400">Average Stress Score:</span>
            <span className="font-semibold text-white">{typeof score === 'number' ? score.toFixed(1) : score} / 10</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-slate-400">Students:</span>
            <span className="font-medium text-slate-200">{students}</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-slate-400">Average Usage:</span>
            <span className="font-medium text-slate-200">{avgUsage} hrs/day</span>
          </div>
          <div className="flex justify-between items-center gap-4 pt-1.5 border-t border-slate-800/80">
            <span className="text-slate-400">Stress Level:</span>
            <span
              className="font-semibold px-2.5 py-0.5 rounded-md text-xs tracking-wide"
              style={{
                backgroundColor: badgeBg,
                color: badgeColor,
                border: `1px solid ${badgeBorder}`
              }}
            >
              {stressLevel}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function PlatformChart({ data = DASHBOARD_STATS.platformImpact }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const getBarColor = (score) => {
    if (score >= 7.0) return '#EF4444'; // High Stress
    if (score >= 4.0) return '#F59E0B'; // Moderate
    return '#10B981'; // Low
  };

  return (
    <Card
      title="Platform Impact Breakdown"
      subtitle="Average mental stress index by student's primary social media platform."
      icon={Smartphone}
      action={
        <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" /> High (&ge;7)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" /> Moderate (4-7)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" /> Low (&lt;4)
          </span>
        </div>
      }
    >
      <div 
        className="h-80 w-full pt-2 overflow-visible relative focus:outline-none focus:ring-1 focus:ring-slate-700 rounded-xl"
        tabIndex={0}
        role="region"
        aria-label="Platform Impact Breakdown bar chart displaying average mental stress score, student count, and daily usage by platform"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            layout="vertical" 
            margin={{ top: 15, right: 50, left: 15, bottom: 15 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#334155" 
              opacity={0.4} 
              horizontal={false} 
            />
            <XAxis 
              type="number" 
              stroke="#475569" 
              domain={[0, 10]} 
              ticks={[0, 2, 4, 6, 8, 10]}
              tick={{ fill: '#cbd5e1', fontSize: 13, fontWeight: 500 }}
              tickLine={{ stroke: '#475569' }}
              axisLine={{ stroke: '#475569' }}
            />
            <YAxis 
              dataKey="platform" 
              type="category" 
              stroke="#475569" 
              tick={{ fill: '#f1f5f9', fontSize: 13, fontWeight: 600 }}
              tickLine={false} 
              axisLine={{ stroke: '#475569' }}
              width={90}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255, 255, 255, 0.04)' }}
              wrapperStyle={{ zIndex: 1000, outline: 'none' }}
              allowEscapeViewBox={{ x: true, y: true }}
            />
            <Bar 
              dataKey="avgScore" 
              radius={[0, 6, 6, 0]}
              animationDuration={800}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getBarColor(entry.avgScore)}
                  style={{
                    filter: activeIndex === index ? 'brightness(1.25)' : 'brightness(1)',
                    transition: 'filter 200ms ease-in-out',
                    cursor: 'pointer'
                  }}
                />
              ))}
              <LabelList
                dataKey="avgScore"
                position="right"
                fill="#f8fafc"
                fontSize={13}
                fontWeight={600}
                offset={10}
                formatter={(val) => (typeof val === 'number' ? val.toFixed(1) : val)}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
