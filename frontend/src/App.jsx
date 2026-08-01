import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import PredictorPage from './pages/PredictorPage';
import HistoryPage from './pages/HistoryPage';
import ResourcesPage from './pages/ResourcesPage';
import SettingsPage from './pages/SettingsPage';

function AppContent() {
  const { activePage } = useApp();

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'predict':
        return <PredictorPage />;
      case 'history':
        return <HistoryPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
