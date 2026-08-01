import React from 'react';
import Card from '../common/Card';
import { Lightbulb, CheckCircle, ShieldAlert } from 'lucide-react';
import { getRiskAssessment } from '../../services/sampleData';

export default function Recommendations({ score }) {
  const risk = getRiskAssessment(score);

  return (
    <Card
      title="Personalized Wellness Action Plan"
      subtitle="Tailored evidence-based recommendations based on your calculated score."
      icon={Lightbulb}
    >
      <div className="space-y-3">
        {risk.recommendations.map((rec, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40"
          >
            <div className="p-1 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
              <CheckCircle className="w-4 h-4" />
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">{rec}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
