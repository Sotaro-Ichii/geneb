import { NextResponse } from 'next/server';
import { getCurrentMode, getCurrentContent, SITE_CONFIG } from '@/content/constants';

export const runtime = 'edge';

export async function GET() {
  const mode = getCurrentMode();
  const content = getCurrentContent();
  return new NextResponse(
    JSON.stringify({
      brand: SITE_CONFIG.brand,
      headline: content.hero.headline,
      subheadline: content.hero.subheadline,
      mode,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
