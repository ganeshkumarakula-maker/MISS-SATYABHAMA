import { motion } from 'motion/react'
import {
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
  Shirt,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import siteConfig from '../config/siteConfig'

const EVENT_OVERVIEW =
  'Miss Satyabhama is a premier fashion showcase in Vijayawada — a professionally produced runway experience celebrating elegance, poise, and creative talent. The registration fee covers a complete participant support package.'

const VENUE_NOTE =
  'Official venue details will be announced soon. Stay tuned for updates.'

// Participant benefit cards — each unique, no duplicates
const BENEFIT_CARDS = [
  {
    icon: Scissors,
    label: 'Grooming & Makeup',
    value: 'Completely FREE',
    subtext:
      'Professional makeup and grooming sessions are fully included in the registration. No additional payment is required for these services.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Snacks & Beverages',
    value: 'Complimentary',
    subtext:
      'Free snacks and beverages are provided at the event venue for all registered participants.',
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
      'Professional event photographs will be provided to participants. Photographs may be featured on the official website with appropriate permission.',
  },
  {
    icon: Gift,
    label: 'Exclusive Event Kit',
    value: 'EVENT KIT INCLUDED',
    subtext:
      'Every participant receives an exclusive Event Kit. Full kit contents will be announced ahead of the event.',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'COMING SOON',
    subtext: VENUE_NOTE,
  },
]

// What participants must arrange themselves
const INCLUDED_ITEMS = [
  { text: 'Professional grooming sessions — completely FREE' },
  { text: 'Professional makeup sessions — completely FREE' },
  { text: '5 complimentary audience passes for family or friends' },
  { text: 'Complimentary snacks and beverages at the venue' },
  { text: 'Government participation certificate upon event completion' },
  { text: 'Professional event photographs provided to participants' },
  { text: 'Exclusive Event Kit (contents to be announced)' },
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
      {/* Dark overlay — keeps cards readable while stage background stays visible */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-black/75 via-brand-black/65 to-brand-black/90 pointer-events-none"
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
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Schedule & Production"
          title="The Event"
          subtitle="Event Details & Participant Benefits"
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
            {EVENT_OVERVIEW}
          </p>
        </motion.div>

        {/* ── Hero Banner: Registration Fee + 5 Free Audience Passes ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          {/* Registration Fee */}
          <div className="flex-1 p-6 sm:p-8 bg-brand-gold/10 border-2 border-brand-gold/50 backdrop-blur-md flex flex-col items-center text-center space-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-brand-gold/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-brand-gold/40" />
            <div className="flex items-center gap-1.5 mb-0.5">
              <IndianRupee className="w-4 h-4 text-brand-gold" />
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium">
                Registration Fee
              </span>
            </div>
            <span className="font-serif text-4xl sm:text-5xl text-brand-gold font-semibold leading-none py-1">
              ₹9,999
            </span>
            <span className="text-[11px] text-brand-muted font-sans font-light">
              Full participant package included
            </span>
          </div>

          {/* 5 Free Audience Passes */}
          <div className="flex-1 p-6 sm:p-8 bg-brand-surface/70 border border-brand-border/80 backdrop-blur-md flex flex-col items-center text-center space-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-brand-gold/30" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-brand-gold/30" />
            <div className="flex items-center gap-1.5 mb-0.5">
              <Ticket className="w-4 h-4 text-brand-gold" />
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium">
                Audience Passes
              </span>
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-brand-light font-medium leading-snug">
              5 FREE
            </span>
            <span className="font-serif text-base sm:text-lg text-brand-light font-medium leading-snug">
              Audience Passes
            </span>
            <span className="text-[11px] text-brand-muted font-sans font-light leading-snug pt-1">
              Invite 5 family members or friends to watch the live fashion show
            </span>
          </div>
        </motion.div>

        {/* ── Outfit Requirement Notice ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="p-5 sm:p-6 bg-brand-gold/5 border border-brand-gold/40 backdrop-blur-md flex items-start gap-4">
            <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/10 shrink-0 mt-0.5">
              <Shirt className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                Outfit Requirement
              </p>
              <p className="text-sm sm:text-base font-serif text-brand-light mb-1.5">
                Participants Must Arrange Their Own Outfits
              </p>
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                Participants must arrange and bring their own outfits for the runway. The
                organization will <span className="text-brand-light font-medium">not</span> provide
                or supply costumes or clothing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Benefit Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
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
                  className="h-full flex flex-col justify-between space-y-4 sm:space-y-5 p-5 sm:p-6 md:p-7 bg-brand-surface/75 border-brand-border/90 backdrop-blur-md shadow-2xl"
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

        {/* ── What Is Included Summary ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-10 sm:mb-14 p-6 sm:p-8 bg-brand-surface/60 border border-brand-border/80 backdrop-blur-md flex flex-col space-y-5"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
            <h3 className="font-serif text-lg sm:text-xl text-brand-light">
              What Is Included in ₹9,999
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
            The registration fee covers the following complimentary services and benefits:
          </p>
          <ul className="space-y-3">
            {INCLUDED_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-xs sm:text-sm text-brand-muted font-sans font-light"
              >
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Venue & Update Notice ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-4"
        >
          <div className="p-5 sm:p-6 bg-brand-surface/50 border border-brand-border/80 backdrop-blur-md flex items-start gap-4">
            <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                Venue
              </p>
              <p className="font-serif text-base sm:text-lg text-brand-light mb-1.5">
                COMING SOON
              </p>
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                {VENUE_NOTE}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-brand-muted font-sans font-light mt-8 sm:mt-10"
        >
          Event date and venue will be announced soon. Follow our official channels for updates.
        </motion.p>
      </div>
    </section>
  )
}
