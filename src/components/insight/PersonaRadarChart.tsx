import { personaRadarDimensions } from '@/data/site'

/** SVG canvas — extra padding keeps axis labels off the grid */
const SIZE = 300
const CENTER = SIZE / 2
const MAX_R = 68
const LABEL_GAP = 36
const LABEL_R = MAX_R + LABEL_GAP
const LEVELS = 5

function pointAt(angleDeg: number, value: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  const r = (MAX_R * value) / 100
  return {
    x: CENTER + r * Math.cos(rad),
    y: CENTER + r * Math.sin(rad),
  }
}

function labelPoint(angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: CENTER + LABEL_R * Math.cos(rad),
    y: CENTER + LABEL_R * Math.sin(rad),
  }
}

function gridPoint(angleDeg: number, level: number) {
  const value = (level / LEVELS) * 100
  return pointAt(angleDeg, value)
}

function getLabelAlign(angleDeg: number) {
  const a = ((angleDeg % 360) + 360) % 360

  if (a >= 324 || a < 36) {
    return { textAnchor: 'middle' as const, dominantBaseline: 'auto' as const, dx: 0, dy: -4 }
  }
  if (a >= 36 && a < 108) {
    return { textAnchor: 'start' as const, dominantBaseline: 'middle' as const, dx: 10, dy: 0 }
  }
  if (a >= 108 && a < 180) {
    return { textAnchor: 'start' as const, dominantBaseline: 'middle' as const, dx: 8, dy: 6 }
  }
  if (a >= 180 && a < 252) {
    return { textAnchor: 'end' as const, dominantBaseline: 'middle' as const, dx: -10, dy: 6 }
  }
  return { textAnchor: 'end' as const, dominantBaseline: 'middle' as const, dx: -10, dy: 0 }
}

export function PersonaRadarChart() {
  const count = personaRadarDimensions.length
  const angleStep = 360 / count

  const dataPoints = personaRadarDimensions.map((d, i) =>
    pointAt(i * angleStep, d.value),
  )
  const dataPath =
    dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') +
    ' Z'

  const labelPositions = personaRadarDimensions.map((d, i) => {
    const angle = i * angleStep
    const p = labelPoint(angle)
    const align = getLabelAlign(angle)
    return { label: d.label, x: p.x, y: p.y, ...align }
  })

  return (
    <div className="persona-radar glass-card insight-card">
      <h3 className="persona-radar__title">客户画像评估雷达图</h3>
      <div className="persona-radar__chart-wrap">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="persona-radar__svg"
          role="img"
          aria-label="客户画像评估雷达图"
          preserveAspectRatio="xMidYMid meet"
        >
          {Array.from({ length: LEVELS }, (_, level) => {
            const lv = level + 1
            const pts = personaRadarDimensions.map((_, i) => {
              const p = gridPoint(i * angleStep, lv)
              return `${p.x},${p.y}`
            })
            return (
              <polygon
                key={lv}
                points={pts.join(' ')}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            )
          })}
          {personaRadarDimensions.map((_, i) => {
            const outer = pointAt(i * angleStep, 100)
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={outer.x}
                y2={outer.y}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            )
          })}
          <path
            d={dataPath}
            fill="rgba(124, 58, 237, 0.25)"
            stroke="#7c3aed"
            strokeWidth="2"
          />
          {labelPositions.map((l) => (
            <text
              key={l.label}
              x={l.x}
              y={l.y}
              dx={l.dx}
              dy={l.dy}
              textAnchor={l.textAnchor}
              dominantBaseline={l.dominantBaseline}
              className="persona-radar__label"
            >
              {l.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  )
}
