import { Menu } from 'lucide-react';
import { Navigation } from './Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold">Serenity</span>
          <Navigation />
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle features menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {features.map((feature) => (
                <DropdownMenuItem
                  key={feature.id}
                  onClick={() => navigate(`/features/${feature.id}`)}
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
};
