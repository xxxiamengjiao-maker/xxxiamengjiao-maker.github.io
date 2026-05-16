import { Icon } from '@/components/Icon'

type TopBarProps = {
  searchPlaceholder?: string
}

export function TopBar({
  searchPlaceholder = '搜索客户名称、会议纪要、关键词…',
}: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar__search-wrap">
        <Icon name="search" className="topbar__search-icon" />
        <input
          className="topbar__search body-md"
          type="search"
          placeholder={searchPlaceholder}
          aria-label="搜索"
        />
      </div>
      <div className="topbar__actions">
        <button type="button" className="topbar__notify" aria-label="通知">
          <Icon name="notifications" />
          <span className="topbar__notify-dot" />
        </button>
        <button type="button" className="btn btn--primary topbar__new-task">
          <Icon name="auto_awesome" style={{ fontSize: 20 }} />
          新建洞察任务
        </button>
      </div>
    </header>
  )
}
