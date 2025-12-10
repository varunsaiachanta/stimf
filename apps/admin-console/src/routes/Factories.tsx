import { Card, Badge } from '@acme/ui'

const factories = [
  { id: 'f1', name: 'Hyderabad Plant', status: 'Active', head: 'Ravi', capacity: '35 jobs / month' },
  { id: 'f2', name: 'Bangalore Hub', status: 'Planned', head: 'TBD', capacity: 'Coming soon' }
]

export function FactoriesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Factories & Locations</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {factories.map((factory) => (
          <Card key={factory.id} title={factory.name}>
            <p className="text-sm text-gray-700">Status: {factory.status}</p>
            <p className="text-sm text-gray-700">Lead: {factory.head}</p>
            <p className="text-sm text-gray-700">Capacity: {factory.capacity}</p>
            <Badge tone={factory.status === 'Active' ? 'green' : 'amber'} className="mt-2 inline-block">
              {factory.status}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  )
}
