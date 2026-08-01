import { calculateLocalSimulationScore } from './sampleData';

const API_BASE_URL = 'http://127.0.0.1:8000';

/**
 * Check if FastAPI backend server is live and responsive
 */
export async function checkBackendHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return { isLive: true, message: data.message || 'API connected' };
    }
    return { isLive: false, message: 'Backend returned non-200 status' };
  } catch (error) {
    return { isLive: false, message: 'Backend server offline (Using simulated ML Engine)' };
  }
}

/**
 * Send StudentData to FastAPI /predict endpoint or fallback to simulated model score
 * @param {Object} studentData 
 */
export async function predictMentalHealthScore(studentData) {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: true,
      score: result.predicted_mental_health_score,
      isLiveBackend: true,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.warn('FastAPI backend unreachable or returned error. Falling back to local ML engine simulation.', error.message);
    
    // Simulate realistic response latency (400ms)
    await new Promise((resolve) => setTimeout(resolve, 400));
    
    const simulatedScore = calculateLocalSimulationScore(studentData);
    return {
      success: true,
      score: simulatedScore,
      isLiveBackend: false,
      timestamp: new Date().toISOString(),
      fallbackNotice: 'Simulated prediction (Backend offline)'
    };
  }
}
