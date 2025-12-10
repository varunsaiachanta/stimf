import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getProjects, getProject } from '@acme/api-client'
import { Badge, Card } from '@acme/ui'

export function ProjectsPage() {
  const { data: projects = [] } = useQuery({ queryKey: ['projects'], queryFn: getProjects })

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">My projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} title={project.name}>
            <div className="flex items-center justify-between text-sm text-gray-700">
              <Badge tone={project.status === 'completed' ? 'green' : 'blue'}>{project.status}</Badge>
              <Link className="text-blue-700" to={`/projects/${project.id}`}>
                View details →
              </Link>
            </div>
            <p className="mt-2 text-gray-600">Start: {project.startDate}</p>
            {project.endDate ? <p className="text-gray-600">End: {project.endDate}</p> : null}
          </Card>
        ))}
      </div>
    </div>
  )
}

export function ProjectDetail() {
  const { projectId } = useParams()
  const { data: project } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProject(projectId || ''),
    enabled: Boolean(projectId)
  })

  if (!project) return <p>Loading...</p>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
      <div className="flex gap-2 text-sm">
        <Badge tone="blue">Status: {project.status}</Badge>
        <Badge tone="amber">Start: {project.startDate}</Badge>
        {project.endDate && <Badge tone="green">Completion: {project.endDate}</Badge>}
      </div>
      <Card title="Timeline">
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Site measurement complete</li>
          <li>Design approval in progress</li>
          <li>Manufacturing scheduled next week</li>
        </ul>
      </Card>
      <Card title="Documents">
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Floor plan.pdf</li>
          <li>3D renders.zip</li>
        </ul>
      </Card>
    </div>
  )
}
