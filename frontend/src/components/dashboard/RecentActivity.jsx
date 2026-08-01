import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { History, ArrowRight, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getRiskAssessment } from '../../services/sampleData';

export default function RecentActivity() {
  const { history, setActivePage, setActivePrediction } = useApp();
  const recentItems = history.slice(0, 5);

  return (
    <Card
      title="Recent Assessments"
      subtitle="Latest student mental health score evaluations."
      icon={History}
      action={
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActivePage('history')}
          className="text-xs text-blue-400"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      }
    >
      {recentItems.length === 0 ? (
        <div className="text-center py-8 text-slate-500 text-xs">
          No assessment history yet. Click "New Assessment" to start!
        </div>
      ) : (
        <div className="space-y-3">
          {recentItems.map((item) => {
            const risk = getRiskAssessment(item.score);
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActivePrediction(item);
                  setActivePage('predict');
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:bg-slate-800/80 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {item.Age} y/o {item.Gender} ({item.Academic_Level})
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {item.Most_Used_Platform} • {item.Avg_Daily_Usage_Hours}h/day
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">{item.score} / 10</div>
                    <div className="text-[10px] text-slate-400">Score</div>
                  </div>
                  <Badge variant={risk.badgeColor}>{risk.level}</Badge>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
