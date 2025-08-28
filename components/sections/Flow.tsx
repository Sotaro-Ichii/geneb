'use client';

import { Card, CardContent } from '@/components/ui/card';
import { getCurrentContent } from '@/content/constants';
import {
  MessageCircle,
  Users,
  Cpu,
  Edit,
  CheckCircle,
  Shield,
  Target,
  Search,
  RefreshCw,
  Rocket,
  TrendingUp,
  Lightbulb,
  Plus,
  Network,
  MessageSquare,
  Zap,
  Layout,
  FileText,
  Link,
} from 'lucide-react';

const iconMap = {
  MessageCircle,
  Users,
  Cpu,
  Edit,
  CheckCircle,
  Shield,
  Target,
  Search,
  RefreshCw,
  Rocket,
  TrendingUp,
  Lightbulb,
  Plus,
  Network,
  MessageSquare,
  Zap,
  Layout,
  FileText,
  Link,
} as const;

export default function Flow() {
  const content = getCurrentContent();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.flow.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {content.flow.subtitle}
          </p>
        </div>

        {/* スマホ用：横スクロール */}
        <div className="md:hidden">
          {/* スクロールインジケーター */}
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {content.flow.steps.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-blue-300'}`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* スマホ用の横スクロールコンテナ */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {content.flow.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];

              return (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white snap-start"
                >
                  <CardContent className="p-6 text-center relative">
                    {/* Step number */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                      {index + 1}
                    </div>

                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 mt-2">
                      {IconComponent ? (
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      ) : (
                        <MessageCircle className="w-6 h-6 text-blue-600" />
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* デスクトップ用のグリッドレイアウト */}
        <div className="hidden md:block relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -translate-y-1/2 z-0"></div>

          <div
            className={`grid gap-8 ${
              content.flow.steps.length <= 3
                ? 'md:grid-cols-3'
                : 'md:grid-cols-2 lg:grid-cols-3'
            } relative z-10`}
          >
            {content.flow.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];

              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-8 text-center relative">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                      {IconComponent ? (
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      ) : (
                        <MessageCircle className="w-8 h-8 text-blue-600" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
