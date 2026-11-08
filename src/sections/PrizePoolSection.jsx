import { motion } from 'motion/react'
import { Trophy, Award, Crown, Sparkles, ArrowRight, IndianRupee } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

export default function PrizePoolSection() {
  const { campaign, registrationUrl } = siteConfig
  const { prizes } = campaign

  return (
    <section
      id="prizes"
      className="relative py-20 sm:py-24 md:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
      aria-label="Prize Pool"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 25%, rgba(201, 169, 110, 0.15) 0%, transparent 65%)',
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
          eyebrow="Rewards & Recognition"
          title={prizes.heading}
          subtitle={prizes.subheading}
          align="center"
        />

        {/* Total Prize Pool Badge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 bg-brand-gold/10 border border-brand-gold/40 backdrop-blur-md shadow-lg">
            <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
            <span className="text-xs sm:text-sm font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-medium">
              Grand Total Prize Pool:
            </span>
            <span className="font-serif text-base sm:text-lg text-brand-light font-bold">
              {prizes.totalFormatted}
            </span>
          </div>
        </motion.div>

        {/* Podium Prize Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-end max-w-6xl mx-auto mb-12 sm:mb-16">
          {/* Second Prize Card (Podium Rank 2 - Left on Desktop, 2nd on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 h-full"
          >
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 bg-brand-surface/70 border border-brand-border hover:border-brand-gold/50 transition-all duration-300 backdrop-blur-md group shadow-xl">
              {/* Top Accent */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-1 text-[10px] font-sans tracking-[0.2em] uppercase bg-brand-black/80 border border-brand-border text-brand-muted font-medium">
                  Rank 2
                </span>
                <div className="w-10 h-10 rounded border border-brand-border flex items-center justify-center bg-brand-black/60 group-hover:border-brand-gold/40 transition-colors">
                  <Award className="w-5 h-5 text-brand-muted group-hover:text-brand-gold transition-colors" />
                </div>
              </div>

              {/* Prize Details */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-brand-gold font-medium">
                  Second Prize
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-brand-light font-semibold">
                  ₹50,000
                </h3>
                <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                  Awarded to the First Runner-Up for exceptional runway presence and poise.
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="border-t border-brand-border/60 pt-4 flex items-center justify-between text-[11px] font-sans text-brand-muted">
                <span className="uppercase tracking-wider">1st Runner-Up</span>
                <span className="text-brand-gold font-medium">Cash Reward</span>
              </div>
            </div>
          </motion.div>

          {/* First Prize Card (Podium Champion - Center on Desktop, 1st on Mobile, Elevated) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 h-full lg:-translate-y-4"
          >
            <div className="relative h-full flex flex-col justify-between p-7 sm:p-9 bg-gradient-to-b from-brand-gold/15 via-brand-surface/90 to-brand-surface border-2 border-brand-gold shadow-[0_0_40px_rgba(201,169,110,0.18)] backdrop-blur-md group">
              {/* Champion Crown Ribbon */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold text-brand-black text-[10px] font-sans font-bold tracking-[0.25em] uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Crown className="w-3.5 h-3.5 text-brand-black" />
                <span>Champion Title</span>
              </div>

              {/* Top Accent */}
              <div className="flex items-center justify-between mb-6 mt-2">
                <span className="px-3 py-1 text-[10px] font-sans tracking-[0.2em] uppercase bg-brand-gold/20 border border-brand-gold/50 text-brand-gold font-semibold">
                  Winner • Rank 1
                </span>
                <div className="w-12 h-12 rounded border border-brand-gold/60 flex items-center justify-center bg-brand-gold/20 shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                  <Trophy className="w-6 h-6 text-brand-gold" />
                </div>
              </div>

              {/* Prize Details */}
              <div className="space-y-3 mb-6">
                <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  First Prize
                </p>
                <h3 className="font-serif text-4xl sm:text-5xl text-brand-gold font-bold leading-none py-1">
                  ₹75,000
                </h3>
                <p className="text-xs sm:text-sm text-brand-light/90 font-sans font-light leading-relaxed">
                  Crown title of Miss Satyabhama, prestigious trophy, certificate of championship, and grand cash prize.
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="border-t border-brand-gold/30 pt-4 flex items-center justify-between text-xs font-sans">
                <span className="text-brand-light font-medium uppercase tracking-wider">
                  Grand Winner
                </span>
                <span className="text-brand-gold font-semibold tracking-wide">
                  Top Award
                </span>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none" />
            </div>
          </motion.div>

          {/* Third Prize Card (Podium Rank 3 - Right on Desktop, 3rd on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-3 lg:order-3 h-full"
          >
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 bg-brand-surface/70 border border-brand-border hover:border-brand-gold/50 transition-all duration-300 backdrop-blur-md group shadow-xl">
              {/* Top Accent */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-1 text-[10px] font-sans tracking-[0.2em] uppercase bg-brand-black/80 border border-brand-border text-brand-muted font-medium">
                  Rank 3
                </span>
                <div className="w-10 h-10 rounded border border-brand-border flex items-center justify-center bg-brand-black/60 group-hover:border-brand-gold/40 transition-colors">
                  <Award className="w-5 h-5 text-brand-muted group-hover:text-brand-gold transition-colors" />
                </div>
              </div>

              {/* Prize Details */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-brand-gold font-medium">
                  Third Prize
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-brand-light font-semibold">
                  ₹25,000
                </h3>
                <p className="text-xs text-brand-muted font-sans font-light leading-relaxed">
                  Awarded to the Second Runner-Up celebrating outstanding performance and confidence.
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="border-t border-brand-border/60 pt-4 flex items-center justify-between text-[11px] font-sans text-brand-muted">
                <span className="uppercase tracking-wider">2nd Runner-Up</span>
                <span className="text-brand-gold font-medium">Cash Reward</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Campaign Action Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-xl mx-auto pt-4"
        >
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-light mb-6">
            Register during the Early Bird period for{' '}
            <span className="text-brand-gold font-semibold">
              {campaign.earlyBirdPriceFormatted}
            </span>{' '}
            (Save {campaign.discountFormatted}) before{' '}
            <span className="text-brand-light font-medium">{campaign.deadline}</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="primary"
              size="lg"
              href="#register"
              className="w-full sm:w-auto shadow-lg"
            >
              <span>Register For Auditions</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#event"
              className="w-full sm:w-auto"
            >
              <span>View Participant Benefits</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

