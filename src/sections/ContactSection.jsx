import { motion } from 'motion/react'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import siteConfig from '../config/siteConfig'

// Staggered entrance variants — respects prefers-reduced-motion via motion's global config
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function ContactSection() {
  const { contact, eventLocation } = siteConfig

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone / Helpline',
      value: contact.phone,
      href: `tel:+91${contact.phone}`,
      subtext: 'Participant guidance & queries',
      isLink: true,
    },
    {
      icon: Mail,
      label: 'Official Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      subtext: 'Write to us for participant guidance, media inquiries, and event coordination.',
      isLink: true,
    },
    {
      icon: MapPin,
      label: 'Event Venue',
      value: 'VENUE COMING SOON',
      href: null,
      subtext: `${eventLocation.city}, ${eventLocation.state}, ${eventLocation.country}`,
      isLink: false,
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
          subtitle="Have a question? Reach out to the Miss Satyabhama team through our official contact channels."
          align="center"
        />

        {/* Three Contact Cards — 1 col mobile / 2 col tablet / 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto w-full">
          {contactItems.map((item, idx) => {
            const Icon = item.icon

            const cardInner = (
              <Card
                interactive={item.isLink}
                className="h-full flex flex-col justify-between space-y-4 sm:space-y-6 p-5 sm:p-6 md:p-8"
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>

                  <div>
                    {/* Label */}
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                      {item.label}
                    </p>
                    {/* Value */}
                    <h4
                      className={`font-serif text-base sm:text-lg leading-snug break-all ${
                        item.isLink
                          ? 'text-brand-light group-hover:text-brand-gold transition-colors duration-200'
                          : 'text-brand-light/90'
                      }`}
                    >
                      {item.value}
                    </h4>
                  </div>
                </div>

                {/* Supporting text */}
                <p className="text-xs text-brand-muted font-sans font-light border-t border-brand-border/40 pt-3 sm:pt-4 leading-relaxed">
                  {item.subtext}
                </p>
              </Card>
            )

            return (
              <motion.div
                key={item.label}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                // Subtle lift on hover — skipped automatically when motion is reduced
                whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group block h-full focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-2 rounded-sm"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {cardInner}
                  </a>
                ) : (
                  <div className="h-full">{cardInner}</div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 max-w-3xl mx-auto bg-brand-surface/60 border border-brand-border text-center space-y-2.5 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-brand-gold">
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium">
              Official Contact Notice
            </span>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
            Please use the official email address or phone number above for all inquiries. The
            exact event venue will be announced soon — the city of Vijayawada, Andhra Pradesh is
            confirmed as the event location.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
