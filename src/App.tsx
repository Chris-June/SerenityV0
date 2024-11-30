import { ChatProvider } from '@/context/ChatContext';
import { ChatInterface } from '@/components/ChatInterface';
import { LandingPage } from '@/components/LandingPage';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { FeatureModal } from '@/components/FeatureModal';
import { useState } from 'react';

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="flex flex-col min-h-screen">
        <LandingPage onStart={() => setStarted(true)} />
        <Footer />
      </div>
    );
  }

  return (
    <ChatProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 bg-gradient-to-b from-background to-muted p-4 md:p-8">
          <main className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Mental Health Companion
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <ChatInterface />
            </div>
          </main>
        </div>
        <Footer />
        <FeatureModal />
      </div>
    </ChatProvider>
  );
}

export default App;