import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'

interface ModalProps extends PropsWithChildren {
  open: boolean
  title?: string
  onClose: () => void
  className?: string
}

export function Modal({ open, onClose, title, className, children }: ModalProps) {
  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal>
      <div className={clsx('w-full max-w-lg rounded-lg bg-white shadow-xl', className)}>
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-gray-700">{children}</div>
      </div>
    </div>,
    document.body
  )
}
