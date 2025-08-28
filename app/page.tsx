import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import WorksOrUseCases from '@/components/sections/WorksOrUseCases';
import Pricing from '@/components/sections/Pricing';
import Flow from '@/components/sections/Flow';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import { pricing, SITE_CONFIG } from '@/content/constants';

function JsonLd() {
  const products = pricing.production.map((p) => ({
    '@type': 'Product',
    name: p.name,
    description: p.target,
    brand: SITE_CONFIG.brand,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      price: p.campaignPrice,
      // priceValidUntil: 現在から+6ヶ月（暫定）。要更新。
      priceValidUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 6)
        .toISOString()
        .split('T')[0],
      availability: 'https://schema.org/InStock',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'regularPrice', value: p.regularPrice },
      { '@type': 'PropertyValue', name: 'note', value: p.note || '' },
    ],
  }));

  const services = pricing.monthly.map((m) => ({
    '@type': 'Service',
    name: `${m.name}（月額）`,
    description: (m.includes || []).join('、 '),
    provider: { '@type': 'Organization', name: SITE_CONFIG.brand },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      price: m.priceMonthly,
      // priceValidUntil: 現在から+6ヶ月（暫定）。要更新。
      priceValidUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 6)
        .toISOString()
        .split('T')[0],
      availability: 'https://schema.org/InStock',
    },
  }));

  const json = {
    '@context': 'https://schema.org',
    '@graph': [...products, ...services],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <Hero />
      <Features />
      <WorksOrUseCases />
      <Pricing />
      <Flow />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
