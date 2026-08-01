import React from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import { Search, Filter } from 'lucide-react';
import { OPTIONS } from '../../services/sampleData';

export default function FilterControls({
  searchTerm,
  onSearchChange,
  selectedPlatform,
  onPlatformChange,
  selectedGender,
  onGenderChange,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
      <Input
        placeholder="Search by country, academic level, platform..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        icon={Search}
      />

      <Select
        value={selectedPlatform}
        onChange={(e) => onPlatformChange(e.target.value)}
        options={['All Platforms', ...OPTIONS.platforms]}
        icon={Filter}
      />

      <Select
        value={selectedGender}
        onChange={(e) => onGenderChange(e.target.value)}
        options={['All Genders', ...OPTIONS.genders]}
      />
    </div>
  );
}
