import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'

export function MainLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <TopBar />
      <main className="main-canvas">
        <Outlet />
      </main>
    </div>
  )
}
