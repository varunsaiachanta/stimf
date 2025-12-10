import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getUsers, getUser } from '@acme/api-client'
import { Card, Table, TableRow, TableCell, Badge, Input, Button } from '@acme/ui'
import { useState } from 'react'

export function UsersPage() {
  const { data: users = [] } = useQuery({ queryKey: ['admin-users'], queryFn: getUsers })
  const [search, setSearch] = useState('')
  const filtered = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.includes(search))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Users & roles</h1>
        <Input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <Table headers={["Name", "Email", "Role"]}>
        {filtered.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Link className="text-blue-700" to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge tone={user.role === 'admin' ? 'blue' : 'green'}>{user.role}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  )
}

export function UserDetail() {
  const { userId } = useParams()
  const { data: user } = useQuery({
    queryKey: ['admin-user', userId],
    queryFn: () => getUser(userId || ''),
    enabled: Boolean(userId)
  })

  if (!user) return <p>Loading...</p>

  return (
    <Card title={`User: ${user.name}`} className="max-w-xl">
      <p className="text-sm text-gray-700">Email: {user.email}</p>
      <p className="text-sm text-gray-700">Role: {user.role}</p>
      <Button variant="secondary" className="mt-4">
        Update permissions
      </Button>
    </Card>
  )
}
