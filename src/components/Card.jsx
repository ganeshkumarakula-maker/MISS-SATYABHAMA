/**
 * Card Component
 *
 * Surface container with refined luxury border and subtle hover illumination.
 */
export default function Card({
  children,
  className = '',
  interactive = false,
  ...props
}) {
  return (
    <div
      className={`bg-brand-surface border border-brand-border p-6 md:p-8 transition-all duration-300 ${
        interactive
          ? 'hover:border-brand-gold/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
