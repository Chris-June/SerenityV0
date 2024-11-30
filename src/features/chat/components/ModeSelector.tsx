
import { Brain, Heart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractionMode } from '@/types';

interface ModeSelectorProps {
  currentMode: InteractionMode;
  onModeChange: (mode: InteractionMode) => void;
}

export function ModeSelector({ currentMode, onModeChange }: ModeSelectorProps) {
  const modes = [
    {
      id: 'supportive',
      icon: Heart,
      label: 'Supportive',
      description: 'Emotional support and empathy'
    },
    {
      id: 'analytical',
      icon: Brain,
      label: 'Analytical',
      description: 'Logical analysis and problem-solving'
    },
    {
      id: 'creative',
      icon: Lightbulb,
      label: 'Creative',
      description: 'Creative solutions and brainstorming'
    }
  ] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = currentMode === mode.id;
        
        return (
          <Button
            key={mode.id}
            variant={isActive ? "default" : "outline"}
            className="flex items-center gap-2"
            onClick={() => onModeChange(mode.id as InteractionMode)}
            title={mode.description}
          >
            <Icon className="w-4 h-4" />
            <span>{mode.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
