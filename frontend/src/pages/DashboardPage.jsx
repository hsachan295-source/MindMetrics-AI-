import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import OverviewKPI from '../components/dashboard/OverviewKPI';
import UsageChart from '../components/dashboard/UsageChart';
import PlatformChart from '../components/dashboard/PlatformChart';
import RiskDistribution from '../components/dashboard/RiskDistribution';
import RecentActivity from '../components/dashboard/RecentActivity';
import ScoreTrendChart from '../components/dashboard/ScoreTrendChart';
import DashboardSkeleton from '../components/dashboard/DashboardSkeleton';
import Button from '../components/common/Button';
import { useApp } from '../context/AppContext';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function DashboardPage() {
  const { history, setActivePage } = useApp();
  const [isDataLoading, setIsDataLoading] = useState(true);

  // Simulate initial data fetching & skeleton loading transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDataLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsDataLoading(true);
    setTimeout(() => setIsDataLoading(false), 500);
  };

  if (isDataLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="dashboard-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="space-y-6"
      >
        <Header
          title="Student Mental Health Analytics"
          description="Comprehensive dataset insights, screen usage correlations, and risk distributions derived from 1,400+ student evaluations."
          actions={
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                icon={RefreshCw}
                title="Refresh analytics data"
              >
                Refresh
              </Button>
              <Button
                variant="primary"
                onClick={() => setActivePage('predict')}
                icon={Sparkles}
              >
                Start New Assessment
              </Button>
            </div>
          }
        />

        <OverviewKPI historyCount={history.length} />

        {/* Row 1: Student Score History Trend + Risk Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ScoreTrendChart history={history} />
          </div>
          <div>
            <RiskDistribution />
          </div>
        </div>

        {/* Row 2: Daily Screen Usage Correlation + Platform Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UsageChart />
          </div>
          <div>
            <PlatformChart />
          </div>
        </div>

        {/* Row 3: Recent Activity Log */}
        <RecentActivity />
      </motion.div>
    </AnimatePresence>
  );
}
