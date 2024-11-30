export interface Mood {
  value: number;
  timestamp: string;  // ISO string format from Date.toISOString()
  note?: string;
}

export interface MoodWithStrategy extends Mood {
  strategies: string[];
}

export interface MoodSummary {
  date: string;
  value: number;
}

export interface MoodInsight {
  type: 'positive' | 'neutral' | 'negative';
  message: string;
  recommendation?: string;
}

export type MoodPhase = 'input' | 'reflection' | 'summary';
