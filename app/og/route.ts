import { ImageResponse } from '@vercel/og';
import { getCurrentMode, getCurrentContent, SITE_CONFIG } from '@/content/constants';

export const runtime = 'edge';

export async function GET() {
  const mode = getCurrentMode();
  const content = getCurrentContent();
  
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          {SITE_CONFIG.brand}
        </div>
        
        <div
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: 16,
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.2,
          }}
        >
          {content.hero.headline}
        </div>
        
        <div
          style={{
            fontSize: 24,
            color: '#6b7280',
            marginBottom: 32,
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          {content.hero.subheadline}
        </div>
        
        <div
          style={{
            fontSize: 20,
            color: '#059669',
            fontWeight: 'bold',
            marginTop: 32,
            textAlign: 'center',
          }}
        >
          {SITE_CONFIG.primaryClaim}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
