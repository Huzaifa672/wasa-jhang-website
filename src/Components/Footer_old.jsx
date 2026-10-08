```jsx
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#071E33] text-slate-300">
      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#075985] via-[#0EA5A4] to-[#0F766E]" />

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* WASA Jhang */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#075985] to-[#0F766E] text-lg font-bold text-white shadow-lg">
                W
              </div>

              <div>
                <h2 className="font-bold text-white">
                  WASA Jhang
                </h2>

                <p className="text-xs text-slate-400">
                  Water &amp; Sanitation Agency
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Providing information and public services related to
              water supply, sewerage, sanitation and infrastructure
              for the citizens of Jhang.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-teal-300" />
              Serving the citizens of Jhang
            </div>
          </div>

          {/* Citizen Services */}
          <div>
            <h3 className="border-l-2 border-[#0EA5A4] pl-3 text-sm font-semibold uppercase tracking-wide text-white">
              Citizen Services
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              <Link
                to="/services"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Water Supply
              </Link>

              <Link
                to="/services"
                className="transition hover:translate-x-1 hover:text-white"
              >
                New Connection
              </Link>

              <Link
                to="/contact"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Complaints &amp; Assistance
              </Link>

              <Link
                to="/services"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Bill Information
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="border-l-2 border-[#0EA5A4] pl-3 text-sm font-semibold uppercase tracking-wide text-white">
              Information
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              <Link
                to="/notices"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Public Notices
              </Link>

              <Link
                to="/projects"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Projects &amp; Development
              </Link>

              <Link
                to="/about"
                className="transition hover:translate-x-1 hover:text-white"
              >
                About WASA Jhang
              </Link>

              <Link
                to="/contact"
                className="transition hover:translate-x-1 hover:text-white"
              >
                Contact &amp; Support
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="border-l-2 border-[#0EA5A4] pl-3 text-sm font-semibold uppercase tracking-wide text-white">
              Contact Information
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-medium text-slate-200">
                  Office
                </p>

                <p className="mt-1 leading-6 text-slate-400">
                  WASA Jhang, Punjab, Pakistan
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-200">
                  Phone
                </p>

                <p className="mt-1 text-slate-400">
                  Contact office for assistance
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-200">
                  Email
                </p>

                <p className="mt-1 text-slate-400">
                  Official contact information
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex rounded-md bg-[#075985] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0F766E]"
              >
                Contact WASA Jhang →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 WASA Jhang. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <span>Government of Punjab</span>
            <span className="text-slate-700">•</span>
            <span>Water &amp; Sanitation Agency</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```
