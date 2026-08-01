import React from 'react';
import Button from '../common/Button';
import { Download, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ExportActions({ data }) {
  const { clearHistory, showToast } = useApp();

  const exportAsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `mental_health_predictions_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported history as JSON file!', 'success');
  };

  const exportAsCSV = () => {
    if (!data.length) return;
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map((row) =>
      Object.values(row)
        .map((val) => `"${val}"`)
        .join(',')
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', encodeURI(csvContent));
    downloadAnchor.setAttribute('download', `mental_health_predictions_${Date.now()}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported history as CSV file!', 'success');
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={exportAsCSV} icon={Download}>
        Export CSV
      </Button>
      <Button variant="outline" size="sm" onClick={exportAsJSON} icon={Download}>
        Export JSON
      </Button>
      <Button variant="danger" size="sm" onClick={clearHistory} icon={Trash2}>
        Clear Logs
      </Button>
    </div>
  );
}
