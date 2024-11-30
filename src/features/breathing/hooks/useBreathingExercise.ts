import { useState, useEffect, useCallback } from 'react';
import { BreathingPattern, calculateProgress } from '../services';

export type BreathingPhase = 'inhale' | 'hold' | 'exhale';

export interface BreathingState {
  isActive: boolean;
  progress: number;
  phase: BreathingPhase;
  cyclesCompleted: number;
  elapsedTime: number;
}

export function useBreathingExercise(pattern: BreathingPattern) {
  const [state, setState] = useState<BreathingState>({
    isActive: false,
    progress: 0,
    phase: 'inhale',
    cyclesCompleted: 0,
    elapsedTime: 0,
  });

  const startExercise = useCallback(() => {
    setState(prev => ({ ...prev, isActive: true }));
  }, []);

  const stopExercise = useCallback(() => {
    setState(prev => ({ ...prev, isActive: false }));
  }, []);

  const resetExercise = useCallback(() => {
    setState({
      isActive: false,
      progress: 0,
      phase: 'inhale',
      cyclesCompleted: 0,
      elapsedTime: 0,
    });
  }, []);

  useEffect(() => {
    if (!state.isActive) return;

    const interval = setInterval(() => {
      setState(prev => {
        const newElapsedTime = prev.elapsedTime + 50; // 50ms interval
        const newProgress = calculateProgress(newElapsedTime, prev.phase, pattern);

        if (newProgress >= 100) {
          let newPhase: BreathingPhase = 'inhale';
          let newCyclesCompleted = prev.cyclesCompleted;

          switch (prev.phase) {
            case 'inhale':
              newPhase = 'hold';
              break;
            case 'hold':
              newPhase = 'exhale';
              break;
            case 'exhale':
              newPhase = 'inhale';
              newCyclesCompleted += 1;
              if (newCyclesCompleted >= pattern.cycles) {
                clearInterval(interval);
                return {
                  isActive: false,
                  progress: 0,
                  phase: 'inhale',
                  cyclesCompleted: 0,
                  elapsedTime: 0,
                };
              }
              break;
          }

          return {
            ...prev,
            progress: 0,
            phase: newPhase,
            cyclesCompleted: newCyclesCompleted,
            elapsedTime: 0,
          };
        }

        return {
          ...prev,
          progress: newProgress,
          elapsedTime: newElapsedTime,
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [state.isActive, pattern]);

  return {
    ...state,
    startExercise,
    stopExercise,
    resetExercise,
  };
}
