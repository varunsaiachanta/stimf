export interface User {
  id: string
  name: string
  email: string
  role: Role
}

export type Role = 'client' | 'factory' | 'admin'

export interface Project {
  id: string
  name: string
  status: 'planning' | 'design' | 'production' | 'installation' | 'completed'
  startDate: string
  endDate?: string
  clientId: string
  budget?: number
  location?: string
}

export interface InvoiceLineItem {
  description: string
  amount: number
  quantity?: number
}

export interface Invoice {
  id: string
  projectId: string
  number: string
  amount: number
  status: 'paid' | 'unpaid' | 'overdue'
  issuedOn: string
  dueOn: string
  lineItems?: InvoiceLineItem[]
}

export interface Job {
  id: string
  projectId: string
  title: string
  status: 'pending' | 'in_progress' | 'done' | 'delayed'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
}

export interface Ticket {
  id: string
  title: string
  status: 'open' | 'in_progress' | 'closed'
  createdAt: string
}

export interface DocumentMeta {
  id: string
  name: string
  type: 'image' | 'pdf' | 'cad' | 'other'
  projectId: string
  uploadedAt: string
}
