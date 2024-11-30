import { useState, useEffect } from 'react';
import { Mood } from '@/types';
import { saveMood, getMoodHistory, generateInsights } from '../services';

export function useMoodTracking() {
  const [moodHistory, setMoodHistory] = useState<Mood[]>([]);
  const [insights, setInsights] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load mood history on mount
    const history = getMoodHistory();
    setMoodHistory(history);
    setInsights(generateInsights(history));
    setLoading(false);
  }, []);

  const recordMood = (mood: Mood) => {
    saveMood(mood);
    const updatedHistory = getMoodHistory();
    setMoodHistory(updatedHistory);
    setInsights(generateInsights(updatedHistory));
  };

  const getWeeklyMoodData = () => {
    return moodHistory
      .slice(-7)
      .map((mood) => ({
        date: new Date(mood.timestamp).toLocaleDateString(),
        value: mood.value,
      }));
  };

  return {
    moodHistory,
    insights,
    loading,
    recordMood,
    getWeeklyMoodData,
  };
}
