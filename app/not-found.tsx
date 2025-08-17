'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Container className="text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-slate-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            ページが見つかりません
          </h2>
          <p className="text-slate-600 mb-8">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                ホームに戻る
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              前のページに戻る
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
