export interface BreathingPattern {
  name: string;
  inhaleTime: number;
  holdTime: number;
  exhaleTime: number;
  cycles: number;
}

export const breathingPatterns: Record<string, BreathingPattern> = {
  relaxation: {
    name: '4-7-8 Relaxation',
    inhaleTime: 4000,
    holdTime: 7000,
    exhaleTime: 8000,
    cycles: 4,
  },
  boxBreathing: {
    name: 'Box Breathing',
    inhaleTime: 4000,
    holdTime: 4000,
    exhaleTime: 4000,
    cycles: 4,
  },
  calmingBreath: {
    name: 'Calming Breath',
    inhaleTime: 5000,
    holdTime: 2000,
    exhaleTime: 5000,
    cycles: 5,
  },
};

export const calculateProgress = (
  elapsedTime: number,
  currentPhase: 'inhale' | 'hold' | 'exhale',
  pattern: BreathingPattern
): number => {
  const phaseTime = {
    inhale: pattern.inhaleTime,
    hold: pattern.holdTime,
    exhale: pattern.exhaleTime,
  }[currentPhase];

  return Math.min((elapsedTime / phaseTime) * 100, 100);
};

export const saveBreathingSession = (
  pattern: BreathingPattern,
  duration: number,
  completedCycles: number
) => {
  const sessions = getBreathingSessions();
  sessions.push({
    pattern: pattern.name,
    duration,
    completedCycles,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem('breathingSessions', JSON.stringify(sessions));
};

export const getBreathingSessions = () => {
  const sessions = localStorage.getItem('breathingSessions');
  return sessions ? JSON.parse(sessions) : [];
};
