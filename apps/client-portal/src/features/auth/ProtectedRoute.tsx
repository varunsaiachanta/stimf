import { Navigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { useAuth } from './AuthContext'

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { token } = useAuth()
  if (!token) return <Navigate to="/login" replace />
  return <>{children}</>
}
