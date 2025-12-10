import { useAuth } from '../features/auth/AuthContext'
import { Card, Input, Button } from '@acme/ui'
import { useState } from 'react'

export function ProfilePage() {
  const { user } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Profile saved (wire to API)')
  }

  return (
    <Card title="Profile & settings" className="max-w-xl">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit">Save changes</Button>
      </form>
    </Card>
  )
}
