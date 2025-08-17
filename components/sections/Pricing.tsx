'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container, Section } from '@/components/ui/container';
import { getCurrentMode, getCurrentContent, SITE_CONFIG, generateCTALink, generateAriaLabel } from '@/content/constants';
import { Check, Star, Clock, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const mode = getCurrentMode();
  const content = getCurrentContent();

  return (
    <Section className="bg-white" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.pricing.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            {content.pricing.subtitle}
          </p>
          <p className="text-sm text-slate-500">
            {SITE_CONFIG.pricingNotes.taxNote}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {content.pricing.plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'border-blue-500 shadow-xl scale-105 bg-gradient-to-br from-blue-50 to-white' 
                  : 'border-slate-200 hover:border-blue-300 bg-white'
              }`}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  人気プラン
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    ¥{plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-lg text-slate-500 ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-slate-600">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Plan details */}
                <div className="mb-8 space-y-2 text-sm text-slate-600">
                  {plan.revisions && (
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      <span>{SITE_CONFIG.pricingNotes.revisions}: {plan.revisions}回</span>
                    </div>
                  )}
                  {plan.deliveryDays && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{SITE_CONFIG.pricingNotes.deliveryDays}: {plan.deliveryDays}日</span>
                    </div>
                  )}
                </div>
                
                <Link href={generateCTALink(mode, 'pricing')}>
                  <Button 
                    className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 hover:text-blue-600'
                    }`}
                    aria-label={generateAriaLabel(mode, `${plan.name}プランで相談`, 'pricing')}
                  >
                    このプランで相談する
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {SITE_CONFIG.commonNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}