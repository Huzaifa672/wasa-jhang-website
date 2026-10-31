
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function Notices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadNotices() {
      setLoading(true);
      setError('');

      try {
        const { data, error: fetchError } = await supabase
          .from('website_content')
          .select(
            'id, title, summary, body, category, notice_date, published_at, document_url'
          )
          .eq('content_type', 'notice')
          .eq('is_published', true)
          .eq('is_archived', false)
          .order('notice_date', {
            ascending: false,
            nullsFirst: false,
          })
          .order('published_at', {
            ascending: false,
            nullsFirst: false,
          });

        if (fetchError) throw fetchError;

        if (active) {
          setNotices(data || []);
        }
      } catch (err) {
        if (active) {
          setError(
            'Notices could not be loaded right now. Please try again later.'
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadNotices();

    return () => {
      active = false;
    };
  }, []);

  function formatDate(dateValue) {
    if (!dateValue) return '';

    const date = new Date(`${dateValue}T00:00:00`);

    if (Number.isNaN(date.getTime())) return '';

    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  function getCategoryIcon(category) {
    switch (category) {
      case 'Tender':
        return '📄';
      case 'Service Update':
        return '💧';
      case 'General Announcement':
        return 'ℹ️';
      default:
        return '📢';
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061D33] via-[#073B5C] to-[#075985] px-6 py-9 text-white md:py-11">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 left-10 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-teal-300" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
              WASA Jhang
            </p>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Public Notices
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
            Stay informed about important announcements, service updates,
            tenders and public information from WASA Jhang.
          </p>
        </div>
      </section>

      {/* LATEST NOTICES */}
      <section className="bg-white px-6 py-9 md:py-11">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-teal-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Latest Updates
              </p>
            </div>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Notices &amp; Announcements
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Official notices and public announcements from WASA Jhang.
            </p>
          </div>

          {loading ? (
            <div
              className="mt-7 rounded-xl border border-slate-200 bg-slate-50 px-6 py-10 text-center"
              role="status"
            >
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-sky-800" />
              <p className="mt-3 text-sm text-slate-600">
                Loading notices...
              </p>
            </div>
          ) : error ? (
            <div
              className="mt-7 rounded-xl border border-red-200 bg-red-50 p-5 text-center"
              role="alert"
            >
              <h3 className="font-bold text-red-900">
                Unable to Load Notices
              </h3>

              <p className="mt-2 text-sm text-red-800">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-3 rounded-lg bg-[#075985] px-4 py-2 text-sm font-semibold text-white hover:bg-[#061D33]"
              >
                Try Again
              </button>
            </div>
          ) : notices.length === 0 ? (
            <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 px-6 py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-slate-200">
                📢
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No Notices Published Yet
              </h3>

              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Official notices and public announcements will appear here
                when they are published by WASA Jhang.
              </p>
            </div>
          ) : (
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {notices.map((notice) => (
                <article
                  key={notice.id}
                  className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:border-sky-200 hover:shadow-md md:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-lg ring-1 ring-slate-200">
                      {getCategoryIcon(notice.category)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                        {notice.category || 'Public Notice'}
                      </p>

                      <h3 className="mt-1 break-words text-base font-bold leading-6 text-slate-900">
                        {notice.title}
                      </h3>

                      {notice.notice_date && (
                        <p className="mt-1.5 text-xs font-medium text-slate-500">
                          Date: {formatDate(notice.notice_date)}
                        </p>
                      )}
                    </div>
                  </div>

                  {notice.summary && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                      {notice.summary}
                    </p>
                  )}

                  {notice.body && (
                    <details className="mt-3 border-t border-slate-100 pt-3">
                      <summary className="cursor-pointer text-sm font-semibold text-[#075985] hover:text-teal-700">
                        Read Full Notice
                      </summary>

                      <p className="mt-2 whitespace-pre-line break-words text-sm leading-6 text-slate-600">
                        {notice.body}
                      </p>
                    </details>
                  )}

                  {(notice.document_url || notice.category === 'Tender') && (
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                      {notice.document_url && (
                        <a
                          href={notice.document_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg bg-[#075985] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#061D33]"
                        >
                          View Document ↗
                        </a>
                      )}

                      {notice.category === 'Tender' && (
                        <Link
                          to="/tenders"
                          className="inline-flex items-center rounded-lg border border-sky-200 px-3 py-2 text-xs font-semibold text-[#075985] transition hover:bg-sky-50"
                        >
                          View Tender Details →
                        </Link>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OFFICIAL INFORMATION NOTE */}
      <section className="bg-slate-50 px-6 py-7">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl border border-sky-100 bg-sky-50/60 px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-base shadow-sm ring-1 ring-sky-100">
                ℹ️
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Official Information
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  This page is reserved for verified WASA Jhang notices,
                  tenders, service updates and public announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-slate-200 bg-white px-6 py-7 md:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl bg-gradient-to-r from-[#082F49] to-[#075985] px-5 py-6 shadow-md md:px-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                  Public Information
                </p>

                <h2 className="mt-1.5 text-xl font-bold text-white">
                  Need more information?
                </h2>

                <p className="mt-1.5 text-sm leading-6 text-sky-100">
                  Contact WASA Jhang for citizen-related information and
                  assistance.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-fit rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#082F49] shadow-sm transition hover:bg-sky-50"
              >
                Contact WASA Jhang →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Notices;
