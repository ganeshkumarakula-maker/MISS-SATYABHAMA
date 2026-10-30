import { motion } from 'motion/react'
import {
  Calendar,
  MapPin,
  Sparkles,
  Users,
  Scissors,
  UtensilsCrossed,
  Award,
  Camera,
  Gift,
  Ticket,
  IndianRupee,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import siteConfig from '../config/siteConfig'

const EVENT_DETAILS = {
  overview:
    'Miss Satyabhama is a premier fashion showcase in Vijayawada — a professionally produced runway experience celebrating elegance, poise, and creative talent. Every registered participant receives a complete support package to help them shine on stage.',
  date: siteConfig.eventDate || 'To Be Announced',
  venue: 'Coming Soon',
  venueCity: `${siteConfig.eventLocation.city}, ${siteConfig.eventLocation.state}`,
  venueNote: 'The official venue details will be announced soon. Stay tuned for updates.',
  registrationFee: '₹9,999',
}

// Benefit cards shown in the event section
const BENEFIT_CARDS = [
  {
    icon: IndianRupee,
    label: 'Registration Fee',
    value: '₹9,999',
    subtext: 'One-time registration includes the full participant package listed below.',
    highlight: true,
  },
  {
    icon: Ticket,
    label: '5 Free Audience Passes',
    value: '5 Complimentary Passes',
    subtext:
      'Each registered participant receives 5 free audience passes — invite family or friends to watch the live fashion show.',
  },
  {
    icon: Scissors,
    label: 'Grooming & Makeup',
    value: 'Completely FREE',
    subtext:
      'Professional grooming and makeup sessions are fully included. No additional charge applies.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Snacks & Beverages',
    value: 'Complimentary',
    subtext:
      'Snacks and beverages are provided free of charge at the event venue for all registered participants.',
  },
  {
    icon: Award,
    label: 'Participation Certificate',
    value: 'Government Certificate',
    subtext:
      'All participants receive an official government participation certificate upon completing the event.',
  },
  {
    icon: Camera,
    label: 'Event Photography',
    value: 'Photos Provided',
    subtext:
      'Professional event photographs will be provided to participants and may be featured on the official Miss Satyabhama website (with consent).',
  },
  {
    icon: Gift,
    label: 'Exclusive Event Kit',
    value: 'Included',
    subtext:
      'Every participant receives an exclusive Event Kit. Full kit contents will be announced ahead of the event.',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: EVENT_DETAILS.venue,
    subtext: EVENT_DETAILS.venueNote,
  },
]

export default function EventSection() {
  return (
    <section
      id="event"
      className="relative py-20 sm:py-24 md:py-36 bg-brand-black border-t border-brand-border/60 overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: "url('/images/satyabhama-stage.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
      aria-label="The Event"
    >
      {/* Subtle dark overlay — keeps cards readable while stage + SATYABHAMA text stays visible */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/60 to-brand-black/88 pointer-events-none"
        aria-hidden="true"
      />

      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-20">
        <div className="border-l border-brand-border/40 h-full" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-r border-brand-border/40 h-full" />
      </div>

      <div className="container-editorial relative z-10">
        <SectionHeading
          eyebrow="Schedule & Production"
          title="The Event"
          subtitle="Everything included in your registration — and what to expect on the day."
          align="center"
        />

        {/* Narrative Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-gold/30 bg-brand-gold/5 mb-6 max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-medium truncate">
              Runway Edition • {siteConfig.eventLocation.city}
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-brand-muted font-sans font-light leading-relaxed">
            {EVENT_DETAILS.overview}
          </p>
        </motion.div>

        {/* Registration Fee Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          {/* Fee */}
          <div className="flex-1 p-6 sm:p-8 bg-brand-gold/10 border-2 border-brand-gold/50 flex flex-col items-center text-center space-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-brand-gold/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-brand-gold/40" />
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium">
              Registration Fee
            </span>
            <span className="font-serif text-4xl sm:text-5xl text-brand-gold font-semibold leading-none py-1">
              ₹9,999
            </span>
            <span className="text-[11px] text-brand-muted font-sans font-light">
              Full participant package included
            </span>
          </div>

          {/* Audience Passes */}
          <div className="flex-1 p-6 sm:p-8 bg-brand-surface/70 border border-brand-border/80 backdrop-blur-md flex flex-col items-center text-center space-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-brand-gold/30" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-brand-gold/30" />
            <Users className="w-6 h-6 text-brand-gold mb-1" />
            <span className="font-serif text-2xl sm:text-3xl text-brand-light font-medium leading-snug">
              5 Free Audience Passes
            </span>
            <span className="text-[11px] text-brand-muted font-sans font-light leading-snug">
              Bring five guests to watch the live show
            </span>
          </div>
        </motion.div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {BENEFIT_CARDS.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card
                  interactive
                  className={`h-full flex flex-col justify-between space-y-4 sm:space-y-6 p-5 sm:p-6 md:p-8 backdrop-blur-md shadow-2xl ${
                    card.highlight
                      ? 'bg-brand-gold/10 border-brand-gold/50'
                      : 'bg-brand-surface/75 border-brand-border/90'
                  }`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                        {card.label}
                      </p>
                      <h4 className="font-serif text-base sm:text-lg text-brand-light leading-snug break-words">
                        {card.value}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-brand-muted font-sans font-light border-t border-brand-border/40 pt-3 sm:pt-4">
                    {card.subtext}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Date Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-brand-muted font-sans font-light mt-10 sm:mt-12"
        >
          Event date and venue will be announced soon. Follow our official channels for updates.
        </motion.p>
      </div>
    </section>
  )
}
