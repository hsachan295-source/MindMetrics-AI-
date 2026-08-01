import React from 'react';
import Header from '../components/layout/Header';
import PredictionTable from '../components/history/PredictionTable';

export default function HistoryPage() {
  return (
    <div>
      <Header
        title="Prediction Logs & Records"
        description="Comprehensive table of all previously evaluated student assessments, filterable by demographics and platforms."
      />
      <PredictionTable />
    </div>
  );
}
