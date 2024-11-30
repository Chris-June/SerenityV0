import { AffirmationCard } from '@/components/AffirmationCard';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const AffirmationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Daily Affirmations</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Positive Self-Talk</CardTitle>
          <CardDescription>
            Start your day with empowering affirmations to boost your mental well-being
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AffirmationCard />
        </CardContent>
      </Card>
    </div>
  );
};
