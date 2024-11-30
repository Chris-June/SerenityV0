import { useState } from 'react';
import { Moon, Sun, Clock, Star, BedDouble, CloudMoon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface SleepEntry {
  date: Date;
  duration: number;
  quality: number;
  notes: string[];
}

const relaxationStories = [
  {
    title: "Peaceful Forest Walk",
    content: "Imagine yourself walking through a serene forest. The gentle rustling of leaves...",
    duration: "10 min",
  },
  {
    title: "Ocean Waves",
    content: "Listen to the rhythmic sound of waves gently lapping at the shore...",
    duration: "15 min",
  },
  {
    title: "Mountain Meditation",
    content: "Picture yourself at the peak of a majestic mountain, above the clouds...",
    duration: "12 min",
  },
];

const sleepTips = [
  {
    icon: Clock,
    tip: "Maintain a consistent sleep schedule",
    description: "Go to bed and wake up at the same time daily",
  },
  {
    icon: Sun,
    tip: "Get natural light exposure",
    description: "Spend time outdoors during daylight hours",
  },
  {
    icon: CloudMoon,
    tip: "Create a relaxing bedtime routine",
    description: "Wind down with calming activities before bed",
  },
];

export default function SleepTracker() {
  const [sleepDuration, setSleepDuration] = useState<number>(7);
  const [sleepQuality, setSleepQuality] = useState<number>(3);
  const [selectedStory, setSelectedStory] = useState<string>("");
  const [entries, setEntries] = useState<SleepEntry[]>([]);

  const qualityOptions = [
    { value: 1, label: "Poor", color: "text-red-500" },
    { value: 2, label: "Fair", color: "text-orange-500" },
    { value: 3, label: "Good", color: "text-yellow-500" },
    { value: 4, label: "Very Good", color: "text-lime-500" },
    { value: 5, label: "Excellent", color: "text-green-500" },
  ];

  const getSleepQualityColor = (quality: number) => {
    const option = qualityOptions.find(opt => opt.value === quality);
    return option?.color || "text-muted-foreground";
  };

  const getRecommendations = () => {
    if (sleepQuality <= 2) {
      return [
        "Try deep breathing exercises before bed",
        "Avoid screens 1 hour before sleep",
        "Consider a white noise machine",
        "Keep your bedroom cool and dark",
      ];
    } else if (sleepQuality <= 4) {
      return [
        "Maintain your current bedtime routine",
        "Try light stretching before bed",
        "Practice gratitude journaling",
      ];
    } else {
      return [
        "Great job! Keep maintaining your sleep hygiene",
        "Share your successful sleep habits",
        "Help others improve their sleep quality",
      ];
    }
  };

  const logSleep = () => {
    const newEntry: SleepEntry = {
      date: new Date(),
      duration: sleepDuration,
      quality: sleepQuality,
      notes: getRecommendations(),
    };
    setEntries([newEntry, ...entries]);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Moon className="h-5 w-5" />
              Sleep Analysis
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sleep Duration Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Sleep Duration</h4>
              <span className="text-2xl font-bold">{sleepDuration}h</span>
            </div>
            <Slider
              value={[sleepDuration]}
              onValueChange={([value]) => setSleepDuration(value)}
              min={0}
              max={12}
              step={0.5}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0h</span>
              <span>6h</span>
              <span>12h</span>
            </div>
          </div>

          {/* Sleep Quality Selection */}
          <div className="space-y-4">
            <h4 className="font-medium">Sleep Quality</h4>
            <div className="flex gap-2">
              {qualityOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={sleepQuality === option.value ? "default" : "outline"}
                  className={cn(
                    "flex-1",
                    sleepQuality === option.value && option.color
                  )}
                  onClick={() => setSleepQuality(option.value)}
                >
                  <Star
                    className={cn(
                      "h-4 w-4 mr-2",
                      sleepQuality >= option.value ? "fill-current" : "fill-none"
                    )}
                  />
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <Button onClick={logSleep} className="w-full">
            Log Sleep
          </Button>
        </CardContent>
      </Card>

      {/* Relaxation Stories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BedDouble className="h-5 w-5" />
            Bedtime Stories & Relaxation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={selectedStory} onValueChange={setSelectedStory}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a relaxation story" />
            </SelectTrigger>
            <SelectContent>
              {relaxationStories.map((story) => (
                <SelectItem key={story.title} value={story.title}>
                  <div className="flex items-center justify-between">
                    <span>{story.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {story.duration}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedStory && (
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm">
                {relaxationStories.find(s => s.title === selectedStory)?.content}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sleep Tips */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {sleepTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50"
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{tip.tip}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Sleep History */}
      {entries.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Sleep History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {entries.slice(0, 5).map((entry, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {entry.date.toLocaleDateString()}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {entry.duration}h
                      </span>
                      <span className={cn(
                        "flex items-center gap-1",
                        getSleepQualityColor(entry.quality)
                      )}>
                        <Star className="h-4 w-4 fill-current" />
                        {qualityOptions.find(opt => opt.value === entry.quality)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {entry.notes.map((note, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}