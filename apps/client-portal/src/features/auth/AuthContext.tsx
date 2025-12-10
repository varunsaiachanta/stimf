import { createContext, useContext, useEffect, useMemo, useState, PropsWithChildren } from 'react'
import type { User } from '@acme/types'
import { login as loginApi } from '@acme/api-client'

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
  const [state, setState] = useState<AuthState>(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    return { token, user: user ? (JSON.parse(user) as User) : null }
  })

  useEffect(() => {
    if (state.token) localStorage.setItem('token', state.token)
    else localStorage.removeItem('token')
    if (state.user) localStorage.setItem('user', JSON.stringify(state.user))
    else localStorage.removeItem('user')
  }, [state])

  async function login(email: string, password: string) {
    const response = await loginApi({ email, password })
    setState({ token: response.token, user: response.user })
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
