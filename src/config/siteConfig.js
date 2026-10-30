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
    'A premium fashion show event celebrating elegance and talent in Vijayawada, Andhra Pradesh.',

  // Official contact information (to be supplied by organizer)
  contact: {
    email: '', // e.g., 'info@misssatyabhama.com'
    phone: '', // e.g., '+91 98765 43210'
    instagram: '', // e.g., 'https://instagram.com/misssatyabhama'
    facebook: '', // e.g., 'https://facebook.com/misssatyabhama'
    youtube: '', // e.g., 'https://youtube.com/@misssatyabhama'
  },

  // Registration URL — leave empty until the official Google Form is ready
  // In production, this can be overridden via the VITE_REGISTRATION_URL env variable
  registrationUrl: import.meta.env.VITE_REGISTRATION_URL || '',
}

export default siteConfig
