import { Card, Button } from '@acme/ui'
import type { DocumentMeta } from '@acme/types'

const docs: DocumentMeta[] = [
  { id: '1', name: 'Floor plan.pdf', type: 'pdf', projectId: 'p1', uploadedAt: '2024-04-01' },
  { id: '2', name: 'Kitchen render.png', type: 'image', projectId: 'p1', uploadedAt: '2024-04-02' }
]

export function DocumentsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Card key={doc.id} title={doc.name}>
            <p className="text-sm text-gray-700">Type: {doc.type}</p>
            <p className="text-sm text-gray-700">Uploaded: {doc.uploadedAt}</p>
            <div className="mt-3 flex gap-2">
              <Button variant="secondary">View</Button>
              <Button variant="ghost">Download</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
