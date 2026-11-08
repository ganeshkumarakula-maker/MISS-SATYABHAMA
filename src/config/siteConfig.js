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
}

export default siteConfig
