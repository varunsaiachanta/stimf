import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Office interiors | SriTeja Interiors',
  description: 'Office interiors information from SriTeja Interiors'
}

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Office interiors</h1>
      <p className="mt-4 text-gray-700">Content coming soon. Reach out via the contact form for tailored information.</p>
    </section>
  )
}
