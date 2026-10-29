
function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061D33] via-[#073B5C] to-[#075985] px-6 py-12 text-white md:py-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 left-10 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
            WASA Jhang
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            About WASA Jhang
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
            Learn about Water and Sanitation Agency Jhang, its role in urban
            sanitation, and its focus on sewerage and drainage services.
          </p>
        </div>
      </section>

      {/* ABOUT THE ORGANIZATION */}
      <section className="bg-white px-6 py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075985]">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Water and Sanitation Agency Jhang
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              WASA Jhang is a public-sector organization operating under
              Punjab WASA. Its work focuses on sewerage, drainage and related
              urban sanitation services for the residents of Jhang.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              The agency's service areas include the management and upkeep of
              relevant public infrastructure, support for sanitation services,
              and information for citizens about WASA-related matters.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              This website provides an accessible place to explore available
              services, view project and notice information, and find guidance
              for contacting WASA Jhang.
            </p>
          </div>

          <div
            className="relative min-h-[260px] overflow-hidden rounded-2xl bg-cover bg-center shadow-md ring-1 ring-slate-200 md:min-h-[340px]"
            style={{ backgroundImage: "url('/project-1.webp')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#061D33]/85 via-[#061D33]/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-200">
                Serving Jhang
              </p>
              <p className="mt-2 text-xl font-bold md:text-2xl">
                Sewerage and Drainage Services
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                Supporting sanitation and the upkeep of urban infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATION INFORMATION */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Organization at a Glance
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              About Our Organization
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              A brief overview of WASA Jhang and its role in public sanitation
              services.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl">
                🏛️
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#073B5C]">
                Parent Organization
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                WASA Jhang operates under Punjab WASA.
              </p>
              <p className="mt-4 text-sm font-bold text-[#075985]">
                Punjab WASA
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-2xl">
                📅
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#073B5C]">
                Establishment
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The establishment date provided for WASA Jhang is:
              </p>
              <p className="mt-4 text-sm font-bold text-teal-700">
                18 June 2025
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                📍
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#073B5C]">
                Service Area
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The agency's service focus is Jhang, with sewerage and drainage
                services as its current areas of operation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* OUR ROLE */}
      <section className="bg-white px-6 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075985]">
              Our Role
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Our Role in Jhang
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Sewerage, drainage infrastructure and access to useful public
              service information are central to the agency's current focus.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-xl">
                🛠️
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Infrastructure
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Sewerage and drainage infrastructure supports the movement
                and management of wastewater and rainwater in urban areas.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-100 text-xl">
                🌿
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Urban Sanitation
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Effective sanitation and drainage management contribute to a
                cleaner and healthier urban environment.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-xl">
                ℹ️
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Citizen Information
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                This website helps citizens find service information, notices,
                project updates and available contact options.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* KEY AREAS OF WORK — KEPT UNCHANGED */}
      <section className="bg-slate-50 px-6 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Our Role
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Key Areas of Work
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Our current focus is on sewerage, drainage and citizen support.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-xl">💧</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Water Supply</h3>
              <span className="mt-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                Coming Soon
              </span>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Water supply services are not currently available through WASA
                Jhang. Availability updates will be shared when confirmed.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-xl">🌊</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Sewerage & Drainage</h3>
              <span className="mt-3 inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                Available
              </span>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Sewerage and drainage services support urban sanitation and
                wastewater management in Jhang.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-xl">ℹ️</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Citizen Support</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Helping citizens find relevant service information and guidance
                for WASA-related concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
