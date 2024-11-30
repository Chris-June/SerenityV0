import { useState, useEffect } from 'react';
import { SleepData } from '../services/types';
import { getSleepData } from '../services/sleepTrackingService';

export const useSleepTracking = () => {
  const [sleepData, setSleepData] = useState<SleepData[]>([]);
  
  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const data = await getSleepData();
        setSleepData(data);
      } catch (error) {
        console.error('Failed to fetch sleep data:', error);
      }
    };

    fetchSleepData();
  }, []);
  
  const updateSleepData = (newSleepData: SleepData[]) => {
    setSleepData(newSleepData);
  };
  
  return {
    sleepData,
    updateSleepData,
  };
};

// Add more hooks as needed, such as:
// - useLogSleep
// - useSleepStats
// - useSleepQuality
