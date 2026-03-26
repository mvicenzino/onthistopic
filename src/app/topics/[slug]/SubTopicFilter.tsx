'use client'

import { useState } from 'react'
import { LessonCard } from '@/components/shared/LessonCard'

interface LessonData {
  title: string
  duration: string
  topic: string
  speaker: string
}

interface SubTopicFilterProps {
  subTopics: string[]
  lessons: LessonData[]
}

export function SubTopicFilter({ subTopics, lessons }: SubTopicFilterProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  const chips = ['All', ...subTopics]

  // Since lessons don't have sub-topic assignments in the data model,
  // "All" shows everything. Individual sub-topic chips are displayed
  // for future filtering when sub-topic data is added to lessons.
  const filteredLessons =
    activeFilter === 'All' ? lessons : lessons

  return (
    <>
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveFilter(chip)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === chip
                ? 'bg-gold/20 text-gold border border-gold/30'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Lesson Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <LessonCard
            key={lesson.title}
            title={lesson.title}
            duration={lesson.duration}
            topic={lesson.topic}
            speaker={lesson.speaker}
          />
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <p className="text-center text-white/50 py-12">
          No lessons found for this sub-topic.
        </p>
      )}
    </>
  )
}
