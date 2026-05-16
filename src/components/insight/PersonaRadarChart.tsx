import { personaRadarDimensions } from '@/data/site'

const SIZE = 220
const CENTER = SIZE / 2
const MAX_R = 72
const LEVELS = 5

function pointAt(angleDeg: number, value: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  const r = (MAX_R * value) / 100
  return {
    x: CENTER + r * Math.cos(rad),
    y: CENTER + r * Math.sin(rad),
  }
}

function gridPoint(angleDeg: number, level: number) {
  const value = (level / LEVELS) * 100
  return pointAt(angleDeg, value)
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
    const p = pointAt(i * angleStep, 118)
    return { ...d, x: p.x, y: p.y }
  })

  return (
    <div className="persona-radar glass-card insight-card">
      <h3 className="persona-radar__title">客户画像评估雷达图</h3>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="persona-radar__svg"
        role="img"
        aria-label="客户画像评估雷达图"
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
            textAnchor="middle"
            dominantBaseline="middle"
            className="persona-radar__label"
          >
            {l.label}
          </text>
        ))}
      </svg>
    </div>
  )
}
