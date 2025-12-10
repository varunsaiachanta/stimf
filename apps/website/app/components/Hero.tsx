import Link from 'next/link'
import { Button, Card } from '@acme/ui'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-20 text-center md:flex-row md:text-left">
        <div className="flex-1 space-y-6">
          <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
            Design → Manufacture → Install
          </p>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Premium interiors & modular furniture built with factory precision.
          </h1>
          <p className="text-lg text-gray-700">
            From first sketch to final installation, our integrated team delivers residential and commercial spaces that last.
          </p>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <Button onClick={() => (window.location.href = '/contact-us')}>Book a consultation</Button>
            <Link href="/pricing" className="text-sm font-semibold text-blue-700 hover:underline">
              View pricing →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {["Consult", "Design", "Manufacture"].map((stage) => (
              <Card key={stage} title={stage} className="border-blue-100 bg-white/70">
                <p className="text-sm text-gray-600">
                  {stage === 'Consult'
                    ? 'Workshop with designers to capture requirements.'
                    : stage === 'Design'
                      ? '3D concepts, materials, and precise BOQs.'
                      : 'CNC production, QA, and installation scheduling.'}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xl">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="text-3xl font-bold text-blue-700">2500+</p>
                <p>Modular kitchens installed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">15 yrs</p>
                <p>Manufacturing experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">45 days</p>
                <p>Average install timeline</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">End-to-end</p>
                <p>Design, factory, logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
