/**
 * Site Configuration
 *
 * Centralized official information for Miss Satyabhama Traditional Fashion Show.
 * Source of truth for event details, location, pricing, contact, and registration.
 */

const siteConfig = {
  // Official Event Details (Visible across homepage & event section)
  eventName: 'Miss Satyabhama Traditional Fashion Show',
  shortName: 'Miss Satyabhama',
  organizerName: 'Miss Satyabhama Committee',

  // Official Event Location
  eventLocation: {
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    country: 'India',
    fullAddress: 'Vijayawada, Andhra Pradesh, India',
  },

  // Official Event Schedule & Venue (Awaiting official organizer announcement)
  eventDate: 'To Be Announced',
  eventVenue: 'To Be Announced',

  // Short event description
  description:
    'Miss Satyabhama is Vijayawada’s premier traditional Indian fashion show celebrating ethnic heritage, South Indian Kanjeevaram silk sarees, half-sarees, lehengas, temple jewellery, and timeless cultural elegance in Andhra Pradesh.',

  // Official contact information
  contact: {
    email: 'misssatyabhama71@gmail.com',
    phone: '9703992686', // Confirmed official phone number
    instagram: '', // Official Instagram handle to be announced
    facebook: '', // Official Facebook page to be announced
    youtube: '', // Official YouTube channel to be announced
  },

  // Official registration URL (Google Forms responder URL)
  registrationUrl:
    import.meta.env.VITE_REGISTRATION_URL ||
    'https://docs.google.com/forms/d/e/1FAIpQLSfULiFVehJRGyT9G9KQKjpnSyL9KCYtSlt3JJ5k9SlZ22GwzQ/viewform?usp=dialog',

  // Official Prize Pool Configuration (Source of Truth)
  prizePool: {
    heading: 'BIG OPPORTUNITIES. BIGGER REWARDS.',
    subheading: 'Compete for a Total Prize Pool of ₹1,50,000',
    total: 150000,
    totalFormatted: '₹1,50,000',
    firstPrize: 75000,
    firstPrizeFormatted: '₹75,000',
    secondPrize: 50000,
    secondPrizeFormatted: '₹50,000',
    thirdPrize: 25000,
    thirdPrizeFormatted: '₹25,000',
  },

  // Registration Pricing Configuration (Source of Truth)
  pricing: {
    regularPrice: 9999,
    regularPriceFormatted: '₹9,999',
    earlyBirdPrice: 6999,
    earlyBirdPriceFormatted: '₹6,999',
    discountAmount: 3000,
    discountFormatted: '₹3,000',
    earlyBirdDeadline: '25 November 2026, 11:59 PM IST',
    earlyBirdDeadlineShort: '25 November 2026',
    earlyBirdDeadlineIso: '2026-11-25T23:59:59+05:30',
    headline: 'Your Opportunity Starts Here!',
    subheadline:
      'Register now and secure your place with our exclusive Early Bird Offer.',
    // Backwards-compatible field aliases
    originalPrice: 9999,
    originalPriceFormatted: '₹9,999',
    deadline: '25 November 2026, 11:59 PM IST',
    // Dynamic validity checker: returns true if current time is before the deadline
    isEarlyBirdActive: () => {
      try {
        return new Date() <= new Date('2026-11-25T23:59:59+05:30')
      } catch {
        return true
      }
    },
  },
}

// Ensure siteConfig.campaign aliases siteConfig.pricing for full backward compatibility
siteConfig.campaign = siteConfig.pricing
siteConfig.prizes = siteConfig.prizePool

export default siteConfig
