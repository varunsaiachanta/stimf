import { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const styles: Record<ButtonVariant, string> = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border-transparent',
      secondary:
        'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500',
      ghost: 'bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-blue-500'
    }

    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150',
          styles[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
