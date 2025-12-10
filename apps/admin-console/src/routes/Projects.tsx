import { useQuery } from '@tanstack/react-query'
import { getProjects } from '@acme/api-client'
import { Badge, Card, Table, TableRow, TableCell, Input } from '@acme/ui'
import { useState } from 'react'

export function ProjectsPage() {
  const { data: projects = [] } = useQuery({ queryKey: ['admin-projects'], queryFn: getProjects })
  const [filter, setFilter] = useState('')
  const filtered = projects.filter((p) => p.status.includes(filter) || p.location?.toLowerCase().includes(filter.toLowerCase() || ''))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Projects overview</h1>
        <Input placeholder="Filter by status or location" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <Table headers={["Name", "Status", "Location", "Budget"]}>
        {filtered.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.name}</TableCell>
            <TableCell>
              <Badge tone={project.status === 'completed' ? 'green' : 'blue'}>{project.status}</Badge>
            </TableCell>
            <TableCell>{project.location ?? '—'}</TableCell>
            <TableCell>{project.budget ? `₹${project.budget.toLocaleString()}` : '—'}</TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  )
}
