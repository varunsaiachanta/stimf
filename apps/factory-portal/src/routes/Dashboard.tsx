import { useQuery } from '@tanstack/react-query'
import { Card, Badge } from '@acme/ui'
import { getJobs } from '@acme/api-client'

export function Dashboard() {
  const { data: jobs = [] } = useQuery({ queryKey: ['factory-jobs'], queryFn: getJobs })
  const active = jobs.filter((j) => j.status === 'in_progress').length
  const delayed = jobs.filter((j) => j.status === 'delayed').length
  const pending = jobs.filter((j) => j.status === 'pending').length

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card title="Active jobs">
        <p className="text-3xl font-bold text-blue-700">{active}</p>
        <p className="text-sm text-gray-600">Currently in production or installation.</p>
      </Card>
      <Card title="Pending tasks">
        <p className="text-3xl font-bold text-blue-700">{pending}</p>
        <p className="text-sm text-gray-600">Awaiting scheduling or material availability.</p>
      </Card>
      <Card title="Delayed">
        <p className="text-3xl font-bold text-blue-700">{delayed}</p>
        <Badge tone="amber">Investigate dependencies</Badge>
      </Card>
    </div>
  )
}
