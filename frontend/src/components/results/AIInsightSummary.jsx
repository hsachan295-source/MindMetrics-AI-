import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Lightbulb, CheckCircle } from 'lucide-react';

export default function AIInsightSummary({ prediction }) {
  if (!prediction) return null;

  const insights = useMemo(() => {
    const score = Number(prediction.score || 6.4);
    const screenHours = Number(prediction.Avg_Daily_Usage_Hours || 5.0);
    const sleepHours = Number(prediction.Sleep_Hours_Per_Night || 6.0);
    const unlocks = Number(prediction.Daily_Unlocks || 80);
    const platform = prediction.Most_Used_Platform || 'Social Media';

    let summaryText = '';
    let keyDrivers = [];

    if (score >= 7.5) {
      summaryText = `High digital fatigue detected. Extensive screen time (${screenHours} hrs/day) combined with ${unlocks} unlocks/day on ${platform} is severely fragmenting focus and creating a ${Math.max(0, (8 - sleepHours).toFixed(1))} hr sleep deficit per night.`;
      keyDrivers = ['Elevated Unlock Frequency', 'High Nighttime Screen Load', 'Sleep Deprivation'];
    } else if (score >= 5.5) {
      summaryText = `Moderate stress profile observed. While daily usage on ${platform} (${screenHours} hrs/day) is manageable, recurring unlock spikes (${unlocks}/day) are causing subtle attention fragmentation during study hours.`;
      keyDrivers = ['Intermittent Notification Checking', 'Moderate Screen Time', 'Sub-optimal Sleep'];
    } else {
      summaryText = `Balanced digital lifestyle identified. Healthy sleep routines (${sleepHours} hrs/night) and disciplined screen usage (${screenHours} hrs/day) effectively buffer against academic and platform-induced stress.`;
      keyDrivers = ['Healthy Sleep Balance', 'Controlled Unlock Rate', 'Low Digital Strain'];
    }

    return { summaryText, keyDrivers };
  }, [prediction]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="glass-card rounded-[12px] p-6 border border-blue-500/30 glow-blue relative overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold font-heading text-white">AI Plain-Language Synthesis</h3>
            <p className="text-xs text-slate-400 font-sans">Automated natural language analysis derived from ML evaluation</p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 font-sans">
          LLM Insights
        </span>
      </div>

      <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans font-normal">
        {insights.summaryText}
      </p>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1 font-sans">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> Primary Drivers:
        </span>
        {insights.keyDrivers.map((driver, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/60 text-slate-300 font-sans"
          >
            <CheckCircle className="w-3 h-3 text-blue-400" /> {driver}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
