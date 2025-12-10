import { PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'

export interface TableProps extends PropsWithChildren {
  headers: string[]
  className?: string
}

export function Table({ headers, className, children }: TableProps) {
  return (
    <div className={clsx('overflow-hidden rounded-lg border border-gray-200 shadow-sm', className)}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
      </table>
    </div>
  )
}

export function TableRow({ children }: PropsWithChildren) {
  return <tr className="hover:bg-gray-50">{children}</tr>
}

export function TableCell({ children, className }: { children: ReactNode; className?: string }) {
  return <td className={clsx('px-4 py-3 text-sm text-gray-700', className)}>{children}</td>
}
