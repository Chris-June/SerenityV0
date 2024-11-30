import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../../lib/utils';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/chat', label: 'Chat' },
  { path: '/profile', label: 'Profile' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="flex space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            'px-4 py-2 rounded-md transition-colors',
            location.pathname === item.path
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
