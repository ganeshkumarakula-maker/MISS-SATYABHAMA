import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import siteConfig from '../config/siteConfig'
import Button from './Button'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'The Event', href: '#event' },
  { label: 'Eligibility', href: '#eligibility' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop (>= 1024px lg breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-border py-3 sm:py-4 shadow-lg'
          : 'bg-gradient-to-b from-brand-black/90 via-brand-black/40 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <a
          href="#home"
          className="group flex flex-col focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4 max-w-[70%] sm:max-w-none"
          aria-label={`${siteConfig.eventName} Home`}
        >
          <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-brand-light group-hover:text-brand-gold transition-colors duration-300 truncate">
            {siteConfig.eventName.toUpperCase()}
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.25em] sm:tracking-[0.3em] text-brand-gold font-medium">
            {siteConfig.eventLocation.city}
          </span>
        </a>

        {/* Desktop Navigation Links (visible at lg >= 1024px to prevent tablet crowding) */}
        <nav
          className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.16em] font-sans font-medium text-brand-muted hover:text-brand-gold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center">
          <Button
            variant="primary"
            size="sm"
            href="#register"
            className="tracking-widest"
          >
            Register
          </Button>
        </div>

        {/* Mobile / Tablet Hamburger Toggle Button (lg:hidden) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brand-light hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-2 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 stroke-[1.5]" />
          ) : (
            <Menu className="w-6 h-6 stroke-[1.5]" />
          )}
        </button>
      </div>

      {/* Mobile / Tablet Drawer Overlay Navigation */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-full h-[calc(100vh-100%)] bg-brand-black/98 border-b border-brand-border px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-wider text-brand-light hover:text-brand-gold transition-colors py-2.5 border-b border-brand-border/40 min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 pb-12 flex flex-col space-y-4">
            <Button
              variant="primary"
              size="md"
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center min-h-[44px]"
            >
              Register Now
            </Button>
            <p className="text-center text-xs text-brand-muted tracking-widest uppercase">
              {siteConfig.eventLocation.city}, {siteConfig.eventLocation.state}
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
