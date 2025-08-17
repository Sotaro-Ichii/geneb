'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Container className="text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-red-500 mb-4">500</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            サーバーエラーが発生しました
          </h2>
          <p className="text-slate-600 mb-8">
            申し訳ございません。一時的な問題が発生しています。しばらく時間をおいてから再度お試しください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} className="w-full sm:w-auto">
              <RefreshCw className="w-4 h-4 mr-2" />
              再試行
            </Button>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
