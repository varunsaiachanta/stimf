'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Input, Button } from '@acme/ui'

export const metadata: Metadata = {
  title: 'Contact us | SriTeja Interiors',
  description: 'Speak with our design and manufacturing team.'
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill required fields')
      return
    }
    setSubmitted(true)
  }

  function handleChange<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Contact us</h1>
      <p className="mt-2 text-gray-700">Tell us about your space and we will schedule a consultation.</p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="Name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} required />
          <Input label="Email" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} required />
          <Input label="Phone" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
          <label className="flex flex-col gap-1 text-sm text-gray-700">
            <span className="font-medium">Project details</span>
            <textarea
              className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              required
            />
          </label>
          <Button type="submit">Submit</Button>
          {submitted && <p className="text-sm text-green-600">Thank you! We will reach out within one business day.</p>}
        </form>
        <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Visit our experience center</h2>
          <p className="text-gray-700">Plot 21, Industrial Estate, Hyderabad, Telangana, India.</p>
          <p className="text-gray-700">Phone: +91 90000 00000</p>
          <p className="text-gray-700">Email: hello@sritejafactory.com</p>
          <p className="text-gray-700">Open Mon - Sat, 10:00 AM to 7:00 PM</p>
        </div>
      </div>
    </section>
  )
}
