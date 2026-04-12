import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-indigo-100/80 bg-white/60 py-6 text-center text-sm text-slate-600">
      <div className="mx-auto max-w-6xl px-4">
        <Link
          href="/terms"
          className="font-medium text-indigo-700 underline-offset-2 hover:text-indigo-900 hover:underline"
        >
          Terms and Conditions
        </Link>
        <span className="mx-2 text-slate-300">·</span>
        <span className="text-slate-500">Voice AI Coach</span>
      </div>
    </footer>
  );
}
