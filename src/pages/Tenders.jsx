import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const BUCKET = 'tender-documents';

function Tenders() {
  const [expandedTender, setExpandedTender] = useState(null);
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [documentLoading, setDocumentLoading] = useState(null);
  const [documentErrors, setDocumentErrors] = useState({});

  useEffect(() => {
    let active = true;

    async function loadTenders() {
      setLoading(true);
      setError('');

      try {
        const { data, error: fetchError } = await supabase
          .from('tenders')
          .select(
            'id, title, category, summary, description, estimated_cost, bid_security, publication_date, submission_deadline, opening_datetime, document_url, status'
          )
          .eq('status', 'published')
          .order('publication_date', {
            ascending: false,
            nullsFirst: false,
          })
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;

        if (active) setTenders(data || []);
      } catch (err) {
        console.error('Error loading published tenders:', err);

        if (active) {
          setError(
            'Tender notices could not be loaded. Please try again later.'
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadTenders();

    return () => {
      active = false;
    };
  }, []);

  function formatDate(value, includeTime = false) {
    if (!value) return 'Not specified';

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return 'Not specified';

    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      ...(includeTime
        ? { hour: '2-digit', minute: '2-digit' }
        : {}),
    });
  }

  function formatAmount(value) {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    const amount = Number(value);

    if (!Number.isFinite(amount)) return null;

    return `PKR ${amount.toLocaleString('en-PK', {
      maximumFractionDigits: 2,
    })}`;
  }

  async function openTenderDocument(tender) {
    if (!tender.document_url) return;

    setDocumentErrors((previous) => ({
      ...previous,
      [tender.id]: '',
    }));
    setDocumentLoading(tender.id);

    try {
      const { data, error: signedUrlError } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(tender.document_url, 300);

      if (signedUrlError) throw signedUrlError;
      if (!data?.signedUrl) {
        throw new Error('Could not create a document link.');
      }

      // Open the link after the user clicks the document button.
      window.location.assign(data.signedUrl);
    } catch (err) {
      console.error('Error opening tender document:', err);

      setDocumentErrors((previous) => ({
        ...previous,
        [tender.id]:
          'The tender PDF could not be opened. Please try again later.',
      }));
    } finally {
      setDocumentLoading(null);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-[#061D33] to-[#075985] px-6 py-12 text-white md:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            WASA Jhang
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Tenders &amp; Procurement
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
            Browse published tender notices and access their available details
            and original documents.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 border-b border-slate-200 pb-5">
            <h2 className="text-2xl font-bold text-slate-900">
              Published Tenders
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Select a tender to view its details and available documents.
            </p>
          </div>

          {loading ? (
            <div
              className="rounded-xl border border-slate-200 bg-white px-6 py-14 text-center"
              role="status"
            >
              <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-sky-800" />
              <p className="mt-4 text-sm text-slate-600">
                Loading published tenders...
              </p>
            </div>
          ) : error ? (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
            >
              <h3 className="font-bold text-red-900">
                Unable to Load Tenders
              </h3>
              <p className="mt-2 text-sm leading-6 text-red-800">{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 rounded-lg bg-[#075985] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#061D33]"
              >
                Try Again
              </button>
            </div>
          ) : tenders.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-2xl">
                📄
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No Published Tenders
              </h3>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
                No tender notices are currently published. New tenders will
                appear here when published through the WASA Jhang admin panel.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {tenders.map((tender) => {
                const isExpanded = expandedTender === tender.id;

                return (
                  <article
                    key={tender.id}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedTender(isExpanded ? null : tender.id)
                      }
                      aria-expanded={isExpanded}
                      aria-controls={`tender-details-${tender.id}`}
                      className="flex w-full items-start gap-4 p-5 text-left sm:items-center sm:p-6"
                    >
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#075985] sm:mt-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 3.75h7l4 4v12.5H7a2 2 0 0 1-2-2v-12.5a2 2 0 0 1 2-2Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 3.75v4h4M9 13h6M9 16.5h6"
                          />
                        </svg>
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded border border-teal-200 bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-800">
                            Published
                          </span>

                          {tender.category && (
                            <span className="text-xs text-slate-500">
                              {tender.category}
                            </span>
                          )}
                        </span>

                        <span className="block text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                          {tender.title}
                        </span>

                        <span className="mt-2 block text-sm text-slate-500">
                          Publication date:{' '}
                          {formatDate(tender.publication_date)}
                        </span>

                        <span className="mt-1 block text-sm text-slate-500">
                          Submission deadline:{' '}
                          {formatDate(tender.submission_deadline, true)}
                        </span>
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`mt-2 h-5 w-5 shrink-0 text-slate-500 transition-transform sm:mt-0 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div
                        id={`tender-details-${tender.id}`}
                        className="border-t border-slate-200 bg-slate-50 px-5 py-5 sm:px-6 sm:py-6"
                      >
                        <h3 className="text-sm font-bold text-slate-800">
                          Tender Details
                        </h3>

                        {tender.summary && (
                          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                            {tender.summary}
                          </p>
                        )}

                        {tender.description && (
                          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 sm:p-5">
                            <p className="whitespace-pre-line break-words text-sm leading-7 text-slate-700">
                              {tender.description}
                            </p>
                          </div>
                        )}

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {tender.estimated_cost != null && (
                            <div className="rounded-lg border border-slate-200 bg-white p-4">
                              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Estimated Cost
                              </p>
                              <p className="mt-1 text-sm font-semibold text-slate-800">
                                {formatAmount(tender.estimated_cost)}
                              </p>
                            </div>
                          )}

                          {tender.bid_security != null && (
                            <div className="rounded-lg border border-slate-200 bg-white p-4">
                              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Bid Security
                              </p>
                              <p className="mt-1 text-sm font-semibold text-slate-800">
                                {formatAmount(tender.bid_security)}
                              </p>
                            </div>
                          )}

                          {tender.opening_datetime && (
                            <div className="rounded-lg border border-slate-200 bg-white p-4 sm:col-span-2">
                              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Bid Opening
                              </p>
                              <p className="mt-1 text-sm font-semibold text-slate-800">
                                {formatDate(tender.opening_datetime, true)}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-xs leading-5 text-slate-500">
                            Refer to the original tender document for complete
                            terms and conditions.
                          </p>

                          {tender.document_url && (
                            <button
                              type="button"
                              onClick={() => openTenderDocument(tender)}
                              disabled={documentLoading === tender.id}
                              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#075985] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#061D33] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
                            >
                              {documentLoading === tender.id
                                ? 'Opening PDF...'
                                : 'View Tender Document ↗'}
                            </button>
                          )}
                        </div>

                        {documentErrors[tender.id] && (
                          <p
                            role="alert"
                            className="mt-3 text-sm text-red-700"
                          >
                            {documentErrors[tender.id]}
                          </p>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-sm font-bold text-slate-800">
              Procurement Information
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Check the submission deadline and all requirements in the
              official tender document before participating. Published tenders
              should be read alongside their original procurement documents.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tenders;