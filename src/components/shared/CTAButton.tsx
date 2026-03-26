import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'premium'
type Size = 'sm' | 'md' | 'lg' | 'xl'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  dark?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantStyles: Record<Variant, (dark: boolean) => string> = {
  primary: () =>
    'bg-navy text-white font-bold shadow-lg hover:bg-navy-light hover:shadow-[0_0_30px_rgba(27,46,75,0.3)] active:scale-[0.98]',
  secondary: () =>
    'border-2 border-navy/20 bg-transparent text-navy hover:bg-navy/5 hover:border-navy/40',
  ghost: () =>
    'text-navy hover:text-navy-light',
  premium: () =>
    'bg-navy text-white font-black shadow-[0_0_40px_rgba(27,46,75,0.2)] hover:shadow-[0_0_60px_rgba(27,46,75,0.3)] hover:bg-navy-light active:scale-[0.98]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  dark = false,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center rounded-full font-medium transition-all duration-300',
    variantStyles[variant](dark),
    variant !== 'ghost' && sizeStyles[size],
    variant === 'ghost' && 'px-0 py-0',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {variant === 'ghost' && (
          <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
        )}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
      {variant === 'ghost' && (
        <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
      )}
    </button>
  )
}
