import { Card, Button } from '@acme/ui'

const deliveries = [
  { id: 'd1', job: 'Job 18', status: 'Scheduled', date: '2024-05-15' },
  { id: 'd2', job: 'Job 12', status: 'Completed', date: '2024-05-10' }
]

export function DispatchPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Dispatch & Installation</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {deliveries.map((delivery) => (
          <Card key={delivery.id} title={delivery.job}>
            <p className="text-sm text-gray-700">Status: {delivery.status}</p>
            <p className="text-sm text-gray-700">Date: {delivery.date}</p>
            <Button variant="secondary" className="mt-3">
              View checklist
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
