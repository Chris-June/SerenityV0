import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useFeatureModal } from '@/hooks/use-feature-modal';

const features = [
  { id: 'mood', label: 'Mood Tracker' },
  { id: 'breathing', label: 'Breathing Exercise' },
  { id: 'coping', label: 'Coping Strategies' },
  { id: 'habits', label: 'Habit Tracker' },
  { id: 'affirmations', label: 'Daily Affirmations' },
  { id: 'reminders', label: 'Self-Care Reminders' },
  { id: 'sleep', label: 'Sleep Analysis' },
  { id: 'emergency', label: 'Emergency Resources' },
];

export function Header() {
  const { openModal } = useFeatureModal();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Serenity</span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle features menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {features.map((feature) => (
                <DropdownMenuItem
                  key={feature.id}
                  onClick={() => openModal(feature.id)}
                >
                  {feature.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}