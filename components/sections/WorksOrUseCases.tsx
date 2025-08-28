'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCurrentContent, getCurrentMode } from '@/content/constants';
import { Sparkles, Award } from 'lucide-react';
import Image from 'next/image';

export default function WorksOrUseCases() {
  const content = getCurrentContent();
  const mode = getCurrentMode();

  if (content.worksOrUseCases.type === 'useCases' && mode === 'app') {
    return (
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white">制作実績</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                {content.worksOrUseCases.title}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
              {content.worksOrUseCases.subtitle}
            </p>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              {content.worksOrUseCases.items.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="text-sm font-medium data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300 text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {item.title.replace('システム', '')}
                </TabsTrigger>
              ))}
            </TabsList>

            {content.worksOrUseCases.items.map((item, index) => (
              <TabsContent
                key={index}
                value={index.toString()}
                className="mt-8"
              >
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20">
                  <CardContent className="p-12 text-center">
                    <h3 className="text-3xl font-black text-white mb-6">
                      {item.title}
                    </h3>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    );
  }

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
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">制作実績</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              {content.worksOrUseCases.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
            {content.worksOrUseCases.subtitle}
          </p>
        </div>

        {/* スマホ用：横スクロール、デスクトップ用：グリッド */}
        <div className="md:hidden">
          {/* スクロールインジケーター */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {content.worksOrUseCases.items.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-blue-300'}`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* スマホ用の横スクロールコンテナ */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {content.worksOrUseCases.items.map((item, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden group snap-start hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20"
              >
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title}のサンプル画像`}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    {item.category && (
                      <Badge className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white border-0 shadow-lg">
                        {item.category}
                      </Badge>
                    )}
                  </div>
                )}
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* デスクトップ用のグリッドレイアウト */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {content.worksOrUseCases.items.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:-translate-y-4 overflow-hidden group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title}のサンプル画像`}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {item.category && (
                    <Badge className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white border-0 shadow-lg">
                      {item.category}
                    </Badge>
                  )}
                </div>
              )}
              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
