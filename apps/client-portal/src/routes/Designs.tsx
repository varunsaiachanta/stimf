import { Card, Button } from '@acme/ui'

export function DesignsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Designs & 3D views</h1>
      <Card title="Latest render">
        <p className="text-gray-700">Preview 3D designs or download native files.</p>
        <div className="mt-4 flex gap-2">
          <Button variant="secondary">View 3D</Button>
          <Button variant="ghost">Download files</Button>
        </div>
      </Card>
    </div>
  )
}
