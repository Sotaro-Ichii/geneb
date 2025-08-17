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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
