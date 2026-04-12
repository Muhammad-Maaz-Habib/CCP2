'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AuthFormShell from '@/components/AuthFormShell';

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const recoveryFromUrl = searchParams.get('recovery') === '1';

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(recoveryFromUrl);

  useEffect(() => {
    const supabase = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setShowNewPassword(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (recoveryFromUrl) {
      setShowNewPassword(true);
    }
  }, [recoveryFromUrl]);

  async function handleRequestReset(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const next = encodeURIComponent('/reset-password?recovery=1');
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
      });
      if (resetError) {
        setError(resetError.message);
        return;
      }
      setMessage('Check your email for a link to reset your password.');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdatePassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (updateError) {
        setError(updateError.message);
        return;
      }
      setMessage('Your password has been updated. Redirecting to sign in…');
      setTimeout(() => {
        router.push('/login');
        router.refresh();
      }, 1500);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (showNewPassword) {
    return (
      <AuthFormShell
        title="Set a new password"
        subtitle="Choose a new password for your account."
      >
        <form onSubmit={handleUpdatePassword} className="space-y-5">
          {error ? (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
              {error}
            </p>
          ) : null}
          {message ? (
            <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900" role="status">
              {message}
            </p>
          ) : null}
          <div>
            <label htmlFor="new-password" className="mb-1 block text-sm font-medium text-slate-700">
              New password
            </label>
            <input
              id="new-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-500 focus:border-indigo-500 focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="mb-1 block text-sm font-medium text-slate-700">
              Confirm password
            </label>
            <input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-500 focus:border-indigo-500 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-md transition hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? 'Updating…' : 'Update password'}
          </button>
          <p className="text-center text-sm">
            <Link href="/login" className="font-medium text-indigo-600 hover:underline">
              Back to log in
            </Link>
          </p>
        </form>
      </AuthFormShell>
    );
  }

  return (
    <AuthFormShell
      title="Reset password"
      subtitle="We’ll email you a link to choose a new password."
    >
      <form onSubmit={handleRequestReset} className="space-y-5">
        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}
        {message ? (
          <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900" role="status">
            {message}
          </p>
        ) : null}
        <div>
          <label htmlFor="reset-email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="reset-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 shadow-sm outline-none ring-indigo-500 focus:border-indigo-500 focus:ring-2"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-md transition hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? 'Sending…' : 'Send reset link'}
        </button>
        <p className="text-center text-sm">
          <Link href="/login" className="font-medium text-indigo-600 hover:underline">
            Back to log in
          </Link>
        </p>
      </form>
    </AuthFormShell>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8 text-slate-600">
          Loading…
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
