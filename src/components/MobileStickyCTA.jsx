import { ArrowRight, Tag } from 'lucide-react'
import siteConfig from '../config/siteConfig'
import Button from './Button'

export default function MobileStickyCTA() {
  const { campaign, registrationUrl } = siteConfig

  return (
    <aside
      aria-label="Mobile Early Bird Registration Action"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brand-black/95 backdrop-blur-md border-t border-brand-gold/40 px-3.5 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] pb-[max(0.65rem,env(safe-area-inset-bottom))]"
    >
      <div className="container-editorial flex items-center justify-between gap-3">
        {/* Pricing Summary */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-0.5 text-[9px] font-sans font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/15 px-1.5 py-0.2 rounded">
              <Tag className="w-2.5 h-2.5" />
              Early Bird
            </span>
            <span className="text-[10px] text-brand-muted line-through font-sans">
              {campaign.originalPriceFormatted}
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-lg sm:text-xl font-bold text-brand-gold leading-tight">
              {campaign.earlyBirdPriceFormatted}
            </span>
            <span className="text-[10px] text-brand-light/80 font-sans truncate">
              (Save {campaign.discountFormatted})
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="primary"
          size="sm"
          href="#register"
          className="shrink-0 text-[11px] px-4 py-2.5 font-bold tracking-wider shadow-lg flex items-center gap-1"
        >
          <span>REGISTER NOW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </aside>
  )
}

