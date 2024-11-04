import { NextResponse } from 'next/server';
import { contentQueue } from '@/lib/content/queue';
import { contentCache } from '@/lib/content/cache';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { Locale } from '@/lib/i18n';

export async function POST(request: Request) {
  try {
    const { type, locale, data } = await request.json();
    
    // Validate request
    if (!type || !locale || !data) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check cache first
    const cached = contentCache.get(type, locale as Locale, data.slug);
    if (cached) {
      return NextResponse.json({ content: cached.content });
    }

    // Queue content generation
    await contentQueue.add({
      type,
      locale: locale as Locale,
      data,
      priority: 1
    });

    return NextResponse.json({
      message: 'Content generation queued',
      queueLength: contentQueue.getQueueLength()
    });

  } catch (error) {
    console.error('Content generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const locale = searchParams.get('locale') as Locale;
  const slug = searchParams.get('slug');

  if (!type || !locale || !slug) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  const cached = contentCache.get(type, locale, slug);
  if (cached) {
    return NextResponse.json({ content: cached.content });
  }

  return NextResponse.json(
    { error: 'Content not found' },
    { status: 404 }
  );
}