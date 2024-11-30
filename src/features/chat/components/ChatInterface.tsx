import { useState, useEffect } from 'react';
import { Send, Plus, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { useChat } from '@/context/ChatContext';
import { Message, InteractionMode, SentimentAnalysis } from '@/types';
import { cn } from '@/lib/utils';
import { ModeSelector } from './ModeSelector';
import { analyzeSentiment } from '@/services/sentiment';

export function ChatInterface() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { state, dispatch } = useChat();

  const handleModeChange = (mode: InteractionMode) => {
    dispatch({ type: 'SET_MODE', payload: mode });
    
    const systemMessage: Message = {
      id: crypto.randomUUID(),
      content: getModeChangeMessage(mode),
      sender: 'companion',
      timestamp: new Date(),
    };
    dispatch({ type: 'ADD_MESSAGE', payload: systemMessage });
  };

  const getModeChangeMessage = (mode: InteractionMode): string => {
    switch (mode) {
      case 'conversational':
        return "I'll keep our conversation casual and open. Feel free to share whatever's on your mind.";
      case 'reflective':
        return "I'll focus on understanding your feelings and thoughts more deeply. Let's explore together.";
      case 'visualization':
        return "I can generate calming images to help you express or process your feelings. Would you like to try that?";
      case 'feedback':
        return "I'd love to hear your thoughts about our interactions. Your feedback helps me improve.";
      case 'crisis':
        return "I'm here to help you through this difficult moment. Your safety is the top priority. Would you like to see some immediate support options?";
      default:
        return "How can I support you today?";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setIsAnalyzing(true);

    try {
      const sentiment = await analyzeSentiment(input);
      
      const message: Message = {
        id: crypto.randomUUID(),
        content: input,
        sender: 'user',
        timestamp: new Date(),
        sentiment,
      };

      dispatch({ type: 'ADD_MESSAGE', payload: message });
      setInput('');

      // Simulate companion response based on sentiment and mode
      setTimeout(() => {
        const response: Message = {
          id: crypto.randomUUID(),
          content: getResponseBasedOnSentiment(sentiment, state.mode),
          sender: 'companion',
          timestamp: new Date(),
        };
        dispatch({ type: 'ADD_MESSAGE', payload: response });
      }, 1000);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getResponseBasedOnSentiment = (
    sentiment: SentimentAnalysis,
    mode: InteractionMode
  ): string => {
    const { score, emotions, topics } = sentiment;
    
    if (score < -0.5) {
      return "I can sense that you're going through a difficult time. Would you like to explore some coping strategies together?";
    } else if (score < 0) {
      return "It sounds like you're facing some challenges. Remember, it's okay to not be okay. Would you like to talk more about what's troubling you?";
    } else if (score > 0.5) {
      return "I'm glad to hear you're feeling positive! Would you like to reflect on what's contributing to these good feelings?";
    } else {
      return "Thank you for sharing. Would you like to explore these thoughts and feelings further?";
    }
  };

  const renderSentimentIndicator = (sentiment: SentimentAnalysis) => {
    const getEmotionColor = (value: number) => {
      if (value > 0.7) return 'bg-green-500';
      if (value > 0.4) return 'bg-yellow-500';
      return 'bg-red-500';
    };

    return (
      <div className="mt-2 space-y-1">
        {Object.entries(sentiment.emotions).map(([emotion, value]) => (
          <div key={emotion} className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground capitalize w-16">
              {emotion}
            </span>
            <Progress
              value={value * 100}
              className={cn("h-1", getEmotionColor(value))}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden border">
      <div className="flex items-center justify-between p-4 border-b bg-muted/50">
        <h2 className="text-lg font-semibold">Chat with Serenity</h2>
        <ModeSelector
          currentMode={state.mode}
          onModeChange={handleModeChange}
        />
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {state.messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex',
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  'max-w-[80%] rounded-lg p-3',
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground ml-4'
                    : 'bg-muted text-muted-foreground mr-4'
                )}
              >
                {message.content}
                {message.sentiment && message.sender === 'user' && (
                  renderSentimentIndicator(message.sentiment)
                )}
                {message.image && (
                  <img
                    src={message.image}
                    alt="Generated visualization"
                    className="mt-2 rounded-md max-w-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => {}}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-[2.5rem] max-h-[10rem]"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <Button
            className="shrink-0"
            onClick={handleSend}
            disabled={!input.trim() || isAnalyzing}
          >
            {isAnalyzing ? (
              <Brain className="h-4 w-4 animate-pulse" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}