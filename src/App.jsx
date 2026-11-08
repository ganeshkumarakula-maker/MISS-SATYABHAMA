import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'
import Hero from './sections/Hero'
import GallerySection from './sections/GallerySection'
import About from './sections/About'
import EventSection from './sections/EventSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-light flex flex-col selection:bg-brand-gold selection:text-brand-black">
      {/* Sticky Editorial Navigation with Announcement Bar */}
      <Navbar />

      {/* Main Content Sections — order: Home, Gallery, About, The Event, Contact */}
      <main className="flex-1">
        <Hero />
        <GallerySection />
        <About />
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
