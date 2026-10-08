import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Notices', path: '/notices' },
  ]

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition ${
      isActive
        ? 'text-blue-800'
        : 'text-slate-600 hover:text-blue-800'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.08)]">
      {/* Government Top Bar */}
      <div className="bg-[#082F49] px-6 py-1.5 text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-medium tracking-wide">
            Government of Punjab
          </span>

          <span className="hidden text-sky-200 sm:block">
            Water & Sanitation Agency Jhang
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Branding */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* WASA Logo */}
         <div className="flex h-24 w-24 shrink-0 items-center justify-center">
  <img
    src="/logo.png"
    alt="WASA Jhang"
    className="h-24 w-24 object-contain"
  />
</div>
            <div>
              <h1 className="text-lg font-bold leading-tight text-[#082F49] md:text-xl">
                WASA Jhang
              </h1>

              <p className="text-[11px] font-medium text-slate-500 md:text-xs">
                Water & Sanitation Agency
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <span className="absolute -bottom-[17px] left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[#075985] to-[#0F766E]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Contact Button */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition ${
                  isActive
                    ? 'bg-[#082F49] text-white'
                    : 'bg-[#075985] text-white hover:bg-[#064E73]'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md border border-slate-200 p-2 text-slate-700 transition hover:border-blue-200 hover:bg-sky-50 hover:text-blue-800 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-3 shadow-sm md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-slate-100 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'text-blue-800'
                      : 'text-slate-600 hover:text-blue-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `mt-3 rounded-md px-4 py-2.5 text-center text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#082F49] text-white'
                    : 'bg-[#075985] text-white hover:bg-[#064E73]'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar