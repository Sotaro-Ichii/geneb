'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/content/constants';

interface FormEmbedProps {
  className?: string;
  title?: string;
  height?: number;
  lazyLoad?: boolean;
}

export function FormEmbed({ 
  className, 
  title = 'お問い合わせフォーム',
  height = 600,
  lazyLoad = true 
}: FormEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(!lazyLoad);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!lazyLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('form-embed-container');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [lazyLoad]);

  const handleFallbackClick = () => {
    window.open(SITE_CONFIG.contactUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isLoaded) {
    return (
      <div 
        id="form-embed-container"
        className={`w-full bg-gray-50 rounded-lg flex items-center justify-center ${className}`}
        style={{ height: `${height}px` }}
      >
        <div className="text-center">
          <p className="text-gray-600 mb-4">フォームを読み込み中...</p>
          <Button onClick={handleFallbackClick} variant="outline">
            外部フォームを開く
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        id="form-embed-container"
        className="w-full bg-white rounded-lg border"
        style={{ height: `${height}px` }}
        title={title}
      >
        {SITE_CONFIG.formEmbedCode ? (
          <div
            dangerouslySetInnerHTML={{ __html: SITE_CONFIG.formEmbedCode }}
            className="w-full h-full"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">フォームが設定されていません</p>
              <Button onClick={handleFallbackClick}>
                お問い合わせフォームを開く
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* noscript fallback */}
      <noscript>
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-4">
            JavaScriptが無効になっています。以下のボタンからお問い合わせフォームにアクセスしてください。
          </p>
          <Button onClick={handleFallbackClick}>
            お問い合わせフォームを開く
          </Button>
        </div>
      </noscript>
    </div>
  );
}
