import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {
  getCurrentMode,
  getCurrentContent,
  SITE_CONFIG,
} from '@/content/constants';
import { StructuredData } from '@/components/ui/structured-data';
import { GAScript } from '@/components/ui/analytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const mode = getCurrentMode();
const content = getCurrentContent();

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://geneb.jp'),
  title: content.meta.title,
  description: content.meta.description,
  keywords: [
    'AI制作',
    'ランディングページ',
    'ポートフォリオ',
    'コーポレートサイト',
    'Webアプリ',
    'geneb',
  ],
  authors: [{ name: 'geneb' }],
  creator: 'geneb',
  publisher: 'geneb',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: content.meta.ogTitle || content.meta.title,
    description: content.meta.ogDescription || content.meta.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://geneb.jp',
    siteName: SITE_CONFIG.brand,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.brand,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: content.meta.ogTitle || content.meta.title,
    description: content.meta.ogDescription || content.meta.description,
    images: ['/og.png'],
    creator: '@geneb',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <StructuredData />
        <GAScript />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
