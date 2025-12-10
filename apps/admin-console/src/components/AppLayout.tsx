import { PropsWithChildren } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Button } from '@acme/ui'
import { useAuth } from '../features/auth/AuthContext'

const nav = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/users', label: 'Users & Roles' },
  { to: '/projects', label: 'Projects' },
  { to: '/factories', label: 'Factories & Locations' },
  { to: '/config', label: 'Master Data' }
]

export function AppLayout({ children }: PropsWithChildren) {
  const { user, logout } = useAuth()
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white p-4 md:flex">
        <Link to="/dashboard" className="text-lg font-bold text-blue-700">
          Admin Console
        </Link>
        <nav className="mt-6 space-y-1 text-sm font-semibold text-gray-700">
          {nav.map((item) => (
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
          <div className="text-sm font-semibold text-gray-800">{user?.name}</div>
          <Button variant="ghost" onClick={logout} className="text-sm">
            Logout
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
