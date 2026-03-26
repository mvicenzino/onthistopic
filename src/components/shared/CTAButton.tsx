import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

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
    'backdrop-blur-xl bg-gold/20 border border-gold/30 text-gold font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gold/30 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]',
  secondary: () =>
    'backdrop-blur-xl bg-white/5 border border-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-white/10 hover:border-white/25',
  ghost: () =>
    'text-gold hover:text-gold-light hover:underline underline-offset-4',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
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
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300',
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
          <span className="ml-1.5" aria-hidden="true">&rarr;</span>
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
        <span className="ml-1.5" aria-hidden="true">&rarr;</span>
      )}
    </button>
  )
}
