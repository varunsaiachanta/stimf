import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../features/auth/LoginPage'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import { AppLayout } from '../components/AppLayout'
import { Dashboard } from '../routes/Dashboard'
import { JobsPage, JobDetail } from '../routes/Jobs'
import { SchedulePage } from '../routes/Schedule'
import { InventoryPage } from '../routes/Inventory'
import { DispatchPage } from '../routes/Dispatch'

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
                <Route path="jobs" element={<JobsPage />} />
                <Route path="jobs/:jobId" element={<JobDetail />} />
                <Route path="schedule" element={<SchedulePage />} />
                <Route path="inventory" element={<InventoryPage />} />
                <Route path="dispatch" element={<DispatchPage />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
