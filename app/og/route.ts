import { ImageResponse } from '@vercel/og';
import { getCurrentMode, getCurrentContent, SITE_CONFIG } from '@/content/constants';

export const runtime = 'edge';

export async function GET() {
  const mode = getCurrentMode();
  const content = getCurrentContent();
  
  // Get the first pricing plan for display
  const firstPlan = content.pricing.plans[0];
  
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
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            opacity: 0.1,
          }}
        />
        
        {/* Logo/Brand */}
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
        
        {/* Main headline */}
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
        
        {/* Subheadline */}
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
        
        {/* Price info */}
        {firstPlan && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '16px 24px',
              backgroundColor: '#f3f4f6',
              borderRadius: '12px',
              border: '2px solid #e5e7eb',
            }}
          >
            <span
              style={{
                fontSize: 20,
                color: '#6b7280',
              }}
            >
              料金
            </span>
            <span
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#059669',
              }}
            >
              ¥{firstPlan.price}
            </span>
            <span
              style={{
                fontSize: 20,
                color: '#6b7280',
              }}
            >
              {firstPlan.period}
            </span>
          </div>
        )}
        
        {/* Primary claim */}
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
