import { Link } from 'react-router-dom'
import { app, workbenchStats, activeCustomers, analysisTasks, potentialDemands, smartReports } from '@/data/site'
import { StatCard } from '@/components/dashboard/StatCard'
import { Icon } from '@/components/Icon'
import DecryptedText from '@/components/DecryptedText'
import StarBorder from '@/components/StarBorder'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return '早上好'
  if (hour < 18) return '下午好'
  return '晚上好'
}

export function WorkbenchPage() {
  return (
    <div className="page-enter">
      <section className="workbench-hero">
        <div className="workbench-hero__text">
          <h2 className="headline-lg hero__title">
            <DecryptedText
              text={`${getGreeting()}，${app.userName}`}
              animateOn="view"
              sequential
              revealDirection="start"
              useOriginalCharsOnly
              speed={45}
              className="decrypted-text--revealed"
              encryptedClassName="decrypted-text--encrypted"
            />
          </h2>
          <p className="body-lg hero__bio">
            今日有 {analysisTasks.filter((t) => t.status === 'progress').length}{' '}
            条 AI 分析任务进行中，{potentialDemands.length} 条挖潜需求待跟进。
          </p>
        </div>
        <div className="workbench-hero__actions">
          <button type="button" className="btn btn--ghost">
            <Icon name="mic" style={{ fontSize: 20 }} />
            开启现场录音
          </button>
          <button type="button" className="btn btn--primary">
            <Icon name="upload" style={{ fontSize: 20 }} />
            导入沟通记录
          </button>
        </div>
      </section>

      <section className="stats-grid" aria-label="核心指标">
        {workbenchStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="dashboard-bottom">
        <article className="glass-card module-card">
          <div className="module-card__head">
            <div className="module-card__title-row">
              <Icon name="groups" className="module-card__title-icon" />
              <h3 className="headline-md">客户列表</h3>
            </div>
            <Link to="/insights" className="link-btn">
              查看全部
            </Link>
          </div>
          <ul className="customer-list">
            {activeCustomers.map((c) => {
              const isDone = c.status === '方案评审'
              return (
                <li key={c.name}>
                  <Link to="/insights" className="customer-list__item">
                    {isDone ? (
                      <Icon
                        name="check_circle"
                        className="customer-list__icon customer-list__icon--done"
                      />
                    ) : (
                      <span
                        className="customer-list__icon customer-list__icon--active"
                        aria-hidden
                      />
                    )}
                    <div className="customer-list__body">
                      <p className="customer-list__name">{c.name}</p>
                      <p className="customer-list__meta">
                        最近联系 · {c.lastContact}
                        {' · '}
                        <span
                          className={
                            isDone
                              ? 'customer-list__status-text customer-list__status-text--done'
                              : 'customer-list__status-text'
                          }
                        >
                          {c.status}
                        </span>
                      </p>
                    </div>
                    <Icon name="chevron_right" className="customer-list__chevron" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </article>

        <article className="glass-card module-card">
          <div className="module-card__head">
            <h3 className="headline-md">AI 分析任务</h3>
            <button type="button" className="link-btn">
              查看全部
            </button>
          </div>
          <ul className="task-list">
            {analysisTasks.map((task) => (
              <li key={task.title} className="task-list__item">
                {task.status === 'progress' ? (
                  <StarBorder
                    as="div"
                    className="task-list__star-border"
                    color="magenta"
                    speed="5s"
                  >
                    <span className="task-list__progress-label" aria-hidden>
                      AI解析中
                    </span>
                  </StarBorder>
                ) : (
                  <Icon
                    name={task.status === 'done' ? 'check_circle' : 'schedule'}
                    className={
                      task.status === 'done'
                        ? 'task-list__icon--done'
                        : 'task-list__icon--queued'
                    }
                  />
                )}
                <div style={{ flex: 1 }}>
                  <p className="task-list__title">{task.title}</p>
                  <p className="task-list__meta">{task.meta}</p>
                </div>
                <Icon name="chevron_right" style={{ color: 'var(--on-surface-variant)' }} />
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-card module-card">
          <div className="module-card__head">
            <h3 className="headline-md">挖潜需求明细</h3>
          </div>
          <div className="demand-scroll">
            {potentialDemands.map((d) => (
              <div key={d.customer + d.pain} className="demand-item">
                <div className="demand-item__head">
                  <p className="demand-item__customer">{d.customer}</p>
                  <span className={`tag-pill tag-pill--${d.tagVariant}`}>{d.tag}</span>
                </div>
                <p className="demand-item__pain">{d.pain}</p>
                <p className="demand-item__solution">→ {d.solution}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card module-card">
          <div className="module-card__head">
            <h3 className="headline-md">智能报告</h3>
          </div>
          <div className="report-cards">
            {smartReports.map((r) => (
              <div key={r.title} className="report-card">
                <Icon name={r.icon} className="report-card__icon" />
                <h4 className="title-lg">{r.title}</h4>
                <p>{r.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}
