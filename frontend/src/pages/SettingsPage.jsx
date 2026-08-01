import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { useApp } from '../context/AppContext';
import { checkBackendHealth } from '../services/api';
import { Server, RefreshCw, CheckCircle2, XCircle, Code } from 'lucide-react';

export default function SettingsPage() {
  const { isBackendLive, showToast } = useApp();
  const [isTesting, setIsTesting] = useState(false);
  const [lastCheckResult, setLastCheckResult] = useState(null);

  const handleTestConnection = async () => {
    setIsTesting(true);
    const result = await checkBackendHealth();
    setIsTesting(false);
    setLastCheckResult(result);
    if (result.isLive) {
      showToast('FastAPI backend connection verified successfully!', 'success');
    } else {
      showToast('FastAPI backend is offline. Using simulated engine.', 'warning');
    }
  };

  return (
    <div>
      <Header
        title="System & API Configuration"
        description="Monitor FastAPI server status, test REST endpoints, and inspect machine learning model metadata."
      />

      <div className="space-y-6">
        {/* Backend Status Card */}
        <Card
          title="FastAPI Machine Learning Server"
          subtitle="Endpoint: http://127.0.0.1:8000/predict"
          icon={Server}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
            <div className="flex items-center gap-3">
              {isBackendLive ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <XCircle className="w-6 h-6" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Backend Server Status</h4>
                  <Badge variant={isBackendLive ? 'emerald' : 'amber'}>
                    {isBackendLive ? 'Online & Ready' : 'Offline / Simulated'}
                  </Badge>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {lastCheckResult ? lastCheckResult.message : 'Monitored automatically every 30 seconds.'}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              isLoading={isTesting}
              onClick={handleTestConnection}
              icon={RefreshCw}
            >
              Test Connection Now
            </Button>
          </div>
        </Card>

        {/* API Endpoint Documentation */}
        <Card
          title="API Endpoint Specification"
          subtitle="FastAPI REST Contract"
          icon={Code}
        >
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                  POST
                </span>
                <span className="text-slate-200">http://127.0.0.1:8000/predict</span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed mb-3">
                Calculates predicted mental health score based on student demographics, daily usage hours, unlock frequency, sleep, study, and stress levels.
              </p>
              <pre className="p-3 rounded-lg bg-slate-950 text-blue-300 text-[11px] overflow-x-auto">
{`{
  "Age": 21,
  "Gender": "Female",
  "Country": "USA",
  "Academic_Level": "Undergraduate",
  "Most_Used_Platform": "Instagram",
  "Purpose_Of_Use": "Entertainment",
  "Avg_Daily_Usage_Hours": 4.5,
  "Daily_Unlocks": 75,
  "Study_Hours": 4.0,
  "Physical_Activity_Hours": 1.0,
  "Sleep_Hours_Per_Night": 7.0,
  "Stress_Level": "Medium"
}`}
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
