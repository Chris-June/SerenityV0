import { BreathingExercise } from '@/features/breathing';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const BreathingExercisePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Breathing Exercise</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Take a Moment to Breathe</CardTitle>
        </CardHeader>
        <CardContent>
          <BreathingExercise />
        </CardContent>
      </Card>
    </div>
  );
};
