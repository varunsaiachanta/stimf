import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@acme/ui'
import { useAuth } from './AuthContext'

export function RegisterPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await login(form.email, form.password)
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-700">
          Already registered?{' '}
          <Link to="/login" className="text-blue-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
