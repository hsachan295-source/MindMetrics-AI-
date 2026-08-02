import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar,
  PolarRadiusAxis
} from 'recharts';
import Card from '../common/Card';
import { Activity } from 'lucide-react';

export default function StressBreakdown({ data }) {
  if (!data) return null;

  // Compute normalized impact factor ratings (0 - 100)
  const screenImpact = Math.min(100, Math.round((Number(data.Avg_Daily_Usage_Hours || 5) / 8) * 100));
  const unlockImpact = Math.min(100, Math.round((Number(data.Daily_Unlocks || 80) / 120) * 100));
  const sleepDeficit = Math.min(100, Math.round((Math.max(0, 8 - Number(data.Sleep_Hours_Per_Night || 6)) / 5) * 100));
  const exerciseProtection = Math.min(100, Math.round((Number(data.Physical_Activity_Hours || 1) / 3) * 100));
  const studyIntensity = Math.min(100, Math.round((Number(data.Study_Hours || 4) / 10) * 100));

  const radarData = [
    { subject: 'Screen Load', value: screenImpact },
    { subject: 'Unlock Frequency', value: unlockImpact },
    { subject: 'Sleep Deficit', value: sleepDeficit },
    { subject: 'Physical Activity', value: exerciseProtection },
    { subject: 'Study Strain', value: studyIntensity },
  ];

  return (
    <Card
      title="Contributing Factor Radar"
      subtitle="Multidimensional breakdown of lifestyle & screen usage risk factors."
      icon={Activity}
      glowColor="blue"
    >
      <div 
        className="h-72 w-full flex items-center justify-center pt-2 overflow-visible relative focus:outline-none"
        tabIndex={0}
        role="region"
        aria-label="Contributing factor radar chart"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="72%">
            <defs>
              <linearGradient id="radarFillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.15} />
              </linearGradient>
            </defs>
            <PolarGrid stroke="#334155" opacity={0.5} />
            <PolarAngleAxis 
              dataKey="subject" 
              stroke="#cbd5e1" 
              fontSize={12} 
              tick={{ fill: '#f1f5f9', fontWeight: 600 }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" fontSize={10} />
            <Radar
              name="Impact Rating"
              dataKey="value"
              stroke="#60a5fa"
              strokeWidth={2.5}
              fill="url(#radarFillGradient)"
              fillOpacity={0.8}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
