import { motion } from 'motion/react'
import {
  MapPin,
  Sparkles,
  Users,
  Scissors,
  UtensilsCrossed,
  Award,
  Trophy,
  Medal,
  Camera,
  Gift,
  Ticket,
  IndianRupee,
  Shirt,
  CheckCircle,
  AlertCircle,
  Tag,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

const EVENT_OVERVIEW =
  'Miss Satyabhama Traditional Fashion Show is Vijayawada’s premier traditional Indian fashion showcase — an authentic runway celebration of South Indian cultural heritage, handwoven Kanjeevaram silk sarees, classic half-sarees (pattu pavada / langa voni), graceful ethnic lehengas, and exquisite traditional temple jewellery. The registration fee covers a complete participant support package.'

const VENUE_NOTE =
  'Official venue details in Vijayawada will be announced soon by the organizers. Stay tuned for updates.'

// Official Event Specifications (Clearly visible for visitors and search engines)
const EVENT_SPECIFICATIONS = [
  { label: 'Event', value: 'Miss Satyabhama Traditional Fashion Show' },
  { label: 'Location', value: 'Vijayawada, Andhra Pradesh, India' },
  { label: 'Event Date', value: 'To Be Announced' },
  { label: 'Venue', value: 'To Be Announced' },
]

// Participant benefit cards — each unique, no duplicates
const BENEFIT_CARDS = [
  {
    icon: Ticket,
    label: 'Audience Passes',
    value: '5 Complimentary Passes',
    subtext:
      'Every registered participant receives 5 complimentary audience passes to invite family members or friends to watch the live traditional fashion show.',
  },
  {
    icon: Scissors,
    label: 'Traditional Makeup & Grooming',
    value: 'Completely FREE',
    subtext:
      'Professional traditional makeup, hair styling with fresh flowers, and expert stage grooming sessions are fully included with no additional charges.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Snacks & Beverages',
    value: 'Complimentary',
    subtext:
      'Complimentary refreshments, snacks, and beverages are provided at the event venue for all registered participants.',
  },
  {
    icon: Award,
    label: 'Participation Certificate',
    value: 'Government Certificate',
    subtext:
      'All participants receive an official government participation certificate recognizing their runway achievement upon completing the event.',
  },
  {
    icon: Camera,
    label: 'Event Photography',
    value: 'Professional Photos',
    subtext:
      'High-resolution professional traditional runway and stage portfolio photographs will be provided to all participants.',
  },
  {
    icon: Gift,
    label: 'Exclusive Event Kit',
    value: 'Event Kit Included',
    subtext:
      'Every participant receives an exclusive Miss Satyabhama Event Kit. Full kit contents will be announced ahead of the event.',
  },
]

// What participants must arrange themselves
const INCLUDED_ITEMS = [
  { text: '5 complimentary audience passes for family members or friends to watch the live show' },
  { text: 'Professional traditional makeup, hair styling with flowers, and grooming sessions — completely FREE' },
  { text: 'Complimentary snacks and beverages provided at the event venue' },
  { text: 'Official government participation certificate upon completing the showcase' },
  { text: 'High-resolution professional event photographs provided to participants' },
  { text: 'Exclusive Miss Satyabhama Event Kit (contents to be announced)' },
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
          eyebrow="Traditional Runway & Production"
          title="The Event"
          subtitle="Traditional Indian Fashion Showcase & Participant Benefits"
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

        {/* ── Official Event Information Overview (Mandatory Requirement 1) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-10 sm:mb-12"
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

        {/* ── Hero Banner: Registration Fee + 5 Free Audience Passes ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          {/* Registration Fee */}
          <div className="flex-1 p-6 sm:p-8 bg-gradient-to-b from-brand-gold/15 via-brand-surface/90 to-brand-surface border-2 border-brand-gold backdrop-blur-md flex flex-col items-center text-center space-y-1 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold" />
            
            {siteConfig.pricing.isEarlyBirdActive() ? (
              <>
                <div className="flex items-center gap-1.5 mb-1">
                  <Tag className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold font-bold">
                    Early Bird Offer
                  </span>
                  <span className="px-1.5 py-0.2 bg-brand-gold text-brand-black text-[9px] font-bold tracking-wider uppercase">
                    Save {siteConfig.pricing.discountFormatted}
                  </span>
                </div>

                <div className="flex items-baseline gap-2.5 my-1">
                  <span className="font-serif text-4xl sm:text-5xl text-brand-gold font-bold leading-none">
                    {siteConfig.pricing.earlyBirdPriceFormatted}
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-brand-muted line-through">
                    {siteConfig.pricing.regularPriceFormatted}
                  </span>
                </div>

                <span className="text-xs text-brand-light font-sans font-medium pt-0.5">
                  Valid till {siteConfig.pricing.earlyBirdDeadline}
                </span>
                <span className="text-[10px] text-brand-muted font-sans font-light">
                  Regular fee {siteConfig.pricing.regularPriceFormatted} applies after deadline
                </span>
              </>
            ) : (
              <>
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold font-bold mb-1">
                  Registration Fee
                </span>
                <span className="font-serif text-4xl sm:text-5xl text-brand-gold font-bold leading-none py-1">
                  {siteConfig.pricing.regularPriceFormatted}
                </span>
                <span className="text-xs text-brand-light font-sans font-medium">
                  Full participant package included
                </span>
              </>
            )}
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

        {/* Claim Early Bird CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-md mx-auto mb-10 sm:mb-14"
        >
          <Button
            variant="primary"
            size="lg"
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shadow-2xl font-bold tracking-wider py-4 min-h-[48px]"
          >
            <span>
              {siteConfig.pricing.isEarlyBirdActive()
                ? `CLAIM EARLY BIRD PRICE (${siteConfig.pricing.earlyBirdPriceFormatted})`
                : 'REGISTER FOR AUDITIONS'}
            </span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-[11px] text-brand-muted mt-2 font-sans font-light">
            {siteConfig.pricing.isEarlyBirdActive()
              ? `Offer expires on ${siteConfig.pricing.earlyBirdDeadline}. Regular fee ${siteConfig.pricing.regularPriceFormatted} applies thereafter.`
              : 'Registrations are open for emerging runway talent in Andhra Pradesh.'}
          </p>
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
                Traditional Outfit Requirement
              </p>
              <p className="text-sm sm:text-base font-serif text-brand-light mb-1.5">
                Participants Bring Their Own Traditional Indian Attire
              </p>
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                Participants must arrange and bring their own traditional Indian outfits for the runway —
                such as authentic Kanjeevaram or silk sarees, South Indian half-sarees (pattu pavada / dhavani),
                or traditional ethnic lehengas. The organization will <span className="text-brand-light font-medium">not</span> provide
                or supply clothing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Compact Official Prize Pool Summary (Near Participant Benefits) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-10 sm:mb-14 p-5 sm:p-7 bg-brand-surface/85 border border-brand-gold/50 backdrop-blur-md relative overflow-hidden shadow-2xl"
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
                  Prize Pool &amp; Cash Awards
                </h3>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="text-[10px] uppercase font-sans tracking-widest text-brand-muted block">
                Total Prize Pool
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-brand-gold font-bold">
                {siteConfig.prizePool.totalFormatted}
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
                {siteConfig.prizePool.firstPrizeFormatted}
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
                {siteConfig.prizePool.secondPrizeFormatted}
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
                {siteConfig.prizePool.thirdPrizeFormatted}
              </span>
              <span className="text-[11px] text-brand-muted font-sans font-light mt-1 block">
                Runner-Up Cash Reward
              </span>
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
              What Is Included in Early Bird ₹6,999 (Regular ₹9,999)
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

        {/* ── Bottom Early Bird Conversion Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto my-10 p-6 sm:p-8 bg-gradient-to-r from-brand-gold/15 via-brand-surface/90 to-brand-surface border border-brand-gold/50 backdrop-blur-md text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none" />
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-[10px] uppercase font-bold tracking-widest mb-3">
            <Tag className="w-3 h-3" />
            <span>Limited Period Offer</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-brand-light font-medium mb-2">
            Claim Your Early Bird Spot Today
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-light max-w-lg mx-auto mb-6">
            Register for <span className="text-brand-gold font-semibold">₹6,999</span> instead of <span className="line-through text-brand-muted">₹9,999</span> (Save ₹3,000 till {siteConfig.pricing.earlyBirdDeadline}). Walk the prestigious traditional runway and celebrate South Indian cultural elegance in Vijayawada.
          </p>
          <Button
            variant="primary"
            size="lg"
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shadow-2xl font-bold tracking-wider"
          >
            <span>
              {siteConfig.pricing.isEarlyBirdActive()
                ? 'CLAIM EARLY BIRD PRICE'
                : 'REGISTER FOR AUDITIONS'}
            </span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
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
