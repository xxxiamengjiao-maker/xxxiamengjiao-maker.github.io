import { Icon } from '@/components/Icon'

type DemandInsightCardProps = {
  icon: string
  iconTone: 'blue' | 'orange'
  title: string
  confidence: string
  description: string
}

export function DemandInsightCard({
  icon,
  iconTone,
  title,
  confidence,
  description,
}: DemandInsightCardProps) {
  return (
    <article className="glass-card insight-card insight-card--demand">
      <header className="insight-demand__head">
        <div className="insight-demand__title-row">
          <span
            className={`insight-demand__icon insight-demand__icon--${iconTone}`}
          >
            <Icon name={icon} />
          </span>
          <h3 className="insight-demand__title title-lg">{title}</h3>
        </div>
        <span className="insight-demand__confidence">
          可信度 {confidence}
        </span>
      </header>
      <p className="insight-demand__desc body-md">{description}</p>
    </article>
  )
}
