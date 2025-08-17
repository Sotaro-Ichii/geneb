'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCurrentContent, getCurrentMode } from '@/content/constants';
import Image from 'next/image';

export default function WorksOrUseCases() {
  const content = getCurrentContent();
  const mode = getCurrentMode();

  if (content.worksOrUseCases.type === 'useCases' && mode === 'app') {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {content.worksOrUseCases.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {content.worksOrUseCases.subtitle}
            </p>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white shadow-sm">
              {content.worksOrUseCases.items.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="text-sm font-medium data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  {item.title.replace('システム', '')}
                </TabsTrigger>
              ))}
            </TabsList>

            {content.worksOrUseCases.items.map((item, index) => (
              <TabsContent key={index} value={index.toString()} className="mt-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-12 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.worksOrUseCases.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {content.worksOrUseCases.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.worksOrUseCases.items.map((item, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title}のサンプル画像`}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {item.category && (
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      {item.category}
                    </Badge>
                  )}
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
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