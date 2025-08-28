'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
  getCurrentMode,
  getCurrentContent,
  SITE_CONFIG,
  generateCTALink,
  generateAriaLabel,
} from '@/content/constants';
import { ArrowRight, Sparkles, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const mode = getCurrentMode();
  const content = getCurrentContent();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-12 shadow-2xl">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold text-white">
            {SITE_CONFIG.brand}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            {content.hero.headline}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-slate-200 mb-6 font-bold">
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {SITE_CONFIG.primaryClaim}
          </span>
        </p>

        <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
          {content.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link href={generateCTALink(mode, 'hero')}>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 border-0 overflow-hidden group"
              aria-label={generateAriaLabel(mode, '相談', 'hero')}
            >
              <span className="relative z-10 flex items-center gap-3">
                {content.hero.cta}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-lg font-medium">無料相談・見積もりから</span>
          </div>
        </div>

        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-md border border-emerald-400/30 text-emerald-100 text-lg shadow-xl">
            <Star className="w-5 h-5 text-emerald-300" />
            <span className="font-bold">最安例</span>
            <span className="font-medium">
              ライト（¥3,000）＋シルバー（¥499/月）＝ <strong className="text-emerald-300">月額499円で公開維持</strong>
            </span>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-lg text-slate-400 mb-8 font-medium">安心の実績</p>
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-slate-300 font-medium mt-2">制作実績</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-purple-400 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm text-slate-300 font-medium mt-2">満足度</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-emerald-400 group-hover:scale-110 transition-transform duration-300">3日</div>
              <div className="text-sm text-slate-300 font-medium mt-2">最短納期</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
