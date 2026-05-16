import { knowledgeItems } from '@/data/site'
import { PageHeader } from '@/components/PageHeader'

export function KnowledgeBasePage() {
  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="知识沉淀"
        title="知识库"
        description="由会议纪要沉淀的可复用知识资产，支持按客户、关键词检索，用于后续客户沟通与洞察生成。"
      />

      <ul className="knowledge-list" aria-label="知识资产列表">
        {knowledgeItems.map((item) => (
          <li key={item.title}>
            <article className="glass-card knowledge-item">
              <div>
                <p className="knowledge-item__customer">{item.customer}</p>
                <h3 className="knowledge-item__title">{item.title}</h3>
                <p className="knowledge-item__meta">
                  {item.source} · 更新于 {item.updatedAt}
                </p>
                <div className="knowledge-item__tags">
                  {item.keywords.map((kw) => (
                    <span key={kw} className="chip chip--purple">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
              <span className="mono-label" style={{ color: 'var(--on-surface-variant)' }}>
                查看 →
              </span>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
