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
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-4 py-2 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">なぜ選ばれるのか</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
              {content.features.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* スマホ用：横スクロール、デスクトップ用：グリッド */}
        <div className="md:hidden">
          {/* スクロールインジケーター */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex space-x-2">
              {content.features.items.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-blue-300'}`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* スマホ用の横スクロールコンテナ */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-6 scrollbar-hide snap-x snap-mandatory px-2">
            {content.features.items.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

              return (
                <Card
                  key={index}
                  className="flex-shrink-0 w-72 sm:w-80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-md border border-blue-200 snap-start group hover:scale-105 mt-4"
                >
                  <CardContent className="p-6 sm:p-8 text-center relative overflow-hidden">
                    {/* Icon container with enhanced styling */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 mt-2 sm:mt-4 group-hover:scale-110 transition-transform duration-500 border border-blue-200">
                      {IconComponent ? (
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 relative z-10 group-hover:text-blue-700 transition-colors duration-500" />
                      ) : (
                        <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 relative z-10 group-hover:text-blue-700 transition-colors duration-500" />
                      )}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 relative z-10 group-hover:text-blue-700 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed relative z-10 group-hover:text-slate-700 transition-colors duration-500">
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
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/90 backdrop-blur-md border border-blue-200 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Icon container with enhanced styling */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 mt-4 group-hover:scale-110 transition-transform duration-500 border border-blue-200">
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-blue-600 relative z-10 group-hover:text-blue-700 transition-colors duration-500" />
                    ) : (
                      <Sparkles className="w-10 h-10 text-blue-600 relative z-10 group-hover:text-blue-700 transition-colors duration-500" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-blue-700 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed relative z-10 group-hover:text-slate-700 transition-colors duration-500">
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
