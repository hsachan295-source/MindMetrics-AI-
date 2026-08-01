import React from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import { OPTIONS } from '../../services/sampleData';
import { User, Globe, GraduationCap } from 'lucide-react';

export default function DemographicFields({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <User className="w-3.5 h-3.5" />
        <span>1. Demographic Background</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Age (Years)"
          id="Age"
          type="number"
          min={10}
          max={100}
          value={formData.Age}
          onChange={(e) => onChange('Age', parseInt(e.target.value) || 18)}
          required
          icon={User}
        />

        <Select
          label="Gender"
          id="Gender"
          value={formData.Gender}
          onChange={(e) => onChange('Gender', e.target.value)}
          options={OPTIONS.genders}
          required
        />

        <Select
          label="Academic Level"
          id="Academic_Level"
          value={formData.Academic_Level}
          onChange={(e) => onChange('Academic_Level', e.target.value)}
          options={OPTIONS.academicLevels}
          icon={GraduationCap}
          required
        />

        <Select
          label="Country"
          id="Country"
          value={formData.Country}
          onChange={(e) => onChange('Country', e.target.value)}
          options={OPTIONS.countries}
          icon={Globe}
          required
        />
      </div>
    </div>
  );
}
