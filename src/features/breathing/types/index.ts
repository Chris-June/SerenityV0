export interface BreathingSession {
  pattern: string;
  duration: number;
  completedCycles: number;
  timestamp: string;
}

export interface BreathingStats {
  totalSessions: number;
  totalMinutes: number;
  averageDuration: number;
  preferredPattern: string;
}

export type BreathingPhase = 'inhale' | 'hold' | 'exhale';

export interface BreathingState {
  isActive: boolean;
  progress: number;
  phase: BreathingPhase;
  cyclesCompleted: number;
  elapsedTime: number;
}

export interface BreathingPattern {
  name: string;
  inhaleTime: number;  // in milliseconds
  holdTime: number;    // in milliseconds
  exhaleTime: number;  // in milliseconds
  cycles: number;
  description?: string;
  benefits?: string[];
}
