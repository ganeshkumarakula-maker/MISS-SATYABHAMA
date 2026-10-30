/**
 * SectionHeading Component
 *
 * Provides a standardized luxury editorial section header
 * with optional eyebrow subtitle, main serif heading, and centered/left aligned layouts.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentStyles = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
  }

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentStyles[align] || alignmentStyles.center} ${className}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-medium mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-brand-light tracking-tight leading-tight">
        {title}
      </h2>
      <div className="w-12 h-[1px] bg-brand-gold/60 mt-4 mb-4" />
      {subtitle && (
        <p className="text-sm md:text-base text-brand-muted font-sans font-light leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
