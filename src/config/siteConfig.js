/**
 * Site Configuration
 *
 * Centralized event information for Miss Satyabhama.
 * All placeholder values should be replaced with confirmed information
 * as it becomes available from the event owner.
 */

const siteConfig = {
  // Event identity
  eventName: 'Miss Satyabhama',
  organizerName: 'TO BE PROVIDED',

  // Event location
  eventLocation: {
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    country: 'India',
  },

  // Event date — awaiting confirmation (see PROJECT_PLAN.md §5, item U1)
  eventDate: 'TO BE ANNOUNCED',

  // Short event description
  description:
    'A premier traditional Indian fashion show celebrating ethnic heritage, South Indian elegance, exquisite craftsmanship, and timeless style in Vijayawada, Andhra Pradesh.',

  // Official contact information
  contact: {
    email: 'misssatyabhama71@gmail.com',
    phone: '9703992686', // Confirmed official phone number
    instagram: '', // Official Instagram handle to be confirmed
    facebook: '', // Official Facebook page to be confirmed
    youtube: '', // Official YouTube channel to be confirmed
  },

  // Official registration URL (Google Forms responder URL)
  // In production, this can also be overridden via the VITE_REGISTRATION_URL env variable
  registrationUrl:
    import.meta.env.VITE_REGISTRATION_URL ||
    'https://docs.google.com/forms/d/e/1FAIpQLSfULiFVehJRGyT9G9KQKjpnSyL9KCYtSlt3JJ5k9SlZ22GwzQ/viewform?usp=dialog',

  // Campaign & Promotional Pricing Configuration (Source of Truth)
  campaign: {
    originalPrice: 9999,
    originalPriceFormatted: '₹9,999',
    earlyBirdPrice: 6999,
    earlyBirdPriceFormatted: '₹6,999',
    discountAmount: 3000,
    discountFormatted: '₹3,000',
    deadline: '25 November 2026',
    deadlineDate: '2026-11-25',
    headline: 'Your Opportunity Starts Here!',
    subheadline:
      'Register now and secure your place with our exclusive Early Bird Offer.',
    prizes: {
      total: 150000,
      totalFormatted: '₹1,50,000',
      heading: 'BIG OPPORTUNITIES. BIGGER REWARDS.',
      subheading: 'Compete for a Total Prize Pool of ₹1,50,000',
      list: [
        {
          id: 'first',
          rank: '1st',
          title: 'First Prize',
          subtitle: 'Showcase Winner & Title',
          amount: 75000,
          amountFormatted: '₹75,000',
          highlight: true,
          badge: 'CHAMPION',
        },
        {
          id: 'second',
          rank: '2nd',
          title: 'Second Prize',
          subtitle: 'First Runner-Up',
          amount: 50000,
          amountFormatted: '₹50,000',
          highlight: false,
          badge: '1ST RUNNER-UP',
        },
        {
          id: 'third',
          rank: '3rd',
          title: 'Third Prize',
          subtitle: 'Second Runner-Up',
          amount: 25000,
          amountFormatted: '₹25,000',
          highlight: false,
          badge: '2ND RUNNER-UP',
        },
      ],
    },
  },
}

export default siteConfig
