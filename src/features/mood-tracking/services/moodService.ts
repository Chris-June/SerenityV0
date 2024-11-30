import { Mood } from '@/types';

export const saveMood = (mood: Mood) => {
  const moodHistory = getMoodHistory();
  moodHistory.push({ ...mood, timestamp: new Date() });
  localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
};

export const getMoodHistory = (): Mood[] => {
  const history = localStorage.getItem('moodHistory');
  return history ? JSON.parse(history).map((mood: Mood) => ({
    ...mood,
    timestamp: new Date(mood.timestamp)
  })) : [];
};

export const generateInsights = (moodHistory: Mood[]): string[] => {
  if (moodHistory.length === 0) return [];

  const insights: string[] = [];
  const recentMoods = moodHistory.slice(-7);
  
  // Calculate average mood
  const avgMood = recentMoods.reduce((sum, mood) => sum + mood.value, 0) / recentMoods.length;
  
  // Add insights based on patterns
  if (avgMood < 2) {
    insights.push("Your mood has been lower than usual. Consider reaching out for support.");
  } else if (avgMood > 2.5) {
    insights.push("You've been maintaining a positive mood. Keep up your healthy habits!");
  }

  // Check for mood improvements
  const moodTrend = recentMoods[recentMoods.length - 1].value - recentMoods[0].value;
  if (moodTrend > 0) {
    insights.push("Your mood has been improving over the past week!");
  }

  return insights;
};
