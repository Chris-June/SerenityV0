import { SleepEntry, SleepStats } from './types';

class SleepTrackingService {
  private storage: Storage;
  private readonly STORAGE_KEY = 'sleep-entries';

  constructor() {
    this.storage = window.localStorage;
  }

  async addEntry(entry: Omit<SleepEntry, 'id'>): Promise<SleepEntry> {
    const entries = await this.getAllEntries();
    const newEntry: SleepEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    
    entries.push(newEntry);
    await this.saveEntries(entries);
    return newEntry;
  }

  async updateEntry(id: string, entry: Partial<SleepEntry>): Promise<SleepEntry | null> {
    const entries = await this.getAllEntries();
    const index = entries.findIndex(e => e.id === id);
    
    if (index === -1) return null;
    
    entries[index] = { ...entries[index], ...entry };
    await this.saveEntries(entries);
    return entries[index];
  }

  async deleteEntry(id: string): Promise<boolean> {
    const entries = await this.getAllEntries();
    const filteredEntries = entries.filter(entry => entry.id !== id);
    
    if (filteredEntries.length === entries.length) return false;
    
    await this.saveEntries(filteredEntries);
    return true;
  }

  async getAllEntries(): Promise<SleepEntry[]> {
    const entriesJson = this.storage.getItem(this.STORAGE_KEY);
    return entriesJson ? JSON.parse(entriesJson) : [];
  }

  async getStats(days: number = 30): Promise<SleepStats> {
    const entries = await this.getAllEntries();
    const now = new Date();
    const cutoffDate = new Date(now.setDate(now.getDate() - days));
    
    const recentEntries = entries.filter(entry => new Date(entry.startTime) >= cutoffDate);
    
    if (recentEntries.length === 0) {
      return {
        averageHours: 0,
        averageQuality: 0,
        totalEntries: 0,
      };
    }

    const totalHours = recentEntries.reduce((acc, entry) => {
      const duration = new Date(entry.endTime).getTime() - new Date(entry.startTime).getTime();
      return acc + (duration / (1000 * 60 * 60));
    }, 0);

    const totalQuality = recentEntries.reduce((acc, entry) => acc + (entry.quality || 0), 0);
    const entriesWithQuality = recentEntries.filter(entry => entry.quality !== undefined).length;

    return {
      averageHours: totalHours / recentEntries.length,
      averageQuality: entriesWithQuality ? totalQuality / entriesWithQuality : 0,
      totalEntries: recentEntries.length,
    };
  }

  private async saveEntries(entries: SleepEntry[]): Promise<void> {
    this.storage.setItem(this.STORAGE_KEY, JSON.stringify(entries));
  }
}

export const sleepTrackingService = new SleepTrackingService();

export const getSleepData = async () => {
  return await sleepTrackingService.getAllEntries();
}
