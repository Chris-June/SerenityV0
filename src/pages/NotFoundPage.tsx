import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/components/ui/button';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild>
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
};