import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Crown,
  Users,
  Target,
  TrendingUp,
  Star,
} from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { topics } from '@/lib/data/topics'

export const metadata: Metadata = {
  title: 'Topics & Learning Paths — Story-Based Leadership Development',
  description:
    'Explore five workplace performance topic areas — each reflecting a core driver of workplace performance, explored through lessons earned in elite sport.',
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Crown,
  Users,
  Target,
  TrendingUp,
  Star,
}

export default function TopicsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-cream overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-sm uppercase tracking-[0.2em] text-gold">Topics</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black mt-3">
            Workplace Performance Topics
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl">
            Each topic reflects a core driver of workplace performance —
            explored through lessons earned in elite sport.
          </p>
        </div>
      </section>

      {/* Topic Cluster Cards */}
      <SectionWrapper className="bg-cream-dark py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          {topics.map((topic) => {
            const IconComponent = iconMap[topic.icon]
            return (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="group block rounded-2xl bg-navy border border-navy-light/20 p-8 md:p-12 transition-all hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)] hover:-translate-y-1"
              >
                <div className="h-1 w-24 bg-gold mb-6" />
                {IconComponent && (
                  <IconComponent className="h-12 w-12 text-gold" />
                )}
                <h2 className="mt-4 font-display text-2xl md:text-3xl text-white">
                  {topic.name}
                </h2>
                <p className="mt-3 flex gap-3 flex-wrap text-white/60">
                  {topic.subTopics.map((sub, i) => (
                    <span key={sub}>
                      {i > 0 && (
                        <span className="mr-3" aria-hidden="true">
                          &middot;
                        </span>
                      )}
                      {sub}
                    </span>
                  ))}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    {topic.lessonCount} lessons
                  </span>
                  <span className="text-gold group-hover:text-gold-light transition-colors font-medium">
                    Explore Topic{' '}
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Closing CTA */}
      <SectionWrapper className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-gray-900">
            Every topic maps to a real challenge your team is facing.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Browse the full library or talk to us about building a custom
            learning path for your organization.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/sample-lesson" variant="primary">
              Watch a Sample Lesson
            </CTAButton>
            <CTAButton href="/contact" variant="ghost">
              Build a Custom Path
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
