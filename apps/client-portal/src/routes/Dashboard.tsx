import { useQuery } from '@tanstack/react-query'
import { Card, Badge } from '@acme/ui'
import { getProjects, getInvoices } from '@acme/api-client'

export function Dashboard() {
  const { data: projects = [] } = useQuery({ queryKey: ['projects'], queryFn: getProjects })
  const { data: invoices = [] } = useQuery({ queryKey: ['invoices'], queryFn: getInvoices })

  const ongoing = projects.filter((p) => p.status !== 'completed').length
  const unpaid = invoices.filter((i) => i.status !== 'paid').length

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card title="Ongoing projects">
        <p className="text-3xl font-bold text-blue-700">{ongoing}</p>
        <p className="text-sm text-gray-600">Active design, production, or installation.</p>
      </Card>
      <Card title="Invoices pending">
        <p className="text-3xl font-bold text-blue-700">{unpaid}</p>
        <p className="text-sm text-gray-600">Awaiting payment or confirmation.</p>
      </Card>
      <Card title="Upcoming milestones">
        <Badge tone="amber">Site measurement</Badge>
        <p className="mt-2 text-sm text-gray-600">Your next milestone is scheduled for next week.</p>
      </Card>
    </div>
  )
}
