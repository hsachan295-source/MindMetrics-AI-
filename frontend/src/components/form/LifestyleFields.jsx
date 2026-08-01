import React from 'react';
import RangeSlider from '../common/RangeSlider';
import Select from '../common/Select';
import { OPTIONS } from '../../services/sampleData';
import { Moon, BookOpen, Activity, AlertCircle } from 'lucide-react';

export default function LifestyleFields({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <Activity className="w-3.5 h-3.5" />
        <span>3. Lifestyle & Academic Habits</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RangeSlider
          label="Sleep Hours Per Night"
          id="Sleep_Hours_Per_Night"
          min={0}
          max={16}
          step={0.5}
          value={formData.Sleep_Hours_Per_Night}
          onChange={(e) => onChange('Sleep_Hours_Per_Night', parseFloat(e.target.value))}
          icon={Moon}
        />

        <RangeSlider
          label="Daily Study Hours"
          id="Study_Hours"
          min={0}
          max={18}
          step={0.5}
          value={formData.Study_Hours}
          onChange={(e) => onChange('Study_Hours', parseFloat(e.target.value))}
          icon={BookOpen}
        />

        <RangeSlider
          label="Physical Exercise (Hours/Day)"
          id="Physical_Activity_Hours"
          min={0}
          max={10}
          step={0.5}
          value={formData.Physical_Activity_Hours}
          onChange={(e) => onChange('Physical_Activity_Hours', parseFloat(e.target.value))}
          icon={Activity}
        />
      </div>

      <div className="pt-2">
        <Select
          label="Self-Perceived Stress Level"
          id="Stress_Level"
          value={formData.Stress_Level}
          onChange={(e) => onChange('Stress_Level', e.target.value)}
          options={OPTIONS.stressLevels}
          icon={AlertCircle}
          required
        />
      </div>
    </div>
  );
}
