import React from 'react';
import Select from '../common/Select';
import Input from '../common/Input';
import RangeSlider from '../common/RangeSlider';
import { OPTIONS } from '../../services/sampleData';
import { Smartphone, Target, Unlock, Clock } from 'lucide-react';

export default function UsageFields({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <Smartphone className="w-3.5 h-3.5" />
        <span>2. Social Media & Screen Usage</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Primary Social Media Platform"
          id="Most_Used_Platform"
          value={formData.Most_Used_Platform}
          onChange={(e) => onChange('Most_Used_Platform', e.target.value)}
          options={OPTIONS.platforms}
          icon={Smartphone}
          required
        />

        <Select
          label="Primary Purpose of Use"
          id="Purpose_Of_Use"
          value={formData.Purpose_Of_Use}
          onChange={(e) => onChange('Purpose_Of_Use', e.target.value)}
          options={OPTIONS.purposes}
          icon={Target}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <RangeSlider
          label="Avg Daily Screen Time (Hours)"
          id="Avg_Daily_Usage_Hours"
          min={0}
          max={24}
          step={0.5}
          value={formData.Avg_Daily_Usage_Hours}
          onChange={(e) => onChange('Avg_Daily_Usage_Hours', parseFloat(e.target.value))}
          icon={Clock}
        />

        <Input
          label="Daily Phone Unlocks Count"
          id="Daily_Unlocks"
          type="number"
          min={0}
          max={500}
          value={formData.Daily_Unlocks}
          onChange={(e) => onChange('Daily_Unlocks', parseInt(e.target.value) || 0)}
          icon={Unlock}
          required
        />
      </div>
    </div>
  );
}
