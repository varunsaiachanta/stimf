import { request } from '../request'
import type { User } from '@acme/types'

export async function getUsers(): Promise<User[]> {
  return request('/api/admin/users')
}

export async function getUser(id: string): Promise<User> {
  return request(`/api/admin/users/${id}`)
}
