import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Card from '../common/Card';
import { PieChart as PieIcon } from 'lucide-react';
import { DASHBOARD_STATS } from '../../services/sampleData';

export default function RiskDistribution() {
  return (
    <Card
      title="Stress Risk Distribution"
      subtitle="Proportion of surveyed students across stress level categories."
      icon={PieIcon}
    >
      <div className="h-64 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DASHBOARD_STATS.stressDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={4}
              dataKey="count"
              nameKey="level"
            >
              {DASHBOARD_STATS.stressDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="#0f172a" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                borderRadius: '0.75rem',
                color: '#f8fafc',
                fontSize: '12px'
              }}
              formatter={(val, name) => [`${val} Students`, name]}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ fontSize: '11px', color: '#94a3b8' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
