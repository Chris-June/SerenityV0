import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../core/routes/routes';
import { ThemeProvider } from '../core/context/ThemeContext';
import { ChatProvider } from '../core/context/ChatContext';
import { Footer } from '../components/Footer';
import { Header } from '@/shared/components/layout/Header';
import { FeatureModal } from '../components/FeatureModal';
import { LandingPage } from '../components/LandingPage';
import { useState } from 'react';
import './App.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  const [started, setStarted] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          {!started ? (
            <LandingPage onStart={() => setStarted(true)} />
          ) : (
            <>
              <main className="flex-1">
                <div className="container py-6">
                  <FeatureModal />
                </div>
              </main>
            </>
          )}
        </Layout>
      ),
      children: routes,
    },
  ]);

  return (
    <ThemeProvider>
      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;