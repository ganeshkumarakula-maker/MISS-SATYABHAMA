import { ArrowUp, MapPin } from 'lucide-react'
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

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { eventLocation, contact } = siteConfig

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Prepares social links dynamically without fabricating URLs
  const socialLinks = [
    { label: 'Instagram', href: contact.instagram },
    { label: 'Facebook', href: contact.facebook },
    { label: 'YouTube', href: contact.youtube },
  ].filter((item) => Boolean(item.href))

  return (
    <footer
      className="relative bg-brand-black border-t border-brand-border text-brand-light pt-16 sm:pt-20 pb-12 overflow-hidden"
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* Decorative Gold Glow & Vertical Accent Lines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-10">
        <div className="border-l border-brand-border h-full" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-r border-brand-border h-full" />
      </div>

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 pb-12 sm:pb-16 border-b border-brand-border/60">
          {/* Brand & Mission Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4 sm:space-y-6">
            <a
              href="#home"
              className="group flex flex-col focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-4 max-w-full"
              aria-label={`${siteConfig.eventName} Home`}
            >
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-brand-light group-hover:text-brand-gold transition-colors duration-300 truncate">
                {siteConfig.eventName.toUpperCase()}
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-sans tracking-[0.25em] sm:tracking-[0.3em] text-brand-gold font-medium mt-1">
                {eventLocation.city}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="flex items-center space-x-2 text-xs text-brand-muted font-sans font-light">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>
                {eventLocation.city}, {eventLocation.state}, {eventLocation.country}
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-brand-gold font-medium">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 font-sans text-xs uppercase tracking-[0.16em]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-brand-muted hover:text-brand-gold transition-colors focus-visible:outline-2 focus-visible:outline-brand-gold py-1.5 inline-block min-h-[36px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration & Connect (4 cols) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-brand-gold font-medium mb-2.5 sm:mb-3">
                Participant Auditions
              </h4>
              <p className="text-xs text-brand-muted font-sans font-light leading-relaxed mb-4">
                Audition applications will open online via the official registration channel.
              </p>
              <Button
                variant="primary"
                size="sm"
                href="#register"
                className="w-full sm:w-auto min-h-[44px]"
              >
                Register For Auditions
              </Button>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-4 border-t border-brand-border/40">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-muted/70 block mb-2">
                Official Channels
              </span>
              {socialLinks.length > 0 ? (
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider text-brand-light hover:text-brand-gold transition-colors py-1 inline-block min-h-[36px] flex items-center"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-brand-muted/60 font-sans italic">
                  Social media links will be published once officially confirmed.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Back-to-Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-brand-muted/70 text-center sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.eventName}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-brand-muted hover:text-brand-gold transition-colors p-2 min-h-[44px] focus-visible:outline-2 focus-visible:outline-brand-gold"
            aria-label="Back to top of page"
          >
            <span className="uppercase tracking-[0.16em] text-[11px]">
              Back to top
            </span>
            <div className="w-7 h-7 rounded border border-brand-border group-hover:border-brand-gold/60 flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-brand-gold" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
