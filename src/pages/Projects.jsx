
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Fire Hydrant Installation',
    description:
      'Providing and installation of fire hydrants at different locations under WASA Jhang.',
    photos: [
      {
        src: '/projects/hydrant-1.jpeg',
        alt: 'Fire hydrant project photo 1',
        label: 'Installation View 1',
      },
      {
        src: '/projects/hydrant-2.jpeg',
        alt: 'Fire hydrant project photo 2',
        label: 'Installation View 2',
      },
    ],
  },
  {
    id: 2,
    title: 'Civil Works — Disposal Stations',
    description:
      'Civil works associated with New Gadiyan Wala and Goghay Wala Disposal Stations, Jhang.',
    groups: [
      {
        title: 'Boundary Wall & Generator Room',
        photos: [
          {
            src: '/projects/boundary-generator-before.jpeg',
            alt: 'Boundary wall and generator room before work',
            label: 'Before',
          },
          {
            src: '/projects/boundary-generator-after.jpeg',
            alt: 'Boundary wall and generator room during work',
            label: 'After',
          },
        ],
      },
      {
        title: 'Disposal Station Rehabilitation',
        description:
          'Rehabilitation and improvement works at WASA Jhang disposal stations.',
        photos: [
          {
            src: '/projects/site-leveling-before.jpeg',
            alt: 'Disposal station site before leveling and colour work',
            label: 'Before',
          },
          {
            src: '/projects/site-leveling-after.jpeg',
            alt: 'Disposal station site after leveling and colour work',
            label: 'After',
          },
        ],
      },
    ],
  },
]

function ProjectPhoto({ photo }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="h-44 w-full object-cover sm:h-52"
      />
      <div className="border-t border-slate-200 px-3 py-2 text-sm font-medium text-slate-600">
        {photo.label}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-[#061D33] to-[#075985] px-4 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-200">
            WASA Jhang
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Our Projects
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
            View project photographs and available tender information for
            WASA Jhang.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:py-12">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-200 p-5 sm:p-6">
              <h2 className="text-xl font-bold text-[#061D33] sm:text-2xl">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                {project.description}
              </p>
            </div>

            {project.photos && (
              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                {project.photos.map((photo) => (
                  <ProjectPhoto key={photo.src} photo={photo} />
                ))}
              </div>
            )}

            {project.groups && (
              <div className="space-y-7 p-5 sm:p-6">
                {project.groups.map((group) => (
                  <section key={group.title}>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-[#073B5C]">
                        {group.title}
                      </h3>
                    </div>

                    {group.description && (
                      <p className="mb-4 text-sm leading-6 text-slate-600">
                        {group.description}
                      </p>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      {group.photos.map((photo) => (
                        <ProjectPhoto key={photo.src} photo={photo} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </article>
        ))}

        <div className="rounded-xl bg-[#073B5C] p-6 text-center text-white">
          <h2 className="text-xl font-bold">
            Need More Information?
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            Contact WASA Jhang for project-related enquiries.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#073B5C] transition hover:bg-slate-100"
          >
            Contact Us
          </Link>
        </div>

        <p className="text-xs leading-5 text-slate-500">
          Photographs are displayed for project reference.
        </p>
      </section>
    </main>
  )
}

export default Projects
