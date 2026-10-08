import { Link } from 'react-router-dom'

function Contact() {
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
            Contact Us
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
            Get in touch with WASA Jhang for information, complaints and
            citizen service inquiries.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-teal-600" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                  Get In Touch
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Contact Information
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                For general information, complaints and citizen services,
                please use the official WASA channels or contact the relevant
                office.
              </p>

              <div className="mt-7 space-y-4">
                {/* OFFICE */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#075985]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h2m-2 4h2m-2 4h2m4-8h2m-2 4h2m-2 4h2"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        WASA Jhang Office
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Jhang, Punjab, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* HELPLINE */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#0F766E]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M3 5a2 2 0 012-2h2.3a2 2 0 011.8 1.1l1.1 2.6a2 2 0 01-.4 2.2L8.4 10.3a16 16 0 005.3 5.3l1.4-1.4a2 2 0 012.2-.4l2.6 1.1A2 2 0 0121 16.7V19a2 2 0 01-2 2C9.6 21 3 14.4 3 5z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        WASA Helpline
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        For water and sanitation complaints and assistance,
                        use the official WASA helpline.
                      </p>

                      <a
                        href="tel:1334"
                        className="mt-2 inline-block text-sm font-bold text-[#0F766E] hover:text-[#075985]"
                      >
                        1334
                      </a>
                    </div>
                  </div>
                </div>

                {/* ONLINE SERVICES */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#075985]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M12 18h.01M8.2 21h7.6a2.2 2.2 0 002.2-2.2V5.2A2.2 2.2 0 0015.8 3H8.2A2.2 2.2 0 006 5.2v13.6A2.2 2.2 0 008.2 21z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Online Services
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Access available citizen services and official
                        government platforms through our Services page.
                      </p>

                      <Link
                        to="/services"
                        className="mt-2 inline-block text-sm font-bold text-[#075985] hover:text-[#0F766E]"
                      >
                        View Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* CITIZEN SUPPORT */}
              <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50/70 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                  Citizen Support
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  For service-related information, complaints or general
                  inquiries, please use the appropriate official WASA
                  channel.
                </p>
              </div>
            </div>

            {/* INQUIRY INFORMATION */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-sky-50 to-teal-50 text-sm font-bold text-[#075985]">
                  ?
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send an Inquiry
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Share your general inquiry with WASA Jhang.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-sky-100 bg-white p-6">
                <p className="text-sm leading-7 text-slate-600">
                  For complaints and service requests, please use the official
                  online services or WASA helpline. General contact information
                  can be obtained through the relevant WASA office.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link
                    to="/services"
                    className="rounded-lg bg-[#075985] px-4 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#064E73]"
                  >
                    View Services
                  </Link>

                  <a
                    href="tel:1334"
                    className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-center text-sm font-bold text-[#0F766E] transition hover:-translate-y-0.5 hover:bg-teal-100"
                  >
                    Call 1334
                  </a>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white px-5 py-4">
                <p className="text-xs font-semibold leading-5 text-slate-500">
                  Online complaint and service submission should be made
                  through the official service platforms provided on the
                  Services page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-gradient-to-r from-[#082F49] to-[#075985] px-6 py-8 shadow-lg md:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                  WASA Jhang
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Need assistance with a WASA service?
                </h2>

                <p className="mt-2 text-sm leading-6 text-sky-100">
                  Explore available citizen services and official service
                  information.
                </p>
              </div>

              <Link
                to="/services"
                className="w-fit rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#082F49] shadow-md transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                View Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact