import { SleepTracker } from '@/features/sleep-tracking';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const SleepTrackerPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sleep Analysis</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Track Your Sleep</CardTitle>
          <CardDescription>
            Monitor your sleep patterns and improve your rest quality
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <SleepTracker />
        </CardContent>
      </Card>
    </div>
  );
};
