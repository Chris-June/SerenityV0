import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Heart, 
  MessageCircle, 
  Shield, 
  Wind, 
  Sparkles,
  Brain,
  LineChart,
  Fingerprint
} from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  const features = [
    {
      icon: Heart,
      title: 'Emotional Support',
      description: 'A safe space to express your feelings and thoughts without judgment',
    },
    {
      icon: Brain,
      title: 'Mental Wellness',
      description: 'Evidence-based techniques to support your mental health journey',
    },
    {
      icon: LineChart,
      title: 'Progress Tracking',
      description: 'Monitor your emotional well-being with intuitive mood tracking',
    },
    {
      icon: MessageCircle,
      title: 'Guided Conversations',
      description: 'Thoughtful discussions to help process emotions and experiences',
    },
    {
      icon: Wind,
      title: 'Breathing Exercises',
      description: 'Simple techniques to help manage stress and anxiety',
    },
    {
      icon: Shield,
      title: 'Crisis Resources',
      description: '24/7 access to emergency mental health support contacts',
    },
    {
      icon: Fingerprint,
      title: 'Private & Secure',
      description: 'Your privacy is our priority with secure, confidential conversations',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Support',
      description: 'Advanced AI technology providing personalized mental health guidance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-primary blur-2xl opacity-75" />
                <div className="relative bg-background rounded-full p-4 border shadow-2xl">
                  <Sparkles className="w-12 h-12 text-primary animate-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
              Find Your Peace
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
              Your compassionate AI companion for mental wellness. A safe space to express yourself,
              track your journey, and discover inner strength.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                onClick={onStart}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Begin Your Journey
                <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="group p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 blur-lg opacity-75" />
                <div className="relative rounded-lg border bg-card/50 backdrop-blur-sm p-6">
                  <p className="text-base text-muted-foreground max-w-2xl">
                    While Serenity provides support and resources, it's not a replacement for
                    professional mental health care. If you're in crisis, please reach out to
                    emergency services or mental health professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}