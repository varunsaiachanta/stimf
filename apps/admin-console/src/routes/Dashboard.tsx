import { useQuery } from '@tanstack/react-query'
import { Card } from '@acme/ui'
import { getProjects, getUsers } from '@acme/api-client'

export function Dashboard() {
  const { data: projects = [] } = useQuery({ queryKey: ['admin-projects'], queryFn: getProjects })
  const { data: users = [] } = useQuery({ queryKey: ['admin-users'], queryFn: getUsers })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card title="Projects">
        <p className="text-3xl font-bold text-blue-700">{projects.length}</p>
        <p className="text-sm text-gray-600">All client and factory projects.</p>
      </Card>
      <Card title="Active clients">
        <p className="text-3xl font-bold text-blue-700">{users.filter((u) => u.role === 'client').length}</p>
        <p className="text-sm text-gray-600">Clients with ongoing work.</p>
      </Card>
      <Card title="Pending tasks">
        <p className="text-3xl font-bold text-blue-700">12</p>
        <p className="text-sm text-gray-600">Approvals, escalations, and compliance.</p>
      </Card>
    </div>
  )
}
