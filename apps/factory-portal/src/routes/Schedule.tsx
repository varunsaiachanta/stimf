import { Card } from '@acme/ui'

const events = [
  { id: 1, title: 'CNC Routing - Job 21', date: '2024-05-12', lane: 'CNC' },
  { id: 2, title: 'Lamination - Job 21', date: '2024-05-13', lane: 'Lamination' },
  { id: 3, title: 'Dispatch - Job 18', date: '2024-05-14', lane: 'Logistics' }
]

export function SchedulePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Production schedule</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} title={event.title}>
            <p className="text-sm text-gray-700">Date: {event.date}</p>
            <p className="text-sm text-gray-700">Lane: {event.lane}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
