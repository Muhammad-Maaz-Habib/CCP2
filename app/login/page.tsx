'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AuthFormShell from '@/components/AuthFormShell';

function safePath(path: string | null) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return '/';
  return path;
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = safePath(searchParams.get('redirect'));
  const errorParam = searchParams.get('error');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(
    errorParam === 'auth' ? 'Authentication failed. Please try again.' : null
  );
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: signError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signError) {
        setError(signError.message);
        return;
      }
      router.push(redirect.startsWith('/') ? redirect : '/');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthFormShell
      title="Log in"
      subtitle="Welcome back to your AI coaching session."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}
        <div>
          <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-500 focus:border-indigo-500 focus:ring-2"
          />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between gap-2">
            <label htmlFor="login-password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <Link
              href="/reset-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-500 focus:border-indigo-500 focus:ring-2"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-md transition hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Log in'}
        </button>
        <p className="text-center text-sm text-slate-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthFormShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8 text-slate-600">
          Loading…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
