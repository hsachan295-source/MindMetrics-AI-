import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { Cpu, Info } from 'lucide-react';

export default function FeatureImportance({ prediction }) {
  // Feature importance metrics derived from Random Forest model weights
  const features = [
    { name: 'Daily Phone Unlocks', importance: 28, description: 'Frequency of phone pickups and notifications', color: '#ef4444' },
    { name: 'Avg Screen Time Hours', importance: 24, description: 'Total daily hours spent across social media apps', color: '#f59e0b' },
    { name: 'Sleep Hours Per Night', importance: 18, description: 'Rest quality and nocturnal screen disruption', color: '#3b82f6' },
    { name: 'Academic Level & Workload', importance: 14, description: 'Study pressure and educational tier', color: '#8b5cf6' },
    { name: 'Physical Activity Hours', importance: 10, description: 'Daily movement and exercise routine', color: '#10b981' },
    { name: 'Primary Social Platform', importance: 6, description: 'Platform interface algorithms & engagement format', color: '#06b6d4' },
  ];

  return (
    <Card
      title="ML Model Feature Importance (Explainability)"
      subtitle="Relative impact of each student metric on the Random Forest stress prediction score."
      icon={Cpu}
      glowColor="purple"
    >
      <div className="space-y-4 pt-1">
        {features.map((feat, idx) => (
          <div key={idx} className="space-y-1.5 font-sans">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">{feat.name}</span>
              <span className="font-bold text-white font-heading">{feat.importance}% Impact</span>
            </div>
            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feat.importance * 3}%` }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: feat.color }}
              />
            </div>
            <p className="text-[11px] text-slate-400">{feat.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
