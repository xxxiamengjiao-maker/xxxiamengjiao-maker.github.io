import type { CSSProperties } from 'react'

type IconProps = {
  name: string
  filled?: boolean
  className?: string
  style?: CSSProperties
}

export function Icon({ name, filled, className = '', style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'material-symbols-outlined--filled' : ''} ${className}`.trim()}
      style={style}
      aria-hidden
    >
      {name}
    </span>
  )
}
