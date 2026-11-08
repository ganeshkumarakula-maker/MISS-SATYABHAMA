import { ArrowRight } from 'lucide-react'
import siteConfig from '../config/siteConfig'

export default function AnnouncementBar() {
  const { campaign, registrationUrl } = siteConfig

  return (
    <aside
      aria-label="Promotional Announcement"
      className="bg-gradient-to-r from-brand-black via-brand-surface to-brand-black border-b border-brand-gold/30 text-brand-light text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 select-none"
    >
      <div className="container-editorial flex items-center justify-center text-center">
        <a
          href="#register"
          className="group inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-brand-light hover:text-brand-gold transition-colors duration-200"
          aria-label={`Early Bird Offer: Register for ${campaign.earlyBirdPriceFormatted} instead of ${campaign.originalPriceFormatted}. Valid till ${campaign.deadline}.`}
        >
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-brand-gold/20 border border-brand-gold/40 text-brand-gold font-semibold uppercase tracking-wider text-[10px]">
            🔥 EARLY BIRD OFFER
          </span>
          <span className="font-medium text-brand-light">
            Register for{' '}
            <span className="text-brand-gold font-bold">
              {campaign.earlyBirdPriceFormatted}
            </span>{' '}
            instead of{' '}
            <span className="line-through text-brand-muted/80 text-[10px] sm:text-[11px]">
              {campaign.originalPriceFormatted}
            </span>
          </span>
          <span className="hidden sm:inline text-brand-border">|</span>
          <span className="text-brand-muted hidden xs:inline">
            Offer valid till{' '}
            <span className="text-brand-light font-medium">
              {campaign.deadline}
            </span>
          </span>
          <span className="inline-flex items-center text-brand-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform ml-1">
            Claim Now
            <ArrowRight className="w-3 h-3 ml-0.5" />
          </span>
        </a>
      </div>
    </aside>
  )
}

