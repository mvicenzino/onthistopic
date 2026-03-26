import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Crown,
  Users,
  Target,
  TrendingUp,
  Star,
} from 'lucide-react'
import { topics } from '@/lib/data/topics'
import { getLessonsByTopic } from '@/lib/data/lessons'
import { LessonCard } from '@/components/shared/LessonCard'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { CTAButton } from '@/components/shared/CTAButton'
import { SubTopicFilter } from './SubTopicFilter'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Crown,
  Users,
  Target,
  TrendingUp,
  Star,
}

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = topics.find((t) => t.slug === slug)
  return {
    title: topic ? `${topic.name} — Leadership Lessons` : 'Topic',
    description: topic?.description,
  }
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = topics.find((t) => t.slug === slug)

  if (!topic) {
    notFound()
  }

  const lessons = getLessonsByTopic(topic.slug)
  const IconComponent = iconMap[topic.icon]

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-cream pt-8 pb-0">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/topics"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Topics
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">
                &rsaquo;
              </li>
              <li className="text-gray-700">{topic.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <SectionWrapper className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {IconComponent && (
            <IconComponent className="h-14 w-14 text-gold" />
          )}
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-gray-900">
            {topic.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            {topic.description}
          </p>
        </div>
      </SectionWrapper>

      {/* Lessons with Sub-topic Filter */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SubTopicFilter
            subTopics={topic.subTopics}
            lessons={lessons.map((l) => ({
              title: l.title,
              duration: l.duration,
              topic: l.topic,
              speaker: l.speaker,
            }))}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionWrapper className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl text-white">
            Want full access?
          </h2>
          <div className="mt-6">
            <CTAButton href="/pricing" variant="primary">
              See Pricing <span aria-hidden="true">&rarr;</span>
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
