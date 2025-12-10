import Link from 'next/link'
import { COMPANY_NAME } from '@acme/config'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{COMPANY_NAME}</h3>
          <p className="mt-2 text-sm text-gray-600">Design, manufacture, and install with a single integrated team.</p>
          <p className="mt-4 text-sm text-gray-600">Plot 21, Industrial Estate, Hyderabad<br />Telangana, India</p>
          <p className="mt-2 text-sm text-gray-600">Phone: +91 90000 00000<br />Email: hello@sritejafactory.com</p>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <h4 className="text-base font-semibold text-gray-900">Portals</h4>
          <Link href="/client-portal" className="block hover:text-blue-700">
            Client portal
          </Link>
          <Link href="/factory-portal" className="block hover:text-blue-700">
            Factory portal
          </Link>
          <Link href="/admin-console" className="block hover:text-blue-700">
            Admin console
          </Link>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <h4 className="text-base font-semibold text-gray-900">Company</h4>
          <Link href="/privacy-policy" className="block hover:text-blue-700">
            Privacy policy
          </Link>
          <Link href="/terms" className="block hover:text-blue-700">
            Terms & conditions
          </Link>
          <div className="mt-4 flex items-center gap-3 text-gray-600">
            <a href="https://www.instagram.com" className="hover:text-blue-700" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://www.facebook.com" className="hover:text-blue-700" aria-label="Facebook">
              Facebook
            </a>
            <a href="https://www.linkedin.com" className="hover:text-blue-700" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  )
}
