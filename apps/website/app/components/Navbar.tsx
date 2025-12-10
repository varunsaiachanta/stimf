'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@acme/ui'
import clsx from 'clsx'

const residentialLinks = [
  { href: '/residential/modular-kitchens', label: 'Modular kitchens' },
  { href: '/residential/wardrobes-storage', label: 'Wardrobes & Storage' },
  { href: '/residential/living-room-units', label: 'Living room units' },
  { href: '/residential/bedroom', label: 'Bedroom' },
  { href: '/residential/kids-room', label: 'Kids room' },
  { href: '/residential/guest-room', label: 'Guest room' },
  { href: '/residential/home-office', label: 'Home office' },
  { href: '/residential/crockery-units', label: 'Crockery units' },
  { href: '/residential/vanity-bathroom', label: 'Vanity & bathroom' },
  { href: '/residential/home-renovation', label: 'Home renovation' }
]

const commercialLinks = [
  { href: '/commercial/office-interiors', label: 'Office interiors' },
  { href: '/commercial/retail-stores', label: 'Retail stores' },
  { href: '/commercial/restaurants-cafes', label: 'Restaurants & cafes' },
  { href: '/commercial/healthcare-clinics', label: 'Healthcare & clinics' },
  { href: '/commercial/educational-institutes', label: 'Educational institutes' },
  { href: '/commercial/turnkey-projects', label: 'Turnkey projects' }
]

function Dropdown({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {label}
        <span aria-hidden>▾</span>
      </button>
      {open ? (
        <div
          className="absolute left-0 top-full z-40 mt-1 w-56 rounded-lg border border-gray-200 bg-white shadow-lg"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul className="py-2 text-sm text-gray-800">
            {links.map((item) => (
              <li key={item.href}>
                <Link className="block px-4 py-2 hover:bg-gray-50" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/site-services', label: 'Site services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact-us', label: 'Contact us' }
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold text-blue-700">
            SriTeja Interiors
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            <Dropdown label="Residential" links={residentialLinks} />
            <Dropdown label="Commercial" links={commercialLinks} />
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/client-portal" className="text-sm font-semibold text-gray-800 hover:text-blue-700">
            Client portal
          </Link>
          <Button as="button" className="text-sm" onClick={() => (window.location.href = '/contact-us')}>
            Book a consultation
          </Button>
        </div>
        <button className="lg:hidden" onClick={() => setMobileOpen((prev) => !prev)} aria-label="Toggle navigation">
          <span className="text-2xl">☰</span>
        </button>
      </div>
      <div className={clsx('border-t border-gray-200 bg-white lg:hidden', mobileOpen ? 'block' : 'hidden')}>
        <nav className="space-y-1 px-4 py-3">
          <div className="font-semibold text-gray-900">Residential</div>
          <div className="grid grid-cols-1 gap-1">
            {residentialLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm hover:bg-gray-50">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="font-semibold text-gray-900">Commercial</div>
          <div className="grid grid-cols-1 gap-1">
            {commercialLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm hover:bg-gray-50">
                {item.label}
              </Link>
            ))}
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50">
              {link.label}
            </Link>
          ))}
          <Link href="/client-portal" className="block rounded-md px-3 py-2 text-sm font-semibold text-blue-700">
            Client portal
          </Link>
        </nav>
      </div>
    </header>
  )
}
