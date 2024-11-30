export interface SleepEntry {
  id: string;
  startTime: Date;
  endTime: Date;
  quality?: number; // 1-10 scale
  notes?: string;
}

export interface SleepData {
  id: string;
  startTime: Date;
  endTime: Date;
  quality?: number; // 1-10 scale
  notes?: string;
}

export interface SleepStats {
  averageHours: number;
  averageQuality: number;
  totalEntries: number;
}
