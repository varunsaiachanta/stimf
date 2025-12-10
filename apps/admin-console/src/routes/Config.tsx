import { useState } from 'react'
import { Card, Input, Button } from '@acme/ui'

export function ConfigPage() {
  const [form, setForm] = useState({ category: 'Kitchen', material: 'BWR plywood', template: 'L-shaped kitchen' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Master data saved (wire to API)')
  }

  return (
    <Card title="Master data">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <Input label="Material" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} required />
        <Input label="Template" value={form.template} onChange={(e) => setForm({ ...form, template: e.target.value })} required />
        <Button type="submit">Save master data</Button>
      </form>
    </Card>
  )
}
