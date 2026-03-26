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
  index?: number
}

export function TopicCard({ slug, name, icon, subTopics, lessonCount, index }: TopicCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] ?? LucideIcons.BookOpen

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/topics/${slug}`}
        className="group block overflow-hidden rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-md border border-white/10 hover:border-gold/40 hover:shadow-[0_0_25px_rgba(201,168,76,0.12)] transition-all"
      >
        <div className="h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />
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
