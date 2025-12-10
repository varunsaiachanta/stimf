import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { COMPANY_NAME } from '@acme/config'

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Interior Design & Modular Furniture`,
  description: 'Full-stack interior design, manufacturing, and installation for residential and commercial spaces.',
  metadataBase: new URL('https://sritejafactory.com'),
  openGraph: {
    title: COMPANY_NAME,
    description: 'Design → Manufacture → Install. Premium interiors made simple.',
    url: 'https://sritejafactory.com',
    siteName: COMPANY_NAME
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
