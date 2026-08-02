import React, { useMemo } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  ReferenceLine,
  Dot
} from 'recharts';
import Card from '../common/Card';
import { TrendingUp, ArrowUpRight, ArrowDownRight, ShieldCheck } from 'lucide-react';
import { DASHBOARD_STATS, SAMPLE_HISTORY } from '../../services/sampleData';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const score = data.score;
    let badgeBg = 'rgba(16, 185, 129, 0.15)';
    let badgeColor = '#10B981';
    let badgeBorder = 'rgba(16, 185, 129, 0.3)';

    if (score >= 7.0) {
      badgeBg = 'rgba(239, 68, 68, 0.15)';
      badgeColor = '#EF4444';
      badgeBorder = 'rgba(239, 68, 68, 0.3)';
    } else if (score >= 4.0) {
      badgeBg = 'rgba(245, 158, 11, 0.15)';
      badgeColor = '#F59E0B';
      badgeBorder = 'rgba(245, 158, 11, 0.3)';
    }

    return (
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl shadow-2xl text-slate-100 text-xs sm:text-sm min-w-[210px] space-y-2 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-semibold text-slate-400">{data.formattedDate}</span>
          <span
            className="font-semibold px-2 py-0.5 rounded text-[11px]"
            style={{
              backgroundColor: badgeBg,
              color: badgeColor,
              border: `1px solid ${badgeBorder}`
            }}
          >
            {data.risk || (score >= 7 ? 'High Risk' : score >= 4 ? 'Moderate' : 'Low Risk')}
          </span>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Stress Score:</span>
            <span className="font-bold text-white text-sm">{score.toFixed(1)} / 10</span>
          </div>
          {data.Most_Used_Platform && (
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Platform:</span>
              <span className="font-medium text-slate-200">{data.Most_Used_Platform}</span>
            </div>
          )}
          {data.Avg_Daily_Usage_Hours !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Screen Time:</span>
              <span className="font-medium text-slate-200">{data.Avg_Daily_Usage_Hours} hrs/day</span>
            </div>
          )}
          {data.Sleep_Hours_Per_Night !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Sleep:</span>
              <span className="font-medium text-slate-200">{data.Sleep_Hours_Per_Night} hrs/night</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default function ScoreTrendChart({ history = [] }) {
  // Construct baseline timeline data from history context + fallback samples
  const chartData = useMemo(() => {
    const rawItems = history && history.length > 0 ? history : SAMPLE_HISTORY;
    
    // Sort chronologically ascending
    const sorted = [...rawItems].sort((a, b) => new Date(a.date) - new Date(b.date));

    return sorted.map((item, idx) => {
      const dateObj = new Date(item.date);
      const formattedDate = dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      return {
        ...item,
        label: `Assessment ${idx + 1}`,
        formattedDate,
        score: Number(item.score)
      };
    });
  }, [history]);

  const latestScore = chartData.length > 0 ? chartData[chartData.length - 1].score : 6.4;
  const previousScore = chartData.length > 1 ? chartData[chartData.length - 2].score : 6.8;
  const diff = (latestScore - previousScore).toFixed(1);
  const isImproving = latestScore <= previousScore;

  return (
    <Card
      title="Mental Health Score History & Trend"
      subtitle="Historical trajectory of student stress evaluations across consecutive assessments."
      icon={TrendingUp}
      glowColor="blue"
      action={
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs bg-slate-800/90 border border-slate-700/80 px-3 py-1.5 rounded-xl text-slate-200 font-sans">
            <span className="text-slate-400">Latest:</span>
            <span className="font-bold text-white">{latestScore.toFixed(1)}</span>
            {isImproving ? (
              <span className="flex items-center text-emerald-400 font-semibold gap-0.5">
                <ArrowDownRight className="w-3.5 h-3.5" /> {Math.abs(diff)}
              </span>
            ) : (
              <span className="flex items-center text-rose-400 font-semibold gap-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" /> +{diff}
              </span>
            )}
          </div>
        </div>
      }
    >
      <div 
        className="h-72 w-full pt-3 overflow-visible relative focus:outline-none focus:ring-1 focus:ring-slate-700 rounded-xl"
        tabIndex={0}
        role="region"
        aria-label="Mental Health Score History trend area chart"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 15, right: 25, left: -15, bottom: 5 }}>
            <defs>
              <linearGradient id="scoreTrendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
            <XAxis 
              dataKey="formattedDate" 
              stroke="#475569" 
              tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 500 }}
              tickLine={false} 
              axisLine={{ stroke: '#475569' }}
            />
            <YAxis 
              domain={[0, 10]} 
              stroke="#475569" 
              tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 500 }}
              tickLine={false}
              axisLine={{ stroke: '#475569' }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#64748b', strokeWidth: 1, strokeDasharray: '4 4' }}
              wrapperStyle={{ zIndex: 1000, outline: 'none' }}
              allowEscapeViewBox={{ x: true, y: true }}
            />
            <ReferenceLine 
              y={7.0} 
              stroke="#ef4444" 
              strokeDasharray="4 4" 
              label={{ 
                value: 'High Risk (7.0)', 
                fill: '#ef4444', 
                fontSize: 11, 
                position: 'insideTopRight',
                fontWeight: 600
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#scoreTrendGradient)"
              dot={{ r: 5, fill: '#3b82f6', stroke: '#0f172a', strokeWidth: 2 }}
              activeDot={{ r: 7, fill: '#60a5fa', stroke: '#ffffff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
