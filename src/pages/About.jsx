function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= PAGE HEADER ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061D33] via-[#073B5C] to-[#075985] px-6 py-14 text-white md:py-16">
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
            About WASA Jhang
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Learn about WASA Jhang, its responsibilities and its role in
            supporting essential water and sanitation services.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#075985]" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075985]">
                  Who We Are
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Water and Sanitation Agency Jhang
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                WASA Jhang supports essential water supply, sewerage and
                sanitation services for the citizens of Jhang.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                The agency supports public infrastructure, service
                information and citizen access to relevant water and
                sanitation facilities.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Public Service
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#075985]">
                    Water & Sanitation
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Serving
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0F766E]">
                    Citizens of Jhang
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE BACKGROUND */}
            <div
              className="relative min-h-[300px] overflow-hidden rounded-2xl bg-cover bg-center shadow-lg ring-1 ring-slate-200 md:min-h-[360px]"
              style={{
                backgroundImage: "url('/src/assets/project-1.webp')",
              }}
            >
              <div className="absolute inset-0 bg-[#061D33]/20" />

              <div className="absolute bottom-5 left-5 rounded-lg bg-[#061D33]/85 px-4 py-3 text-white backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-200">
                  WASA Jhang
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Public Water & Sanitation Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & RESPONSIBILITIES ================= */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {/* MISSION */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-lg">
                🎯
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Our Mission
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                To support reliable water supply, sewerage and sanitation
                services while improving public service facilities for the
                citizens of Jhang.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#075985]">
                <span className="h-2 w-2 rounded-full bg-[#075985]" />
                Public Service
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#075985] to-[#0F766E] transition-all duration-300 group-hover:w-full" />
            </div>

            {/* RESPONSIBILITIES */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-lg">
                ⚙️
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Our Responsibilities
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Supporting water supply, sewerage, drainage, sanitation and
                citizen-related public services.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                <span className="h-2 w-2 rounded-full bg-[#0F766E]" />
                Essential Services
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#075985] to-[#0F766E] transition-all duration-300 group-hover:w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY AREAS ================= */}
      <section className="bg-white px-6 py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-teal-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Our Role
              </p>

              <span className="h-px w-8 bg-teal-600" />
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Key Areas of Work
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Supporting essential water, sanitation and citizen-related
              public services.
            </p>
          </div>

          {/* AREA CARDS */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {/* WATER SUPPLY */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-xl">
                💧
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Water Supply
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Supporting water supply services and related public
                infrastructure.
              </p>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#075985] to-[#0F766E] transition-all duration-300 group-hover:w-full" />
            </div>

            {/* SEWERAGE & DRAINAGE */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-xl">
                🌊
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Sewerage & Drainage
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Supporting sewerage, drainage and sanitation related public
                services.
              </p>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#075985] to-[#0F766E] transition-all duration-300 group-hover:w-full" />
            </div>

            {/* CITIZEN SUPPORT */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-xl">
                ℹ️
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Citizen Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Providing clear information and guidance for access to
                relevant WASA services.
              </p>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#075985] to-[#0F766E] transition-all duration-300 group-hover:w-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About