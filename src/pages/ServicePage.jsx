
import { Link } from 'react-router-dom'
import externalServices from '../data/externalServices'

function Services() {
  const onlineServices = [
    {
      icon: '💧',
      title: 'New Domestic Connection',
      description:
        'Apply for a new domestic water connection through the official Punjab online service.',
      label: 'Official Punjab Service',
      link: externalServices.domesticConnection.url,
    },
    {
      icon: '🏢',
      title: 'New Commercial Connection',
      description:
        'Apply for a new commercial water connection through the official Punjab online service.',
      label: 'Official Punjab Service',
      link: externalServices.commercialConnection.url,
    },
    {
      icon: '📝',
      title: 'Register a Complaint',
      description:
        'Register a complaint related to water supply, sewerage or sanitation through the official complaint channel.',
      label: 'WASA Complaint Helpline 1334',
      link: externalServices.registerComplaint.url,
    },
    {
      icon: '🔎',
      title: 'Track Complaint',
      description:
        'Check the current status of a registered complaint through the official complaint tracking system.',
      label: 'Official Punjab Service',
      link: externalServices.trackComplaint.url,
    },
    {
      icon: '🧾',
      title: 'Duplicate Bill',
      description:
        'The verified online duplicate bill service for Jhang will be added once the official service is confirmed.',
      label: 'Service Coming Soon',
      link: '#',
      disabled: true,
    },
    {
      icon: '📞',
      title: 'Complaint Helpline',
      description:
        'Call the official WASA helpline 1334 for assistance with water and sanitation related complaints.',
      label: 'WASA Helpline 1334',
      link: externalServices.helpline.url,
    },
  ]

  const coreServices = [
    {
      number: '01',
      icon: '💧',
      title: 'Water Supply',
      description:
        'Water supply services and information will be available soon.',
      comingSoon: true,
    },
    {
      number: '02',
      icon: '🌊',
      title: 'Sewerage & Drainage',
      description:
        'Information related to sewerage, drainage and sanitation services.',
    },
    {
      number: '03',
      icon: '🏗️',
      title: 'Development Projects',
      description:
        'Information about water, sewerage and sanitation infrastructure projects.',
    },
    {
      number: '04',
      icon: '📢',
      title: 'Public Information',
      description:
        'Important notices, announcements and service updates for citizens.',
    },
    {
      number: '05',
      icon: '📋',
      title: 'Service Guidelines',
      description:
        'Useful information and guidance about common WASA services and procedures.',
    },
    {
      number: '06',
      icon: '☎️',
      title: 'Citizen Assistance',
      description:
        'Guidance for contacting the relevant offices and official service channels.',
    },
  ]

  const faqs = [
    {
      question: 'Where can I apply for a new water connection?',
      answer:
        'Use the official Domestic Water Connection or Commercial Water Connection service listed above.',
    },
    {
      question: 'How can I register a water or sewerage complaint?',
      answer:
        'You can use the official complaint service or call the WASA helpline at 1334.',
    },
    {
      question: 'Where can I get a duplicate bill?',
      answer:
        'The verified online duplicate bill service for Jhang will be added once the official service is confirmed.',
    },
    {
      question: 'Which services are directly available through this website?',
      answer:
        'This website provides service information, guidance, notices and links to verified government platforms. Online applications are handled through the relevant official systems.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061D33] via-[#073B5C] to-[#075985] px-6 py-14 text-white md:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 left-10 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[12%] top-[8%] hidden select-none text-[210px] font-black leading-none text-white/5 lg:block">
          W
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-teal-300" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
              WASA Jhang
            </p>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Citizen Services
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Access important water, sewerage, sanitation and citizen services
            through WASA Jhang and official Punjab government platforms.
          </p>
        </div>
      </section>

      {/* ONLINE SERVICES */}
      <section className="bg-white px-6 py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-teal-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Online Services
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#082F49] md:text-4xl">
              Access Official Services
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Access verified government services through external platforms,
              while WASA Jhang provides clear information and guidance.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {onlineServices.map((service) =>
              service.disabled ? (
                <div
                  key={service.title}
                  className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 text-2xl">
                      {service.icon}
                    </div>

                    <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      Coming Soon
                    </span>
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {service.label}
                  </p>

                  <h3 className="mt-1.5 text-xl font-bold text-[#082F49]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex text-sm font-bold text-slate-400">
                    Currently Unavailable
                  </span>
                </div>
              ) : (
                <a
                  key={service.title}
                  href={service.link}
                  target={
                    service.link.startsWith('tel:') ? undefined : '_blank'
                  }
                  rel={
                    service.link.startsWith('tel:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 text-2xl">
                      {service.icon}
                    </div>

                    <span className="rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-700">
                      Official
                    </span>
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                    {service.label}
                  </p>

                  <h3 className="mt-1.5 text-xl font-bold text-[#082F49] transition group-hover:text-[#075985]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#075985]">
                    {service.link.startsWith('tel:')
                      ? 'Call 1334'
                      : 'Open Official Service'}

                    <span className="transition-transform group-hover:translate-x-1">
                      {service.link.startsWith('tel:') ? '☎' : '↗'}
                    </span>
                  </span>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#075985] to-[#0F766E] transition-all duration-300 group-hover:w-full" />
                </a>
              ),
            )}
          </div>

          <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50 px-5 py-4">
            <p className="text-sm leading-6 text-slate-700">
              <span className="font-bold text-[#082F49]">
                Official Service:
              </span>{' '}
              Access verified government services through external platforms,
              while WASA Jhang provides clear information and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-slate-50 px-6 py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-teal-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                WASA Jhang
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#082F49] md:text-4xl">
              Our Core Services
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Explore the main areas of water supply, sewerage, sanitation and
              public service information covered by WASA Jhang.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <div
                key={service.number}
                className={`relative overflow-hidden rounded-xl border border-slate-200 p-6 shadow-sm ${
                  service.comingSoon
                    ? 'bg-slate-50'
                    : 'group bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-xl">
                    {service.icon}
                  </div>

                  <span className="text-xs font-black text-slate-200 transition group-hover:text-sky-100">
                    {service.number}
                  </span>
                </div>

                {service.comingSoon && (
                  <span className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Coming Soon
                  </span>
                )}

                <h3 className="mt-5 text-xl font-bold text-[#082F49]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {service.comingSoon ? (
                  <span className="mt-4 inline-flex text-sm font-bold text-slate-400">
                    Currently Unavailable
                  </span>
                ) : (
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex text-sm font-bold text-[#075985]"
                  >
                    Get Information →
                  </Link>
                )}

                {!service.comingSoon && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW SERVICES WORK */}
      <section className="border-y border-slate-200 bg-white px-6 py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-teal-600" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                  Simple Access
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#082F49] md:text-4xl">
                One website, official service access
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                The WASA Jhang website provides citizens with clear
                information and easy navigation. Where an official Punjab
                government digital system is available, users are guided
                directly to that system.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-[#075985]">
                  Information
                </span>

                <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700">
                  Official Links
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                  Citizen Guidance
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-[#082F49] p-6 shadow-lg md:p-8">
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#075985]">
                    1
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Choose your service
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-sky-100">
                      Identify the service you need.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#075985]">
                    2
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Open official platform
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-sky-100">
                      Open the relevant official Punjab or WASA system in a
                      new tab.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#075985]">
                    3
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Complete your service
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-sky-100">
                      Complete your application or request on the official
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-teal-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                FAQs
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#082F49] md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Quick answers to common questions about WASA Jhang services.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-2 text-base font-bold text-[#082F49]">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}

                    <span className="shrink-0 text-lg text-[#075985] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-white px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#082F49] to-[#075985] px-6 py-8 shadow-lg md:px-10 md:py-9">
            <div className="pointer-events-none absolute right-[-30px] top-[-70px] select-none text-[190px] font-black leading-none text-white/5">
              W
            </div>

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                  Citizen Support
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  Need more information?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-sky-100">
                  Contact WASA Jhang for service information, guidance and
                  citizen assistance.
                </p>
              </div>

              <Link
                to="/contact"
                className="w-fit shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#082F49] shadow-sm transition hover:bg-sky-50"
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

export default Services
