import { request } from '../request'
import type { Project } from '@acme/types'

export async function getProjects(): Promise<Project[]> {
  return request('/api/projects')
}

export async function getProject(id: string): Promise<Project> {
  return request(`/api/projects/${id}`)
}
