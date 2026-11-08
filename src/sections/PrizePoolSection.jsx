import { motion } from 'motion/react'
import { Trophy, Medal, Award, Crown, Sparkles, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

export default function PrizePoolSection() {
  const { prizePool, registrationUrl } = siteConfig

  return (
    <section
      id="prizes"
      className="relative py-20 sm:py-24 md:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
      aria-label="Prize Pool Section"
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

      {/* Subtle Architectural Gridlines */}
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
          title={prizePool.heading}
          subtitle={prizePool.subheading}
          align="center"
        />

        {/* Prominent Total Prize Pool Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-brand-gold/15 via-brand-surface/90 to-brand-gold/15 border-2 border-brand-gold/60 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-gold pointer-events-none" />
            <Sparkles className="w-5 h-5 text-brand-gold shrink-0 animate-pulse" />
            <span className="text-xs sm:text-sm font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-bold">
              Total Prize Pool:
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-brand-light font-bold">
              {prizePool.totalFormatted}
            </span>
          </div>
        </motion.div>

        {/* Podium Prize Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-end max-w-6xl mx-auto mb-12 sm:mb-16">
          {/* 🥈 Second Prize Card (Rank 2 — Left on Desktop, 2nd on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 h-full"
          >
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 bg-brand-surface/75 border border-brand-border/80 hover:border-brand-gold/50 transition-all duration-300 backdrop-blur-md group shadow-xl">
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 text-[10px] font-sans tracking-[0.2em] uppercase bg-brand-black/80 border border-brand-border text-brand-muted font-medium">
                    🥈 Rank 2
                  </span>
                  <div className="w-10 h-10 rounded border border-brand-border flex items-center justify-center bg-brand-black/60 group-hover:border-brand-gold/40 transition-colors">
                    <Medal className="w-5 h-5 text-brand-muted group-hover:text-brand-gold transition-colors" />
                  </div>
                </div>

                {/* Prize Details */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-brand-gold font-semibold">
                    Second Prize
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-brand-light font-semibold">
                    {prizePool.secondPrizeFormatted}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                    Awarded to the First Runner-Up for outstanding grace and traditional runway presentation.
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="border-t border-brand-border/60 pt-4 flex items-center justify-between text-xs font-sans text-brand-muted">
                <span className="uppercase tracking-wider">1st Runner-Up</span>
                <span className="text-brand-gold font-medium">Cash Reward</span>
              </div>
            </div>
          </motion.div>

          {/* 🥇 First Prize Card (Rank 1 — Center on Desktop [Elevated], 1st on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:-translate-y-4 h-full"
          >
            <div className="relative h-full flex flex-col justify-between p-7 sm:p-9 bg-gradient-to-b from-brand-gold/20 via-brand-surface/95 to-brand-surface border-2 border-brand-gold shadow-[0_0_40px_rgba(201,169,110,0.22)] backdrop-blur-md relative overflow-hidden group">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-gold pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-gold pointer-events-none" />

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold text-brand-black text-[10px] font-sans font-bold tracking-[0.2em] uppercase shadow-md">
                    <Crown className="w-3.5 h-3.5" />
                    <span>🥇 Champion</span>
                  </div>
                  <div className="w-12 h-12 rounded border-2 border-brand-gold flex items-center justify-center bg-brand-gold/20 shadow-inner">
                    <Trophy className="w-6 h-6 text-brand-gold" />
                  </div>
                </div>

                {/* Prize Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-sans uppercase tracking-[0.25em] text-brand-gold font-bold">
                      First Prize
                    </span>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-brand-gold/80 px-2 py-0.5 border border-brand-gold/30">
                      Top Award
                    </span>
                  </div>
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-gold font-bold tracking-tight">
                    {prizePool.firstPrizeFormatted}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-light/90 font-sans font-light leading-relaxed">
                    Awarded to the Winner of Miss Satyabhama Traditional Fashion Show with the prestigious championship title and grand cash prize.
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="border-t border-brand-gold/40 pt-4 flex items-center justify-between text-xs font-sans">
                <span className="text-brand-light font-semibold uppercase tracking-wider">
                  Grand Winner
                </span>
                <span className="text-brand-gold font-bold tracking-wide">
                  Championship Title
                </span>
              </div>
            </div>
          </motion.div>

          {/* 🥉 Third Prize Card (Rank 3 — Right on Desktop, 3rd on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-3 lg:order-3 h-full"
          >
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 bg-brand-surface/75 border border-brand-border/80 hover:border-brand-gold/50 transition-all duration-300 backdrop-blur-md group shadow-xl">
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 text-[10px] font-sans tracking-[0.2em] uppercase bg-brand-black/80 border border-brand-border text-brand-muted font-medium">
                    🥉 Rank 3
                  </span>
                  <div className="w-10 h-10 rounded border border-brand-border flex items-center justify-center bg-brand-black/60 group-hover:border-brand-gold/40 transition-colors">
                    <Award className="w-5 h-5 text-brand-muted group-hover:text-brand-gold transition-colors" />
                  </div>
                </div>

                {/* Prize Details */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-brand-gold font-semibold">
                    Third Prize
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-brand-light font-semibold">
                    {prizePool.thirdPrizeFormatted}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                    Awarded to the Second Runner-Up celebrating outstanding performance, elegance, and stage confidence.
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="border-t border-brand-border/60 pt-4 flex items-center justify-between text-xs font-sans text-brand-muted">
                <span className="uppercase tracking-wider">2nd Runner-Up</span>
                <span className="text-brand-gold font-medium">Cash Reward</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-xl mx-auto pt-2"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              variant="primary"
              size="lg"
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shadow-xl font-bold tracking-wider"
            >
              <span>REGISTER FOR AUDITIONS</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#event"
              className="w-full sm:w-auto"
            >
              <span>VIEW EVENT &amp; INCLUSIONS</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

