import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [resetLoading, setResetLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    setError('');
    setResetMessage('');
    setLoading(true);

    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      const { data: adminRecord, error: adminError } =
        await supabase
          .from('admin_users')
          .select('user_id')
          .eq('user_id', data.user.id)
          .maybeSingle();

      if (adminError || !adminRecord) {
        await supabase.auth.signOut();
        throw new Error(
          'You are not authorized to access the admin panel.'
        );
      }

      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    setError('');
    setResetMessage('');

    if (!email.trim()) {
      setError('Please enter your admin email address first.');
      return;
    }

    setResetLoading(true);

    try {
      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/reset-password`,
        });

      if (resetError) throw resetError;

      setResetMessage(
        'If an account exists for this email address, a password reset email has been sent. Please check your inbox and spam folder.'
      );
    } catch (err) {
      setError(
        err.message || 'Unable to send the password reset email. Please try again later.'
      );
    } finally {
      setResetLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-wider text-sky-800">
          WASA Jhang
        </p>

        <h1 className="mt-3 text-2xl font-bold text-slate-900">
          Admin Login
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Authorized administrators only.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="admin-email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email Address
            </label>

            <input
              id="admin-email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
            />

            <div className="mt-2 text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={resetLoading || loading}
                className="text-sm font-medium text-sky-800 hover:underline disabled:opacity-60"
              >
                {resetLoading ? 'Sending Email...' : 'Forgot Password?'}
              </button>
            </div>
          </div>

          {resetMessage && (
            <p
              role="status"
              className="rounded-lg bg-green-50 p-3 text-sm text-green-800"
            >
              {resetMessage}
            </p>
          )}

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || resetLoading}
            className="w-full rounded-lg bg-sky-800 px-4 py-3 font-semibold text-white transition hover:bg-sky-900 disabled:opacity-60"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <Link
          to="/"
          className="mt-6 inline-block text-sm text-sky-800 hover:underline"
        >
          ← Back to Website
        </Link>
      </div>
    </main>
  );
}