import { Link } from 'react-router-dom'

function Notices() {
  const noticeSections = [
    {
      icon: '📢',
      title: 'Public Notices',
      description:
        'Official public notices and important announcements from WASA Jhang will be published here.',
    },
    {
      icon: '📄',
      title: 'Tenders & Procurement',
      description:
        'Tender notices, procurement announcements and related public information will be published here.',
    },
    {
      icon: '💧',
      title: 'Service Updates',
      description:
        'Important updates related to water supply, sewerage, drainage and public services will appear here.',
    },
    {
      icon: 'ℹ️',
      title: 'Public Announcements',
      description:
        'General announcements and important information for citizens will be shared here.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061D33] via-[#073B5C] to-[#075985] px-6 py-12 text-white md:py-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

        <div className="absolute -bottom-32 left-10 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-teal-300" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
              WASA Jhang
            </p>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Public Notices
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
            Stay informed about important announcements, service updates,
            tenders and public information from WASA Jhang.
          </p>
        </div>
      </section>

      {/* LATEST NOTICES */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-teal-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Latest Updates
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Notices & Announcements
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Official notices and public announcements will be published here
              as they become available.
            </p>
          </div>

          <div className="mt-9 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm ring-1 ring-slate-200">
                📢
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No Notices Published Yet
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                Official notices and public announcements will appear here as
                they become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICE CATEGORIES */}
      <section className="bg-slate-50 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-teal-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Information Categories
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Public Information
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              This section will provide citizens with important updates across
              key WASA Jhang public information areas.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {noticeSections.map((section) => (
              <article
                key={section.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg md:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 text-xl ring-1 ring-slate-200">
                    {section.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {section.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {section.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
                      Updates will appear here
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMATION NOTE */}
      <section className="bg-white px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/60 px-6 py-6 md:px-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-sky-100">
                ℹ️
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Official Information
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  This page is reserved for verified WASA Jhang notices,
                  tenders, service updates and public announcements. Information
                  will be added as official updates become available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-gradient-to-r from-[#082F49] to-[#075985] px-6 py-8 shadow-lg md:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                  Public Information
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Need more information?
                </h2>

                <p className="mt-2 text-sm leading-6 text-sky-100">
                  Contact WASA Jhang for citizen-related information and
                  assistance.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-fit rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#082F49] shadow-md transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Contact WASA Jhang →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Notices