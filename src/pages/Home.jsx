import { Link } from "react-router-dom";
import heroImage from "../assets/hero.webp";
import aboutImage from "../assets/about.webp";
import project1Image from "../assets/project-1.webp";
import project2Image from "../assets/project-2.webp";
import project3 from "../assets/project-3.webp";
function Home() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#061D33]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="WASA Jhang water treatment infrastructure"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061D33]/80 via-[#061D33]/35 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[330px] max-w-7xl items-center px-6 py-7 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-200">
              Clean Water | Healthy Community | Sustainable Future
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Water &amp; Sanitation Agency
              <span className="block text-sky-400">Jhang</span>
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-100 sm:text-base">
              Providing clean water, efficient sewerage and better sanitation
              for a healthier and more prosperous Jhang.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-md bg-[#0F8FE8] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#087AC8]"
              >
                Explore Services <span className="ml-2">→</span>
              </Link>

              <Link
                to="/projects"
                className="rounded-md border border-white/80 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                View Projects <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK ACCESS
      ===================================================== */}
      <section className="bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

            <div className="shrink-0">
              <h2 className="text-lg font-extrabold text-[#082F49]">
                Quick Access
              </h2>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

              <Link
                to="/services"
                className="group flex min-h-[72px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-lg">
                  💧
                </span>
                <span className="text-xs font-bold leading-4 text-[#082F49]">
                  Our Services
                </span>
              </Link>

              <Link
                to="/projects"
                className="group flex min-h-[72px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-lg">
                  🏗️
                </span>
                <span className="text-xs font-bold leading-4 text-[#082F49]">
                  Our Projects
                </span>
              </Link>

              <Link
                to="/notices"
                className="group flex min-h-[72px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-lg">
                  📢
                </span>
                <span className="text-xs font-bold leading-4 text-[#082F49]">
                  Latest Notices
                </span>
              </Link>

              <Link
                to="/notices"
                className="group flex min-h-[72px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-lg">
                  📄
                </span>
                <span className="text-xs font-bold leading-4 text-[#082F49]">
                  Tenders
                </span>
              </Link>

              <Link
                to="/about"
                className="group flex min-h-[72px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-lg">
                  ℹ️
                </span>
                <span className="text-xs font-bold leading-4 text-[#082F49]">
                  Info Desk
                </span>
              </Link>

              <Link
                to="/contact"
                className="group flex min-h-[72px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F766E]/40 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-lg">
                  📞
                </span>
                <span className="text-xs font-bold leading-4 text-[#082F49]">
                  Contact Us
                </span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT + IMAGE + SERVICES
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-7">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.15fr_1.15fr]">

            {/* About WASA */}
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0F766E]">
                About WASA Jhang
              </p>

              <h2 className="mt-2 text-xl font-extrabold leading-tight text-[#082F49]">
                About WASA Jhang
              </h2>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                WASA Jhang is a public sector organization committed to
                providing clean drinking water, efficient sewerage and
                drainage services to the people of Jhang. We are working for
                a healthier environment and a better quality of life for our
                community.
              </p>

              <Link
                to="/about"
                className="mt-4 inline-flex items-center rounded-md bg-[#075985] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#064E6F]"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* About Image */}
            <div className="overflow-hidden rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
              <img
                src={aboutImage}
                alt="WASA Jhang office"
                className="h-[300px] w-full rounded-lg object-cover"
              />
            </div>

            {/* Our Services */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-[#082F49]">
                  Our Services
                </h2>

                <Link
                  to="/services"
                  className="text-xs font-bold text-[#075985] hover:text-[#0F766E]"
                >
                  View All Services →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">

                {/* Water Supply */}
                <Link
                  to="/services"
                  className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#075985] text-white">
                    💧
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#082F49]">
                    Water Supply
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    Reliable water supply services for citizens.
                  </p>
                </Link>

                {/* Sewerage */}
                <Link
                  to="/services"
                  className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#075985] text-white">
                    ◉
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#082F49]">
                    Sewerage
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    Sewerage services supporting a cleaner city.
                  </p>
                </Link>

                {/* Drainage */}
                <Link
                  to="/services"
                  className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#075985] text-white">
                    ≋
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#082F49]">
                    Drainage
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    Drainage services for effective water management.
                  </p>
                </Link>

                {/* Operations & Maintenance */}
                <Link
                  to="/services"
                  className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#075985] text-white">
                    ⚙️
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#082F49]">
                    Operations &amp; Maintenance
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600">
                    Operational support for essential infrastructure.
                  </p>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS + LATEST NOTICES
      ===================================================== */}
      <section className="bg-white px-6 py-7">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">

            {/* Featured Projects */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-[#082F49]">
                  Featured Projects
                </h2>

                <Link
                  to="/projects"
                  className="text-xs font-bold text-[#075985] hover:text-[#0F766E]"
                >
                  View All Projects →
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {/* Project 1 */}
                <Link
                  to="/projects"
                  className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-[150px] overflow-hidden">
                    <img
                      src={project1Image}
                      alt="Water Treatment Plant Upgrade"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <span className="inline-block rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
                      Ongoing
                    </span>

                    <h3 className="mt-2 text-sm font-bold leading-5 text-[#082F49]">
                      Water Treatment Plant Upgrade
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      📍 Jhang City
                    </p>

                    <p className="mt-2 text-[11px] leading-4 text-slate-600">
                      Upgradation of existing water treatment plant for better
                      water quality.
                    </p>

                    <span className="mt-3 inline-block text-[11px] font-bold text-[#075985]">
                      View Project →
                    </span>
                  </div>
                </Link>

                {/* Project 2 */}
                <Link
                  to="/projects"
                  className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-[150px] overflow-hidden">
                    <img
                      src={project2Image}
                      alt="Sewerage Network Expansion"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700">
                      Ongoing
                    </span>

                    <h3 className="mt-2 text-sm font-bold leading-5 text-[#082F49]">
                      Sewerage Network Expansion
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      📍 Jhang City
                    </p>

                    <p className="mt-2 text-[11px] leading-4 text-slate-600">
                      Expansion of sewerage network in selected areas of Jhang.
                    </p>

                    <span className="mt-3 inline-block text-[11px] font-bold text-[#075985]">
                      View Project →
                    </span>
                  </div>
                </Link>

               {/* Project 3 */}
<Link
  to="/projects"
  className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
>
  <div className="h-[150px] overflow-hidden bg-slate-100">
    <img
      src={project3}
      alt="Drainage and channel infrastructure"
      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
    />
  </div>

  <div className="p-5">
    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-teal-700">
      <span>📍</span>
      WASA Jhang
    </div>

    <h3 className="text-lg font-bold text-slate-900">
      Drainage & Channel Infrastructure
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Infrastructure improvements supporting efficient drainage and better
      water management across Jhang.
    </p>

    <div className="mt-4 text-sm font-semibold text-teal-700">
      View Project →
    </div>
  </div>
</Link>

              </div>
            </div>

            {/* Latest Notices */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-[#082F49]">
                  Latest Notices
                </h2>

                <Link
                  to="/notices"
                  className="text-xs font-bold text-[#075985] hover:text-[#0F766E]"
                >
                  View All Notices →
                </Link>
              </div>

              <div className="space-y-3">

                {/* Notice 1 */}
                <Link
                  to="/notices"
                  className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#0F766E]/40 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#075985] text-sm text-white">
                      📢
                    </div>

                    <div>
                      <h3 className="text-sm font-bold leading-5 text-[#082F49]">
                        Public Notice - Water Supply Disruption
                      </h3>

                      <p className="mt-1 text-[11px] text-slate-500">
                        April 25, 2025
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Tender Notice */}
                <Link
                  to="/notices"
                  className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#0F766E]/40 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#075985] text-sm text-white">
                      📄
                    </div>

                    <div>
                      <h3 className="text-sm font-bold leading-5 text-[#082F49]">
                        Tender Notice - Upgradation of Sewerage System
                      </h3>

                      <p className="mt-1 text-[11px] text-slate-500">
                        April 18, 2025
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Notice 3 */}
                <Link
                  to="/notices"
                  className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#0F766E]/40 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#075985] text-sm text-white">
                      🔔
                    </div>

                    <div>
                      <h3 className="text-sm font-bold leading-5 text-[#082F49]">
                        Notification - New Office Timings
                      </h3>

                      <p className="mt-1 text-[11px] text-slate-500">
                        April 10, 2025
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Awareness Campaign */}
                <Link
                  to="/notices"
                  className="block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#0F766E]/40 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#075985] text-sm text-white">
                      📢
                    </div>

                    <div>
                      <h3 className="text-sm font-bold leading-5 text-[#082F49]">
                        Awareness Campaign on Cleanliness
                      </h3>

                      <p className="mt-1 text-[11px] text-slate-500">
                        April 05, 2025
                      </p>
                    </div>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
     {/* BOTTOM INFORMATION SECTIONS */}
<section className="bg-[#061D33] px-6 py-7">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Tenders */}
      <Link
        to="/notices"
        className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#073B5C] to-[#075985] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg">
          📄
        </div>

        <h3 className="mt-3 text-sm font-bold text-white">
          Tenders
        </h3>

        <p className="mt-1 text-[11px] leading-4 text-slate-200">
          View current and archived tenders.
        </p>

        <span className="mt-2 inline-block text-[11px] font-bold text-sky-300">
          View Tenders →
        </span>
      </Link>

      {/* Documents */}
      <Link
        to="/about"
        className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#073B5C] to-[#075985] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg">
          📰
        </div>

        <h3 className="mt-3 text-sm font-bold text-white">
          Documents
        </h3>

        <p className="mt-1 text-[11px] leading-4 text-slate-200">
          Policies, reports and useful documents.
        </p>

        <span className="mt-2 inline-block text-[11px] font-bold text-sky-300">
          View Documents →
        </span>
      </Link>

      {/* FAQs */}
      <Link
        to="/contact"
        className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#073B5C] to-[#075985] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg">
          ❓
        </div>

        <h3 className="mt-3 text-sm font-bold text-white">
          FAQs
        </h3>

        <p className="mt-1 text-[11px] leading-4 text-slate-200">
          Find answers to common questions.
        </p>

        <span className="mt-2 inline-block text-[11px] font-bold text-sky-300">
          View FAQs →
        </span>
      </Link>

      {/* Public Information */}
      <Link
        to="/about"
        className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#073B5C] to-[#075985] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg">
          ℹ️
        </div>

        <h3 className="mt-3 text-sm font-bold text-white">
          Public Information
        </h3>

        <p className="mt-1 text-[11px] leading-4 text-slate-200">
          RTI and other public information.
        </p>

        <span className="mt-2 inline-block text-[11px] font-bold text-sky-300">
          View Information →
        </span>
      </Link>

    </div>
  </div>
</section>
    </main>
  );
}

export default Home;