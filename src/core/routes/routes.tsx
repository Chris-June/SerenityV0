import { RouteObject } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ChatPage } from '../../pages/ChatPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Layout } from '../../shared/components/layout/Layout';
import {
  MoodTrackerPage,
  BreathingExercisePage,
  CopingStrategiesPage,
  HabitTrackerPage,
  AffirmationsPage,
  RemindersPage,
  SleepTrackerPage,
  EmergencyResourcesPage,
} from '@/pages/features';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'chat',
        element: <ChatPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'features',
        children: [
          {
            path: 'mood',
            element: <MoodTrackerPage />,
          },
          {
            path: 'breathing',
            element: <BreathingExercisePage />,
          },
          {
            path: 'coping',
            element: <CopingStrategiesPage />,
          },
          {
            path: 'habits',
            element: <HabitTrackerPage />,
          },
          {
            path: 'affirmations',
            element: <AffirmationsPage />,
          },
          {
            path: 'reminders',
            element: <RemindersPage />,
          },
          {
            path: 'sleep',
            element: <SleepTrackerPage />,
          },
          {
            path: 'emergency',
            element: <EmergencyResourcesPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
