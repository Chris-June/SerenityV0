import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Message, Mood, InteractionMode } from '@/types';

interface ChatState {
  messages: Message[];
  moods: Mood[];
  mode: InteractionMode;
}

type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'ADD_MOOD'; payload: Mood }
  | { type: 'SET_MODE'; payload: InteractionMode }
  | { type: 'CLEAR_CHAT' };

const initialState: ChatState = {
  messages: [],
  moods: [],
  mode: 'conversational',
};

const ChatContext = createContext<{
  state: ChatState;
  dispatch: React.Dispatch<ChatAction>;
} | null>(null);

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'ADD_MOOD':
      return {
        ...state,
        moods: [...state.moods, action.payload],
      };
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload,
      };
    case 'CLEAR_CHAT':
      return initialState;
    default:
      return state;
  }
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}