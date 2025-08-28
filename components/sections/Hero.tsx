'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import TextType from '@/components/ui/text-type';
import Prism from '@/components/ui/prism';
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

  // タイピングエフェクト用のテキスト配列
  const typingTexts = [
    content.hero.headline,
    "学生向けポートフォリオ制作",
    "フリーランス向けサイト制作",
    "企業向けコーポレートサイト制作"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Prism background */}
      <div className="absolute inset-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
          transparent={true}
        />
      </div>

      <Container className="relative z-10 text-center">
        {/* Enhanced brand badge */}
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-6 py-3 mb-12 shadow-lg">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-slate-700">
            {SITE_CONFIG.brand}
          </span>
        </div>

        {/* Enhanced main headline with typing effect - Fixed height container */}
        <div className="h-24 sm:h-32 md:h-40 lg:h-48 flex items-center justify-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            <TextType 
              text={typingTexts}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient"
              textColors={["#1e40af", "#6d28d9", "#047857"]}
              initialDelay={1000}
              loop={true}
            />
          </h1>
        </div>

        {/* Enhanced primary claim */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-700 mb-6 font-bold">
          <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            {SITE_CONFIG.primaryClaim}
          </span>
        </p>

        {/* Enhanced subheadline */}
        <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
          {content.hero.subheadline}
        </p>

        {/* Enhanced CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link href={generateCTALink(mode, 'hero')}>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-5 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 overflow-hidden group"
              aria-label={generateAriaLabel(mode, '相談', 'hero')}
            >
              <span className="relative z-10 flex items-center gap-3">
                {content.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>

          <div className="flex items-center gap-2 text-slate-600">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-base font-medium">無料相談・見積もりから</span>
          </div>
        </div>

        {/* Enhanced 最安例バナー */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-800 text-base shadow-lg">
            <Star className="w-5 h-5 text-emerald-600" />
            <span className="font-bold">最安例</span>
            <span className="font-medium">
              ライト（¥3,000）＋シルバー（¥499/月）＝ <strong className="text-emerald-700">月額499円で公開維持</strong>
            </span>
          </div>
        </div>

        {/* Enhanced Trust indicators */}
        <div className="mt-20">
          <p className="text-base text-slate-500 mb-8 font-medium">安心の実績</p>
          <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-slate-600 font-medium mt-2">制作実績</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-black text-purple-600 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm text-slate-600 font-medium mt-2">満足度</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-black text-emerald-600 group-hover:scale-110 transition-transform duration-300">3日</div>
              <div className="text-sm text-slate-600 font-medium mt-2">最短納期</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
