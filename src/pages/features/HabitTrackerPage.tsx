import { HabitTracker } from '@/components/HabitTracker';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const HabitTrackerPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Build Healthy Habits</CardTitle>
          <CardDescription>
            Track and maintain positive daily habits for better mental well-being
          </CardDescription>
        </CardHeader>
        <CardContent>
          <HabitTracker />
        </CardContent>
      </Card>
    </div>
  );
};
