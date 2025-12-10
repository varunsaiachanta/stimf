import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true
  },
  // Ensure workspaces packages authored in TypeScript are compiled by Next.js.
  transpilePackages: ['@acme/ui', '@acme/config', '@acme/types', '@acme/api-client']
}

export default nextConfig
