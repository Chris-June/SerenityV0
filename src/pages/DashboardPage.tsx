import React from 'react';
import { MoodTracker } from '../features/mood-tracking';
import { SleepTracker } from '../features/sleep-tracking';
import { BreathingExercise } from '../features/breathing';

export const DashboardPage = () => {
  return (
    <div className="container mx-auto grid gap-6 p-6">
      <MoodTracker />
      <SleepTracker />
      <BreathingExercise />
    </div>
  );
};
