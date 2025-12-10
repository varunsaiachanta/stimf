import { request } from '../request'
import type { User } from '@acme/types'

export interface LoginPayload {
  email: string
  password: string
}

export async function login(payload: LoginPayload): Promise<{ token: string; user: User }> {
  return request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) })
}

export async function me(token: string): Promise<User> {
  return request('/api/auth/me', {
    headers: { Authorization: `Bearer ${token}` }
  })
}
