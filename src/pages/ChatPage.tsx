import React from 'react';
import { ChatInterface } from '../features/chat/components/ChatInterface';

export const ChatPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
        Chat with Serenity
      </h1>
      <ChatInterface />
    </div>
  );
};
