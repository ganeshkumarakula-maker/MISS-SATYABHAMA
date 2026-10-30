/**
 * Button Component
 *
 * Variants:
 * - primary: Champagne gold filled with dark text, luxury hover state
 * - secondary: Subtle border with light text, gold border on hover
 * - text: Understated text action with subtle gold underline hover
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  disabled = false,
  target,
  rel,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.12em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:opacity-40 disabled:cursor-not-allowed select-none'

  const sizeStyles = {
    sm: 'text-xs px-5 py-2.5',
    md: 'text-xs md:text-sm px-7 py-3.5',
    lg: 'text-sm md:text-base px-9 py-4',
  }

  const variantStyles = {
    primary:
      'bg-brand-gold text-brand-black hover:bg-brand-gold-hover hover:shadow-[0_0_24px_rgba(201,169,110,0.25)] active:scale-[0.98]',
    secondary:
      'border border-brand-border text-brand-light hover:border-brand-gold hover:text-brand-gold bg-transparent active:scale-[0.98]',
    text:
      'text-brand-muted hover:text-brand-gold underline-offset-8 hover:underline p-0 tracking-widest bg-transparent',
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={`${combinedStyles} ${disabled ? 'pointer-events-none' : ''}`}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={combinedStyles}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
