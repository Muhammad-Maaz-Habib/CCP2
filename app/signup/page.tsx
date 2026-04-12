'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AuthFormShell from '@/components/AuthFormShell';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!agreed) {
      setError('You must agree to the Terms and Conditions to create an account.');
      return;
    }
    setLoading(true);
    setInfo(null);
    try {
      const supabase = createClient();
      const { data, error: signError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/`,
        },
      });
      if (signError) {
        setError(signError.message);
        return;
      }
      if (data.user && !data.session) {
        setInfo('Check your email to confirm your account, then log in.');
        return;
      }
      router.push('/');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthFormShell
      title="Create an account"
      subtitle="Sign up to use the voice AI coach."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}
        {info ? (
          <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900" role="status">
            {info}
          </p>
        ) : null}
        <div>
          <label htmlFor="signup-email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-500 focus:border-indigo-500 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="signup-password" className="mb-1 block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-500 focus:border-indigo-500 focus:ring-2"
          />
          <p className="mt-1 text-xs text-slate-500">At least 6 characters.</p>
        </div>
        <div className="flex items-start gap-3">
          <input
            id="signup-terms"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="signup-terms" className="text-sm text-slate-700">
            I agree to the{' '}
            <Link href="/terms" className="font-medium text-indigo-600 underline-offset-2 hover:underline">
              Terms and Conditions
            </Link>
            .
          </label>
        </div>
        <button
          type="submit"
          disabled={loading || !agreed}
          className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-md transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Creating account…' : 'Sign up'}
        </button>
        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-indigo-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </AuthFormShell>
  );
}
