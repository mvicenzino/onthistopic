'use client'

import { motion } from 'framer-motion'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'

interface LessonCardProps {
  title: string
  duration: string
  topic: string
  speaker: string
  description?: string
}

export function LessonCard({ title, duration, topic, speaker }: LessonCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all group-hover:border-white/20 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        <div className="relative">
          <ImagePlaceholder label={title} aspect="16/9" className="rounded-none" />
          <span className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 font-mono text-xs text-white">
            {duration}
          </span>
        </div>
        <div className="p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            {topic}
          </span>
          <h3 className="mt-1 font-body text-lg font-medium text-white leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/50">{speaker}</p>
        </div>
      </div>
    </motion.div>
  )
}
