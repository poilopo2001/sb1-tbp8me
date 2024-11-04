import { NextResponse } from 'next/server';
import { generateSitemaps } from '@/lib/seo/sitemap';

export async function GET() {
  const { sitemapIndex } = await generateSitemaps();
  
  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, must-revalidate'
    }
  });
}