import { Card, Badge } from '@acme/ui'

const items = [
  { name: '18mm Plywood', status: 'OK', quantity: 120 },
  { name: 'Edge band - white', status: 'Low', quantity: 12 },
  { name: 'Hinges - soft close', status: 'Critical', quantity: 4 }
]

export function InventoryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.name} title={item.name}>
            <p className="text-sm text-gray-700">Quantity: {item.quantity}</p>
            <Badge tone={item.status === 'OK' ? 'green' : item.status === 'Low' ? 'amber' : 'blue'}>{item.status}</Badge>
          </Card>
        ))}
      </div>
    </div>
  )
}
