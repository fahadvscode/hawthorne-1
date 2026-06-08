'use client';

import { useEffect } from 'react';

export function ThankYouTracking() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Lead',
        event_label: 'hawthorneeastvillagemilton.com',
      });
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
  }, []);

  return null;
}
