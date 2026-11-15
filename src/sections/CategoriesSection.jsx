import { motion } from 'motion/react'
import { Sparkles, Crown, ArrowRight, ArrowDownRight, UserCheck, Calendar } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import siteConfig from '../config/siteConfig'

export default function CategoriesSection() {
  const { categories, registrationUrl } = siteConfig

  return (
    <section
      id="categories"
      className="relative py-20 sm:py-24 md:py-32 bg-brand-black border-t border-brand-border/60 overflow-hidden"
      aria-label="Contestant Categories"
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

      {/* Subtle Architectural Gridlines */}
      <div className="absolute inset-0 w-[min(92%,1560px)] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 pointer-events-none opacity-15">
        <div className="border-l border-brand-border h-full" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-brand-border h-full hidden md:block" />
        <div className="border-l border-r border-brand-border h-full" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Heading with exact required wording */}
        <SectionHeading
          eyebrow="Contestant Eligibility • Ages 18 to 35"
          title={categories.heading}
          subtitle={categories.subheading}
          align="center"
        />

        {/* Age eligibility pill banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-sans tracking-wide">
            <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
            <span>
              Age Eligibility: <strong className="text-brand-light font-semibold">18 to 35 Years</strong>
            </span>
            <span className="text-brand-gold/50">•</span>
            <span className="text-brand-light/90">Both Miss &amp; Mrs. Categories</span>
          </div>
        </motion.div>

        {/* Two Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* ── MISS CATEGORY CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <div className="relative h-full flex flex-col justify-between p-7 sm:p-9 bg-gradient-to-b from-brand-surface/90 via-brand-surface/80 to-brand-surface border border-brand-gold/50 hover:border-brand-gold transition-all duration-300 backdrop-blur-md shadow-2xl group">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none group-hover:border-brand-light transition-colors" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none group-hover:border-brand-light transition-colors" />

              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-[11px] font-sans font-bold uppercase tracking-[0.2em]">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{categories.miss.tag}</span>
                  </div>
                  <div className="w-12 h-12 rounded border border-brand-gold/40 flex items-center justify-center bg-brand-black/60 group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-colors">
                    <Crown className="w-6 h-6 text-brand-gold" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="font-serif text-3xl sm:text-4xl text-brand-light font-bold mb-3 tracking-wide flex items-baseline gap-2">
                  <span>{categories.miss.name}</span>
                  <span className="font-serif text-xl sm:text-2xl text-brand-gold font-light italic">
                    Category
                  </span>
                </h3>

                {/* Eligibility Tag */}
                <div className="inline-block text-[11px] uppercase font-sans tracking-widest text-brand-gold/90 font-medium mb-4 pb-2 border-b border-brand-border/60">
                  {categories.miss.eligibility}
                </div>

                {/* Exact Required Description */}
                <p className="text-sm sm:text-base text-brand-light/90 font-sans font-light leading-relaxed mb-6">
                  <strong className="font-medium text-brand-gold">Miss:</strong>{' '}
                  {categories.miss.description}
                </p>

                {/* Category Feature Highlights */}
                <div className="space-y-2.5 p-4 bg-brand-black/40 border border-brand-border/60 mb-6 text-xs text-brand-muted font-sans font-light">
                  <div className="flex items-center gap-2 text-brand-light/80">
                    <UserCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Open to unmarried women aged 18 to 35</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-light/80">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Traditional sarees, half-sarees &amp; lehengas</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-brand-border/60">
                <Button
                  variant="primary"
                  size="md"
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-bold tracking-wider text-xs justify-center"
                >
                  <span>REGISTER AS MISS</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ── MRS. CATEGORY CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <div className="relative h-full flex flex-col justify-between p-7 sm:p-9 bg-gradient-to-b from-brand-surface/90 via-brand-surface/80 to-brand-surface border border-brand-gold/50 hover:border-brand-gold transition-all duration-300 backdrop-blur-md shadow-2xl group">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold pointer-events-none group-hover:border-brand-light transition-colors" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold pointer-events-none group-hover:border-brand-light transition-colors" />

              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-[11px] font-sans font-bold uppercase tracking-[0.2em]">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{categories.mrs.tag}</span>
                  </div>
                  <div className="w-12 h-12 rounded border border-brand-gold/40 flex items-center justify-center bg-brand-black/60 group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-colors">
                    <Crown className="w-6 h-6 text-brand-gold" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="font-serif text-3xl sm:text-4xl text-brand-light font-bold mb-3 tracking-wide flex items-baseline gap-2">
                  <span>{categories.mrs.name}</span>
                  <span className="font-serif text-xl sm:text-2xl text-brand-gold font-light italic">
                    Category
                  </span>
                </h3>

                {/* Eligibility Tag */}
                <div className="inline-block text-[11px] uppercase font-sans tracking-widest text-brand-gold/90 font-medium mb-4 pb-2 border-b border-brand-border/60">
                  {categories.mrs.eligibility}
                </div>

                {/* Exact Required Description */}
                <p className="text-sm sm:text-base text-brand-light/90 font-sans font-light leading-relaxed mb-6">
                  <strong className="font-medium text-brand-gold">Mrs.:</strong>{' '}
                  {categories.mrs.description}
                </p>

                {/* Category Feature Highlights */}
                <div className="space-y-2.5 p-4 bg-brand-black/40 border border-brand-border/60 mb-6 text-xs text-brand-muted font-sans font-light">
                  <div className="flex items-center gap-2 text-brand-light/80">
                    <UserCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Open to married women aged 18 to 35</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-light/80">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Authentic Kanjeevaram &amp; South Indian silk sarees</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-brand-border/60">
                <Button
                  variant="primary"
                  size="md"
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-bold tracking-wider text-xs justify-center"
                >
                  <span>REGISTER AS MRS.</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Audition Process Connection Notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-5 sm:p-6 bg-brand-surface/60 border border-brand-gold/40 text-center"
        >
          <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed mb-3">
            Choose your category when completing the audition registration form.
            Initial registration fee is for <span className="text-brand-gold font-medium">audition registration only</span>.
            Contestants are evaluated at the auditions and selected based on merit and traditional runway presence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#audition"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-sans text-brand-gold hover:text-brand-light transition-colors py-1"
            >
              <span>View Audition Process Details</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

