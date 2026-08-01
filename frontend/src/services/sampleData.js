// Preset student profiles for quick testing in the form
export const PRESET_PROFILES = [
  {
    id: 'heavy-user',
    name: 'Heavy Social Media User',
    description: 'High screen time & frequent unlocks with elevated stress levels.',
    icon: '📱',
    data: {
      Age: 21,
      Gender: 'Female',
      Country: 'USA',
      Academic_Level: 'Undergraduate',
      Most_Used_Platform: 'TikTok',
      Purpose_Of_Use: 'Entertainment',
      Avg_Daily_Usage_Hours: 7.5,
      Daily_Unlocks: 120,
      Study_Hours: 3.0,
      Physical_Activity_Hours: 0.5,
      Sleep_Hours_Per_Night: 5.5,
      Stress_Level: 'High'
    }
  },
  {
    id: 'balanced-student',
    name: 'Balanced Achiever',
    description: 'Moderate screen usage, active lifestyle, and consistent sleep schedule.',
    icon: '🧘',
    data: {
      Age: 22,
      Gender: 'Male',
      Country: 'Canada',
      Academic_Level: 'Undergraduate',
      Most_Used_Platform: 'LinkedIn',
      Purpose_Of_Use: 'Networking',
      Avg_Daily_Usage_Hours: 2.0,
      Daily_Unlocks: 45,
      Study_Hours: 6.5,
      Physical_Activity_Hours: 2.0,
      Sleep_Hours_Per_Night: 8.0,
      Stress_Level: 'Low'
    }
  },
  {
    id: 'exhausted-grad',
    name: 'Exhausted Graduate',
    description: 'Long study hours, night owl habits, and heavy academic pressure.',
    icon: '🎓',
    data: {
      Age: 25,
      Gender: 'Female',
      Country: 'India',
      Academic_Level: 'Graduate',
      Most_Used_Platform: 'YouTube',
      Purpose_Of_Use: 'Education',
      Avg_Daily_Usage_Hours: 4.5,
      Daily_Unlocks: 80,
      Study_Hours: 9.0,
      Physical_Activity_Hours: 0.5,
      Sleep_Hours_Per_Night: 5.0,
      Stress_Level: 'Very High'
    }
  },
  {
    id: 'high-school-social',
    name: 'High School Teen',
    description: 'Constant social networking, high unlock rate, and late night scrolling.',
    icon: '🎒',
    data: {
      Age: 17,
      Gender: 'Male',
      Country: 'UK',
      Academic_Level: 'High School',
      Most_Used_Platform: 'Instagram',
      Purpose_Of_Use: 'Entertainment',
      Avg_Daily_Usage_Hours: 6.0,
      Daily_Unlocks: 140,
      Study_Hours: 4.0,
      Physical_Activity_Hours: 1.0,
      Sleep_Hours_Per_Night: 6.0,
      Stress_Level: 'Medium'
    }
  }
];

// Options lists matching backend FastAPI pydantic model schema
export const OPTIONS = {
  genders: ['Male', 'Female'],
  academicLevels: ['High School', 'Undergraduate', 'Graduate'],
  platforms: [
    'Instagram', 'TikTok', 'YouTube', 'Snapchat', 'Facebook', 
    'WhatsApp', 'Twitter', 'LinkedIn', 'WeChat', 'LINE', 'KakaoTalk', 'VKontakte'
  ],
  purposes: ['Entertainment', 'Networking', 'Education', 'News'],
  stressLevels: ['Low', 'Medium', 'High', 'Very High'],
  countries: [
    'Other', 'India', 'USA', 'Canada', 'Australia', 
    'UK', 'Germany', 'Mexico', 'Turkey', 'France'
  ]
};

// Initial benchmark dataset analytics for dashboard charts
export const DASHBOARD_STATS = {
  totalAnalyzed: 1450,
  avgScore: 6.42,
  highRiskPercentage: 24.8,
  topPlatform: 'TikTok',
  avgScreenTimeHours: 5.2,
  
  platformImpact: [
    { platform: 'TikTok', avgScore: 7.4, users: 380, stressIndex: 82 },
    { platform: 'Instagram', avgScore: 6.9, users: 410, stressIndex: 75 },
    { platform: 'Snapchat', avgScore: 6.8, users: 210, stressIndex: 71 },
    { platform: 'Twitter', avgScore: 6.5, users: 150, stressIndex: 68 },
    { platform: 'YouTube', avgScore: 5.4, users: 290, stressIndex: 52 },
    { platform: 'LinkedIn', avgScore: 4.8, users: 180, stressIndex: 44 },
  ],

  usageVsScore: [
    { hours: '0-2 hrs', avgScore: 4.2, sleep: 7.8, study: 5.5 },
    { hours: '2-4 hrs', avgScore: 5.1, sleep: 7.2, study: 5.2 },
    { hours: '4-6 hrs', avgScore: 6.5, sleep: 6.4, study: 4.3 },
    { hours: '6-8 hrs', avgScore: 7.8, sleep: 5.6, study: 3.4 },
    { hours: '8+ hrs', avgScore: 8.9, sleep: 4.8, study: 2.5 },
  ],

  stressDistribution: [
    { level: 'Low Stress', count: 420, color: '#10b981', percentage: '29%' },
    { level: 'Medium Stress', count: 580, color: '#f59e0b', percentage: '40%' },
    { level: 'High Stress', count: 320, color: '#ef4444', percentage: '22%' },
    { level: 'Very High Stress', count: 130, color: '#8b5cf6', percentage: '9%' },
  ]
};

// Initial sample prediction history records
export const SAMPLE_HISTORY = [
  {
    id: 'HIST-101',
    date: '2026-07-31T14:22:00Z',
    Age: 21,
    Gender: 'Female',
    Country: 'USA',
    Academic_Level: 'Undergraduate',
    Most_Used_Platform: 'TikTok',
    Purpose_Of_Use: 'Entertainment',
    Avg_Daily_Usage_Hours: 6.5,
    Daily_Unlocks: 110,
    Sleep_Hours_Per_Night: 5.5,
    Stress_Level: 'High',
    score: 7.85,
    risk: 'High Stress'
  },
  {
    id: 'HIST-102',
    date: '2026-07-30T09:15:00Z',
    Age: 23,
    Gender: 'Male',
    Country: 'Canada',
    Academic_Level: 'Undergraduate',
    Most_Used_Platform: 'LinkedIn',
    Purpose_Of_Use: 'Networking',
    Avg_Daily_Usage_Hours: 2.0,
    Daily_Unlocks: 35,
    Sleep_Hours_Per_Night: 8.0,
    Stress_Level: 'Low',
    score: 3.40,
    risk: 'Low Stress'
  },
  {
    id: 'HIST-103',
    date: '2026-07-29T18:40:00Z',
    Age: 25,
    Gender: 'Female',
    Country: 'India',
    Academic_Level: 'Graduate',
    Most_Used_Platform: 'YouTube',
    Purpose_Of_Use: 'Education',
    Avg_Daily_Usage_Hours: 4.0,
    Daily_Unlocks: 65,
    Sleep_Hours_Per_Night: 6.5,
    Stress_Level: 'Medium',
    score: 5.60,
    risk: 'Moderate Stress'
  },
  {
    id: 'HIST-104',
    date: '2026-07-28T11:05:00Z',
    Age: 19,
    Gender: 'Male',
    Country: 'UK',
    Academic_Level: 'Undergraduate',
    Most_Used_Platform: 'Instagram',
    Purpose_Of_Use: 'Entertainment',
    Avg_Daily_Usage_Hours: 7.0,
    Daily_Unlocks: 130,
    Sleep_Hours_Per_Night: 5.0,
    Stress_Level: 'Very High',
    score: 8.45,
    risk: 'Critical Stress'
  }
];

// Helper formula to compute score locally if FastAPI is unreachable
export function calculateLocalSimulationScore(data) {
  let score = 5.0; // Base score
  
  // Usage hours contribution (+0.45 per hour above 3)
  const usageDelta = Math.max(0, data.Avg_Daily_Usage_Hours - 3);
  score += usageDelta * 0.48;

  // Unlocks contribution (+0.015 per unlock above 50)
  const unlocksDelta = Math.max(0, data.Daily_Unlocks - 50);
  score += unlocksDelta * 0.018;

  // Sleep deficit penalty (-0.5 per hour below 7.5)
  const sleepDeficit = Math.max(0, 7.5 - data.Sleep_Hours_Per_Night);
  score += sleepDeficit * 0.55;

  // Physical activity benefit (-0.4 per hour of exercise up to 3h)
  score -= Math.min(3, data.Physical_Activity_Hours) * 0.35;

  // Self-rated stress impact
  const stressMultiplier = {
    'Low': -0.8,
    'Medium': 0.2,
    'High': 1.1,
    'Very High': 1.8
  };
  score += stressMultiplier[data.Stress_Level] || 0;

  // Platform weight
  const platformWeight = {
    'TikTok': 0.6,
    'Instagram': 0.5,
    'Snapchat': 0.4,
    'Twitter': 0.3,
    'YouTube': 0.1,
    'LinkedIn': -0.3,
  };
  score += platformWeight[data.Most_Used_Platform] || 0.1;

  // Clamp score between 1.00 and 10.00
  score = Math.min(10.0, Math.max(1.0, score));
  return parseFloat(score.toFixed(2));
}

// Categorize mental score into risk levels & guidance
export function getRiskAssessment(score) {
  if (score < 4.0) {
    return {
      level: 'Low Stress',
      color: 'emerald',
      bgClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      badgeColor: 'emerald',
      summary: 'Healthy digital balance & high well-being resilience.',
      recommendations: [
        'Maintain your positive sleep hygiene (7-8 hours nightly).',
        'Keep up active physical routines and non-digital social interactions.',
        'Continue setting boundary limits on passive social media feeds.'
      ]
    };
  } else if (score < 6.5) {
    return {
      level: 'Moderate Stress',
      color: 'amber',
      bgClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      badgeColor: 'amber',
      summary: 'Mild digital fatigue detected. Proactive balance recommended.',
      recommendations: [
        'Set daily app screen time limits (e.g., max 2-3 hours for entertainment apps).',
        'Turn off non-essential notifications 1 hour before sleep.',
        'Incorporate 20-30 minutes of daily outdoor physical exercise.'
      ]
    };
  } else if (score < 8.5) {
    return {
      level: 'High Stress',
      color: 'red',
      bgClass: 'bg-red-500/10 border-red-500/30 text-red-400',
      badgeColor: 'red',
      summary: 'Elevated stress levels and digital overload impact.',
      recommendations: [
        'Implement a strict digital curfew: no screens 60 minutes before bedtime.',
        'Take regular study breaks using the 50/10 Pomodoro routine.',
        'Consider digital detox weekends or disabling high-stress apps temporarily.',
        'Reach out to campus counseling or wellness advisors if stress persists.'
      ]
    };
  } else {
    return {
      level: 'Critical Stress',
      color: 'purple',
      bgClass: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      badgeColor: 'purple',
      summary: 'Severe risk of burnout, sleep deprivation & screen strain.',
      recommendations: [
        'Prioritize sleep recovery immediately—aim for 8 consecutive hours of sleep.',
        'Disable infinite-scroll feeds (TikTok, Shorts, Reels) during exam periods.',
        'Schedule a confidential check-in with mental health professionals or student support services.',
        'Engage daily in offline stress-reduction activities (mindfulness, sports, journaling).'
      ]
    };
  }
}
