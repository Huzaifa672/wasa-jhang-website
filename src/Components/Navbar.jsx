
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Notices', path: '/notices' },
  ]

  const aboutLinks = [
    { name: 'About WASA Jhang', path: '/about' },
    { name: 'Managing Director', path: '/managing-director' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Organization Structure', path: '/organization-structure' },
  ]

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition ${
      isActive
        ? 'text-blue-800'
        : 'text-slate-600 hover:text-blue-800'
    }`

  const closeMenus = () => {
    setMobileMenuOpen(false)
    setAboutDropdownOpen(false)
  }

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

      {/* Scrolling Announcement Bar */}
      <section
        className="overflow-hidden bg-[#075985] text-white"
        aria-label="Public announcements"
      >
        <div className="flex h-10 items-center">
          <div className="z-10 flex h-full shrink-0 items-center gap-2 bg-[#061D33] px-3 sm:px-5">
            <span aria-hidden="true">📢</span>
            <span className="text-[10px] font-bold uppercase tracking-wider sm:text-xs">
              Announcements
            </span>
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="announcement-track flex w-max items-center">
              {[1, 2].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy === 2}
                  className="flex shrink-0 items-center gap-8 pr-8 text-xs font-medium sm:text-sm"
                >
                  <Link
                    to="/projects"
                    tabIndex={copy === 2 ? -1 : 0}
                    className="whitespace-nowrap transition hover:text-sky-200 hover:underline"
                  >
                    Water Treatment Plant Upgrade — Coming Soon
                  </Link>

                  <span aria-hidden="true" className="text-sky-200">◆</span>

                  <Link
                    to="/notices"
                    tabIndex={copy === 2 ? -1 : 0}
                    className="whitespace-nowrap transition hover:text-sky-200 hover:underline"
                  >
                    Latest Notices — View Announcements
                  </Link>

                  <span aria-hidden="true" className="text-sky-200">◆</span>

                  <Link
                    to="/notices"
                    tabIndex={copy === 2 ? -1 : 0}
                    className="whitespace-nowrap transition hover:text-sky-200 hover:underline"
                  >
                    Tender Announcements — Visit Notices
                  </Link>

                  <span aria-hidden="true" className="text-sky-200">◆</span>

                  <Link
                    to="/contact"
                    tabIndex={copy === 2 ? -1 : 0}
                    className="whitespace-nowrap transition hover:text-sky-200 hover:underline"
                  >
                    For Queries and Complaints, Contact WASA Jhang
                  </Link>

                  <span aria-hidden="true" className="text-sky-200">◆</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Branding */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={closeMenus}
          >
            <div className="flex shrink-0 items-center justify-center">
              <img
                src="/logo.jpg"
                alt="WASA Jhang"
                className="block h-24 w-24 shrink-0 object-contain"
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
            {navLinks.slice(0, 1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navLinkClass}
                onClick={closeMenus}
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

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`flex items-center gap-1 py-2 text-sm font-semibold transition ${
                  aboutDropdownOpen
                    ? 'text-blue-800'
                    : 'text-slate-600 hover:text-blue-800'
                }`}
                aria-expanded={aboutDropdownOpen}
              >
                About Us
                <svg
                  className={`h-4 w-4 transition-transform ${
                    aboutDropdownOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {aboutDropdownOpen && (
                <div className="absolute left-0 top-full z-50 mt-3 w-60 overflow-hidden rounded-lg border border-slate-200 bg-white py-2 shadow-xl">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenus}
                      className="block px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-[#075985]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navLinkClass}
                onClick={closeMenus}
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
              onClick={closeMenus}
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
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              setAboutDropdownOpen(false)
            }}
            className="rounded-md border border-slate-200 p-2 text-slate-700 transition hover:border-blue-200 hover:bg-sky-50 hover:text-blue-800 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
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
            {navLinks.slice(0, 1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenus}
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

            {/* Mobile About Us Dropdown */}
            <button
              type="button"
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="flex items-center justify-between border-b border-slate-100 py-3 text-left text-sm font-semibold text-slate-700"
              aria-expanded={aboutDropdownOpen}
            >
              About Us
              <svg
                className={`h-4 w-4 transition-transform ${
                  aboutDropdownOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {aboutDropdownOpen && (
              <div className="border-b border-slate-100 bg-slate-50 py-1 pl-4">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenus}
                    className="block py-2.5 text-sm text-slate-600 transition hover:text-[#075985]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenus}
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
              onClick={closeMenus}
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
