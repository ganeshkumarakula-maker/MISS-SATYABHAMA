import { motion } from 'motion/react'
import {
  UserCheck,
  CalendarCheck,
  ShieldCheck,
  CreditCard,
  GitFork,
  CheckCircle,
  AlertCircle,
  Scissors,
  Users,
  Award,
  Camera,
  Gift,
  UtensilsCrossed,
  Shirt,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Button from '../components/Button'

// Participant eligibility criteria cards
const ELIGIBILITY_RULES = [
  {
    icon: CalendarCheck,
    title: 'Age Requirement',
    value: 'To Be Announced',
    description:
      'Official minimum and maximum age criteria for applicants will be communicated when registrations open.',
  },
  {
    icon: UserCheck,
    title: 'Participant Profile',
    value: 'Open Call Details Pending',
    description:
      'Criteria regarding residency, category qualifications, and experience level will be confirmed prior to registration.',
  },
  {
    icon: ShieldCheck,
    title: 'Documentation',
    value: 'Standard Verification',
    description:
      'Valid identification, proof of age, and adherence to runway participant conduct standards will be required.',
  },
  {
    icon: CreditCard,
    title: 'Registration Fee',
    value: '₹9,999',
    description:
      'A one-time registration fee of ₹9,999 covers the complete participant package — grooming, makeup, audience passes, refreshments, kit, and more.',
  },
]

// Selection procedure stages
const SELECTION_STAGES = [
  {
    step: '01',
    name: 'Online Application',
    detail: 'Complete and submit the official registration form with applicant details.',
  },
  {
    step: '02',
    name: 'Screening & Shortlist',
    detail: 'Evaluation of received profiles by the organizing panel for audition rounds.',
  },
  {
    step: '03',
    name: 'Auditions & Rehearsal',
    detail: 'Runway walk assessments and orientation rounds held in Vijayawada.',
  },
  {
    step: '04',
    name: 'Grand Finale Showcase',
    detail: 'Finalists perform on the main runway stage before the audience and jury.',
  },
]

// What is included in the registration package
const INCLUDED_ITEMS = [
  { icon: Scissors, text: 'Professional grooming sessions — completely FREE' },
  { icon: Scissors, text: 'Professional makeup sessions — completely FREE' },
  { icon: Users, text: '5 complimentary audience passes for family or friends' },
  { icon: UtensilsCrossed, text: 'Complimentary snacks and beverages at the venue' },
  { icon: Award, text: 'Government participation certificate upon event completion' },
  { icon: Camera, text: 'Professional event photographs provided to participants' },
  { icon: Gift, text: 'Exclusive Event Kit (contents to be announced)' },
]

// What participants must arrange themselves
const PARTICIPANT_RESPONSIBILITIES = [
  {
    icon: Shirt,
    text: 'Outfits / Costumes',
    note: 'Participants must arrange and bring their own outfits. Outfits are not provided by the organization.',
    warning: true,
  },
]

export default function EligibilitySection() {
  return (
    <section
      id="eligibility"
      className="relative py-20 sm:py-24 md:py-36 bg-brand-offblack border-t border-brand-border/60 overflow-hidden"
      aria-label="Participant Eligibility"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-20">
        <div className="border-l border-brand-border/40 h-full" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-r border-brand-border/40 h-full" />
      </div>

      <div className="container-editorial relative z-10">
        <SectionHeading
          eyebrow="Participation Guidelines"
          title="Participant Eligibility"
          subtitle="Requirements, inclusions, and responsibilities for all prospective participants."
          align="center"
        />

        {/* Eligibility Criteria Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {ELIGIBILITY_RULES.map((rule, idx) => {
            const Icon = rule.icon
            return (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card interactive className="h-full flex flex-col justify-between space-y-4 p-5 sm:p-6 md:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg text-brand-light mb-1">
                        {rule.title}
                      </h4>
                      <p className="text-xs uppercase font-sans tracking-wider text-brand-gold font-medium">
                        {rule.value}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-brand-muted font-sans font-light leading-relaxed border-t border-brand-border/40 pt-3 sm:pt-4">
                    {rule.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* ── What Is Included & What Participants Must Bring ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 pt-10 sm:pt-12 border-t border-brand-border/60"
        >
          {/* What Is Included */}
          <div className="p-6 sm:p-8 bg-brand-surface/60 border border-brand-border/80 flex flex-col space-y-5">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
              <h3 className="font-serif text-lg sm:text-xl text-brand-light">
                What Is Included
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
              The ₹9,999 registration fee covers the following complimentary services and benefits:
            </p>
            <ul className="space-y-3">
              {INCLUDED_ITEMS.map((item, i) => {
                const Icon = item.icon
                return (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs sm:text-sm text-brand-muted font-sans font-light"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* What Participants Must Bring */}
          <div className="p-6 sm:p-8 bg-brand-surface/60 border border-brand-border/80 flex flex-col space-y-5">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-brand-gold shrink-0" />
              <h3 className="font-serif text-lg sm:text-xl text-brand-light">
                What Participants Must Arrange
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
              Please note the following is the participant's responsibility and is not provided by the organization:
            </p>
            <div className="p-4 sm:p-5 border border-brand-gold/30 bg-brand-gold/5 flex flex-col space-y-3">
              <div className="flex items-start gap-3">
                <Shirt className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm sm:text-base font-serif text-brand-light mb-1">
                    Outfits &amp; Costumes
                  </p>
                  <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                    Participants must arrange and bring their own outfits for the runway. The organization does <span className="text-brand-light font-medium">not</span> provide or supply costumes.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs text-brand-muted font-sans font-light leading-relaxed border-t border-brand-border/40 pt-4">
              For any clarifications regarding outfit guidelines or dress code requirements, please contact the organizing team through the official registration channels.
            </p>
          </div>
        </motion.div>

        {/* Selection Process Roadmap */}
        <div className="pt-10 sm:pt-12 border-t border-brand-border/60">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12 px-2">
            <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-medium block mb-2">
              Audition Journey
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-light">
              Selection Process Overview
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SELECTION_STAGES.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-5 sm:p-6 bg-brand-surface/50 border border-brand-border/80 flex flex-col justify-between space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-gold tracking-widest font-semibold">
                    STAGE {stage.step}
                  </span>
                  <GitFork className="w-4 h-4 text-brand-muted/40" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-brand-light mb-1.5 sm:mb-2">
                    {stage.name}
                  </h4>
                  <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                    {stage.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Registration Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 p-6 sm:p-10 md:p-12 bg-gradient-to-r from-brand-surface via-brand-surface to-brand-black border border-brand-gold/30 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-brand-gold/40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-brand-gold/40 pointer-events-none" />

          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-medium block mb-2 sm:mb-3">
            Ready For The Runway?
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-light mb-2 sm:mb-3">
            Audition Registrations
          </h3>
          <p className="text-lg sm:text-xl font-serif text-brand-gold font-semibold mb-3 sm:mb-4">
            ₹9,999 — Includes Full Participant Package
          </p>
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-light max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
            Applications open online via our official form. Review the requirements above and prepare your registration details. Grooming, makeup, audience passes, refreshments, certificate, photographs, and Event Kit are all included.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
            <Button
              variant="primary"
              size="lg"
              href="#register"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Register Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#event"
              className="w-full sm:w-auto min-h-[44px]"
            >
              Back To Event Details
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
