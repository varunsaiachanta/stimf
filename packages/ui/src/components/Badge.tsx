import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type BadgeTone = 'gray' | 'green' | 'blue' | 'amber'

interface BadgeProps extends PropsWithChildren {
  tone?: BadgeTone
  className?: string
}

const tones: Record<BadgeTone, string> = {
  gray: 'bg-gray-100 text-gray-800',
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  amber: 'bg-amber-100 text-amber-800'
}

export function Badge({ tone = 'gray', className, children }: BadgeProps) {
  return <span className={clsx('inline-flex rounded-full px-2 py-1 text-xs font-semibold', tones[tone], className)}>{children}</span>
}
