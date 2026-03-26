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
    'bg-gold text-navy-dark font-bold shadow-lg hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] active:scale-[0.98]',
  secondary: () =>
    'border-2 border-white/20 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10 hover:border-white/30',
  ghost: () =>
    'text-gold hover:text-gold-light',
  premium: () =>
    'bg-gold text-navy-dark font-black shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:shadow-[0_0_60px_rgba(201,168,76,0.5)] hover:bg-gold-light active:scale-[0.98]',
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
