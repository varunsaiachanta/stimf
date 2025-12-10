'use client'

import { WHATSAPP_NUMBER } from '@acme/config'

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <span>WhatsApp</span>
    </a>
  )
}
