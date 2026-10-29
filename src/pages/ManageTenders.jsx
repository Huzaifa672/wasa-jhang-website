
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const BUCKET = 'tender-documents';

const EMPTY_FORM = {
  title: '',
  category: 'Civil Works',
  summary: '',
  description: '',
  estimated_cost: '',
  bid_security: '',
  publication_date: '',
  submission_deadline: '',
  opening_datetime: '',
  status: 'draft',
};

function toLocalDateTime(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function ManageTenders() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [currentDocument, setCurrentDocument] = useState('');
  const [pdf, setPdf] = useState(null);
  const [adminId, setAdminId] = useState('');
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    let active = true;

    async function initialise() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          navigate('/admin-login', { replace: true });
          return;
        }

        const { data: admin, error: adminError } = await supabase
          .from('admin_users')
          .select('user_id')
          .eq('user_id', user.id)
          .maybeSingle();

        if (adminError || !admin) {
          await supabase.auth.signOut();
          navigate('/admin-login', { replace: true });
          return;
        }

        if (!active) return;
        setAdminId(user.id);
        await loadTenders(active);
      } catch {
        if (active) {
          setError('Unable to verify admin access. Please sign in again.');
          setLoading(false);
        }
      }
    }

    initialise();

    return () => {
      active = false;
    };
  }, [navigate]);

  async function loadTenders(active = true) {
    const { data, error: loadError } = await supabase
      .from('tenders')
      .select('*')
      .order('created_at', { ascending: false });

    if (!active) return;

    if (loadError) {
      setError(`Unable to load tenders: ${loadError.message}`);
    } else {
      setTenders(data || []);
    }

    setLoading(false);
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setCurrentDocument('');
    setPdf(null);
    setError('');
    setMessage('');
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function editTender(tender) {
    setError('');
    setMessage('');
    setEditingId(tender.id);
    setCurrentDocument(tender.document_url || '');
    setPdf(null);

    setForm({
      title: tender.title || '',
      category: tender.category || 'Civil Works',
      summary: tender.summary || '',
      description: tender.description || '',
      estimated_cost: tender.estimated_cost ?? '',
      bid_security: tender.bid_security ?? '',
      publication_date: tender.publication_date || '',
      submission_deadline: toLocalDateTime(tender.submission_deadline),
      opening_datetime: toLocalDateTime(tender.opening_datetime),
      status: tender.status || 'draft',
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function uploadPdf() {
    if (!pdf) return currentDocument;

    const safeName = pdf.name
      .normalize('NFKD')
      .replace(/[^a-zA-Z0-9._-]/g, '-')
      .replace(/-+/g, '-');

    const path = `${adminId}/${crypto.randomUUID()}-${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, pdf, {
        contentType: 'application/pdf',
        upsert: false,
      });

    if (uploadError) throw uploadError;

    return path;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setMessage('');

    if (!form.title.trim()) {
      setError('Please enter the official tender title.');
      return;
    }

    if (pdf && pdf.type !== 'application/pdf') {
      setError('Only PDF files are allowed.');
      return;
    }

    if (pdf && pdf.size > 5 * 1024 * 1024) {
      setError('The PDF must be 5 MB or smaller.');
      return;
    }

    if (
      form.submission_deadline &&
      form.opening_datetime &&
      new Date(form.opening_datetime) < new Date(form.submission_deadline)
    ) {
      setError('Opening date/time cannot be before the submission deadline.');
      return;
    }

    setSaving(true);

    try {
      const documentUrl = await uploadPdf();

      const payload = {
        title: form.title.trim(),
        category: form.category || null,
        summary: form.summary.trim() || null,
        description: form.description.trim() || null,
        estimated_cost: form.estimated_cost === '' ? null : Number(form.estimated_cost),
        bid_security: form.bid_security === '' ? null : Number(form.bid_security),
        publication_date: form.publication_date || null,
        submission_deadline: form.submission_deadline
          ? new Date(form.submission_deadline).toISOString()
          : null,
        opening_datetime: form.opening_datetime
          ? new Date(form.opening_datetime).toISOString()
          : null,
        document_url: documentUrl || null,
        status: form.status,
        updated_at: new Date().toISOString(),
      };

      let result;

      if (editingId) {
        result = await supabase
          .from('tenders')
          .update(payload)
          .eq('id', editingId)
          .select('id')
          .single();
      } else {
        result = await supabase
          .from('tenders')
          .insert({ ...payload, created_by: adminId })
          .select('id')
          .single();
      }

      if (result.error) throw result.error;

      setMessage(editingId ? 'Tender updated successfully.' : 'Tender created successfully.');
      resetForm();
      setMessage(editingId ? 'Tender updated successfully.' : 'Tender created successfully.');
      setLoading(true);
      await loadTenders();
    } catch (submitError) {
      setError(submitError.message || 'Unable to save tender.');
    } finally {
      setSaving(false);
    }
  }

  async function changeStatus(tender, status) {
    setError('');
    setMessage('');

    const { error: updateError } = await supabase
      .from('tenders')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', tender.id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessage(`Tender ${status} successfully.`);
    await loadTenders();
  }

  async function deleteTender(tender) {
    const confirmed = window.confirm(
      `Permanently delete "${tender.title}"? This cannot be undone.`
    );
    if (!confirmed) return;

    setError('');
    setMessage('');

    const { error: deleteError } = await supabase
      .from('tenders')
      .delete()
      .eq('id', tender.id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setMessage('Tender deleted. Its PDF file, if any, remains in Storage.');
    await loadTenders();
  }

  async function openDocument(path) {
    if (!path) {
      setError('No PDF is attached to this tender.');
      return;
    }

    // Open the tab immediately during the click. Opening it only after the
    // Supabase request finishes can be blocked by the browser's popup blocker.
    const pdfWindow = window.open('about:blank', '_blank');

    if (!pdfWindow) {
      setError('Your browser blocked the PDF tab. Allow pop-ups for this website and try again.');
      return;
    }

    pdfWindow.opener = null;
    pdfWindow.document.title = 'Opening tender PDF…';
    pdfWindow.document.body.innerHTML =
      '<p style="font-family:Arial,sans-serif;padding:24px">Opening tender PDF…</p>';

    setError('');

    try {
      const { data, error: urlError } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(path, 60 * 10);

      if (urlError) throw urlError;
      if (!data?.signedUrl) {
        throw new Error('Supabase did not return a signed PDF link.');
      }

      pdfWindow.location.href = data.signedUrl;
    } catch (openError) {
      pdfWindow.close();
      setError(
        openError?.message ||
          'Unable to open the tender PDF. Check the Storage bucket permissions and try again.'
      );
    }
  }

  const visibleTenders = tenders.filter(
    (tender) => filter === 'all' || tender.status === filter
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-[#061D33] to-[#075985] px-5 py-7 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
              WASA Jhang
            </p>
            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
              Manage Tenders
            </h1>
            <p className="mt-2 text-sm text-sky-100">
              Create, publish and maintain tender records.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="rounded-lg border border-white/30 px-4 py-2.5 text-sm font-semibold hover:bg-white/10"
          >
            ← Dashboard
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8">
        {error && (
          <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {error}
          </p>
        )}

        {message && (
          <p role="status" className="rounded-lg border border-teal-200 bg-teal-50 p-4 text-sm text-teal-800">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-[#061D33]">
              {editingId ? 'Edit Tender' : 'Create Tender'}
            </h2>
            {editingId && (
              <button type="button" onClick={resetForm} className="text-sm font-semibold text-slate-600 underline">
                Cancel editing
              </button>
            )}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700 md:col-span-2">
              Official tender title *
              <input required name="title" value={form.title} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Category
              <select name="category" value={form.category} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal">
                <option>Civil Works</option>
                <option>Fire Safety</option>
                <option>Electrical Works</option>
                <option>Machinery & Equipment</option>
                <option>Procurement</option>
                <option>Other</option>
              </select>
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Status
              <select name="status" value={form.status} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Estimated cost (PKR)
              <input type="number" min="0" step="0.01" name="estimated_cost" value={form.estimated_cost} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Bid security (PKR)
              <input type="number" min="0" step="0.01" name="bid_security" value={form.bid_security} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Publication date
              <input type="date" name="publication_date" value={form.publication_date} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Submission deadline
              <input type="datetime-local" name="submission_deadline" value={form.submission_deadline} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Bid opening date/time
              <input type="datetime-local" name="opening_datetime" value={form.opening_datetime} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Short summary
              <textarea name="summary" rows="3" value={form.summary} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Full tender details
              <textarea name="description" rows="3" value={form.description} onChange={updateField} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal" />
            </label>

            <div className="md:col-span-2">
              <p className="text-sm font-semibold text-slate-700">
                Tender PDF (maximum 5 MB)
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#075985] bg-white px-4 py-3 text-sm font-semibold text-[#075985] shadow-sm transition hover:bg-sky-50 focus-within:ring-2 focus-within:ring-sky-300">
                  <input
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={(event) => {
                      const selectedFile = event.target.files?.[0] || null;
                      setPdf(selectedFile);
                      setError('');
                    }}
                    className="sr-only"
                    aria-label="Choose tender PDF"
                  />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 14.5v3A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-3" />
                  </svg>
                  Choose PDF
                </label>

                <span className="min-w-0 break-all text-sm text-slate-600">
                  {pdf ? pdf.name : 'No new file selected'}
                </span>
              </div>

              {pdf && (
                <p className="mt-2 text-sm text-slate-600">
                  Selected file: {pdf.name}
                </p>
              )}

              {!pdf && currentDocument && (
                <button type="button" onClick={() => openDocument(currentDocument)} className="mt-3 text-sm font-semibold text-[#075985] underline">
                  Open currently attached PDF
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-5">
            <button disabled={saving} type="submit" className="rounded-lg bg-[#075985] px-5 py-3 text-sm font-semibold text-white hover:bg-[#061D33] disabled:opacity-60">
              {saving ? 'Saving...' : editingId ? 'Save Changes' : 'Create Tender'}
            </button>
            <button type="button" onClick={resetForm} className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Clear Form
            </button>
          </div>
        </form>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-[#061D33]">Tender Records</h2>
            <select value={filter} onChange={(event) => setFilter(event.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
              <option value="all">All tenders</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {loading ? (
            <p className="py-8 text-sm text-slate-600">Loading tenders...</p>
          ) : visibleTenders.length === 0 ? (
            <p className="py-8 text-sm text-slate-600">No tender records found.</p>
          ) : (
            <div className="mt-5 space-y-4">
              {visibleTenders.map((tender) => (
                <article key={tender.id} className="rounded-xl border border-slate-200 p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold uppercase text-slate-700">
                        {tender.status}
                      </span>
                      <h3 className="mt-3 break-words font-bold text-slate-900">{tender.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{tender.category || 'Uncategorised'}</p>
                      {tender.submission_deadline && (
                        <p className="mt-2 text-sm text-slate-600">
                          Deadline: {new Date(tender.submission_deadline).toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button type="button" onClick={() => editTender(tender)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-50">
                      Edit
                    </button>

                    {tender.document_url && (
                      <button type="button" onClick={() => openDocument(tender.document_url)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-50">
                        Open PDF
                      </button>
                    )}

                    {tender.status !== 'published' && (
                      <button type="button" onClick={() => changeStatus(tender, 'published')} className="rounded-lg bg-teal-700 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-800">
                        Publish
                      </button>
                    )}

                    {tender.status !== 'draft' && (
                      <button type="button" onClick={() => changeStatus(tender, 'draft')} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-50">
                        Move to Draft
                      </button>
                    )}

                    {tender.status !== 'archived' && (
                      <button type="button" onClick={() => changeStatus(tender, 'archived')} className="rounded-lg border border-amber-300 px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-50">
                        Archive
                      </button>
                    )}

                    <button type="button" onClick={() => deleteTender(tender)} className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50">
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default ManageTenders;
