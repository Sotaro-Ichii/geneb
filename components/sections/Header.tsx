'use client';

import Link from 'next/link';
import { SITE_CONFIG, getCurrentMode, generateAriaLabel, generateCTALink } from '@/content/constants';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const mode = getCurrentMode();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#features', label: '特徴' },
    { href: '#works', label: '実績' },
    { href: '#pricing', label: '料金' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-slate-900" aria-label={`${SITE_CONFIG.brand}のホーム`}>
          {SITE_CONFIG.brand}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors" aria-label={`${item.label}へ移動`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href={generateCTALink(mode, 'header')}>
            <Button aria-label={generateAriaLabel(mode, '相談', 'header')}>
              相談する
            </Button>
          </Link>
        </div>

        <button className="md:hidden p-2 rounded hover:bg-slate-100" aria-label="メニューを開く" onClick={() => setOpen((v) => !v)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-700" aria-label={`${item.label}へ移動`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <Link href={SITE_CONFIG.contactUrl} onClick={() => setOpen(false)}>
              <Button className="w-full" aria-label={generateAriaLabel(mode, '相談', 'header-mobile')}>
                相談する
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


