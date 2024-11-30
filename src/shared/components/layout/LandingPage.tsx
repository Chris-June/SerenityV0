import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Serenity</h1>
          <p className="text-xl text-muted-foreground">
            Your personal space for mental wellness and mindful living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Mood Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Track your daily moods and emotions to better understand your mental well-being
              </p>
              <Button variant="outline" className="w-full">Start Tracking</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breathing Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Practice guided breathing exercises to reduce stress and anxiety
              </p>
              <Button variant="outline" className="w-full">Begin Exercise</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sleep Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Monitor your sleep patterns and improve your rest quality
              </p>
              <Button variant="outline" className="w-full">Track Sleep</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-muted-foreground mb-6">
            Take the first step towards a more mindful and balanced life
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
