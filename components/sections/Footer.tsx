'use client';

import { SITE_CONFIG } from '@/content/constants';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{SITE_CONFIG.brand}</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            {SITE_CONFIG.primaryClaim}
          </p>

          <div className="text-xs text-slate-400 max-w-3xl mx-auto space-y-1 mb-6">
            <p>修正回数は各プランの範囲内。新機能追加は別途お見積り。</p>
            <p>通年契約特典は、更新・解約ポリシーに準じます。</p>
            <p>サーバーはVercel等を想定。大幅なアクセス急増時のコスト増は別途。</p>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by{' '}
              {SITE_CONFIG.brand}
              <span className="mx-2">•</span>© 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
