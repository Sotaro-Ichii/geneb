'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname + searchParams.toString());
  }, [pathname, searchParams]);

  return null;
}

export function GAScript() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}

export function PlausibleScript() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
    />
  );
}

// Utility functions for tracking events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  // Plausible fallback
  if (typeof window !== 'undefined' && (window as any).plausible) {
    try {
      (window as any).plausible(action, { props: { category, label, value } });
    } catch (_) {}
  }
};

export const trackCTAClick = (section: string, mode: string) => {
  trackEvent('cta_click', 'engagement', `${mode}_${section}`);
};

export const trackPricingTabSwitch = (tabName: string, mode: string) => {
  trackEvent('pricing_tab_switch', 'engagement', `${mode}_${tabName}`);
};

export const trackFormView = (section: string, mode: string) => {
  trackEvent('form_view', 'engagement', `${mode}_${section}`);
};
