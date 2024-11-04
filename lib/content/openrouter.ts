import { rateLimiter } from './rate-limiter';
import { APIError, ValidationError } from './errors';
import { generatePrompt } from './prompts';
import { ContentRequest } from './types';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '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';
const SITE_URL = 'https://quoteease.com';
const SITE_NAME = 'QuoteEase';

interface OpenRouterResponse {
  id: string;
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
}

export async function generateContent(request: ContentRequest): Promise<any> {
  try {
    await rateLimiter.waitForToken();

    const prompt = generatePrompt(request.type, request.locale, request.data);
    console.log('\nSending prompt to OpenRouter:', prompt);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": SITE_URL,
        "X-Title": SITE_NAME,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "openai/gpt-4",
        "messages": [
          {
            "role": "system",
            "content": "You are a professional content generator for a multilingual website about home improvement and professional services in Luxembourg. Generate detailed, accurate, and engaging content in JSON format following the exact schema provided in the prompt."
          },
          {
            "role": "user",
            "content": prompt
          }
        ],
        "temperature": 0.7,
        "max_tokens": 2000
      })
    });

    if (!response.ok) {
      console.error('OpenRouter API error:', {
        status: response.status,
        statusText: response.statusText
      });
      throw new APIError(
        `OpenRouter API error: ${response.statusText}`,
        response.status
      );
    }

    const data: OpenRouterResponse = await response.json();
    console.log('\nOpenRouter API Response:', JSON.stringify(data, null, 2));

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid response format:', data);
      throw new ValidationError('Invalid response format from API');
    }

    try {
      // Parse the JSON content
      const content = JSON.parse(data.choices[0].message.content);
      console.log('\nParsed content:', JSON.stringify(content, null, 2));
      return content;
    } catch (error) {
      console.error('JSON parsing error:', error);
      console.error('Raw content:', data.choices[0].message.content);
      throw new ValidationError('Invalid JSON format in API response');
    }

  } catch (error) {
    if (error instanceof APIError || error instanceof ValidationError) {
      throw error;
    }
    
    console.error('Unexpected error:', error);
    throw new APIError(
      `Failed to generate content: ${error.message}`,
      500
    );
  }
}