import { MoodTracker } from '@/features/mood-tracking';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const MoodTrackerPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Mood Tracker</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Track Your Emotional Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <MoodTracker />
        </CardContent>
      </Card>
    </div>
  );
};
