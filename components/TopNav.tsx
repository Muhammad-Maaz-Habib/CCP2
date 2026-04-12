'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

type TopNavProps = {
  email: string | null;
};

export default function TopNav({ email }: TopNavProps) {
  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-100/80 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href={email ? '/' : '/login'}
          className="text-lg font-semibold tracking-tight text-indigo-900 hover:text-indigo-700"
        >
          Voice AI Coach
        </Link>
        {email ? (
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden max-w-[200px] truncate text-slate-600 sm:inline" title={email}>
              {email}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-indigo-200 bg-white px-3 py-1.5 font-medium text-indigo-800 shadow-sm transition hover:bg-indigo-50"
            >
              Log out
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
