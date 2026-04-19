'use client';

import { useEffect, useRef } from 'react';

interface CrisisPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onEndSession: () => void;
}

export default function CrisisPopup({ isOpen, onClose, onEndSession }: CrisisPopupProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 px-4 py-8 backdrop-blur-sm"
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="crisis-popup-heading"
        aria-describedby="crisis-popup-description"
        className="w-full max-w-2xl rounded-2xl border border-sky-100 bg-gradient-to-b from-sky-50 to-emerald-50 p-6 shadow-2xl sm:p-8"
      >
        <h2 id="crisis-popup-heading" className="text-2xl font-semibold text-slate-900">
          You&apos;re not alone
        </h2>

        <p id="crisis-popup-description" className="mt-3 text-sm leading-6 text-slate-700">
          It sounds like you may be going through something difficult. Please reach out to one of these free,
          confidential resources available 24/7.
        </p>

        <ul className="mt-5 space-y-3 rounded-xl bg-white/75 p-4 text-left text-sm text-slate-800">
          <li>
            <span className="font-medium">988 Suicide &amp; Crisis Lifeline:</span> Call or text 988 (US)
          </li>
          <li>
            <span className="font-medium">Crisis Text Line:</span> Text HOME to 741741
          </li>
          <li>
            <span className="font-medium">International Association for Suicide Prevention:</span>{' '}
            <a
              href="https://www.iasp.info/resources/Crisis_Centres/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-800"
            >
              https://www.iasp.info/resources/Crisis_Centres/
            </a>
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            Return to Session
          </button>
          <button
            onClick={onEndSession}
            className="rounded-lg border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 transition hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            End Session
          </button>
        </div>
      </div>
    </div>
  );
}
