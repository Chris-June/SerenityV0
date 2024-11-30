import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useFeatureModal } from '@/hooks/use-feature-modal';
import { MoodTracker } from './MoodTracker';
import { BreathingExercise } from './BreathingExercise';
import { CopingStrategies } from './CopingStrategies';
import { HabitTracker } from './HabitTracker';
import { AffirmationCard } from './AffirmationCard';
import { SelfCareReminders } from './SelfCareReminders';
import { SleepTracker } from './SleepTracker';
import { EmergencyResources } from './EmergencyResources';

const featureComponents: Record<string, {
  component: React.ComponentType;
  title: string;
  scrollable?: boolean;
}> = {
  mood: {
    component: MoodTracker,
    title: 'Mood Tracker',
  },
  breathing: {
    component: BreathingExercise,
    title: 'Breathing Exercise',
  },
  coping: {
    component: CopingStrategies,
    title: 'Coping Strategies',
  },
  habits: {
    component: HabitTracker,
    title: 'Habit Tracker',
  },
  affirmations: {
    component: AffirmationCard,
    title: 'Daily Affirmations',
  },
  reminders: {
    component: SelfCareReminders,
    title: 'Self-Care Reminders',
  },
  sleep: {
    component: SleepTracker,
    title: 'Sleep Analysis',
    scrollable: true,
  },
  emergency: {
    component: EmergencyResources,
    title: 'Emergency Resources',
  },
};

export function FeatureModal() {
  const { isOpen, feature, closeModal } = useFeatureModal();
  const featureData = feature ? featureComponents[feature] : null;
  const FeatureComponent = featureData?.component;

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{featureData?.title}</DialogTitle>
        </DialogHeader>
        {FeatureComponent && (
          featureData?.scrollable ? (
            <ScrollArea className="flex-1 pr-4">
              <FeatureComponent />
            </ScrollArea>
          ) : (
            <FeatureComponent />
          )
        )}
      </DialogContent>
    </Dialog>
  );
}