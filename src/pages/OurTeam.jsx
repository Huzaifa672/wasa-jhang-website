
import { useState } from 'react'

const leadership = [
  {
    role: 'Managing Director',
    name: 'Syed Saulat Raza',
    image: '/md-syed-saul-raza.jpg',
    initials: 'MD',
    description:
      'Leads WASA Jhang and oversees the organization’s overall administration, planning, and delivery of public services.',
  },
  {
    role: 'DMD O&M',
    name: 'Mr. Waqas Naseer',
    image: '/dmd-om.jpg',
    initials: 'O&M',
    description:
      'Oversees operations and maintenance activities and supports the delivery of sewerage and drainage services.',
  },
  {
    role: 'DMD Development',
    name: 'Mr. Kashif Fayyaz',
    image: '/dmd-development.jpg',
    initials: 'DEV',
    description:
      'Oversees development initiatives and coordinates infrastructure improvement projects.',
  },
  {
    role: 'Director Finance',
    name: 'Abdul Rauf Butt',
    initials: 'DF',
    description:
      'Supports financial administration, budgeting, and related financial matters.',
  },
]

const assistantDirectors = [
  {
    role: 'Assistant Director Saddar',
    name: 'Tassadaq Shah',
    initials: 'TS',
  },
  {
    role: 'Assistant Director Satellite Town Jhang',
    name: 'Fiyyaz Hussain',
    initials: 'FH',
  },
  {
    role: 'Assistant Director Jhang City',
    name: 'Saleem Raza',
    initials: 'SR',
  },
]

function Portrait({ src, name, initials, className = '' }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-slate-100 ${className}`}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover object-top"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-100">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#E0F2FE] text-xl font-bold text-[#075985] shadow-sm">
            {initials}
          </div>
        </div>
      )}
    </div>
  )
}

export default function OurTeam() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#061D33] px-6 py-12 text-center text-white">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          WASA Jhang
        </p>
        <h1 className="text-3xl font-bold md:text-4xl">Our Team</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-200">
          Meet the leadership and team serving the people of Jhang.
        </p>
      </section>

      {/* Executive Leadership */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
            WASA Jhang
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#073B5C]">
            Executive Leadership
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member) => (
            <article
              key={member.role}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Portrait
                src={member.image}
                name={member.name}
                initials={member.initials}
                className="h-60 w-full"
              />

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
                  {member.role}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#073B5C]">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Assistant Directors */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-7 text-2xl font-bold text-[#073B5C]">
            Assistant Directors
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assistantDirectors.map((member) => (
              <article
                key={member.role}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-sky-200 hover:shadow-sm"
              >
                <Portrait
                  name={member.name}
                  initials={member.initials}
                  className="h-24 w-24 shrink-0 rounded-lg"
                />

                <div className="min-w-0">
                  <h3 className="font-bold leading-5 text-[#073B5C]">
                    {member.role}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {member.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
