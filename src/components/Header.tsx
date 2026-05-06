'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const LOGO_SRC = '/logo.png'

function navClass(active: boolean) {
  return active
    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
    : 'text-slate-600 hover:text-blue-900 transition-colors'
}

function mobileNavClass(active: boolean) {
  return active
    ? 'text-blue-600 font-semibold'
    : 'text-slate-700 hover:text-blue-900'
}

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [guideOpen, setGuideOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const guideActive =
    isActive('/treatment-guide') || isActive('/hair-graft-calculator')

  const close = () => {
    setMobileOpen(false)
    setGuideOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm shadow-blue-900/5">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-8 py-4 w-full">
        {/* Logo */}
        <Link href="/" onClick={close}>
          <img
            alt="Dr. Bhushan's Rejuvenation Logo"
            className="h-12 w-auto object-contain"
            src={LOGO_SRC}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase font-semibold font-sans">
          <Link href="/" className={navClass(isActive('/'))}>
            Home
          </Link>
          <Link href="/about" className={navClass(isActive('/about'))}>
            About
          </Link>

          {/* Guide dropdown */}
          <div className="relative group">
            <button
              className={`${navClass(guideActive)} flex items-center gap-1`}
            >
              Guide
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg py-1 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-slate-100">
              <Link
                href="/treatment-guide"
                className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-blue-900 tracking-widest uppercase font-semibold"
              >
                Treatment Guide
              </Link>
              <Link
                href="/hair-graft-calculator"
                className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-blue-900 tracking-widest uppercase font-semibold"
              >
                Graft Calculator
              </Link>
            </div>
          </div>

          <Link href="/contact" className={navClass(isActive('/contact'))}>
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-button text-sm font-medium transition-all duration-300 active:scale-95"
        >
          Book Consultation
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden p-2 rounded-md text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-1 text-sm font-semibold font-sans tracking-widest uppercase">
            <Link
              href="/"
              onClick={close}
              className={`py-3 border-b border-slate-100 ${mobileNavClass(isActive('/'))}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={close}
              className={`py-3 border-b border-slate-100 ${mobileNavClass(isActive('/about'))}`}
            >
              About
            </Link>

            {/* Guide accordion */}
            <div className="border-b border-slate-100">
              <button
                className={`w-full flex justify-between items-center py-3 ${mobileNavClass(guideActive)}`}
                onClick={() => setGuideOpen((v) => !v)}
              >
                <span>Guide</span>
                <svg
                  className={`w-4 h-4 transition-transform ${guideOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {guideOpen && (
                <div className="pb-2 pl-4 flex flex-col space-y-1">
                  <Link
                    href="/treatment-guide"
                    onClick={close}
                    className={`py-2 ${mobileNavClass(isActive('/treatment-guide'))}`}
                  >
                    Treatment Guide
                  </Link>
                  <Link
                    href="/hair-graft-calculator"
                    onClick={close}
                    className={`py-2 ${mobileNavClass(isActive('/hair-graft-calculator'))}`}
                  >
                    Graft Calculator
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={close}
              className={`py-3 border-b border-slate-100 ${mobileNavClass(isActive('/contact'))}`}
            >
              Contact
            </Link>

            {/* CTA inside mobile menu */}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={close}
                className="block text-center bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-button text-sm font-medium transition-all duration-300 active:scale-95"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
