import { motion } from 'motion/react'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import siteConfig from '../config/siteConfig'

// SVG Icon for Instagram
function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function ContactSection() {
  const { contact, eventLocation } = siteConfig

  const contactItems = [
    {
      icon: Mail,
      label: 'Official Email',
      value: contact.email || 'Official email to be announced',
      isConfigured: Boolean(contact.email),
      href: contact.email ? `mailto:${contact.email}` : undefined,
      subtext: 'Direct communications & media inquiries',
    },
    {
      icon: Phone,
      label: 'Phone / Helpline',
      value: contact.phone || 'Official helpline to be announced',
      isConfigured: Boolean(contact.phone),
      href: contact.phone ? `tel:${contact.phone}` : undefined,
      subtext: 'Participant guidance & queries',
    },
    {
      icon: MapPin,
      label: 'Event City',
      value: `${eventLocation.city}, ${eventLocation.state}`,
      isConfigured: true,
      subtext: `${eventLocation.country} • Showcase Location`,
    },
    {
      icon: InstagramIcon,
      label: 'Official Instagram',
      value: contact.instagram ? '@misssatyabhama' : 'Social handle to be announced',
      isConfigured: Boolean(contact.instagram),
      href: contact.instagram || undefined,
      subtext: 'Runway updates & announcements',
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-36 bg-brand-offblack border-t border-brand-border/60 overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-20">
        <div className="border-l border-brand-border/40 h-full" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-r border-brand-border/40 h-full" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="COMMUNICATIONS"
          title="Get in Touch"
          subtitle="Connect with the Miss Satyabhama management team for event coordination, partnership inquiries, and participant support."
          align="center"
        />

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {contactItems.map((item, idx) => {
            const Icon = item.icon
            const CardContent = (
              <Card interactive={item.isConfigured} className="h-full flex flex-col justify-between space-y-4 sm:space-y-6 p-5 sm:p-6 md:p-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                      {item.label}
                    </p>
                    <h4
                      className={`font-serif text-base sm:text-lg leading-snug break-words ${
                        item.isConfigured
                          ? 'text-brand-light group-hover:text-brand-gold transition-colors'
                          : 'text-brand-light/90'
                      }`}
                    >
                      {item.value}
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-brand-muted font-sans font-light border-t border-brand-border/40 pt-3 sm:pt-4">
                  {item.subtext}
                </p>
              </Card>
            )

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group block h-full focus-visible:outline-2 focus-visible:outline-brand-gold min-h-[44px]"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div className="h-full">{CardContent}</div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Organizer Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 max-w-3xl mx-auto bg-brand-surface/60 border border-brand-border text-center space-y-2.5 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-brand-gold">
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium">
              Official Channels Notice
            </span>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
            Direct communication channels, press contact details, and verified social media accounts will be published as soon as finalized by the organizing committee.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
