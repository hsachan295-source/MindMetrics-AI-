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

export default function UsageChart() {
  return (
    <Card
      title="Daily Usage vs Mental Health & Sleep Impact"
      subtitle="Correlation dataset of daily social media screen hours against stress scores & sleep quality."
      icon={TrendingUp}
    >
      <div className="h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={DASHBOARD_STATS.usageVsScore} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
            <XAxis dataKey="hours" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 10]} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                borderRadius: '0.75rem',
                color: '#f8fafc',
                fontSize: '12px'
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
            <Bar dataKey="avgScore" name="Mental Stress Score (1-10)" fill="#369eff" radius={[6, 6, 0, 0]} />
            <Line type="monotone" dataKey="sleep" name="Avg Sleep Hours" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="study" name="Avg Study Hours" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
