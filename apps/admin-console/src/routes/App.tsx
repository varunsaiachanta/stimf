import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../features/auth/LoginPage'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import { AppLayout } from '../components/AppLayout'
import { Dashboard } from './Dashboard'
import { UsersPage, UserDetail } from './Users'
import { ProjectsPage } from './Projects'
import { FactoriesPage } from './Factories'
import { ConfigPage } from './Config'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/:userId" element={<UserDetail />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="factories" element={<FactoriesPage />} />
                <Route path="config" element={<ConfigPage />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
