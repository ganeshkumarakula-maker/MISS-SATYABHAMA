/**
 * Site Configuration
 *
 * Centralized official information for Miss Satyabhama Traditional Fashion Show.
 * Source of truth for event details, location, prize pool, contact, and audition registration.
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

  // Official Prize Pool Configuration (Source of Truth — Mandatory Display)
  prizePool: {
    heading: 'BIG OPPORTUNITIES. BIGGER REWARDS.',
    subheading: 'Compete for a Total Prize Pool of ₹1,50,000.',
    total: 150000,
    totalFormatted: '₹1,50,000',
    firstPrize: 75000,
    firstPrizeFormatted: '₹75,000',
    secondPrize: 50000,
    secondPrizeFormatted: '₹50,000',
    thirdPrize: 25000,
    thirdPrizeFormatted: '₹25,000',
  },

  // Audition-First System Configuration
  audition: {
    headline: 'Your Journey Begins With An Audition.',
    subheadline:
      'Take your first step towards the Miss Satyabhama Traditional Fashion Show. First: Audition Registration → Second: Audition → Third: Selection.',
    status: 'Auditions Open',
  },

  // Official Contestant Categories (Source of Truth)
  categories: {
    heading: 'TWO CATEGORIES. ONE SPOTLIGHT.',
    subheading:
      'Open to contestants aged 18 to 35, choose the category tailored for you:',
    ageRange: '18 to 35',
    miss: {
      name: 'Miss',
      title: 'Miss Category',
      tag: 'Unmarried Women',
      description: 'Celebrating the charisma, style, and ambition of unmarried women.',
      eligibility: 'Ages 18 to 35 • Unmarried',
    },
    mrs: {
      name: 'Mrs.',
      title: 'Mrs. Category',
      tag: 'Married Women',
      description: 'Honoring the grace, strength, and elegance of married women.',
      eligibility: 'Ages 18 to 35 • Married',
    },
  },

  // -----------------------------------------------------------------------
  // Official Registration Pricing — Audition Registration Only
  // Source of Truth: Use ONLY these values across all website components.
  // These prices are for INITIAL AUDITION REGISTRATION ONLY.
  // Any additional participation or package fee applicable after audition
  // selection will be communicated privately to selected participants.
  // -----------------------------------------------------------------------
  pricing: {
    regularPrice: 1499,
    regularPriceFormatted: '₹1,499',
    earlyBirdPrice: 999,
    earlyBirdPriceFormatted: '₹999',
    savingsAmount: 500,
    savingsFormatted: '₹500',
    earlyBirdDeadline: '25 November 2026, 11:59 PM IST',
    earlyBirdDeadlineShort: '25 November 2026',
    earlyBirdDeadlineIso: '2026-11-25T23:59:59+05:30',
    // Deadline check uses Asia/Kolkata timezone (IST = UTC+5:30)
    isEarlyBirdActive: () => {
      try {
        return new Date() <= new Date('2026-11-25T23:59:59+05:30')
      } catch {
        return true // Fail safe: show early bird price if date parsing fails
      }
    },
  },
}

// Backwards-compatible alias for prizePool
siteConfig.prizes = siteConfig.prizePool

// Backwards-compatible alias for pricing (campaign)
siteConfig.campaign = siteConfig.pricing

export default siteConfig
