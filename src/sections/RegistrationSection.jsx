import { motion } from 'motion/react'
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  FileText,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

// Google Form embed URL — appending ?embedded=true renders the form inline
const FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfULiFVehJRGyT9G9KQKjpnSyL9KCYtSlt3JJ5k9SlZ22GwzQ/viewform?embedded=true'

export default function RegistrationSection() {
  const { registrationUrl } = siteConfig

  return (
    <section
      id="register"
      className="relative py-20 sm:py-24 md:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
      aria-label="Official Audition Registration"
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

      <div className="container-editorial relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Official Auditions"
          title="MISS SATYABHAMA AUDITION REGISTRATION"
          subtitle="Complete the official form below to register for auditions. All registered participants get the opportunity to attend auditions."
          align="center"
        />

        {/* ── Audition Information Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-brand-gold/15 via-brand-surface/90 to-brand-surface border-2 border-brand-gold backdrop-blur-md text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/20 border border-brand-gold/50 text-brand-gold text-[10px] font-sans font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" />
              <span>Auditions Open — Vijayawada</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-brand-light font-medium mb-2">
              Your Journey Begins With An Audition
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed max-w-lg mx-auto">
              Fill out your personal details and upload required photos in the official form. Audition date, reporting time and venue details will be communicated directly by the organizing team.
            </p>
          </div>
        </motion.div>

        {/* ── Embedded Google Form Container ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto bg-brand-surface/80 border border-brand-border/90 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="p-4 sm:p-5 bg-brand-surface border-b border-brand-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-gold" />
              <span className="text-xs uppercase font-sans tracking-widest text-brand-light font-medium">
                Official Google Registration Form
              </span>
            </div>
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline font-sans"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full relative min-h-[640px] bg-brand-surface/30">
            <iframe
              src={FORM_EMBED_URL}
              width="100%"
              height="780"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Miss Satyabhama Audition Registration Form"
              className="w-full border-0 block"
            >
              Loading Registration Form…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
