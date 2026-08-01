import React, { useState } from 'react';
import Header from '../components/layout/Header';
import PredictionForm from '../components/form/PredictionForm';
import PredictionResultCard from '../components/results/PredictionResultCard';
import { useApp } from '../context/AppContext';

export default function PredictorPage() {
  const { activePrediction, setActivePrediction } = useApp();

  return (
    <div>
      <Header
        title={activePrediction ? "Evaluation Report & Results" : "Mental Health & Screen Assessment"}
        description={
          activePrediction
            ? "Review score analysis, contributing risk factors, and recommended action plan."
            : "Input student screen habits, academic load, and lifestyle variables to calculate mental health score."
        }
        showBack={!!activePrediction}
      />

      {activePrediction ? (
        <PredictionResultCard
          prediction={activePrediction}
          onNewAssessment={() => setActivePrediction(null)}
        />
      ) : (
        <PredictionForm onSuccess={(res) => setActivePrediction(res)} />
      )}
    </div>
  );
}
