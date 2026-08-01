import React from 'react';
import Header from '../components/layout/Header';
import WellBeingTips from '../components/resources/WellBeingTips';
import CrisisSupport from '../components/resources/CrisisSupport';

export default function ResourcesPage() {
  return (
    <div>
      <Header
        title="Student Wellness Resources"
        description="Evidence-based mental health strategies, screen time boundaries, and 24/7 crisis support contact information."
      />
      <WellBeingTips />
      <CrisisSupport />
    </div>
  );
}
