import { request } from '../request'
import type { Job } from '@acme/types'

export async function getJobs(): Promise<Job[]> {
  return request('/api/factory/jobs')
}

export async function getJob(id: string): Promise<Job> {
  return request(`/api/factory/jobs/${id}`)
}
