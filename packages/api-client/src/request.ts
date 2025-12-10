import { getApiBaseUrl } from '@acme/config'

export interface ApiError extends Error {
  status?: number
}

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const baseUrl = getApiBaseUrl()
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  })

  if (!response.ok) {
    const error: ApiError = new Error('Request failed')
    error.status = response.status
    throw error
  }

  if (response.status === 204) return undefined as T
  const data = await response.json()
  return data as T
}
