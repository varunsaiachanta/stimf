export type Environment = 'development' | 'production' | 'test'

export const COMPANY_NAME = 'SriTeja Interiors & Modular Factory'
export const DEFAULT_LOCALE = 'en-IN'

export function getEnv(): Environment {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') return 'production'
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') return 'test'
  return 'development'
}

export function getApiBaseUrl(service?: 'factory' | 'admin' | 'client'): string {
  const env = getEnv()
  const suffix = service ? `/${service}` : ''
  if (env === 'production') return `https://api.sritejafactory.com${suffix}`
  return `http://localhost:8000${suffix}`
}

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? '+910000000000'
