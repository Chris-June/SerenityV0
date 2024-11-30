import { SelfCareReminders } from '@/components/SelfCareReminders';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const RemindersPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Self-Care Reminders</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Stay Mindful</CardTitle>
          <CardDescription>
            Set up personalized reminders for your self-care activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SelfCareReminders />
        </CardContent>
      </Card>
    </div>
  );
};
