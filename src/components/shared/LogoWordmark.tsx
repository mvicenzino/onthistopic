import Link from 'next/link'
import { Logo } from './Logo'
import { cn } from '@/lib/utils'

const sizeConfig = {
  sm: { icon: 24, text: 'text-lg' },
  md: { icon: 32, text: 'text-xl md:text-2xl' },
  lg: { icon: 40, text: 'text-2xl' },
} as const

interface LogoWordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LogoWordmark({ size = 'md', className }: LogoWordmarkProps) {
  const config = sizeConfig[size]

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2.5', className)}
    >
      <Logo size={config.icon} />
      <span className={cn('font-display font-black tracking-tight', config.text)}>
        On This Topic
      </span>
    </Link>
  )
}
