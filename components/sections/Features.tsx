'use client';

import { Card, CardContent } from '@/components/ui/card';
import { getCurrentContent } from '@/content/constants';
import {
  Zap,
  GraduationCap,
  Smartphone,
  Globe,
  Brain,
  BarChart3,
  Languages,
  TestTube,
  Layers,
  Cloud,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  CheckCircle,
  Search,
  Layout,
  Rocket,
  Shield,
  Link,
  FileText,
} from 'lucide-react';

const iconMap = {
  Zap,
  GraduationCap,
  Smartphone,
  Globe,
  Brain,
  BarChart3,
  Languages,
  TestTube,
  Layers,
  Cloud,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  CheckCircle,
  Search,
  Layout,
  Rocket,
  Shield,
  Link,
  FileText,
} as const;

export default function Features() {
  const content = getCurrentContent();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.features.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* スマホ用：横スクロール、デスクトップ用：グリッド */}
        <div className="md:hidden">
          {/* スクロールインジケーター */}
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            </div>
          </div>
          
          {/* スマホ用の横スクロールコンテナ */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {content.features.items.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

              return (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 snap-start"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {IconComponent ? (
                        <IconComponent className="w-7 h-7 text-blue-600" />
                      ) : (
                        <Sparkles className="w-7 h-7 text-blue-600" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* デスクトップ用のグリッドレイアウト */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    ) : (
                      <Sparkles className="w-8 h-8 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
