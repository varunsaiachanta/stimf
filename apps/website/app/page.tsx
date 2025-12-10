import { Hero } from './components/Hero'
import { ServicesOverview, DesignProcess, Testimonials, CTASection } from './components/Sections'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <ServicesOverview />
      <DesignProcess />
      <Testimonials />
      <CTASection />
      <WhatsAppButton />
    </div>
  )
}
