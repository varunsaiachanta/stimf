import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage } from '../features/auth/LoginPage'
import { RegisterPage } from '../features/auth/RegisterPage'
import { ForgotPasswordPage } from '../features/auth/ForgotPasswordPage'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import { AppLayout } from '../components/AppLayout'
import { Dashboard } from '../routes/Dashboard'
import { ProjectsPage, ProjectDetail } from '../routes/Projects'
import { InvoicesPage, InvoiceDetail } from '../routes/Invoices'
import { DocumentsPage } from '../routes/Documents'
import { SupportPage } from '../routes/Support'
import { ProfilePage } from '../routes/Profile'
import { DesignsPage } from '../routes/Designs'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:projectId" element={<ProjectDetail />} />
                <Route path="designs" element={<DesignsPage />} />
                <Route path="invoices" element={<InvoicesPage />} />
                <Route path="invoices/:invoiceId" element={<InvoiceDetail />} />
                <Route path="documents" element={<DocumentsPage />} />
                <Route path="support" element={<SupportPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
