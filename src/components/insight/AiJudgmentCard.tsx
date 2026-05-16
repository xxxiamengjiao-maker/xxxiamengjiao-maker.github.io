import { aiJudgment } from '@/data/site'
import { Icon } from '@/components/Icon'

export function AiJudgmentCard() {
  const { summary } = aiJudgment

  return (
    <article className="glass-card insight-card insight-card--judgment">
      <header className="insight-card__header">
        <span className="insight-card__header-icon insight-card__header-icon--ai">
          <Icon name="auto_awesome" />
        </span>
        <h3 className="insight-card__title">AI 核心研判结论</h3>
      </header>

      <p className="insight-judgment__summary body-md">
        根据历次 <strong>{summary.meetingCount}</strong> 会议及沟通记录分析，客户当前处于{' '}
        <strong>{summary.phase}</strong>。核心痛点在于现有系统无法支撑庞大的
        <strong>{summary.painPoint}</strong>
        实时打通，导致精准营销效率低下。
      </p>

      <div className="insight-judgment__grid">
        <div className="insight-judgment__col">
          <h4 className="insight-judgment__col-title">关键推动因素</h4>
          <ul className="insight-judgment__list">
            {aiJudgment.drivers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="insight-judgment__divider" aria-hidden />
        <div className="insight-judgment__col">
          <h4 className="insight-judgment__col-title">主要卡点风险</h4>
          <ul className="insight-judgment__list">
            {aiJudgment.risks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
