'use client';

import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import {
  getCurrentMode,
  getCurrentContent,
  SITE_CONFIG,
  generateCTALink,
  generateAriaLabel,
} from '@/content/constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const mode = getCurrentMode();
  const content = getCurrentContent();

  return (
    <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <Container className="relative z-10 text-center">
        {/* Logo removed as requested */}

        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-slate-700">
            {SITE_CONFIG.brand}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {content.hero.headline}
          </span>
        </h1>

        {/* Primary claim */}
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
          {SITE_CONFIG.primaryClaim}
        </p>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
          {content.hero.subheadline}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={generateCTALink(mode, 'hero')}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label={generateAriaLabel(mode, '相談', 'hero')}
            >
              {content.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <div className="text-sm text-slate-500">無料相談・見積もりから</div>
        </div>

        {/* 最安例バナー */}
        <div className="mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm">
            <span className="font-semibold">最安例</span>
            <span>
              ライト（¥3,000）＋シルバー（¥499/月）＝ <strong>月額499円で公開維持</strong>。まずは相談を。
            </span>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">安心の実績</p>
          <div className="flex justify-center items-center gap-8 text-slate-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-xs">制作実績</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-xs">満足度</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3日</div>
              <div className="text-xs">最短納期</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
