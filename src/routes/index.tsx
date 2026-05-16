import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { WorkbenchPage } from '@/pages/WorkbenchPage'
import { CustomerInsightPage } from '@/pages/CustomerInsightPage'
import { KnowledgeBasePage } from '@/pages/KnowledgeBasePage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<WorkbenchPage />} />
          <Route path="/insights" element={<CustomerInsightPage />} />
          <Route path="/knowledge" element={<KnowledgeBasePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
