'use client';

import { useEffect, useRef } from 'react';
import { LeadForm } from './LeadForm';

const STORAGE_KEY = 'hev_exit_intent_shown';

export function ExitIntent() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (!window.matchMedia('(min-width: 768px)').matches) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    let triggered = false;

    const show = () => {
      if (triggered || sessionStorage.getItem(STORAGE_KEY)) return;
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, '1');
      dialog.showModal();
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && e.relatedTarget === null) show();
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="exit-intent-modal"
      className="fixed inset-0 z-[70] m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-lg border-0 bg-cream p-0 shadow-2xl backdrop:bg-forest-dark/80"
      aria-labelledby="exit-intent-title"
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <div className="border-b border-forest-mid/10 bg-forest-dark px-6 py-4 text-cream">
        <div className="flex items-start justify-between gap-4">
          <h2 id="exit-intent-title" className="font-display text-2xl font-semibold text-gold">
            Before you go — get the price list
          </h2>
          <button
            type="button"
            className="min-h-11 min-w-11 rounded text-cream hover:text-gold"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-4 text-forest-mid">
          VIP registrants receive Hawthorne East Village pricing, floor plans, and incentive details
          before public release.
        </p>
        <LeadForm id="exit-form" variant="inline" formType="exit-intent" />
      </div>
    </dialog>
  );
}
