import { createContext, useContext, useMemo, useState, PropsWithChildren } from 'react'
import type { User } from '@acme/types'

interface AuthState {
  token: string | null
  user: User | null
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AuthState>({ token: 'factory-demo-token', user: { id: 'f1', name: 'Factory Lead', email: 'factory@example.com', role: 'factory' } })

  async function login(email: string, password: string) {
    setState({ token: 'factory-demo-token', user: { id: 'f1', name: email, email, role: 'factory' } })
  }

  function logout() {
    setState({ token: null, user: null })
  }

  const value = useMemo(() => ({ ...state, login, logout }), [state])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
