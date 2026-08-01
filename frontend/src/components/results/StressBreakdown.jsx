import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar 
} from 'recharts';
import Card from '../common/Card';
import { BarChart3 } from 'lucide-react';

export default function StressBreakdown({ data }) {
  // Compute normalized impact factor ratings (0 - 100)
  const screenImpact = Math.min(100, Math.round((data.Avg_Daily_Usage_Hours / 8) * 100));
  const unlockImpact = Math.min(100, Math.round((data.Daily_Unlocks / 120) * 100));
  const sleepDeficit = Math.min(100, Math.round((Math.max(0, 8 - data.Sleep_Hours_Per_Night) / 5) * 100));
  const exerciseProtection = Math.min(100, Math.round((data.Physical_Activity_Hours / 3) * 100));

  const radarData = [
    { subject: 'Screen Load', value: screenImpact },
    { subject: 'Unlock Frequency', value: unlockImpact },
    { subject: 'Sleep Deficit', value: sleepDeficit },
    { subject: 'Physical Active', value: exerciseProtection },
    { subject: 'Study Intensity', value: Math.min(100, Math.round((data.Study_Hours / 10) * 100)) },
  ];

  return (
    <Card
      title="Contributing Factor Radar"
      subtitle="Multidimensional breakdown of lifestyle & screen usage risk factors."
      icon={BarChart3}
    >
      <div className="h-60 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
            <Radar
              name="Impact Rating"
              dataKey="value"
              stroke="#369eff"
              fill="#369eff"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
