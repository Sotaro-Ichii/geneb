import {
  getCurrentMode,
  getCurrentContent,
  SITE_CONFIG,
} from '@/content/constants';

export function StructuredData() {
  const mode = getCurrentMode();
  const content = getCurrentContent();

  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.brand,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://geneb.jp',
      logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://geneb.jp'}/logo.png`,
      description: SITE_CONFIG.primaryClaim,
      sameAs: ['https://twitter.com/geneb', 'https://github.com/geneb'],
    };

    // Mode-specific structured data
    if (mode === 'corporate') {
      // Product/Offer schema for corporate pricing
      const pricingData = content.pricing.plans.map((plan) => ({
        '@type': 'Product',
        name: `${SITE_CONFIG.brand} - ${plan.name}`,
        description: plan.description,
        offers: {
          '@type': 'Offer',
          price: plan.price.replace(/,/g, ''),
          priceCurrency: 'JPY',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: SITE_CONFIG.brand,
          },
        },
        category: 'Web Development Service',
      }));

      return [baseData, ...pricingData];
    }

    if (mode === 'app') {
      // SoftwareApplication schema for app development
      const appData = {
        '@type': 'SoftwareApplication',
        name: `${SITE_CONFIG.brand} - ${content.hero.headline}`,
        description: content.hero.subheadline,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: content.pricing.plans[0].price.replace(/,/g, ''),
          priceCurrency: 'JPY',
          availability: 'https://schema.org/InStock',
        },
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.brand,
        },
      };

      return [baseData, appData];
    }

    // Portfolio mode - Service schema
    const serviceData = {
      '@type': 'Service',
      name: `${SITE_CONFIG.brand} - ${content.hero.headline}`,
      description: content.hero.subheadline,
      provider: {
        '@type': 'Organization',
        name: SITE_CONFIG.brand,
      },
      areaServed: 'JP',
      serviceType: 'Portfolio Development',
    };

    return [baseData, serviceData];
  };

  const structuredData = generateStructuredData();

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
    </>
  );
}
