import React, { useState } from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import FilterControls from './FilterControls';
import ExportActions from './ExportActions';
import { History, Eye, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getRiskAssessment } from '../../services/sampleData';

export default function PredictionTable() {
  const { history, deleteHistoryItem, setActivePrediction, setActivePage } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  const [selectedGender, setSelectedGender] = useState('All Genders');

  // Filtering logic
  const filteredItems = history.filter((item) => {
    const matchesSearch =
      (item.Country || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.Academic_Level || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.Most_Used_Platform || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPlatform =
      selectedPlatform === 'All Platforms' || item.Most_Used_Platform === selectedPlatform;

    const matchesGender =
      selectedGender === 'All Genders' || item.Gender === selectedGender;

    return matchesSearch && matchesPlatform && matchesGender;
  });

  return (
    <Card
      title="Historical Evaluation Records"
      subtitle="View, search, filter, and export all recorded model predictions."
      icon={History}
      action={<ExportActions data={filteredItems} />}
    >
      <FilterControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedPlatform={selectedPlatform}
        onPlatformChange={setSelectedPlatform}
        selectedGender={selectedGender}
        onGenderChange={setSelectedGender}
      />

      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-slate-500 text-sm">
          No matching prediction logs found.
        </div>
      ) : (
        <div className="overflow-x-auto border border-slate-800 rounded-xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-3.5">ID / Date</th>
                <th className="p-3.5">Demographics</th>
                <th className="p-3.5">Platform & Usage</th>
                <th className="p-3.5">Sleep & Study</th>
                <th className="p-3.5">Predicted Score</th>
                <th className="p-3.5">Risk Level</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredItems.map((item) => {
                const risk = getRiskAssessment(item.score);
                return (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-3.5">
                      <div className="font-mono font-semibold text-slate-200">{item.id}</div>
                      <div className="text-[10px] text-slate-400">
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-medium text-slate-200">
                        {item.Age} y/o • {item.Gender}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.Academic_Level} ({item.Country})
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-medium text-blue-400">{item.Most_Used_Platform}</div>
                      <div className="text-[11px] text-slate-400">
                        {item.Avg_Daily_Usage_Hours}h/day • {item.Daily_Unlocks} unlocks
                      </div>
                    </td>
                    <td className="p-3.5">
                      <div>Sleep: {item.Sleep_Hours_Per_Night}h</div>
                      <div className="text-[11px] text-slate-400">Study: {item.Study_Hours}h</div>
                    </td>
                    <td className="p-3.5">
                      <div className="text-sm font-bold text-white">{item.score} / 10</div>
                    </td>
                    <td className="p-3.5">
                      <Badge variant={risk.badgeColor}>{risk.level}</Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => {
                            setActivePrediction(item);
                            setActivePage('predict');
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteHistoryItem(item.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
