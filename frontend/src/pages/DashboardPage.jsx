import React from 'react';
import Header from '../components/layout/Header';
import OverviewKPI from '../components/dashboard/OverviewKPI';
import UsageChart from '../components/dashboard/UsageChart';
import PlatformChart from '../components/dashboard/PlatformChart';
import RiskDistribution from '../components/dashboard/RiskDistribution';
import RecentActivity from '../components/dashboard/RecentActivity';
import Button from '../components/common/Button';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export default function DashboardPage() {
  const { history, setActivePage } = useApp();

  return (
    <div>
      <Header
        title="Student Mental Health Analytics"
        description="Comprehensive dataset insights, screen usage correlations, and risk distributions derived from 1,400+ student evaluations."
        actions={
          <Button
            variant="primary"
            onClick={() => setActivePage('predict')}
            icon={Sparkles}
          >
            Start New Assessment
          </Button>
        }
      />

      <OverviewKPI historyCount={history.length} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <UsageChart />
        </div>
        <div>
          <RiskDistribution />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlatformChart />
        <RecentActivity />
      </div>
    </div>
  );
}
