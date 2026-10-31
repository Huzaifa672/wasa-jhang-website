
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/15 hover:text-sky-200"
    >
      {children}
    </a>
  )
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [announcements, setAnnouncements] = useState([])

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

  // Load published notices for the announcement bar
  useEffect(() => {
    let active = true

    async function loadAnnouncements() {
      try {
        const { data, error } = await supabase
          .from('website_content')
          .select('id, title, category, notice_date, published_at')
          .eq('content_type', 'notice')
          .eq('is_published', true)
          .eq('is_archived', false)
          .order('notice_date', {
            ascending: false,
            nullsFirst: false,
          })
          .order('published_at', {
            ascending: false,
            nullsFirst: false,
          })

        if (error) throw error

        if (active) {
          setAnnouncements(data || [])
        }
      } catch (err) {
        if (active) {
          setAnnouncements([])
        }
      }
    }

    loadAnnouncements()

    return () => {
      active = false
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.08)]">

      {/* Government Top Bar */}
      <div className="bg-[#082F49] px-3 py-2 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">

          <span className="shrink-0 text-[10px] font-medium tracking-wide sm:text-xs">
            Government of the Punjab
          </span>

          <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">

            {/* Social Media Icons */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-2">

              {/* WASA Jhang Facebook */}
              <SocialIcon
                href="https://www.facebook.com/wasajhang"
                label="WASA Jhang on Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
                </svg>
              </SocialIcon>

              {/* WASA Jhang Instagram */}
              <SocialIcon
                href="https://www.instagram.com/wasajhang/?hl=en"
                label="WASA Jhang on Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>

              {/* Punjab WASA LinkedIn */}
              <SocialIcon
               href="https://www.linkedin.com/in/wasa-jhang-012a93396/"
  label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M5.2 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM3.6 9h3.2v11.4H3.6V9Zm5.2 0h3.1v1.6h.1a3.4 3.4 0 0 1 3.1-1.9c3.3 0 3.9 2.2 3.9 5v6.7h-3.2v-5.9c0-1.4 0-3.1-1.9-3.1s-2.1 1.5-2.1 3v6H8.8V9Z" />
                </svg>
              </SocialIcon>

              {/* Punjab WASA X */}
              <SocialIcon
                 href="https://x.com/wasajhang"
  label="X"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.9 22H1.8l7.3-8.4L.8 2h6.5l4.5 7.5L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
                </svg>
              </SocialIcon>
            </div>

            <span className="h-4 w-px shrink-0 bg-white/40" aria-hidden="true" />

            {/* Agency Name */}
            <span className="min-w-0 text-right text-[9px] font-medium leading-tight text-sky-100 sm:text-xs">
              Water and Sanitation Agency (WASA) Jhang
            </span>

          </div>
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
            {announcements.length > 0 ? (
              <div className="announcement-track flex w-max items-center">

                {[1, 2].map((copy) => (
                  <div
                    key={copy}
                    aria-hidden={copy === 2}
                    className="flex shrink-0 items-center gap-8 pr-8 text-xs font-medium sm:text-sm"
                  >
                    {announcements.map((notice) => (
                      <div
                        key={`${copy}-${notice.id}`}
                        className="flex shrink-0 items-center gap-8"
                      >
                        <Link
                          to="/notices"
                          tabIndex={copy === 2 ? -1 : 0}
                          className="whitespace-nowrap transition hover:text-sky-200 hover:underline"
                        >
                          {notice.category === 'Tender' ? '📄' : '📢'}{' '}
                          {notice.title}
                        </Link>

                        <span
                          aria-hidden="true"
                          className="text-sky-200"
                        >
                          ◆
                        </span>
                      </div>
                    ))}
                  </div>
                ))}

              </div>
            ) : (
              <div className="px-4 text-xs font-medium sm:text-sm">
                No new announcements at the moment.
              </div>
            )}
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
