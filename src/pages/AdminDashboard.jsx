
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AdminDashboard() {
  const [checking, setChecking] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');
  const [error, setError] = useState('');
  const [signingOut, setSigningOut] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    async function verifyAdmin() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          navigate('/admin-login', { replace: true });
          return;
        }

        const { data: adminRecord, error: adminError } =
          await supabase
            .from('admin_users')
            .select('user_id')
            .eq('user_id', user.id)
            .maybeSingle();

        if (adminError || !adminRecord) {
          await supabase.auth.signOut();
          navigate('/admin-login', { replace: true });
          return;
        }

        if (active) {
          setAdminEmail(user.email || '');
          setChecking(false);
        }
      } catch {
        if (active) {
          setError(
            'Unable to verify administrator access. Please sign in again.'
          );
          setChecking(false);
        }
      }
    }

    verifyAdmin();

    return () => {
      active = false;
    };
  }, [navigate]);

  async function handleSignOut() {
    setSigningOut(true);
    setError('');

    try {
      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        setError('Unable to sign out. Please try again.');
        setSigningOut(false);
        return;
      }

      navigate('/admin-login', { replace: true });
    } catch {
      setError('Unable to sign out. Please try again.');
      setSigningOut(false);
    }
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="mt-4 text-sm font-medium text-slate-600">
            Verifying administrator access...
          </p>
        </div>
      </main>
    );
  }

  if (error && !adminEmail) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl">
            ⚠️
          </div>

          <h1 className="mt-4 text-xl font-bold text-slate-900">
            Access Verification Failed
          </h1>

          <p role="alert" className="mt-2 text-sm leading-6 text-red-700">
            {error}
          </p>

          <button
            type="button"
            onClick={() => navigate('/admin-login', { replace: true })}
            className="mt-5 rounded-lg bg-[#075985] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#061D33]"
          >
            Return to Admin Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="relative overflow-hidden bg-gradient-to-r from-[#061D33] via-[#073B5C] to-[#075985] text-white">
        <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 right-48 h-56 w-56 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl">
              🏢
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                WASA Jhang
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-sky-100">
                Website content management
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span aria-hidden="true">↪</span>
            {signingOut ? 'Signing Out...' : 'Sign Out'}
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Administration
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#061D33] sm:text-3xl">
                Welcome to the Admin Panel
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Manage and publish official notices, announcements and tender notices for the WASA Jhang website.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:max-w-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#073B5C] text-lg text-white">
                👤
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500">
                  Signed in as
                </p>
                <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                  {adminEmail}
                </p>
              </div>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}
        </div>

        <div className="mt-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Website Tools
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#061D33] sm:text-2xl">
                Content Management
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              Select a tool to get started.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {/* EXISTING NOTICES CARD */}
            <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 text-2xl ring-1 ring-slate-200">
                  📢
                </div>

                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                  Available
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Notices &amp; Tenders
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                Create, edit, publish, archive or delete public notices and tender announcements from one place.
              </p>

              <Link
                to="/admin/manage-notices"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#075985] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#061D33] focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
              >
                Manage Notices
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>

            {/* NEW SEPARATE TENDER MANAGEMENT CARD */}
            <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-sky-50 text-2xl ring-1 ring-slate-200">
                  📄
                </div>

                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                  Available
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Manage Tenders
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                Create, edit, publish, archive and manage tender records and PDF documents separately from notices.
              </p>

              <Link
                to="/admin/manage-tenders"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                Manage Tenders
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5">
          <p className="text-center text-xs leading-5 text-slate-500">
            WASA Jhang · Administration Portal
          </p>
        </div>
      </section>
    </main>
  );
}
