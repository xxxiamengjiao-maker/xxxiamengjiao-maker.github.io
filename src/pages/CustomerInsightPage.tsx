import { useState } from 'react'
import {
  insightCustomer,
  insightTabs,
  coreDemandInsight,
  potentialDemandInsight,
  communicationRecords,
  demandGraphNodes,
  demandGraphEdges,
} from '@/data/site'
import { Icon } from '@/components/Icon'
import { AiJudgmentCard } from '@/components/insight/AiJudgmentCard'
import { PersonaRadarChart } from '@/components/insight/PersonaRadarChart'
import { DemandInsightCard } from '@/components/insight/DemandInsightCard'

type TabId = (typeof insightTabs)[number]['id']
type RecordTab = 'all' | 'meetings' | 'wechat'

export function CustomerInsightPage() {
  const [activeTab, setActiveTab] = useState<TabId>('360')
  const [recordTab, setRecordTab] = useState<RecordTab>('all')

  const records =
    recordTab === 'all'
      ? communicationRecords.all
      : recordTab === 'meetings'
        ? communicationRecords.meetings
        : communicationRecords.wechat

  return (
    <div className="page-enter">
      <header className="insight-header">
        <div>
          <p className="mono-label" style={{ color: 'var(--primary)', margin: '0 0 8px' }}>
            客户洞察
          </p>
          <h2 className="headline-lg" style={{ margin: 0 }}>
            {insightCustomer.title}
          </h2>
        </div>
        <div className="insight-header__actions">
          <button type="button" className="btn btn--ghost">
            <Icon name="download" style={{ fontSize: 18 }} />
            导出报告
          </button>
          <button type="button" className="btn btn--primary">
            <Icon name="auto_awesome" style={{ fontSize: 18 }} />
            生成全周期洞察报告
          </button>
        </div>
      </header>

      <div className="tabs" role="tablist">
        {insightTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab${activeTab === tab.id ? ' tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === '360' && (
        <div className="tab-panel insight-grid">
          <AiJudgmentCard />
          <PersonaRadarChart />
          <DemandInsightCard {...coreDemandInsight} />
          <DemandInsightCard {...potentialDemandInsight} />
        </div>
      )}

      {activeTab === 'records' && (
        <article className="glass-card module-card tab-panel" style={{ minHeight: 'auto' }}>
          <div className="record-subtabs">
            {(
              [
                { id: 'all' as const, label: '全部记录' },
                { id: 'meetings' as const, label: '会议纪要' },
                { id: 'wechat' as const, label: '微信记录' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                className={`record-subtab${recordTab === t.id ? ' record-subtab--active' : ''}`}
                onClick={() => setRecordTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <ul className="record-list">
            {records.map((r) => (
              <li key={r.title} className="record-list__item">
                <div>
                  <p className="record-list__title">{r.title}</p>
                  <p className="record-list__meta">
                    {r.type} · {r.source} · {r.date}
                  </p>
                </div>
                <Icon name="chevron_right" style={{ color: 'var(--on-surface-variant)' }} />
              </li>
            ))}
          </ul>
        </article>
      )}

      {activeTab === 'demands' && (
        <article className="glass-card module-card tab-panel" style={{ minHeight: 'auto' }}>
          <h3 className="headline-md" style={{ margin: '0 0 8px' }}>
            业务诉求关联图谱
          </h3>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', margin: '0 0 24px' }}>
            基于历史沟通数据提炼的诉求网络关系
          </p>
          <div className="graph-canvas">
            <svg className="graph-edge" aria-hidden>
              {demandGraphEdges.map(([from, to], i) => {
                const a = demandGraphNodes.find((n) => n.id === from)!
                const b = demandGraphNodes.find((n) => n.id === to)!
                return (
                  <line
                    key={i}
                    x1={`${a.x}%`}
                    y1={`${a.y}%`}
                    x2={`${b.x}%`}
                    y2={`${b.y}%`}
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                    strokeOpacity="0.35"
                  />
                )
              })}
            </svg>
            {demandGraphNodes.map((node) => (
              <span
                key={node.id}
                className="graph-node"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {node.label}
              </span>
            ))}
          </div>
        </article>
      )}
    </div>
  )
}
