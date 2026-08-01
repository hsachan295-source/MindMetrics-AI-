import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SAMPLE_HISTORY } from '../services/sampleData';
import { checkBackendHealth, predictMentalHealthScore } from '../services/api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activePage, setActivePage] = useState('dashboard'); // dashboard | predict | history | resources | settings
  const [history, setHistory] = useLocalStorage('mental_health_history', SAMPLE_HISTORY);
  const [activePrediction, setActivePrediction] = useState(null);
  const [isBackendLive, setIsBackendLive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // Check FastAPI backend connection on mount and every 30 seconds
  useEffect(() => {
    let isMounted = true;
    const verifyBackend = async () => {
      const res = await checkBackendHealth();
      if (isMounted) {
        setIsBackendLive(res.isLive);
      }
    };
    verifyBackend();
    const interval = setInterval(verifyBackend, 30000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handlePredict = async (formData) => {
    setIsLoading(true);
    try {
      const result = await predictMentalHealthScore(formData);
      if (result.success) {
        const assessment = {
          id: `PRED-${Date.now().toString().slice(-4)}`,
          date: new Date().toISOString(),
          ...formData,
          score: result.score,
          isLiveBackend: result.isLiveBackend
        };

        setActivePrediction(assessment);
        setHistory((prev) => [assessment, ...prev]);

        if (result.isLiveBackend) {
          showToast('Prediction calculated via FastAPI backend!', 'success');
        } else {
          showToast('Backend offline: Generated simulated ML score.', 'warning');
        }
        return assessment;
      }
    } catch (err) {
      showToast(`Prediction failed: ${err.message}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    showToast('Prediction history cleared', 'info');
  };

  const deleteHistoryItem = (id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
    showToast('Item deleted from history', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        history,
        activePrediction,
        setActivePrediction,
        isBackendLive,
        isLoading,
        toast,
        showToast,
        handlePredict,
        clearHistory,
        deleteHistoryItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
