import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getJobs, getJob } from '@acme/api-client'
import { Badge, Card, Table, TableRow, TableCell, Button } from '@acme/ui'

export function JobsPage() {
  const { data: jobs = [] } = useQuery({ queryKey: ['factory-jobs'], queryFn: getJobs })

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Jobs / Work Orders</h1>
      <Table headers={["Job", "Project", "Status", "Priority", "Due"]}>
        {jobs.map((job) => (
          <TableRow key={job.id}>
            <TableCell>
              <Link className="text-blue-700" to={`/jobs/${job.id}`}>
                {job.title}
              </Link>
            </TableCell>
            <TableCell>{job.projectId}</TableCell>
            <TableCell>
              <Badge tone={job.status === 'delayed' ? 'amber' : job.status === 'done' ? 'green' : 'blue'}>{job.status}</Badge>
            </TableCell>
            <TableCell>{job.priority}</TableCell>
            <TableCell>{job.dueDate ?? 'TBD'}</TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  )
}

export function JobDetail() {
  const { jobId } = useParams()
  const { data: job } = useQuery({
    queryKey: ['factory-job', jobId],
    queryFn: () => getJob(jobId || ''),
    enabled: Boolean(jobId)
  })

  if (!job) return <p>Loading...</p>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
      <div className="flex gap-2 text-sm">
        <Badge tone="blue">Status: {job.status}</Badge>
        <Badge tone="amber">Priority: {job.priority}</Badge>
        {job.dueDate && <Badge tone="gray">Due: {job.dueDate}</Badge>}
      </div>
      <Card title="BOM summary">
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Cabinet modules cutlist generated</li>
          <li>Hardware kit reserved</li>
          <li>Edge banding queued</li>
        </ul>
      </Card>
      <Card title="Activity log">
        <ul className="space-y-2 text-sm text-gray-700">
          <li>2024-05-10: QA check passed</li>
          <li>2024-05-09: Laminate applied</li>
          <li>2024-05-08: CNC routing complete</li>
        </ul>
      </Card>
      <Button variant="secondary">Mark as ready for dispatch</Button>
    </div>
  )
}
