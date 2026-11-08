import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import siteConfig from '../config/siteConfig'

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
          eyebrow="Indian Heritage &amp; Elegance"
          title="The Beauty of Indian Traditional Fashion"
          subtitle="A premier cultural fashion showcase celebrating the grandeur of South Indian sarees, ethnic attire, and authentic craftsmanship in Vijayawada."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center mt-10 sm:mt-12 md:mt-16">
          {/* Editorial Visual Frame — Backstage Photograph */}
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
                alt="Behind the scenes preparation for Miss Satyabhama fashion show"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle Luxury Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/25 pointer-events-none" />

              {/* Behind The Scenes Tag */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                <div className="px-2.5 py-1 bg-brand-black/80 backdrop-blur-sm border border-brand-gold/30 text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.25em] text-brand-gold font-medium">
                  Behind The Scenes
                </div>
                <div className="w-5 sm:w-6 h-5 sm:h-6 border-t border-r border-brand-gold/50" />
              </div>

              {/* Bottom Editorial Details */}
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

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6 sm:space-y-8"
          >
            {/* Location Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-gold/30 bg-brand-gold/5 self-start max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-medium truncate">
                {siteConfig.eventLocation.city}, {siteConfig.eventLocation.state}
              </span>
            </div>

            {/* Introductory Heading */}
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-light leading-snug break-words">
                Celebrating Indian Heritage &amp; Traditional Elegance in Vijayawada
              </h3>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans font-light">
                Miss Satyabhama is an upcoming traditional fashion showcase in Vijayawada, Andhra Pradesh,
                celebrating the richness of Indian ethnic fashion, cultural heritage, craftsmanship, and
                individual expression.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans font-light">
                The event brings together participants who appreciate traditional attire, elegant sarees,
                half-sarees, lehengas, and beautiful Indian fashion traditions. Our vision is to create a
                premium platform where traditional Indian fashion meets modern stage presentation, celebrating
                confidence, grace, creativity, and cultural elegance.
              </p>
            </div>

            {/* Divider + Purpose Statement */}
            <div className="pt-2 border-t border-brand-border/60">
              <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                From authentic Kanjeevaram weaves to vibrant South Indian half-sarees and heritage jewellery,
                Miss Satyabhama provides a dedicated runway stage for women to showcase Indian tradition with pride.
                Full event details, registration information, and participant benefits are available in the{' '}
                <a
                  href="#event"
                  className="text-brand-gold hover:underline underline-offset-2 transition-colors font-medium"
                >
                  The Event
                </a>{' '}
                section below.
              </p>
            </div>

            {/* Venue Coming Soon note */}
            <div className="p-4 sm:p-5 border-l-2 border-brand-gold bg-brand-surface/40 text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
              <span className="font-medium text-brand-light block mb-1">
                Event Announcement
              </span>
              Venue details and the full event schedule will be announced soon. Stay tuned for
              official updates.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
