'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container, Section } from '@/components/ui/container';
import {
  getCurrentMode,
  SITE_CONFIG,
  generateCTALink,
  generateAriaLabel,
  pricing,
} from '@/content/constants';
import { Check, Star, Sparkles, Zap, Crown } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '@/components/ui/analytics';

const yen = new Intl.NumberFormat('ja-JP');

export default function Pricing() {
  const mode = getCurrentMode();
  // annual perk view once
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent('annual_perk_view', 'engagement', 'annual_perk');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    queueMicrotask(() => {
      const el = document.getElementById('annual-perk');
      if (el) observer.observe(el);
    });
  }

  return (
    <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden" id="pricing">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delay">
        <div className="w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-20 left-1/3 animate-float">
        <div className="w-1 h-1 bg-emerald-400 rounded-full opacity-40"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">料金プラン</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
              料金プラン
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium">
            制作プラン × 月額プラン × オプション × 通年契約特典で最適提案
          </p>
        </div>

        {/* 1) 制作プラン（買い切り） */}
        <div className="mb-16">
          <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              制作プラン（買い切り）
            </span>
          </h3>
          
          {/* スマホ用：横スクロール */}
          <div className="md:hidden">
            {/* スクロールインジケーター */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {pricing.production.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-rose-500' : 'bg-rose-300'}`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* スマホ用の横スクロールコンテナ */}
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              {pricing.production.map((plan) => (
                <Card key={plan.id} className="flex-shrink-0 w-80 relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md border border-blue-200 snap-start group hover:scale-105">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs border-0 shadow-lg">
                    <Zap className="w-3 h-3 mr-1" />
                    キャンペーン
                  </Badge>
                  <CardHeader className="text-center pb-4">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors duration-500">{plan.name}</h4>
                    <div className="mt-3 space-x-2">
                      <span className="text-slate-400 line-through text-sm">¥{yen.format(plan.regularPrice)}</span>
                      <span className="text-3xl font-black text-rose-600">¥{yen.format(plan.campaignPrice)}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2">{plan.target}</p>
                  </CardHeader>
                  <CardContent className="pt-4 flex flex-col grow">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={SITE_CONFIG.contactUrl} data-plan-id={plan.id} data-plan-name={plan.name} data-price={plan.campaignPrice} className="mt-auto block">
                      <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105" aria-label={`${plan.name}を相談する`} onClick={() => trackEvent('cta_production_click','engagement', `${plan.id}_${plan.name}`, plan.campaignPrice)}>
                        このプランで相談する
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* デスクトップ用のグリッドレイアウト */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch">
            {pricing.production.map((plan) => (
              <Card key={plan.id} className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md border border-blue-200 group hover:-translate-y-2">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 shadow-lg">
                  <Zap className="w-4 h-4 mr-1" />
                  キャンペーン
                </Badge>
                <CardHeader className="text-center pb-4">
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors duration-500">{plan.name}</h4>
                  <div className="mt-3 space-x-2">
                    <span className="text-slate-400 line-through">¥{yen.format(plan.regularPrice)}</span>
                    <span className="text-4xl font-black text-rose-600">¥{yen.format(plan.campaignPrice)}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">{plan.target}</p>
                </CardHeader>
                <CardContent className="pt-4 flex flex-col grow">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={SITE_CONFIG.contactUrl} data-plan-id={plan.id} data-plan-name={plan.name} data-price={plan.campaignPrice} className="mt-auto block">
                    <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105" aria-label={`${plan.name}を相談する`} onClick={() => trackEvent('cta_production_click','engagement', `${plan.id}_${plan.name}`, plan.campaignPrice)}>
                      このプランで相談する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 2) 月額プラン（維持・更新） */}
        <div className="mt-20 mb-16">
          <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              月額プラン（維持・更新）
            </span>
          </h3>
          
          {/* スマホ用：横スクロール */}
          <div className="md:hidden">
            {/* スクロールインジケーター */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {pricing.monthly.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-blue-300'}`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* スマホ用の横スクロールコンテナ */}
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              {pricing.monthly.map((plan) => (
                <Card key={plan.id} className="flex-shrink-0 w-80 relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md border border-blue-200 snap-start group hover:scale-105">
                  {(plan.id === 'gold' || plan.id === 'platinum') && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      人気
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-500">{plan.name}</h4>
                    <div className="mt-3">
                      <span className="text-3xl font-black text-blue-600">¥{yen.format(plan.priceMonthly)}</span>
                      <span className="text-slate-500 ml-1 text-sm">/月</span>
                    </div>
                    {plan.target && (
                      <p className="text-xs text-slate-600 mt-2">{plan.target}</p>
                    )}
                  </CardHeader>
                  <CardContent className="pt-4 flex flex-col grow">
                    <ul className="space-y-3 mb-6">
                      {plan.includes.map((inc, i) => {
                        const highlightGold = plan.id === 'gold' && inc.includes('アクセス解析レポート');
                        const highlightPlat = plan.id === 'platinum' && (inc.includes('ブログ化') || inc.includes('転用'));
                        return (
                          <li key={i} className={`flex items-start gap-3 ${highlightGold || highlightPlat ? 'bg-yellow-50 rounded-lg px-3 py-2' : ''}`}>
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{inc}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <Link href={SITE_CONFIG.contactUrl} data-plan-id={plan.id} data-plan-name={plan.name} data-price={plan.priceMonthly} className="mt-auto block">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105" aria-label={`${plan.name}月額で相談する`} onClick={() => trackEvent('cta_monthly_click','engagement', `${plan.id}_${plan.name}`, plan.priceMonthly)}>
                        この月額で相談する
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* デスクトップ用のグリッドレイアウト */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch">
            {pricing.monthly.map((plan) => (
              <Card key={plan.id} className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md border border-blue-200 group hover:-translate-y-2">
                {(plan.id === 'gold' || plan.id === 'platinum') && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    人気
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-500">{plan.name}</h4>
                  <div className="mt-3">
                    <span className="text-4xl font-black text-blue-600">¥{yen.format(plan.priceMonthly)}</span>
                    <span className="text-slate-500 ml-1 text-sm">/月</span>
                  </div>
                  {plan.target && (
                    <p className="text-sm text-slate-600 mt-2">{plan.target}</p>
                  )}
                </CardHeader>
                <CardContent className="pt-4 flex flex-col grow">
                  <ul className="space-y-3 mb-8">
                    {plan.includes.map((inc, i) => {
                      const highlightGold = plan.id === 'gold' && inc.includes('アクセス解析レポート');
                      const highlightPlat = plan.id === 'platinum' && (inc.includes('ブログ化') || inc.includes('転用'));
                      return (
                        <li key={i} className={`flex items-start gap-3 ${highlightGold || highlightPlat ? 'bg-yellow-50 rounded-lg px-3 py-2' : ''}`}>
                          <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{inc}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link href={SITE_CONFIG.contactUrl} data-plan-id={plan.id} data-plan-name={plan.name} data-price={plan.priceMonthly} className="mt-auto block">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105" aria-label={`${plan.name}月額で相談する`} onClick={() => trackEvent('cta_monthly_click','engagement', `${plan.id}_${plan.name}`, plan.priceMonthly)}>
                      この月額で相談する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 3) オプション & 通年契約特典 */}
        <div className="mt-20">
          <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              オプション & 通年契約特典
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md border border-blue-200 group hover:-translate-y-2 transition-all duration-500">
              <CardHeader>
                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-500">オプション</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pricing.options.map((opt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{opt}</span>
                    </li>
                  ))}
                </ul>
                <Link href={SITE_CONFIG.contactUrl} data-plan-id="options" data-plan-name="オプション" data-price="-">
                  <Button variant="secondary" className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold rounded-xl shadow-lg transition-all duration-500 hover:scale-105" aria-label="オプションについて相談する" onClick={() => trackEvent('cta_options_click','engagement','options')}>
                    オプションについて相談する
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-md border border-blue-200 group hover:-translate-y-2 transition-all duration-500" id="annual-perk">
              <CardHeader>
                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-500">{pricing.annualContractPerk.title}</h4>
                <Badge className="w-fit bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
                  <Crown className="w-4 h-4 mr-1" />
                  3ヶ月無料
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pricing.annualContractPerk.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500">{pricing.annualContractPerk.note}</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-slate-500 mt-8 text-center">{SITE_CONFIG.taxNote || pricing.taxNote}</p>
        </div>
      </Container>
    </Section>
  );
}
