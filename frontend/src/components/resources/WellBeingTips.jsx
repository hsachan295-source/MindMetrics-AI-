import React from 'react';
import Card from '../common/Card';
import { Smartphone, Moon, Sun, BookOpen, ShieldCheck } from 'lucide-react';

export default function WellBeingTips() {
  const categories = [
    {
      title: 'Digital Screen Hygiene',
      icon: Smartphone,
      color: 'text-blue-400',
      tips: [
        'Set daily app duration limits for high-scroll apps like TikTok, Instagram, and Shorts.',
        'Keep phone out of the bedroom or set up a charging station across the room.',
        'Use greyscale display mode after 9 PM to reduce dopamine trigger cues.'
      ]
    },
    {
      title: 'Sleep Optimization',
      icon: Moon,
      color: 'text-purple-400',
      tips: [
        'Maintain a consistent sleep window: aim for 7.5 to 8.5 hours per night.',
        'Avoid blue light screens 60 minutes before lying down.',
        'Keep room ambient temperature cool and dark for deep REM sleep recovery.'
      ]
    },
    {
      title: 'Stress & Mindfulness',
      icon: Sun,
      color: 'text-amber-400',
      tips: [
        'Practice 5-minute Box Breathing (Inhale 4s, Hold 4s, Exhale 4s, Hold 4s).',
        'Incorporate 30 minutes of outdoor daylight walking or aerobic exercise.',
        'Schedule digital-free social interactions with friends and family.'
      ]
    },
    {
      title: 'Academic Pressure Balance',
      icon: BookOpen,
      color: 'text-emerald-400',
      tips: [
        'Use the 50/10 Pomodoro routine: 50 mins intense focus, 10 mins screen-free break.',
        'Prioritize tasks using the Eisenhower Matrix (Urgent vs Important).',
        'Form study groups to distribute study burden and build collaborative support.'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((cat, idx) => {
        const Icon = cat.icon;
        return (
          <Card key={idx} title={cat.title} icon={Icon}>
            <ul className="space-y-3 text-xs text-slate-300">
              {cat.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}
