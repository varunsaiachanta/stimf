import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from '@acme/ui'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Reset password</h1>
        <p className="mt-2 text-sm text-gray-700">Enter your email to receive reset instructions.</p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button type="submit" className="w-full">
            Send reset link
          </Button>
          {sent && <p className="text-sm text-green-600">Check your inbox for next steps.</p>}
        </form>
        <p className="mt-4 text-sm text-gray-700">
          Remembered?{' '}
          <Link to="/login" className="text-blue-700">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  )
}
