'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Transition = 'fadeUp' | 'slideLeft' | 'slideRight' | 'fadeIn'

const transitions = {
  fadeUp: { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } },
  slideLeft: { initial: { opacity: 0, x: -60 }, whileInView: { opacity: 1, x: 0 } },
  slideRight: { initial: { opacity: 0, x: 60 }, whileInView: { opacity: 1, x: 0 } },
  fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 } },
}

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  transition?: Transition
}

export function SectionWrapper({ children, className, id, transition = 'fadeUp' }: SectionWrapperProps) {
  const variant = transitions[transition]

  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial={variant.initial}
      whileInView={variant.whileInView}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}
