import { motion } from 'motion/react'
import {
  FileText,
  Sparkles,
  Award,
  ArrowRight,
  Info,
  Tag,
  AlertCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

export default function AuditionJourneySection() {
  const { registrationUrl, pricing } = siteConfig
  const isEarlyBird = pricing.isEarlyBirdActive()

  const STAGES = [
    {
      step: 'ROUND 01',
      title: 'First: Audition Registration',
      subtitle: 'Online Application & Category Selection',
      icon: FileText,
      description:
        'Complete the official registration form with your personal details and category (Miss or Mrs.). The registration fee covers your audition registration only.',
      highlight: isEarlyBird
        ? `${pricing.earlyBirdPriceFormatted} Early Bird (Reg. ${pricing.regularPriceFormatted})`
        : `${pricing.regularPriceFormatted} Registration Fee`,
      notice:
        'Fee is strictly for audition registration. It does NOT guarantee selection or final participation.',
      hasCta: true,
    },
    {
      step: 'ROUND 02',
      title: 'Second: Audition Event',
      subtitle: 'In-Person Evaluation in Vijayawada',
      icon: Sparkles,
      description:
        'All registered participants receive the opportunity to attend the official audition in Vijayawada. Showcase your confidence, poise, and traditional attire before the judging panel.',
      rounds: [
        { name: 'Traditional Ramp Walk', desc: 'Attire presentation, poise, posture & elegance' },
        { name: 'Self-Introduction', desc: 'Confidence, communication & cultural pride' },
        { name: 'Judges Evaluation', desc: 'Scoring on traditional presence and charisma' },
      ],
      note: 'Audition date, reporting time, and venue in Vijayawada will be communicated by the organizing team.',
    },
    {
      step: 'ROUND 03',
      title: 'Third: Finalist Selection',
      subtitle: 'Judges Scoring & Finalist Announcement',
      icon: Award,
      description:
        'The judging panel evaluates audition performances across all rounds and announces selected contestants. Contestants are evaluated on merit, grace, and stage presence.',
      notice:
        'Contestants are not automatically selected upon registering. Only candidates selected from auditions proceed to the final runway.',
    },
  ]

  const KEY_PRINCIPLES = [
    {
      title: 'Audition Registration Fee Only',
      text: 'The ₹999 Early Bird (or ₹1,499 Regular) fee is strictly for audition registration. It does not constitute confirmation as a selected contestant or final runway participation.',
    },
    {
      title: 'No Guaranteed Selection',
      text: 'Registration does not guarantee selection. Contestants are not automatically selected after registering. Selection takes place strictly through the audition evaluation.',
    },
    {
      title: 'Three-Stage Order',
      text: 'The process strictly follows First: Audition Registration → Second: Audition → Third: Selection. Every participant must participate in the audition.',
    },
    {
      title: 'Transparent Evaluation',
      text: 'Candidates are evaluated on traditional style, presence, and confidence. Further details for selected finalists are shared directly by the organizing team.',
    },
  ]

  return (
    <section
      id="audition"
      className="relative py-20 sm:py-24 md:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
      aria-label="The Audition Process"
    >
      {/* Background Subtle Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(201, 169, 110, 0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle Gridlines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-15">
        <div className="border-l border-brand-border h-full" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-r border-brand-border h-full" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Three-Round Audition Pathway"
          title="THE AUDITION PROCESS & ROUNDS"
          subtitle="Round 1: Audition Registration → Round 2: Audition Event → Round 3: Selection"
          align="center"
        />

        {/* Narrative Description & Explicit Clarification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 px-2"
        >
          <p className="text-sm sm:text-base md:text-lg text-brand-muted font-sans font-light leading-relaxed">
            The Miss Satyabhama Traditional Fashion Show follows a clear round-by-round selection structure.
            Please understand the round sequence before registering:
          </p>
          <div className="mt-4 inline-flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-sans font-semibold text-brand-gold bg-brand-gold/10 border border-brand-gold/40 px-4 py-2">
            <span>Round 1: Audition Registration</span>
            <span className="text-brand-border">→</span>
            <span>Round 2: Audition Event</span>
            <span className="text-brand-border">→</span>
            <span>Round 3: Final Selection</span>
          </div>
        </motion.div>

        {/* Pricing Highlight Card — Emphasizing Fee Is For Audition Registration Only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="relative p-6 sm:p-7 bg-gradient-to-r from-brand-gold/15 via-brand-surface/90 to-brand-surface border border-brand-gold/50 backdrop-blur-md shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-brand-gold">
                    Audition Registration Fee
                  </span>
                </div>

                {isEarlyBird ? (
                  <>
                    <div className="flex items-baseline gap-2.5 flex-wrap mb-1.5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold leading-none">
                        {pricing.earlyBirdPriceFormatted}
                      </span>
                      <span className="font-sans text-base text-brand-muted line-through">
                        {pricing.regularPriceFormatted}
                      </span>
                      <span className="text-[10px] font-sans font-bold text-brand-gold bg-brand-gold/15 border border-brand-gold/40 px-2 py-0.5">
                        SAVE {pricing.savingsFormatted}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-muted font-sans font-light mb-2">
                      <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>
                        Early Bird deadline: <strong className="text-brand-light font-medium">{pricing.earlyBirdDeadline}</strong>.
                        Regular fee {pricing.regularPriceFormatted} applies thereafter.
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold leading-none block mb-1.5">
                      {pricing.regularPriceFormatted}
                    </span>
                    <p className="text-xs text-brand-muted font-sans font-light mb-2">
                      Standard fee for initial audition registration.
                    </p>
                  </>
                )}

                {/* Critical Clarification Alert */}
                <div className="p-3 bg-brand-black/60 border border-brand-gold/30 flex items-start gap-2 mt-3">
                  <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <p className="text-[11px] text-brand-light/90 font-sans font-light leading-relaxed">
                    <strong className="text-brand-gold font-medium">Important:</strong> The {isEarlyBird ? pricing.earlyBirdPriceFormatted : pricing.regularPriceFormatted} fee is strictly for <span className="underline decoration-brand-gold/60 underline-offset-2">audition registration</span>. It is <strong className="text-brand-light font-medium">not</strong> a confirmation as a selected contestant or final runway participation. Contestants are not automatically selected upon registering.
                  </p>
                </div>
              </div>

              <div className="sm:border-l border-brand-border/60 sm:pl-6 shrink-0 flex flex-col items-start sm:items-end gap-2.5 border-t sm:border-t-0 pt-4 sm:pt-0">
                <Button
                  variant="primary"
                  size="md"
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold tracking-wider text-xs w-full sm:w-auto"
                >
                  <span>Register For Auditions</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <span className="text-[10px] text-brand-muted font-sans font-light sm:text-right">
                  Official Google Forms Registration
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── THE THREE-STEP PROCESS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 bg-brand-surface/85 border border-brand-border/90 hover:border-brand-gold/70 transition-all duration-300 backdrop-blur-md group shadow-xl">
                  {/* Top: Step Tag & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase px-2.5 py-1 bg-brand-gold/10 border border-brand-gold/30">
                        {stage.step}
                      </span>
                      <div className="w-11 h-11 rounded border border-brand-border flex items-center justify-center bg-brand-black/60 group-hover:border-brand-gold/60 group-hover:bg-brand-gold/10 transition-colors">
                        <Icon className="w-5 h-5 text-brand-gold transition-colors" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-brand-light font-medium mb-1 leading-snug">
                      {stage.title}
                    </h3>
                    {stage.subtitle && (
                      <span className="text-[11px] text-brand-gold font-sans block mb-3 font-medium">
                        {stage.subtitle}
                      </span>
                    )}

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed mb-4">
                      {stage.description}
                    </p>

                    {/* Audition Rounds List if present (Round 02) */}
                    {stage.rounds && (
                      <div className="p-3 bg-brand-black/60 border border-brand-gold/30 mb-3 space-y-1.5">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gold block mb-1">
                          Audition Day Evaluation Rounds:
                        </span>
                        {stage.rounds.map((rnd, rIdx) => (
                          <div key={rIdx} className="text-[11px] text-brand-light/90 font-sans leading-snug flex items-start gap-1.5">
                            <span className="text-brand-gold font-bold shrink-0">{rIdx + 1}.</span>
                            <div>
                              <strong className="text-brand-light font-medium">{rnd.name}:</strong>{' '}
                              <span className="text-brand-muted">{rnd.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlight Box if present (Stage 01 fee info) */}
                    {stage.highlight && (
                      <div className="p-3 bg-brand-gold/10 border border-brand-gold/30 mb-3">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gold block mb-0.5">
                          Audition Registration Fee
                        </span>
                        <span className="font-serif text-lg font-bold text-brand-light block">
                          {stage.highlight}
                        </span>
                      </div>
                    )}

                    {/* Notice if present */}
                    {stage.notice && (
                      <div className="p-3 bg-brand-black/50 border border-brand-border/70 text-[11px] text-brand-light/80 font-sans font-light leading-snug mb-3">
                        <span className="text-brand-gold font-medium block mb-0.5">Please Note:</span>
                        {stage.notice}
                      </div>
                    )}

                    {/* Note if present */}
                    {stage.note && (
                      <div className="p-3 bg-brand-black/50 border border-brand-border/60 text-[11px] text-brand-light/80 font-sans font-light leading-snug mt-2">
                        {stage.note}
                      </div>
                    )}
                  </div>

                  {/* Stage 1 CTA */}
                  {stage.hasCta && (
                    <div className="pt-4 border-t border-brand-border/40 mt-4">
                      <Button
                        variant="primary"
                        size="sm"
                        href={registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center font-bold tracking-wider text-[11px] justify-center"
                      >
                        <span>REGISTER FOR AUDITIONS</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  )}

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-gold/30 pointer-events-none group-hover:border-brand-gold/80 transition-colors" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── KEY AUDITION PRINCIPLES CALLOUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-6 sm:p-8 bg-brand-surface/60 border border-brand-gold/40 backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none" />

          <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-brand-border/60">
            <div className="w-8 h-8 rounded border border-brand-gold/40 flex items-center justify-center bg-brand-gold/10 shrink-0">
              <Info className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-brand-gold font-bold block">
                Audition Clarifications
              </span>
              <h4 className="font-serif text-base sm:text-lg text-brand-light font-medium">
                Important Information Regarding Audition Registration
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KEY_PRINCIPLES.map((item, i) => (
              <div key={i} className="p-3.5 bg-brand-black/40 border border-brand-border/60">
                <div className="flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-brand-gold">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-muted font-sans font-light text-center sm:text-left">
              Ready to take the first step? Complete your audition registration via the official Google Form.
            </p>
            <Button
              variant="primary"
              size="md"
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-full sm:w-auto font-bold tracking-wider"
            >
              <span>REGISTER FOR AUDITIONS</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
