'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

interface TopicCardProps {
  slug: string
  name: string
  icon: string
  subTopics: string[]
  lessonCount: number
}

export function TopicCard({ slug, name, icon, subTopics, lessonCount }: TopicCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] ?? LucideIcons.BookOpen

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/topics/${slug}`}
        className="group block overflow-hidden rounded-xl bg-navy"
      >
        <div className="h-1 bg-gold" />
        <div className="p-6">
          <IconComponent className="h-8 w-8 text-gold" />
          <h3 className="mt-4 font-display text-xl text-white">{name}</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">
            {subTopics.join(' \u00B7 ')}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white">
              {lessonCount} lessons
            </span>
            <span className="text-sm font-medium text-gold transition-colors group-hover:underline">
              Explore <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
