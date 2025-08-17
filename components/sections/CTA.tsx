'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormEmbed } from '@/components/ui/form-embed';
import { getCurrentContent, SITE_CONFIG } from '@/content/constants';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  const content = getCurrentContent();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-soft-light opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-soft-light opacity-5 animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              あなたのプロジェクトに最適なプランをご提案します。
              お気軽にお話をお聞かせください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href={SITE_CONFIG.contactUrl}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  aria-label="無料相談の申し込みフォームへ移動"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  無料相談を申し込む
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Form embed section */}
            {SITE_CONFIG.formEmbedCode && (
              <div className="mt-12 p-6 bg-slate-50 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  お急ぎの方はこちらから直接お問い合わせ
                </h3>
                <FormEmbed
                  className="form-embed-container"
                  title="お問い合わせフォーム"
                  height={400}
                  lazyLoad={true}
                />
              </div>
            )}

            <div className="mt-8 flex items-center justify-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">平日 10:00-18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">24時間受付</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
