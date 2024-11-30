import { systemConfig, getSystemPrompt } from '@/config/ai-config';
import { Message } from '@/types';

export async function generateAIResponse(messages: Message[]): Promise<string> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4-0125-preview',
        messages: [
          { role: 'system', content: getSystemPrompt() },
          ...messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.content,
          })),
        ],
        temperature: Number(process.env.OPENAI_TEMPERATURE) || 0.5,
        max_tokens: Number(process.env.OPENAI_MAX_TOKENS) || 400,
        presence_penalty: Number(process.env.OPENAI_PRESENCE_PENALTY) || 0.6,
        frequency_penalty: Number(process.env.OPENAI_FREQUENCY_PENALTY) || 0.3,
        stream: process.env.OPENAI_STREAM === 'true',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate AI response');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('AI response generation error:', error);
    return 'I apologize, but I'm having trouble responding right now. Please try again in a moment.';
  }
}

export function detectCrisis(message: string): boolean {
  return systemConfig.safetyProtocol.crisisKeywords.some(
    keyword => message.toLowerCase().includes(keyword.toLowerCase())
  );
}

export function getCrisisResponse(): string {
  return systemConfig.safetyProtocol.crisisResponse;
}