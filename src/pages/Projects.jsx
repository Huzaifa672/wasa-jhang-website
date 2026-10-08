
import { Link } from 'react-router-dom'
import project1 from '../assets/project-1.webp'
import project2 from '../assets/project-2.webp'
import project3 from '../assets/project-3.webp'

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Water Supply Improvement',
      description:
        'Improvement and development of water supply infrastructure to support reliable and efficient services for citizens.',
      status: 'Ongoing',
      image: project1,
    },
    {
      number: '02',
      title: 'Sewerage Infrastructure Development',
      description:
        'Development and improvement of sewerage infrastructure to support better sanitation services and a cleaner environment.',
      status: 'Ongoing',
      image: project2,
    },
    {
      number: '03',
      title: 'Drainage Infrastructure Improvement',
      description:
        'Improvement of drainage infrastructure to support effective water management and better public sanitation conditions.',
      status: 'Planned',
      image: project3,
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
            Our Projects
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
            Explore development and improvement initiatives related to water
            supply, sewerage and drainage services in Jhang.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-teal-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Development & Improvement
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Current & Planned Projects
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Key areas of infrastructure development and improvement related
              to WASA Jhang services.
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                {/* PROJECT IMAGE */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061D33]/75 via-[#061D33]/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-sm font-bold text-[#075985] shadow-md">
                    {project.number}
                  </div>

                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${
                      project.status === 'Ongoing'
                        ? 'bg-teal-50/95 text-[#0F766E]'
                        : 'bg-white/95 text-[#075985]'
                    }`}
                  >
                    {project.status}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-100">
                      WASA Jhang
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#075985]">
                    Project Information

                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-5 h-0.5 w-full bg-slate-100">
                    <div className="h-full w-0 bg-gradient-to-r from-[#075985] to-[#0F766E] transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-sky-100 bg-sky-50/60 px-5 py-4">
            <p className="text-sm leading-6 text-slate-600">
              Project information can be updated as official development
              details, progress and public notices become available.
            </p>
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
                  Development Information
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Need information about WASA projects?
                </h2>

                <p className="mt-2 text-sm leading-6 text-sky-100">
                  Contact WASA Jhang for project information and public service
                  inquiries.
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

export default Projects

