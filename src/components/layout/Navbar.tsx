'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LogoWordmark } from '@/components/shared/LogoWordmark'

const navLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/topics', label: 'Topics' },
  { href: '/why-it-works', label: 'Why It Works' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setScrollProgress(progress)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-dark-base/50">
        <div
          className="h-full bg-gold origin-left"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
      <nav
        className={cn(
          'fixed top-[2px] w-full z-50 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-xl bg-dark-base/95 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] text-white'
            : 'backdrop-blur-xl bg-dark-base/80 border-b border-white/5 text-white'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <LogoWordmark size="md" />

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-gold',
                    pathname === link.href && 'border-b-2 border-gold pb-0.5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/sample-lesson"
                className="inline-flex items-center bg-gold text-navy-dark font-semibold hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] rounded-full px-5 py-2.5 text-sm transition-all duration-300"
              >
                Watch a Sample Lesson
                <span className="ml-1.5" aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-dark-base/98 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <LogoWordmark size="md" className="text-white" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 px-6 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'text-2xl font-medium text-white transition-colors hover:text-gold',
                  pathname === link.href && 'text-gold'
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/sample-lesson"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center bg-gold text-navy-dark font-semibold hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] rounded-full px-8 py-3 text-lg transition-all duration-300"
            >
              Watch a Sample Lesson
              <span className="ml-2" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
