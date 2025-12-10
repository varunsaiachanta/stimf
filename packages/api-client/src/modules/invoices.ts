import { request } from '../request'
import type { Invoice } from '@acme/types'

export async function getInvoices(): Promise<Invoice[]> {
  return request('/api/invoices')
}

export async function getInvoice(id: string): Promise<Invoice> {
  return request(`/api/invoices/${id}`)
}
