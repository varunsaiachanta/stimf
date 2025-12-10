import { PropsWithChildren } from 'react'
import clsx from 'clsx'

export interface CardProps extends PropsWithChildren {
  title?: string
  className?: string
  footer?: React.ReactNode
}

export function Card({ title, className, footer, children }: CardProps) {
  return (
    <div className={clsx('rounded-lg border border-gray-200 bg-white shadow-sm', className)}>
      {title ? <div className="border-b px-4 py-2 text-sm font-semibold text-gray-900">{title}</div> : null}
      <div className="p-4 text-gray-700">{children}</div>
      {footer ? <div className="border-t px-4 py-2 text-sm text-gray-600">{footer}</div> : null}
    </div>
  )
}
