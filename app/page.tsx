import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import WorksOrUseCases from '@/components/sections/WorksOrUseCases';
import Pricing from '@/components/sections/Pricing';
import Flow from '@/components/sections/Flow';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
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
