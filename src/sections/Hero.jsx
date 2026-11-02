import { motion } from 'motion/react'
import { ArrowDownRight, Sparkles } from 'lucide-react'
import siteConfig from '../config/siteConfig'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 md:py-32 overflow-hidden bg-brand-black"
      aria-label="Hero Section"
    >
      {/* Background Decorative Ambient Glow & Editorial Gridlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(201, 169, 110, 0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      
      {/* Architectural subtle vertical lines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none">
        <div className="border-l border-brand-border/20 h-full" />
        <div className="border-l border-brand-border/20 h-full hidden md:block" />
        <div className="border-l border-brand-border/20 h-full hidden md:block" />
        <div className="border-l border-r border-brand-border/20 h-full" />
      </div>

      <div className="container-editorial relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 xl:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start w-full"
          >
            {/* Location Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-gold/30 bg-brand-gold/5 mb-6 md:mb-8 max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brand-gold font-medium truncate">
                {siteConfig.eventLocation.city}, {siteConfig.eventLocation.state}
              </span>
            </div>

            {/* Main Editorial Display Title with fluid clamp sizing */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-normal text-brand-light leading-[1.12] sm:leading-[1.08] xl:leading-[1.04] tracking-tight mb-6 w-full break-words max-w-4xl">
              Where Elegance Meets The{' '}
              <span className="italic font-light text-brand-gold block sm:inline">
                Runway.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-muted font-sans font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
              {siteConfig.description}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-lg w-full sm:w-auto text-center min-h-[44px]"
              >
                Register For Auditions
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#about"
                className="group w-full sm:w-auto text-center min-h-[44px]"
              >
                <span>Discover The Event</span>
                <ArrowDownRight className="w-4 h-4 ml-2 text-brand-gold transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 inline shrink-0" />
              </Button>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Showcase / Model Photograph (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
          >
            {/* Aspect Ratio Container for Hero Photograph */}
            <div className="relative aspect-[2/3] w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[440px] xl:max-w-[480px] bg-brand-surface border border-brand-border overflow-hidden shadow-2xl group">
              {/* Actual Model Fashion-Show Photograph */}
              <img
                src="/images/satyabhama-hero.jpg"
                alt="Miss Satyabhama runway model in black couture gown and crown"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />

              {/* Subtle Luxury Gradient Vignette Overlay to integrate with black theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-brand-black/30 pointer-events-none" />

              {/* Editorial Frame Accents */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                <div className="px-2.5 py-1 bg-brand-black/75 backdrop-blur-sm border border-brand-gold/30 text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.25em] text-brand-gold">
                  Miss Satyabhama
                </div>
                <div className="w-5 sm:w-6 h-5 sm:h-6 border-t border-r border-brand-gold/50" />
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end border-t border-brand-border/40 pt-3 pointer-events-none">
                <div className="text-[10px] sm:text-[11px] font-sans tracking-widest text-brand-light/90 uppercase drop-shadow-sm">
                  Runway Showcase
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase font-sans tracking-widest text-brand-gold font-medium">
                  {siteConfig.eventLocation.city}
                </div>
              </div>

              {/* Gold Framing Accents */}
              <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-brand-gold/60 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-brand-gold/60 pointer-events-none" />
            </div>

            {/* Subtle Floating Label Badge */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-brand-black/90 border border-brand-border px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl backdrop-blur-sm max-w-[90%] z-20">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold font-medium truncate block">
                Fashion • Runway • Vijayawada
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
