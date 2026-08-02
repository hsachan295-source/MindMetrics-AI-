import React, { useState } from 'react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ScoreGauge from './ScoreGauge';
import StressBreakdown from './StressBreakdown';
import Recommendations from './Recommendations';
import AIInsightSummary from './AIInsightSummary';
import FeatureImportance from './FeatureImportance';
import { getRiskAssessment } from '../../services/sampleData';
import { exportAssessmentPDF } from '../../utils/exportPdf';
import { 
  RotateCcw, 
  Share2, 
  Server, 
  Cpu, 
  Clock, 
  Calendar,
  Download,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PredictionResultCard({ prediction, onNewAssessment }) {
  const { showToast } = useApp();
  const [isExporting, setIsExporting] = useState(false);

  if (!prediction) return null;

  const risk = getRiskAssessment(prediction.score);

  let glowClass = 'glow-emerald';
  if (prediction.score >= 8.0) glowClass = 'glow-purple';
  else if (prediction.score >= 6.5) glowClass = 'glow-red';
  else if (prediction.score >= 4.0) glowClass = 'glow-amber';

  const handleExportPDF = async () => {
    setIsExporting(true);
    showToast('Generating high-resolution evaluation report PDF...', 'info');
    try {
      await exportAssessmentPDF('pdf-export-container', `MindMetrics_Report_${prediction.id}.pdf`);
      showToast('PDF Evaluation Report downloaded successfully!', 'success');
    } catch (err) {
      showToast(`PDF Export failed: ${err.message}`, 'error');
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Mental Health Assessment Score: ${prediction.score}/10 (${risk.level}). Assessed via MindMetrics AI.`
      );
      showToast('Score summary copied to clipboard!', 'success');
    }
  };

  return (
    <div id="pdf-export-container" className="space-y-6 p-2 rounded-2xl">
      {/* Hero Visual Section: Dominated by Hero Score Gauge */}
      <div className={`glass-card rounded-[12px] p-6 md:p-8 border ${glowClass} relative overflow-hidden transition-all duration-300`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 flex-wrap">
              <Badge variant={risk.badgeColor} size="md">
                {risk.level}
              </Badge>
              {prediction.isLiveBackend ? (
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50 font-sans">
                  <Server className="w-3.5 h-3.5" /> FastAPI Live Backend
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/50 font-sans">
                  <Cpu className="w-3.5 h-3.5" /> Simulated ML Engine
                </span>
              )}
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Mental Stress Index
              </h1>
              <p className="text-sm md:text-base text-slate-300 mt-2.5 max-w-2xl font-sans leading-relaxed">
                {risk.summary}
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 font-sans pt-2 border-t border-slate-800/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-400" />
                {new Date(prediction.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                {new Date(prediction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span>•</span>
              <span className="font-mono text-slate-300">ID: {prediction.id}</span>
            </div>
          </div>

          {/* Large Hero Score Gauge */}
          <div className="shrink-0">
            <ScoreGauge score={prediction.score} />
          </div>
        </div>
      </div>

      {/* AI Plain-Language Insight Summary */}
      <AIInsightSummary prediction={prediction} />

      {/* Radar Breakdown & Model Explainability (Feature Importance) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StressBreakdown data={prediction} />
        <FeatureImportance prediction={prediction} />
      </div>

      {/* Recommendations Action Plan */}
      <Recommendations score={prediction.score} />

      {/* Action Buttons Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <Button
          variant="secondary"
          onClick={onNewAssessment}
          icon={RotateCcw}
        >
          Evaluate Another Student
        </Button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            onClick={handleShare}
            icon={Share2}
            className="flex-1 sm:flex-initial"
          >
            Share Summary
          </Button>

          <Button
            variant="primary"
            onClick={handleExportPDF}
            isLoading={isExporting}
            icon={Download}
            className="flex-1 sm:flex-initial"
          >
            Export PDF Report
          </Button>
        </div>
      </div>
    </div>
  );
}
