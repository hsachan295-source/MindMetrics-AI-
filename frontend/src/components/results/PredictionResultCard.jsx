import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ScoreGauge from './ScoreGauge';
import StressBreakdown from './StressBreakdown';
import Recommendations from './Recommendations';
import { getRiskAssessment } from '../../services/sampleData';
import { 
  Sparkles, 
  RotateCcw, 
  Share2, 
  Server, 
  Cpu, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PredictionResultCard({ prediction, onNewAssessment }) {
  const { showToast } = useApp();
  if (!prediction) return null;

  const risk = getRiskAssessment(prediction.score);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Mental Health Assessment Score: ${prediction.score}/10 (${risk.level}). Assessed via MindMetrics AI.`
      );
      showToast('Score summary copied to clipboard!', 'success');
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner Card */}
      <div className={`glass-card rounded-2xl p-6 border ${risk.bgClass}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={risk.badgeColor} size="md">
                {risk.level}
              </Badge>
              {prediction.isLiveBackend ? (
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  <Server className="w-3 h-3" /> FastAPI Live
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[11px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/50">
                  <Cpu className="w-3 h-3" /> Simulated Engine
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Score: {prediction.score} <span className="text-sm font-normal text-slate-400">/ 10</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-2 max-w-xl">
              {risk.summary}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 mt-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(prediction.date).toLocaleDateString()}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {new Date(prediction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          <ScoreGauge score={prediction.score} />
        </div>
      </div>

      {/* Grid: Radar Breakdown & Action Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StressBreakdown data={prediction} />
        <Recommendations score={prediction.score} />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <Button
          variant="secondary"
          onClick={onNewAssessment}
          icon={RotateCcw}
        >
          Evaluate Another Student
        </Button>

        <Button
          variant="outline"
          onClick={handleShare}
          icon={Share2}
        >
          Share Score Report
        </Button>
      </div>
    </div>
  );
}
