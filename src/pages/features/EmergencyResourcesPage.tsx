import { EmergencyResources } from '@/components/EmergencyResources';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const EmergencyResourcesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Emergency Resources</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>24/7 Support</CardTitle>
          <CardDescription>
            Access immediate help and crisis resources when you need them most
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmergencyResources />
        </CardContent>
      </Card>
    </div>
  );
};
