
export default function ManagingDirector() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#061D33] px-6 py-12 text-center text-white">
        <h1 className="text-3xl font-bold md:text-4xl">
          Managing Director
        </h1>
        <p className="mt-3 text-slate-200">
          WASA Jhang
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[240px_1fr] md:p-10">
          <div className="flex justify-center">
            <img
              src="/md-syed-saul-raza.jpg"
              alt="Managing Director"
              className="h-56 w-56 rounded-xl border border-slate-200 object-cover object-top"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              Leadership
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#073B5C]">
              Syed Saulat Raza
            </h2>
            <p className="mt-1 font-medium text-slate-600">
              Managing Director, WASA Jhang
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              WASA Jhang is committed to improving sewerage and drainage
              services, strengthening public service delivery, and addressing
              citizens' concerns through responsible management and continuous
              improvement.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Official message subject to approval by the relevant authority.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article
            id="mission"
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="text-3xl">🎯</div>
            <h2 className="mt-3 text-xl font-bold text-[#073B5C]">
              Our Mission
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              To provide reliable sewerage and drainage services, maintain
              public infrastructure, respond to citizens' complaints, and
              promote a cleaner and healthier environment in Jhang.
            </p>
          </article>

          <article
            id="vision"
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="text-3xl">🌟</div>
            <h2 className="mt-3 text-xl font-bold text-[#073B5C]">
              Our Vision
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              To work towards a cleaner, healthier, and better-managed Jhang
              through improved infrastructure, efficient operations, and
              responsive public services.
            </p>
          </article>
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Mission and vision wording is a proposed draft and should be approved
          by WASA Jhang before being presented as official policy.
        </p>
      </section>
    </main>
  )
}
