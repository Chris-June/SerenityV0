import { CopingStrategies } from '@/components/CopingStrategies';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const CopingStrategiesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Coping Strategies</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Personal Toolkit</CardTitle>
          <CardDescription>
            Discover and practice effective strategies to manage stress and anxiety
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CopingStrategies />
        </CardContent>
      </Card>
    </div>
  );
};
