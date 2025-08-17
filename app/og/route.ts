import { NextResponse } from 'next/server';
import {
  getCurrentMode,
  getCurrentContent,
  SITE_CONFIG,
} from '@/content/constants';

export const runtime = 'edge';

export async function GET() {
  const mode = getCurrentMode();
  const content = getCurrentContent();

  // 一時的にOGP画像生成を無効にして、テキストレスポンスを返す
  return new NextResponse(
    JSON.stringify({
      brand: SITE_CONFIG.brand,
      headline: content.hero.headline,
      subheadline: content.hero.subheadline,
      primaryClaim: SITE_CONFIG.primaryClaim,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
