import { motion } from 'motion/react'
import {
  ArrowRight,
  Users,
  Scissors,
  UtensilsCrossed,
  Award,
  Camera,
  Gift,
  Ticket,
  Tag,
  Info,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Shirt,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

// Google Form embed URL — appending ?embedded=true renders the form inline
const FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfULiFVehJRGyT9G9KQKjpnSyL9KCYtSlt3JJ5k9SlZ22GwzQ/viewform?embedded=true'

// Package inclusions displayed above the form
const PACKAGE_INCLUSIONS = [
  { icon: Ticket, label: '5 Audience Passes', detail: 'Invite family or friends to watch the live show' },
  { icon: Scissors, label: 'Free Makeup & Grooming', detail: 'Professional traditional makeup and hair styling included' },
  { icon: UtensilsCrossed, label: 'Snacks & Beverages', detail: 'Complimentary refreshments at the venue' },
  { icon: Award, label: 'Government Certificate', detail: 'Official participation certificate upon completion' },
  { icon: Camera, label: 'Event Photographs', detail: 'Professional runway photos provided to participants' },
  { icon: Gift, label: 'Exclusive Event Kit', detail: 'Contents to be revealed ahead of the event' },
]

export default function RegistrationSection() {
  const { campaign, registrationUrl } = siteConfig

  return (
    <section
      id="register"
      className="relative py-20 sm:py-24 md:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
      aria-label="Official Registration"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(201, 169, 110, 0.14) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Architectural Gridlines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-15">
        <div className="border-l border-brand-border h-full" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-r border-brand-border h-full" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Official Registration"
          title="MISS SATYABHAMA FASHION SHOW"
          subtitle="Welcome! Complete the form below to register for the Miss Satyabhama Traditional Fashion Show. All fields marked as required must be filled in."
          align="center"
        />

        {/* ── Pricing Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-brand-gold/15 via-brand-surface/90 to-brand-surface border-2 border-brand-gold backdrop-blur-md text-center shadow-2xl overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/20 border border-brand-gold/50 text-brand-gold text-[10px] font-sans font-bold uppercase tracking-widest mb-4">
              <Tag className="w-3 h-3" />
              <span>Early Bird Offer — Limited Period</span>
            </div>

            {/* Price Display */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="font-serif text-5xl sm:text-6xl text-brand-gold font-bold leading-none">
                {campaign.earlyBirdPriceFormatted}
              </span>
              <div className="flex flex-col items-start">
                <span className="font-serif text-xl text-brand-muted line-through">
                  {campaign.originalPriceFormatted}
                </span>
                <span className="text-xs font-sans px-2 py-0.5 bg-brand-gold text-brand-black font-bold uppercase tracking-wider mt-1">
                  Save {campaign.discountFormatted}
                </span>
              </div>
            </div>

            <p className="text-sm text-brand-light font-sans font-medium mb-1">
              Early Bird Offer valid till{' '}
              <span className="text-brand-gold font-semibold">{campaign.deadline}</span>
            </p>
            <p className="text-xs text-brand-muted font-sans font-light">
              Regular price {campaign.originalPriceFormatted} applies after the deadline.
            </p>
          </div>
        </motion.div>

        {/* ── Package Inclusions Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          <h3 className="font-serif text-lg sm:text-xl text-brand-light text-center mb-6 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
            What's Included in Your Registration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PACKAGE_INCLUSIONS.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-3 p-4 bg-brand-surface/70 border border-brand-border/80 backdrop-blur-md"
                >
                  <div className="w-9 h-9 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/8 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-sans font-semibold text-brand-light uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Important Participant Information ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-10 sm:mb-14 space-y-4"
        >
          {/* Outfit Requirement */}
          <div className="p-5 bg-brand-gold/5 border border-brand-gold/40 backdrop-blur-md flex items-start gap-4">
            <div className="w-9 h-9 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/10 shrink-0 mt-0.5">
              <Shirt className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                Traditional Outfit Requirement
              </p>
              <p className="text-sm font-serif text-brand-light mb-1">
                Participants must arrange their own traditional Indian attire
              </p>
              <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                Authentic Kanjeevaram or silk sarees, South Indian half-sarees (pattu pavada / dhavani),
                or traditional ethnic lehengas. The organisation will{' '}
                <span className="text-brand-light font-medium">not</span> supply clothing.
              </p>
            </div>
          </div>

          {/* Venue TBA */}
          <div className="p-5 bg-brand-surface/50 border border-brand-border/80 backdrop-blur-md flex items-start gap-4">
            <div className="w-9 h-9 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 shrink-0 mt-0.5">
              <Info className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-brand-gold font-medium mb-1">
                Venue — {siteConfig.eventLocation.city}
              </p>
              <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                The event will be held in Vijayawada, Andhra Pradesh. The exact venue and date will
                be announced soon. All registered participants will be notified directly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Google Sign-In Notice ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div className="p-4 sm:p-5 bg-brand-surface/60 border border-brand-border/80 backdrop-blur-md flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-sans font-semibold text-brand-light mb-1 uppercase tracking-wide">
                Google Account Sign-In Required
              </p>
              <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                This registration form includes a photo upload step (minimum 3 photographs, up to 5
                files, max 10 MB each). Google requires you to{' '}
                <span className="text-brand-light font-medium">
                  sign in to your Google account
                </span>{' '}
                to upload files. Please ensure you are signed in before starting. If you experience
                any issues with the embedded form, use the button below to open it in a new tab.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Embedded Google Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-8"
        >
          {/* Branded wrapper card */}
          <div className="relative bg-brand-surface border border-brand-gold/40 shadow-2xl overflow-hidden">
            {/* Gold top accent line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

            {/* Corner frame accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-brand-gold/50 pointer-events-none" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-brand-gold/50 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-brand-gold/50 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-brand-gold/50 pointer-events-none" />

            {/* Form label */}
            <div className="px-5 sm:px-8 pt-5 sm:pt-6 pb-3 flex items-center gap-2 border-b border-brand-border/40">
              <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-brand-gold font-semibold">
                MISS SATYABHAMA — OFFICIAL REGISTRATION FORM
              </span>
            </div>

            {/* Responsive iframe container */}
            <div className="relative w-full overflow-hidden px-2 sm:px-4 pb-4 pt-2">
              <iframe
                src={FORM_EMBED_URL}
                title="Miss Satyabhama Official Registration Form"
                className="w-full border-0"
                style={{
                  minHeight: '900px',
                  /* On mobile Google Forms is taller */
                }}
                loading="lazy"
                allow="camera; microphone"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                aria-label="Miss Satyabhama Official Registration Form — powered by Google Forms"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Fallback: Open in New Tab ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-xs text-brand-muted font-sans font-light mb-4">
            Prefer to fill in the form in a separate window? Use the button below.
          </p>
          <Button
            variant="secondary"
            size="md"
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold tracking-wider"
          >
            <ExternalLink className="w-4 h-4 text-brand-gold" />
            <span>OPEN REGISTRATION FORM IN NEW TAB</span>
          </Button>
          <p className="text-[11px] text-brand-muted font-sans font-light mt-3">
            Both the embedded form and the new-tab link use the same official Google Form.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
