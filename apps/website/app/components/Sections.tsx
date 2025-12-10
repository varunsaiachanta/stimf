import { Card, Badge } from '@acme/ui'
import Link from 'next/link'

export function ServicesOverview() {
  const services = [
    {
      title: 'Residential interiors',
      description: 'Custom modular kitchens, wardrobes, bedrooms, and turnkey renovation.',
      href: '/residential/modular-kitchens'
    },
    {
      title: 'Commercial interiors',
      description: 'Offices, retail, clinics, and restaurants designed for durability and brand impact.',
      href: '/commercial/office-interiors'
    }
  ]
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Services</p>
            <h2 className="text-3xl font-bold text-gray-900">Residential & commercial expertise</h2>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-blue-700 hover:underline">
            View gallery →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} title={service.title} className="h-full">
              <p className="text-gray-600">{service.description}</p>
              <Link href={service.href} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline">
                Explore →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DesignProcess() {
  const steps = ['Consult', 'Design', 'Manufacture', 'Install', 'Support']
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Process</p>
        <h2 className="text-3xl font-bold text-gray-900">Structured delivery for predictable timelines</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <Card key={step} className="h-full border-blue-50 bg-white" title={`0${index + 1}. ${step}`}>
              <p className="text-sm text-gray-600">
                {index === 0 && 'Requirements, budget, and site constraints captured.'}
                {index === 1 && '3D renders, materials library, and approvals.'}
                {index === 2 && 'Precision-cut modules, QA, and packaging.'}
                {index === 3 && 'On-site assembly with safety and cleanliness.'}
                {index === 4 && 'AMC, warranty service, and upgrades.'}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    {
      name: 'Arjun & Kavya',
      role: 'Residence - Gachibowli',
      quote: 'The kitchen install finished before our move-in date, and the on-site team was meticulous.'
    },
    {
      name: 'Rohan',
      role: 'Founder, coworking brand',
      quote: 'They handled design coordination, factory builds, and phased installation around our operations.'
    },
    {
      name: 'Dr. Meena',
      role: 'Pediatric clinic',
      quote: 'Material guidance and durability were spot-on. Patients keep commenting on the warmth of the interiors.'
    }
  ]
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Testimonials</p>
        <h2 className="text-3xl font-bold text-gray-900">Trusted by homeowners & businesses</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quotes.map((item) => (
            <Card key={item.name} className="h-full">
              <p className="text-lg font-semibold text-gray-900">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-blue-700">{item.name}</p>
              <p className="text-sm text-gray-600">{item.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-white md:flex-row md:px-6 md:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Next step</p>
          <h3 className="text-2xl font-bold">Book a design workshop or request a fast quote.</h3>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
          >
            Book a consultation
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-blue-100 hover:text-white">
            View pricing →
          </Link>
        </div>
      </div>
    </section>
  )
}
