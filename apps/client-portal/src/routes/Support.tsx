import { useState } from 'react'
import { Card, Button, Input, TextareaHTMLAttributes } from '@acme/ui'
import type { Ticket } from '@acme/types'

const defaultTickets: Ticket[] = [
  { id: 't1', title: 'Site measurement reschedule', status: 'in_progress', createdAt: '2024-05-01' },
  { id: 't2', title: 'Request warranty details', status: 'open', createdAt: '2024-05-05' }
]

export function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>(defaultTickets)
  const [form, setForm] = useState({ title: '', description: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTickets((prev) => [...prev, { id: crypto.randomUUID(), title: form.title, status: 'open', createdAt: new Date().toISOString() }])
    setForm({ title: '', description: '' })
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-3">
        <h1 className="text-2xl font-bold text-gray-900">Support tickets</h1>
        {tickets.map((ticket) => (
          <Card key={ticket.id} title={ticket.title}>
            <p className="text-sm text-gray-700">Status: {ticket.status}</p>
            <p className="text-sm text-gray-700">Created: {ticket.createdAt}</p>
          </Card>
        ))}
      </div>
      <Card title="Create new ticket">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input label="Subject" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          <label className="flex flex-col gap-1 text-sm text-gray-700">
            <span className="font-medium">Description</span>
            <textarea
              className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
          </label>
          <Button type="submit">Submit ticket</Button>
        </form>
      </Card>
    </div>
  )
}
