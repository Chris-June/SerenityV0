import { Settings, MessageCircle, Eye, Image, MessageSquareWarning, ClipboardCheck } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { InteractionMode } from '@/types';

interface ModeSelectorProps {
  currentMode: InteractionMode;
  onModeChange: (mode: InteractionMode) => void;
}

const modes = [
  {
    id: 'conversational' as InteractionMode,
    label: 'Conversational Mode',
    description: 'Casual and open dialogue',
    icon: MessageCircle,
  },
  {
    id: 'reflective' as InteractionMode,
    label: 'Reflective Mode',
    description: 'Deep understanding and empathy',
    icon: Eye,
  },
  {
    id: 'visualization' as InteractionMode,
    label: 'Visualization Mode',
    description: 'Generate soothing images',
    icon: Image,
  },
  {
    id: 'feedback' as InteractionMode,
    label: 'Feedback Mode',
    description: 'Share your experience',
    icon: ClipboardCheck,
  },
  {
    id: 'crisis' as InteractionMode,
    label: 'Crisis Support',
    description: 'Immediate assistance',
    icon: MessageSquareWarning,
  },
];

export function ModeSelector({ currentMode, onModeChange }: ModeSelectorProps) {
  const currentModeData = modes.find((mode) => mode.id === currentMode);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Settings className="h-4 w-4" />
          <span className="hidden md:inline">{currentModeData?.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {modes.map((mode) => {
          const Icon = mode.icon;
          return (
            <DropdownMenuItem
              key={mode.id}
              onClick={() => onModeChange(mode.id)}
              className="gap-2"
            >
              <Icon className="h-4 w-4" />
              <div className="flex flex-col">
                <span>{mode.label}</span>
                <span className="text-xs text-muted-foreground">
                  {mode.description}
                </span>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}