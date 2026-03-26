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
      <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow group-hover:shadow-lg">
        <div className="relative">
          <ImagePlaceholder label={title} aspect="16/9" className="rounded-none" />
          <span className="absolute bottom-2 right-2 rounded bg-navy/80 px-2 py-1 font-mono text-xs text-white">
            {duration}
          </span>
        </div>
        <div className="p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            {topic}
          </span>
          <h3 className="mt-1 font-body text-lg font-medium text-gray-900 leading-snug">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{speaker}</p>
        </div>
      </div>
    </motion.div>
  )
}
