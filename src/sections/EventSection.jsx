import { motion } from 'motion/react'
import {
  MapPin,
  Sparkles,
  Shirt,
  Calendar,
  Trophy,
  Medal,
  Award,
  ArrowRight,
  Info,
  CheckCircle,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

const EVENT_OVERVIEW =
  'Miss Satyabhama Traditional Fashion Show is Vijayawada’s premier traditional Indian fashion showcase — an authentic runway celebration of South Indian cultural heritage, handwoven Kanjeevaram silk sarees, classic half-sarees (pattu pavada / langa voni), graceful ethnic lehengas, and exquisite traditional temple jewellery. Audition registration is open for emerging talent across Andhra Pradesh.'

const VENUE_NOTE =
  'Official venue details in Vijayawada will be announced soon by the organizers. Stay tuned for updates.'

// Official Event Specifications (Clearly visible for visitors and search engines)
const EVENT_SPECIFICATIONS = [
  { label: 'Event', value: 'Miss Satyabhama Traditional Fashion Show' },
  { label: 'Location', value: 'Vijayawada, Andhra Pradesh, India' },
  { label: 'Event Date', value: 'To Be Announced' },
  { label: 'Venue', value: 'To Be Announced' },
]

export default function EventSection() {
  const { prizePool, registrationUrl } = siteConfig

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
      {/* Dark overlay — keeps text and cards crisp while stage texture is visible */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-black/85 via-brand-black/75 to-brand-black/95 pointer-events-none"
        aria-hidden="true"
      />

      {/* Architectural subtle gridlines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-20">
        <div className="border-l border-brand-border/40 h-full" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-r border-brand-border/40 h-full" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Runway Production & Details"
          title="The Event"
          subtitle="Traditional Indian Fashion Showcase & Important Information"
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

        {/* Official Event Specifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 bg-brand-surface/75 border border-brand-border/90 backdrop-blur-md shadow-xl">
            {EVENT_SPECIFICATIONS.map((spec) => (
              <div key={spec.label} className="min-w-0">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-brand-gold font-semibold block mb-1 truncate">
                  {spec.label}
                </span>
                <p className="text-xs sm:text-sm font-sans text-brand-light font-medium leading-snug break-words">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── LOCATION 2: Compact Official Prize Pool Summary ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 p-5 sm:p-7 bg-brand-surface/85 border border-brand-gold/50 backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          {/* Subtle gold corner accents */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none" />

          {/* Header row: Title + Total Prize Pool */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-brand-border/70">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded border border-brand-gold/40 flex items-center justify-center bg-brand-gold/10 shrink-0">
                <Trophy className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-brand-gold font-bold block">
                  Official Rewards
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-brand-light font-medium">
                  Official Prize Pool
                </h3>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="text-[10px] uppercase font-sans tracking-widest text-brand-muted block">
                TOTAL PRIZE POOL
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-brand-gold font-bold">
                {prizePool.totalFormatted}
              </span>
            </div>
          </div>

          {/* 3 Compact Prize Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {/* First Prize */}
            <div className="p-4 bg-gradient-to-b from-brand-gold/20 via-brand-surface to-brand-surface border border-brand-gold/70 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-sans tracking-wider text-brand-gold font-bold">
                  🥇 First Prize
                </span>
                <span className="text-[9px] uppercase font-sans tracking-widest px-1.5 py-0.5 bg-brand-gold/20 text-brand-gold font-medium">
                  Winner
                </span>
              </div>
              <span className="font-serif text-2xl sm:text-3xl text-brand-gold font-bold block">
                {prizePool.firstPrizeFormatted}
              </span>
              <span className="text-[11px] text-brand-muted font-sans font-light mt-1 block">
                Championship Title &amp; Cash Prize
              </span>
            </div>

            {/* Second Prize */}
            <div className="p-4 bg-brand-surface/60 border border-brand-border/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-sans tracking-wider text-brand-muted font-semibold">
                  🥈 Second Prize
                </span>
                <span className="text-[9px] uppercase font-sans tracking-widest px-1.5 py-0.5 bg-brand-black/60 text-brand-muted font-medium">
                  1st Runner-Up
                </span>
              </div>
              <span className="font-serif text-2xl sm:text-3xl text-brand-light font-semibold block">
                {prizePool.secondPrizeFormatted}
              </span>
              <span className="text-[11px] text-brand-muted font-sans font-light mt-1 block">
                Runner-Up Cash Reward
              </span>
            </div>

            {/* Third Prize */}
            <div className="p-4 bg-brand-surface/60 border border-brand-border/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-sans tracking-wider text-brand-muted font-semibold">
                  🥉 Third Prize
                </span>
                <span className="text-[9px] uppercase font-sans tracking-widest px-1.5 py-0.5 bg-brand-black/60 text-brand-muted font-medium">
                  2nd Runner-Up
                </span>
              </div>
              <span className="font-serif text-2xl sm:text-3xl text-brand-light font-semibold block">
                {prizePool.thirdPrizeFormatted}
              </span>
              <span className="text-[11px] text-brand-muted font-sans font-light mt-1 block">
                Runner-Up Cash Reward
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── IMPORTANT INFORMATION BEFORE REGISTERING ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="p-6 sm:p-8 bg-brand-surface/70 border border-brand-gold/40 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-brand-border/60">
              <Info className="w-5 h-5 text-brand-gold shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-brand-gold font-bold block">
                  Essential Guidelines
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-brand-light font-medium">
                  IMPORTANT INFORMATION BEFORE REGISTERING
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Traditional Outfit Requirement */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/10 shrink-0 mt-0.5">
                  <Shirt className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-semibold mb-1">
                    TRADITIONAL OUTFIT REQUIREMENT
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                    Participants must arrange and bring their own traditional Indian outfits. The organization will not provide outfits.
                  </p>
                </div>
              </div>

              {/* Event Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/10 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-semibold mb-1">
                    EVENT LOCATION
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                    Vijayawada, Andhra Pradesh. Exact venue details will be announced soon.
                  </p>
                </div>
              </div>

              {/* Audition Details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/10 shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-semibold mb-1">
                    AUDITION DETAILS
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                    Audition date, reporting time and venue information will be communicated by the organizing team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Venue Coming Soon Notice ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="p-5 sm:p-6 bg-brand-surface/50 border border-brand-border/80 backdrop-blur-md flex items-start gap-4">
            <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                Venue
              </p>
              <p className="font-serif text-base sm:text-lg text-brand-light mb-1">
                COMING SOON
              </p>
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                {VENUE_NOTE}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Audition Registration CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Button
            variant="primary"
            size="lg"
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shadow-2xl font-bold tracking-wider px-8"
          >
            <span>REGISTER FOR AUDITIONS</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-xs text-brand-muted mt-3 font-sans font-light">
            Audition registrations are open online. Submit your details through the official Google Form.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
