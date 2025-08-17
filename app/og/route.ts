import { ImageResponse } from '@vercel/og';
import { getCurrentMode, getCurrentContent, SITE_CONFIG } from '@/content/constants';

export const runtime = 'edge';

export async function GET() {
  const mode = getCurrentMode();
  const content = getCurrentContent();
  
  // Get the first pricing plan for display
  const firstPlan = content.pricing.plans[0];
  
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '40px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                opacity: 0.1,
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 48,
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: 20,
                textAlign: 'center',
              },
              children: SITE_CONFIG.brand,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 36,
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: 16,
                textAlign: 'center',
                maxWidth: '800px',
                lineHeight: 1.2,
              },
              children: content.hero.headline,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 24,
                color: '#6b7280',
                marginBottom: 32,
                textAlign: 'center',
                maxWidth: '600px',
              },
              children: content.hero.subheadline,
            },
          },
          ...(firstPlan ? [{
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '16px 24px',
                backgroundColor: '#f3f4f6',
                borderRadius: '12px',
                border: '2px solid #e5e7eb',
              },
              children: [
                {
                  type: 'span',
                  props: {
                    style: {
                      fontSize: 20,
                      color: '#6b7280',
                    },
                    children: '料金',
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: {
                      fontSize: 32,
                      fontWeight: 'bold',
                      color: '#059669',
                    },
                    children: `¥${firstPlan.price}`,
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: {
                      fontSize: 20,
                      color: '#6b7280',
                    },
                    children: firstPlan.period,
                  },
                },
              ],
            },
          }] : []),
          {
            type: 'div',
            props: {
              style: {
                fontSize: 20,
                color: '#059669',
                fontWeight: 'bold',
                marginTop: 32,
                textAlign: 'center',
              },
              children: SITE_CONFIG.primaryClaim,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
}
