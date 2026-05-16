import { NavLink } from 'react-router-dom'
import { app, navItems } from '@/data/site'
import { Icon } from '@/components/Icon'
import DecryptedText from '@/components/DecryptedText'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <h1 className="sidebar__brand-title">
          <DecryptedText
            text={app.brand}
            animateOn="hover"
            speed={40}
            maxIterations={12}
            useOriginalCharsOnly
            className="decrypted-text--revealed"
            encryptedClassName="decrypted-text--encrypted"
          />
        </h1>
        <p className="sidebar__brand-sub">{app.brandSub}</p>
      </div>

      <nav className="sidebar__nav" aria-label="主导航">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
            }
          >
            <Icon name={icon} />
            <span className="body-md">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__profile">
          <div className="sidebar__avatar" aria-hidden>
            {app.userInitials}
          </div>
          <div>
            <p className="sidebar__profile-name">{app.userName}</p>
            <p className="sidebar__profile-status">{app.userRole}</p>
          </div>
        </div>
        <button type="button" className="btn btn--mint sidebar__cta">
          系统设置
        </button>
      </div>
    </aside>
  )
}
