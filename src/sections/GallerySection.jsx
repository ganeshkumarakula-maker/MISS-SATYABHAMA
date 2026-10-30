import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { GALLERY_ITEMS } from '../config/galleryData'

export default function GallerySection() {
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  const activeItem = activeModalIndex !== null ? GALLERY_ITEMS[activeModalIndex] : null

  const openModal = (index) => {
    setActiveModalIndex(index)
  }

  const closeModal = useCallback(() => {
    setActiveModalIndex(null)
  }, [])

  const nextImage = useCallback(() => {
    setActiveModalIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_ITEMS.length))
  }, [])

  const prevImage = useCallback(() => {
    setActiveModalIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    )
  }, [])

  // Keyboard navigation (Escape to close, Left/Right arrows to navigate)
  useEffect(() => {
    if (activeModalIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [activeModalIndex, closeModal, nextImage, prevImage])

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-24 md:py-36 bg-brand-black border-t border-brand-border/60 overflow-hidden"
      aria-label="Gallery Section"
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
          eyebrow="THE GALLERY"
          title="Moments of Elegance"
          subtitle="A visual celebration of runway artistry, couture styling, and stage presence from the Miss Satyabhama showcase."
          align="center"
        />

        {/* 5-Card Responsive Gallery Grid */}
        {/* Mobile: 1 column | Tablet: 2 columns | Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {GALLERY_ITEMS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col bg-brand-surface rounded-sm border border-brand-border/80 hover:border-brand-gold/60 transition-all duration-500 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Image Frame with Clean Aspect Ratio */}
                <div
                  className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-brand-offblack cursor-pointer"
                  onClick={() => openModal(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openModal(idx)
                    }
                  }}
                  aria-label={`Open photo ${idx + 1}: ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    style={{ objectPosition: item.objectPosition || 'center 20%' }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Tasteful subtle overlay & view icon on hover/focus */}
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-brand-black/80 border border-brand-gold/60 text-brand-gold flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Corner Accent Ticks matching theme */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-gold/40 pointer-events-none group-hover:border-brand-gold transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-gold/40 pointer-events-none group-hover:border-brand-gold transition-colors" />
                </div>

                {/* Card Meta Footer */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-t border-brand-border/60 bg-brand-surface/90">
                  <div className="pr-3">
                    <p className="font-serif text-base sm:text-lg text-brand-light font-medium tracking-tight group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </p>
                    <p className="text-xs text-brand-muted/80 font-sans tracking-wide truncate mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal(idx)}
                    className="shrink-0 p-2 text-brand-gold/70 hover:text-brand-gold hover:bg-brand-gold/10 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-brand-gold"
                    aria-label={`Enlarge ${item.title}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Gallery Sub-Notice */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-brand-border/50 text-center max-w-xl mx-auto px-4">
          <p className="text-[10px] sm:text-xs text-brand-muted/80 uppercase tracking-[0.18em] sm:tracking-[0.2em] font-sans">
            Official Photography • Miss Satyabhama Showcase
          </p>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-black/95 backdrop-blur-md"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
          >
            {/* Modal Dialog Container */}
            <div
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-brand-surface border border-brand-gold/40 shadow-2xl rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-brand-border bg-brand-offblack">
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-brand-gold font-medium font-sans">
                    Image {activeModalIndex + 1} of {GALLERY_ITEMS.length}
                  </span>
                  <h3
                    id="gallery-modal-title"
                    className="text-base sm:text-xl font-serif text-brand-light"
                  >
                    {activeItem.title}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 sm:p-2.5 rounded-full text-brand-light/80 hover:text-brand-gold hover:bg-brand-surface border border-transparent hover:border-brand-gold/30 transition-all focus-visible:outline-2 focus-visible:outline-brand-gold"
                  aria-label="Close dialog (Escape)"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Lightbox Image View Area */}
              <div className="relative flex-1 min-h-0 bg-brand-black/80 flex items-center justify-center p-2 sm:p-6 select-none overflow-hidden">
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-sm"
                />

                {/* Prev Navigation Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-brand-black/70 hover:bg-brand-gold hover:text-brand-black text-brand-light border border-brand-border/60 hover:border-brand-gold transition-all focus-visible:outline-2 focus-visible:outline-brand-gold"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Next Navigation Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-brand-black/70 hover:bg-brand-gold hover:text-brand-black text-brand-light border border-brand-border/60 hover:border-brand-gold transition-all focus-visible:outline-2 focus-visible:outline-brand-gold"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Footer Bar */}
              <div className="px-4 sm:px-6 py-3 border-t border-brand-border/60 bg-brand-offblack flex items-center justify-between text-xs text-brand-muted">
                <p className="font-sans truncate pr-4">{activeItem.caption}</p>
                <span className="text-brand-gold shrink-0 font-medium tracking-wider uppercase text-[10px] sm:text-xs">
                  Miss Satyabhama
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
