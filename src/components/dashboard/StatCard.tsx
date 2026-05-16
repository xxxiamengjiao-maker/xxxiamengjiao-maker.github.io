import { Icon } from '@/components/Icon'

export type StatIconAccent = 'primary' | 'secondary' | 'tertiary' | 'insight'

type StatCardProps = {
  icon: string
  value: string
  label: string
  badge: string
  iconAccent: StatIconAccent
  action?: string | null
}

export function StatCard({
  icon,
  value,
  label,
  badge,
  iconAccent,
  action,
}: StatCardProps) {
  return (
    <article className="glass-card stat-card">
      <div className="stat-card__head">
        <span className={`stat-card__icon-wrap stat-card__icon-wrap--${iconAccent}`}>
          <Icon name={icon} className="stat-card__icon" />
        </span>
        <span className="stat-card__badge">{badge}</span>
      </div>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__label">{label}</p>
      {action && (
        <div className="stat-card__action">
          <button type="button" className="link-btn">
            {action}
          </button>
        </div>
      )}
    </article>
  )
}
