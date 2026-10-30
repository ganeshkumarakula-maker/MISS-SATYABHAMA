import { motion } from 'motion/react'
import { Sparkles, Compass, Eye, Users, Gift } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import siteConfig from '../config/siteConfig'

const ABOUT_CONTENT = {
  eyebrow: 'About The Showcase',
  title: 'About Miss Satyabhama',
  subtitle:
    'A premier fashion showcase celebrating elegance, runway presence, and creative expression in Vijayawada, Andhra Pradesh — open to participants ready to shine on stage.',
  overviewP1:
    'Miss Satyabhama is an upcoming premium fashion showcase in Vijayawada, Andhra Pradesh. The event offers a dedicated runway platform for emerging talent — combining professional grooming, live audience experience, and a beautifully produced fashion show stage.',
  overviewP2:
    'Every registered participant walks the runway before a live audience, receives complimentary grooming and makeup services, and is supported throughout the event with refreshments, official documentation, and an exclusive participant kit.',
  pillar1Title: 'Runway Platform',
  pillar1Description:
    'A professionally produced runway stage in Vijayawada — giving participants a genuine fashion-show experience with lighting, music, and a live audience.',
  pillar2Title: 'Participant Benefits',
  pillar2Description:
    'Registration includes free grooming & makeup sessions, 5 complimentary audience passes, snacks & beverages, a government participation certificate, event photographs, and an exclusive Event Kit.',
  organizerNote:
    'Venue details and the full event schedule will be announced soon. Stay tuned for official updates.',
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 md:py-36 bg-brand-offblack border-t border-brand-border/60 overflow-hidden"
      aria-label="About Miss Satyabhama"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-20">
        <div className="border-l border-brand-border/40 h-full" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-brand-border/40 h-full hidden md:block" />
        <div className="border-l border-r border-brand-border/40 h-full" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow={ABOUT_CONTENT.eyebrow}
          title={ABOUT_CONTENT.title}
          subtitle={ABOUT_CONTENT.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center mt-10 sm:mt-12 md:mt-16">
          {/* Editorial Visual Frame / Backstage Atelier Photograph (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start w-full"
          >
            <div className="relative aspect-[4/5] w-full max-w-[340px] sm:max-w-md lg:max-w-lg xl:max-w-[460px] bg-brand-surface border border-brand-border overflow-hidden shadow-2xl group">
              {/* Backstage Atelier Couture Photograph */}
              <img
                src="/images/satyabhama-atelier.jpg"
                alt="Behind the scenes haute couture gown preparation for Miss Satyabhama"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle Luxury Gradient Vignette to blend into dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/25 pointer-events-none" />

              {/* Tasteful Behind The Scenes Tag */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                <div className="px-2.5 py-1 bg-brand-black/80 backdrop-blur-sm border border-brand-gold/30 text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.25em] text-brand-gold font-medium">
                  Behind The Scenes
                </div>
                <div className="w-5 sm:w-6 h-5 sm:h-6 border-t border-r border-brand-gold/50" />
              </div>

              {/* Bottom Subtle Editorial Details */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end border-t border-brand-border/40 pt-3 pointer-events-none">
                <div className="text-[10px] sm:text-[11px] font-sans tracking-widest text-brand-light/90 uppercase drop-shadow-sm">
                  Atelier Craftsmanship
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase font-sans tracking-widest text-brand-gold font-medium">
                  {siteConfig.eventLocation.city}
                </div>
              </div>

              {/* Gold Corner Accents */}
              <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-brand-gold/60 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-brand-gold/60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Narrative & Purpose Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6 sm:space-y-8"
          >
            {/* Introductory Overview */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-light leading-snug break-words">
                Celebrating Elegance &amp; Creative Fashion in Vijayawada
              </h3>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans font-light">
                {ABOUT_CONTENT.overviewP1}
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans font-light">
                {ABOUT_CONTENT.overviewP2}
              </p>
            </div>

            {/* Participant Benefit Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
              {/* Card 1 — Runway Platform */}
              <div className="p-5 sm:p-6 bg-brand-surface/70 border border-brand-border/80 flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 shrink-0">
                    <Compass className="w-4 h-4 text-brand-gold" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-brand-light">
                    {ABOUT_CONTENT.pillar1Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                  {ABOUT_CONTENT.pillar1Description}
                </p>
              </div>

              {/* Card 2 — Participant Benefits */}
              <div className="p-5 sm:p-6 bg-brand-surface/70 border border-brand-border/80 flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded border border-brand-gold/30 flex items-center justify-center bg-brand-gold/5 shrink-0">
                    <Gift className="w-4 h-4 text-brand-gold" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-brand-light">
                    {ABOUT_CONTENT.pillar2Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                  {ABOUT_CONTENT.pillar2Description}
                </p>
              </div>
            </div>

            {/* Registration Fee & Audience Pass Highlight */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <div className="flex-1 p-4 sm:p-5 bg-brand-gold/10 border border-brand-gold/40 flex flex-col items-center text-center space-y-1">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium">Registration Fee</span>
                <span className="font-serif text-2xl sm:text-3xl text-brand-gold font-semibold">₹9,999</span>
              </div>
              <div className="flex-1 p-4 sm:p-5 bg-brand-surface/60 border border-brand-border/80 flex flex-col items-center text-center space-y-1">
                <Users className="w-5 h-5 text-brand-gold mb-0.5" />
                <span className="font-serif text-base sm:text-lg text-brand-light font-medium">5 Free Audience Passes</span>
                <span className="text-[11px] text-brand-muted font-sans font-light leading-snug">Bring 5 guests to watch the live fashion show</span>
              </div>
            </div>

            {/* Event Note */}
            <div className="p-4 sm:p-5 border-l-2 border-brand-gold bg-brand-surface/40 text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
              <span className="font-medium text-brand-light block mb-1">
                Event Information
              </span>
              {ABOUT_CONTENT.organizerNote}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
