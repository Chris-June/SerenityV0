import { SentimentAnalysis } from '@/types';

// Basic sentiment analysis using a simple word-based approach
// In a production environment, this should be replaced with a more sophisticated ML model or API
const POSITIVE_WORDS = new Set([
  'happy', 'joy', 'excited', 'great', 'wonderful', 'amazing', 'fantastic',
  'good', 'positive', 'excellent', 'peaceful', 'calm', 'relaxed', 'love',
  'grateful', 'thankful', 'blessed', 'optimistic', 'hopeful'
]);

const NEGATIVE_WORDS = new Set([
  'sad', 'angry', 'upset', 'terrible', 'horrible', 'awful', 'bad',
  'negative', 'stressed', 'anxious', 'worried', 'depressed', 'frustrated',
  'disappointed', 'unhappy', 'miserable', 'tired', 'exhausted'
]);

const EMOTION_KEYWORDS = {
  joy: ['happy', 'joy', 'excited', 'delighted', 'pleased', 'cheerful'],
  sadness: ['sad', 'unhappy', 'depressed', 'down', 'blue', 'gloomy'],
  anger: ['angry', 'frustrated', 'annoyed', 'irritated', 'mad', 'furious'],
  fear: ['afraid', 'scared', 'anxious', 'worried', 'nervous', 'terrified'],
  surprise: ['surprised', 'amazed', 'astonished', 'shocked', 'stunned'],
};

export async function analyzeSentiment(text: string): Promise<SentimentAnalysis> {
  const words = text.toLowerCase().split(/\W+/);
  let positiveCount = 0;
  let negativeCount = 0;
  const wordCount = words.length;

  // Count positive and negative words
  words.forEach(word => {
    if (POSITIVE_WORDS.has(word)) positiveCount++;
    if (NEGATIVE_WORDS.has(word)) negativeCount++;
  });

  // Calculate sentiment score (-1 to 1)
  const score = wordCount > 0 
    ? (positiveCount - negativeCount) / wordCount 
    : 0;

  // Calculate magnitude (0 to +inf)
  const magnitude = (positiveCount + negativeCount) / (wordCount || 1);

  // Analyze emotions
  const emotions = {
    joy: 0,
    sadness: 0,
    anger: 0,
    fear: 0,
    surprise: 0
  };

  // Calculate emotion scores
  words.forEach(word => {
    for (const [emotion, keywords] of Object.entries(EMOTION_KEYWORDS)) {
      if (keywords.includes(word)) {
        emotions[emotion as keyof typeof emotions] += 1;
      }
    }
  });

  // Normalize emotion scores
  for (const emotion in emotions) {
    emotions[emotion as keyof typeof emotions] /= (wordCount || 1);
  }

  return {
    score,
    magnitude,
    emotions,
    topics: [] // Add an empty array of topics
  };
}
