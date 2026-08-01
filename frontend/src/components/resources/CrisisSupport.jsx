import React from 'react';
import Card from '../common/Card';
import { PhoneCall, ShieldAlert, HeartHandshake, ExternalLink } from 'lucide-react';

export default function CrisisSupport() {
  const helplines = [
    {
      country: 'Global / International',
      service: 'Befrienders Worldwide',
      contact: 'www.befrienders.org',
      link: 'https://www.befrienders.org'
    },
    {
      country: 'United States & Canada',
      service: '988 Suicide & Crisis Lifeline',
      contact: 'Call or Text 988',
      link: 'https://988lifeline.org'
    },
    {
      country: 'India',
      service: 'Tele-MANAS & NIMHANS Helpline',
      contact: '14416 / 1800 891 4416',
      link: 'https://telemanas.mohfw.gov.in'
    },
    {
      country: 'United Kingdom',
      service: 'Samaritans UK',
      contact: 'Call 116 123',
      link: 'https://www.samaritans.org'
    }
  ];

  return (
    <Card
      title="Helpline & Crisis Support Directory"
      subtitle="Confidential, 24/7 support resources for students needing professional guidance."
      icon={ShieldAlert}
      className="mt-6 border-rose-500/30"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {helplines.map((h, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">{h.country}</span>
              <h5 className="text-xs font-bold text-white mt-0.5">{h.service}</h5>
              <p className="text-xs text-slate-300 font-mono mt-1">{h.contact}</p>
            </div>
            <a
              href={h.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
}
