'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export function StatCounter({ value, suffix = '', prefix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)
  const controls = useAnimationControls()

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(eased * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        controls.start({ scale: [1, 1.08, 1], transition: { duration: 0.3 } })
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, controls])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={controls}
        className="font-mono text-3xl sm:text-4xl font-bold text-gold md:text-5xl lg:text-6xl"
      >
        {prefix}{displayValue}{suffix}
      </motion.div>
      <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-mono mt-2">
        {label}
      </div>
    </motion.div>
  )
}
