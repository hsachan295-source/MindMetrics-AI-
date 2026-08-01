import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell 
} from 'recharts';
import Card from '../common/Card';
import { Smartphone } from 'lucide-react';
import { DASHBOARD_STATS } from '../../services/sampleData';

export default function PlatformChart() {
  const getBarColor = (score) => {
    if (score >= 7.0) return '#ef4444'; // high
    if (score >= 6.0) return '#f59e0b'; // medium
    return '#10b981'; // low
  };

  return (
    <Card
      title="Platform Impact Breakdown"
      subtitle="Average mental stress index by student's primary social media platform."
      icon={Smartphone}
    >
      <div className="h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DASHBOARD_STATS.platformImpact} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} horizontal={false} />
            <XAxis type="number" stroke="#94a3b8" fontSize={12} domain={[0, 10]} tickLine={false} />
            <YAxis dataKey="platform" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} width={80} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                borderRadius: '0.75rem',
                color: '#f8fafc',
                fontSize: '12px'
              }}
              formatter={(val) => [`${val} / 10`, 'Stress Index']}
            />
            <Bar dataKey="avgScore" radius={[0, 6, 6, 0]}>
              {DASHBOARD_STATS.platformImpact.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.avgScore)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
