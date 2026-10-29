import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const CATEGORIES = [
  'Public Notice',
  'Service Update',
  'General Announcement',
  'Tender',
];

const EMPTY_FORM = {
  title: '',
  summary: '',
  body: '',
  category: 'Public Notice',
  notice_date: new Date().toISOString().slice(0, 10),
  document_url: '',
  is_published: false,
};

function getErrorMessage(error) {
  return error?.message || 'Something went wrong. Please try again.';
}

export default function ManageNotices() {
  const navigate = useNavigate();

  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [showArchived, setShowArchived] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

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

        const { data: adminRecord, error: adminError } = await supabase
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
          setAdminId(user.id);
          setChecking(false);
        }
      } catch {
        if (active) {
          setError('Unable to verify administrator access. Please sign in again.');
          setChecking(false);
        }
      }
    }

    verifyAdmin();

    return () => {
      active = false;
    };
  }, [navigate]);

  const loadNotices = useCallback(async () => {
    setLoading(true);
    setError('');

    let query = supabase
      .from('website_content')
      .select('*')
      .eq('content_type', 'notice')
      .order('created_at', { ascending: false });

    if (!showArchived) {
      query = query.eq('is_archived', false);
    }

    const { data, error: queryError } = await query;

    if (queryError) {
      setError(getErrorMessage(queryError));
    } else {
      setNotices(data || []);
    }

    setLoading(false);
  }, [showArchived]);

  useEffect(() => {
    if (adminId) {
      loadNotices();
    }
  }, [adminId, loadNotices]);

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setError('');
    setMessage('');
  }

  function startEditing(notice) {
    setEditingId(notice.id);
    setForm({
      title: notice.title || '',
      summary: notice.summary || '',
      body: notice.body || '',
      category: CATEGORIES.includes(notice.category)
        ? notice.category
        : 'Public Notice',
      notice_date:
        notice.notice_date || new Date().toISOString().slice(0, 10),
      document_url: notice.document_url || '',
      is_published: Boolean(notice.is_published),
    });
    setMessage('');
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setMessage('');

    const title = form.title.trim();
    const summary = form.summary.trim();
    const body = form.body.trim();
    const documentUrl = form.document_url.trim();

    if (!title || !summary || !body) {
      setError('Please complete the title, summary, and full announcement.');
      return;
    }

    if (documentUrl) {
      try {
        const parsedUrl = new URL(documentUrl);
        if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
          throw new Error('Invalid URL');
        }
      } catch {
        setError('Please enter a valid document URL starting with https:// or http://.');
        return;
      }
    }

    setSaving(true);

    const payload = {
      content_type: 'notice',
      title,
      summary,
      body,
      category: form.category,
      notice_date: form.notice_date || null,
      document_url: documentUrl || null,
      is_published: form.is_published,
      is_archived: false,
      updated_at: new Date().toISOString(),
    };

    try {
      let result;

      if (editingId) {
        result = await supabase
          .from('website_content')
          .update(payload)
          .eq('id', editingId)
          .select()
          .single();
      } else {
        result = await supabase
          .from('website_content')
          .insert({
            ...payload,
            published_at: form.is_published
              ? new Date().toISOString()
              : null,
          })
          .select()
          .single();
      }

      if (result.error) throw result.error;

      setMessage(
        editingId
          ? 'Notice updated successfully.'
          : form.is_published
            ? 'Notice published successfully.'
            : 'Draft saved successfully.'
      );

      resetForm();
      await loadNotices();
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  async function togglePublish(notice) {
    setError('');
    setMessage('');

    const nextStatus = !notice.is_published;
    const updatePayload = {
      is_published: nextStatus,
      updated_at: new Date().toISOString(),
      published_at: nextStatus
        ? new Date().toISOString()
        : null,
    };

    const { error: updateError } = await supabase
      .from('website_content')
      .update(updatePayload)
      .eq('id', notice.id);

    if (updateError) {
      setError(getErrorMessage(updateError));
      return;
    }

    setMessage(nextStatus ? 'Notice published.' : 'Notice moved to draft.');
    await loadNotices();
  }

  async function toggleArchive(notice) {
    const action = notice.is_archived ? 'restore' : 'archive';
    const confirmed = window.confirm(
      notice.is_archived
        ? 'Restore this notice to the active list?'
        : 'Archive this notice? It will no longer appear on the public website.'
    );

    if (!confirmed) return;

    setError('');
    setMessage('');

    const { error: updateError } = await supabase
      .from('website_content')
      .update({
        is_archived: !notice.is_archived,
        updated_at: new Date().toISOString(),
      })
      .eq('id', notice.id);

    if (updateError) {
      setError(getErrorMessage(updateError));
      return;
    }

    setMessage(
      action === 'archive'
        ? 'Notice archived successfully.'
        : 'Notice restored successfully.'
    );

    await loadNotices();
  }

async function deleteNotice(notice) {
  const confirmed = window.confirm(
    `Permanently delete "${notice.title}"? This action cannot be undone.`
  );

  if (!confirmed) return;

  setError('');
  setMessage('');

  const { error: deleteError } = await supabase
    .from('website_content')
    .delete()
    .eq('id', notice.id)
    .eq('content_type', 'notice');

  if (deleteError) {
    setError(deleteError.message || 'Unable to delete this notice.');
    return;
  }

  if (editingId === notice.id) {
    resetForm();
  }

  setMessage('Notice permanently deleted.');
  await loadNotices();
}

  async function handleSignOut() {
    const { error: signOutError } = await supabase.auth.signOut();

    if (signOutError) {
      setError('Unable to sign out. Please try again.');
      return;
    }

    navigate('/admin-login', { replace: true });
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
        <p className="text-slate-600">Verifying administrator access...</p>
      </main>
    );
  }

  if (!adminId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p role="alert" className="text-red-700">
            {error || 'Administrator access could not be verified.'}
          </p>
          <Link
            to="/admin-login"
            className="mt-4 inline-block font-semibold text-sky-800 hover:underline"
          >
            Return to Admin Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-[#061D33] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-sky-200">
              WASA JHANG
            </p>
            <h1 className="mt-1 text-2xl font-bold">Manage Notices</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/admin"
              className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Dashboard
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            {editingId ? 'Edit Notice' : 'Create a Notice'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Drafts remain private. Published notices are displayed on the public Notices page.
          </p>

          {error && (
            <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {message && (
            <p role="status" className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="title" className="mb-2 block text-sm font-semibold text-slate-700">
                Notice Title *
              </label>
              <input
                id="title"
                name="title"
                value={form.title}
                onChange={updateField}
                required
                maxLength={250}
                className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                placeholder="Enter the official notice title"
              />
            </div>

            <div>
              <label htmlFor="summary" className="mb-2 block text-sm font-semibold text-slate-700">
                Short Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={form.summary}
                onChange={updateField}
                required
                rows={2}
                maxLength={500}
                className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                placeholder="A short description for the public listing"
              />
            </div>

            <div>
              <label htmlFor="body" className="mb-2 block text-sm font-semibold text-slate-700">
                Full Announcement *
              </label>
              <textarea
                id="body"
                name="body"
                value={form.body}
                onChange={updateField}
                required
                rows={6}
                className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                placeholder="Enter the full official announcement"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="category" className="mb-2 block text-sm font-semibold text-slate-700">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={updateField}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="notice_date" className="mb-2 block text-sm font-semibold text-slate-700">
                  Notice Date
                </label>
                <input
                  id="notice_date"
                  type="date"
                  name="notice_date"
                  value={form.notice_date}
                  onChange={updateField}
                  className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="document_url" className="mb-2 block text-sm font-semibold text-slate-700">
                Optional Document URL
              </label>
              <input
                id="document_url"
                type="url"
                name="document_url"
                value={form.document_url}
                onChange={updateField}
                className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
                placeholder="https://..."
              />
              <p className="mt-1 text-xs text-slate-500">
                Add a public link to an official document, if available.
              </p>
            </div>

            {form.category === 'Tender' && (
              <div className="rounded-lg border border-sky-100 bg-sky-50 p-4 text-sm text-sky-900">
                Tender notices will appear on the public Notices page with a link to the existing Tenders page.
                <p className="mt-2">
                  Public page: <span className="font-semibold">/tenders</span>
                </p>
              </div>
            )}

            <label className="flex items-start gap-3 rounded-lg border border-slate-200 p-4">
              <input
                type="checkbox"
                name="is_published"
                checked={form.is_published}
                onChange={updateField}
                className="mt-1 h-4 w-4 accent-sky-800"
              />
              <span>
                <span className="block font-semibold text-slate-900">
                  Publish this notice
                </span>
                <span className="mt-1 block text-sm text-slate-600">
                  If unchecked, the notice will be saved as a draft.
                </span>
              </span>
            </label>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-sky-800 px-5 py-3 text-sm font-bold text-white hover:bg-sky-900 disabled:opacity-60"
              >
                {saving
                  ? 'Saving...'
                  : editingId
                    ? 'Save Changes'
                    : form.is_published
                      ? 'Publish Notice'
                      : 'Save Draft'}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel Editing
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Existing Notices
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Edit, publish, unpublish, archive, or restore notices.
              </p>
            </div>

            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                checked={showArchived}
                onChange={(event) => setShowArchived(event.target.checked)}
                className="h-4 w-4 accent-sky-800"
              />
              Show archived
            </label>
          </div>

          {loading ? (
            <p className="py-8 text-sm text-slate-600">Loading notices...</p>
          ) : notices.length === 0 ? (
            <p className="py-8 text-sm text-slate-600">
              No notices found in this list.
            </p>
          ) : (
            <div className="mt-5 space-y-4">
              {notices.map((notice) => (
                <article
                  key={notice.id}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900">
                        {notice.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {notice.category || 'Public Notice'}
                        {notice.notice_date
                          ? ` • ${notice.notice_date}`
                          : ''}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {notice.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                        notice.is_archived
                          ? 'bg-slate-100 text-slate-600'
                          : notice.is_published
                            ? 'bg-green-50 text-green-800'
                            : 'bg-amber-50 text-amber-800'
                      }`}>
                        {notice.is_archived
                          ? 'Archived'
                          : notice.is_published
                            ? 'Published'
                            : 'Draft'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => startEditing(notice)}
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Edit
                    </button>

                    {!notice.is_archived && (
                      <button
                        type="button"
                        onClick={() => togglePublish(notice)}
                        className="rounded-lg border border-sky-200 px-3 py-2 text-sm font-semibold text-sky-800 hover:bg-sky-50"
                      >
                        {notice.is_published ? 'Unpublish' : 'Publish'}
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleArchive(notice)}
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      {notice.is_archived ? 'Restore' : 'Archive'}
                    </button>

<button
  type="button"
  onClick={() => deleteNotice(notice)}
  className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
>
  Delete Permanently
</button>

                    {notice.document_url && (
                      <a
                        href={notice.document_url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        View Document
                      </a>
                    )}

                    {notice.category === 'Tender' && notice.is_published && !notice.is_archived && (
                      <Link
                        to="/tenders"
                        className="rounded-lg bg-sky-800 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-900"
                      >
                        View Tender Details
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}