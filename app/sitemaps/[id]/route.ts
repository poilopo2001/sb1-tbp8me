import { NextResponse } from 'next/server';
import { generateSitemaps } from '@/lib/seo/sitemap';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { sitemaps } = await generateSitemaps();
  const sitemap = sitemaps.find(s => s.filename === `sitemap-${params.id}.xml`);
  
  if (!sitemap) {
    return new NextResponse(null, { status: 404 });
  }
  
  return new NextResponse(sitemap.content, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, must-revalidate'
    }
  });
}