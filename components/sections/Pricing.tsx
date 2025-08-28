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
import { Check, Star } from 'lucide-react';
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
    <Section className="bg-white" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            料金プラン
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            制作プラン × 月額プラン × オプション × 通年契約特典で最適提案
          </p>
        </div>

        {/* 1) 制作プラン（買い切り） */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">制作プラン（買い切り）</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.production.map((plan) => (
              <Card key={plan.id} className="relative border-slate-200">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white">
                  キャンペーン
                </Badge>
                <CardHeader className="text-center pb-2">
                  <h4 className="text-xl font-bold text-slate-900">{plan.name}</h4>
                  <div className="mt-2 space-x-2">
                    <span className="text-slate-400 line-through">¥{yen.format(plan.regularPrice)}</span>
                    <span className="text-3xl font-extrabold text-slate-900">¥{yen.format(plan.campaignPrice)}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{plan.target}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5" />
                        <span className="text-sm text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={SITE_CONFIG.contactUrl} data-plan-id={plan.id} data-plan-name={plan.name} data-price={plan.campaignPrice}>
                    <Button className="w-full" aria-label={`${plan.name}を相談する`} onClick={() => trackEvent('cta_production_click','engagement', `${plan.id}_${plan.name}`, plan.campaignPrice)}>
                      このプランで相談する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 2) 月額プラン（維持・更新） */}
        <div className="mt-16 mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">月額プラン（維持・更新）</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.monthly.map((plan) => (
              <Card key={plan.id} className="relative border-slate-200">
                {(plan.id === 'gold' || plan.id === 'platinum') && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white">
                    <Star className="w-3 h-3 mr-1" />人気
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <h4 className="text-xl font-bold text-slate-900">{plan.name}</h4>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-slate-900">¥{yen.format(plan.priceMonthly)}</span>
                    <span className="text-slate-500 ml-1 text-sm">/月</span>
                  </div>
                  {plan.target && (
                    <p className="text-sm text-slate-600 mt-1">{plan.target}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.includes.map((inc, i) => {
                      const highlightGold = plan.id === 'gold' && inc.includes('アクセス解析レポート');
                      const highlightPlat = plan.id === 'platinum' && (inc.includes('ブログ化') || inc.includes('転用'));
                      return (
                        <li key={i} className={`flex items-start gap-2 ${highlightGold || highlightPlat ? 'bg-yellow-50 rounded px-2 py-1' : ''}`}>
                          <Check className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-sm text-slate-700">{inc}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link href={SITE_CONFIG.contactUrl} data-plan-id={plan.id} data-plan-name={plan.name} data-price={plan.priceMonthly}>
                    <Button className="w-full" aria-label={`${plan.name}月額で相談する`} onClick={() => trackEvent('cta_monthly_click','engagement', `${plan.id}_${plan.name}`, plan.priceMonthly)}>
                      この月額で相談する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 3) オプション & 通年契約特典 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">オプション & 通年契約特典</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200">
              <CardHeader>
                <h4 className="text-xl font-semibold text-slate-900">オプション</h4>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pricing.options.map((opt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-sm text-slate-700">{opt}</span>
                    </li>
                  ))}
                </ul>
                <Link href={SITE_CONFIG.contactUrl} data-plan-id="options" data-plan-name="オプション" data-price="-">
                  <Button variant="secondary" className="w-full" aria-label="オプションについて相談する" onClick={() => trackEvent('cta_options_click','engagement','options')}>
                    オプションについて相談する
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-slate-200" id="annual-perk">
              <CardHeader>
                <h4 className="text-xl font-semibold text-slate-900">{pricing.annualContractPerk.title}</h4>
                <Badge className="w-fit bg-emerald-600 text-white">3ヶ月無料</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {pricing.annualContractPerk.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span className="text-sm text-slate-700">{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500">{pricing.annualContractPerk.note}</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-slate-500 mt-6">{SITE_CONFIG.taxNote || pricing.taxNote}</p>
        </div>
      </Container>
    </Section>
  );
}
