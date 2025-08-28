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
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delay">
        <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 left-1/3 animate-float">
        <div className="w-1 h-1 bg-emerald-400 rounded-full opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">なぜ選ばれるのか</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              {content.features.title}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* スマホ用：横スクロール、デスクトップ用：グリッド */}
        <div className="md:hidden">
          {/* スクロールインジケーター */}
          <div className="flex justify-center mb-6">
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
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {content.features.items.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

              return (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 snap-start group hover:scale-105"
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon container with enhanced styling */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 mt-4 group-hover:scale-110 transition-transform duration-500 border border-white/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {IconComponent ? (
                        <IconComponent className="w-10 h-10 text-blue-400 relative z-10 group-hover:text-white transition-colors duration-500" />
                      ) : (
                        <Sparkles className="w-10 h-10 text-blue-400 relative z-10 group-hover:text-white transition-colors duration-500" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-blue-300 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors duration-500">
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
                className="border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon container with enhanced styling */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 mt-4 group-hover:scale-110 transition-transform duration-500 border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-blue-400 relative z-10 group-hover:text-white transition-colors duration-500" />
                    ) : (
                      <Sparkles className="w-10 h-10 text-blue-400 relative z-10 group-hover:text-white transition-colors duration-500" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-blue-300 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors duration-500">
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
