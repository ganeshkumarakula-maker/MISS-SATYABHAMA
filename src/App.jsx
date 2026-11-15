import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'
import Hero from './sections/Hero'
import PrizePoolSection from './sections/PrizePoolSection'
import GallerySection from './sections/GallerySection'
import About from './sections/About'
import CategoriesSection from './sections/CategoriesSection'
import AuditionJourneySection from './sections/AuditionJourneySection'
import EventSection from './sections/EventSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light flex flex-col selection:bg-brand-gold selection:text-brand-black">
      {/* Sticky Editorial Navigation with Announcement Bar */}
      <Navbar />

      {/* Main Content Sections:
          1. HOME / HERO (#home)
          2. PRIZE POOL (#prizes)
          3. GALLERY (#gallery)
          4. ABOUT MISS SATYABHAMA (#about)
          5. CONTESTANT CATEGORIES (#categories)
          6. AUDITION PROCESS (#audition)
          7. THE EVENT / IMPORTANT INFORMATION (#event)
          8. CONTACT (#contact)
      */}
      <main className="flex-1">
        <Hero />
        <PrizePoolSection />
        <GallerySection />
        <About />
        <CategoriesSection />
        <AuditionJourneySection />
        <EventSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Persistent Mobile Sticky Registration CTA */}
      <MobileStickyCTA />
    </div>
  )
}

export default App
