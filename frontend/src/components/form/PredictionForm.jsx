import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import QuickPresets from './QuickPresets';
import DemographicFields from './DemographicFields';
import UsageFields from './UsageFields';
import LifestyleFields from './LifestyleFields';
import { useApp } from '../../context/AppContext';
import { BrainCircuit, RotateCcw, Sparkles } from 'lucide-react';

const DEFAULT_FORM_DATA = {
  Age: 21,
  Gender: 'Female',
  Country: 'USA',
  Academic_Level: 'Undergraduate',
  Most_Used_Platform: 'Instagram',
  Purpose_Of_Use: 'Entertainment',
  Avg_Daily_Usage_Hours: 4.5,
  Daily_Unlocks: 75,
  Study_Hours: 4.0,
  Physical_Activity_Hours: 1.0,
  Sleep_Hours_Per_Night: 7.0,
  Stress_Level: 'Medium',
};

export default function PredictionForm({ onSuccess }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const { handlePredict, isLoading } = useApp();

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectPreset = (presetData) => {
    setFormData(presetData);
  };

  const handleReset = () => {
    setFormData(DEFAULT_FORM_DATA);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await handlePredict(formData);
    if (result && onSuccess) {
      onSuccess(result);
    }
  };

  return (
    <Card
      title="Student Mental Health Assessment"
      subtitle="Fill out the student usage & lifestyle profile to run the FastAPI machine learning model."
      icon={BrainCircuit}
      gradientHeader
    >
      <QuickPresets onSelectPreset={handleSelectPreset} />

      <form onSubmit={handleSubmit} className="space-y-8 pt-4 border-t border-slate-800">
        <DemographicFields formData={formData} onChange={handleFieldChange} />
        <UsageFields formData={formData} onChange={handleFieldChange} />
        <LifestyleFields formData={formData} onChange={handleFieldChange} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={handleReset}
            icon={RotateCcw}
          >
            Reset Form
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            icon={Sparkles}
            className="w-full sm:w-auto"
          >
            Calculate Prediction Score
          </Button>
        </div>
      </form>
    </Card>
  );
}
