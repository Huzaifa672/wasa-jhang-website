import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function checkRecoverySession() {
      const { data, error: sessionError } =
        await supabase.auth.getSession();

      if (!active) return;

      if (sessionError) {
        setError(
          'Unable to verify the recovery session. Please request a new password reset link.'
        );
      } else if (data.session) {
        setReady(true);
      } else {
        setError(
          'The password reset link is invalid or has expired. Please request a new link.'
        );
      }

      setLoading(false);
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;

      if (event === 'PASSWORD_RECOVERY' && session) {
        setReady(true);
        setError('');
        setLoading(false);
      }
    });

    checkRecoverySession();

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setMessage('');

    if (password.length < 8) {
      setError('Your password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('The passwords do not match. Please try again.');
      return;
    }

    setSaving(true);

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) throw updateError;

      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        throw new Error(
          'Your password was updated, but signing out failed. Please return to Admin Login.'
        );
      }

      setReady(false);
      setPassword('');
      setConfirmPassword('');
      setMessage(
        'Your password has been updated successfully. Please sign in using your new password.'
      );
    } catch (err) {
      setError(err.message || 'Unable to update your password. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-wider text-sky-800">
          WASA Jhang
        </p>

        <h1 className="mt-3 text-2xl font-bold text-slate-900">
          Reset Password
        </h1>

        {loading ? (
          <p className="mt-5 text-sm text-slate-600">
            Verifying your password reset link...
          </p>
        ) : message ? (
          <p
            role="status"
            className="mt-5 rounded-lg bg-green-50 p-3 text-sm text-green-800"
          >
            {message}
          </p>
        ) : error && !ready ? (
          <div className="mt-5">
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>

            <Link
              to="/admin-login"
              className="mt-5 inline-block font-semibold text-sky-800 hover:underline"
            >
              Back to Admin Login
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-2 text-sm text-slate-600">
              Enter your new password below.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="new-password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  New Password
                </label>

                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Confirm New Password
                </label>

                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                />
              </div>

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
                disabled={saving}
                className="w-full rounded-lg bg-sky-800 px-4 py-3 font-semibold text-white hover:bg-sky-900 disabled:opacity-60"
              >
                {saving ? 'Updating Password...' : 'Update Password'}
              </button>
            </form>
          </>
        )}

        <Link
          to="/admin-login"
          className="mt-6 inline-block text-sm text-sky-800 hover:underline"
        >
          ← Back to Admin Login
        </Link>
      </section>
    </main>
  );
} 
