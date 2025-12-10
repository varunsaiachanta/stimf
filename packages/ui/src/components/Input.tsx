import { forwardRef, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, className, ...props }, ref) => {
  return (
    <label className="flex flex-col gap-1 text-sm text-gray-700">
      {label && <span className="font-medium">{label}</span>}
      <input
        ref={ref}
        className={clsx(
          'rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  )
})

Input.displayName = 'Input'
