'use client';

import { ReactNode, useRef } from 'react';

interface GatedCTAProps {
  label: string;
  modalTitle: string;
  formType?: string;
  children: ReactNode;
}

export function GatedCTA({ label, modalTitle, formType = 'gated-download', children }: GatedCTAProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalId = `modal-${formType}`;

  return (
    <>
      <button
        type="button"
        className="btn-gold"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
      >
        {label}
      </button>

      <dialog
        ref={dialogRef}
        id={modalId}
        className="fixed inset-0 z-[60] m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-lg border-0 bg-cream p-0 shadow-2xl backdrop:bg-forest-dark/70 open:flex open:flex-col"
        aria-labelledby={`${modalId}-title`}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="border-b border-forest-mid/10 bg-forest-dark px-6 py-4 text-cream">
          <div className="flex items-start justify-between gap-4">
            <h2 id={`${modalId}-title`} className="font-display text-xl font-semibold text-gold">
              {modalTitle}
            </h2>
            <button
              type="button"
              className="min-h-11 min-w-11 rounded text-cream hover:text-gold"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-4 text-sm text-forest-mid">
            Enter your details to receive VIP access. Our team will follow up shortly with the latest
            package.
          </p>
          {children}
        </div>
      </dialog>
    </>
  );
}
