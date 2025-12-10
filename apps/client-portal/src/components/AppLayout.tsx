import { Link, NavLink } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { useAuth } from '../features/auth/AuthContext'
import { Button } from '@acme/ui'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/projects', label: 'My Projects' },
  { to: '/designs', label: 'Designs & 3D views' },
  { to: '/invoices', label: 'Invoices & Payments' },
  { to: '/documents', label: 'Documents' },
  { to: '/support', label: 'Support' },
  { to: '/profile', label: 'Profile & Settings' }
]

export function AppLayout({ children }: PropsWithChildren) {
  const { user, logout } = useAuth()
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white p-4 md:flex">
        <Link to="/dashboard" className="text-lg font-bold text-blue-700">
          Client Portal
        </Link>
        <nav className="mt-6 space-y-1 text-sm font-semibold text-gray-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700'} block rounded-md px-3 py-2 hover:bg-gray-50`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
          <div className="md:hidden">
            <select
              className="rounded-md border border-gray-200 px-2 py-1 text-sm"
              onChange={(e) => (window.location.href = e.target.value)}
              defaultValue={window.location.pathname}
            >
              {navItems.map((item) => (
                <option key={item.to} value={item.to}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">{user?.name ?? 'Guest'}</span>
            <Button variant="ghost" onClick={logout} className="text-sm">
              Logout
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
