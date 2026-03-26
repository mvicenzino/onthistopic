'use client'

import { Check, FileText } from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'
import { ContactForm } from '@/components/shared/ContactForm'
import { LessonCard } from '@/components/shared/LessonCard'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { mostViewedLessons } from '@/lib/data/lessons'

const keyTakeaways = [
  'Failure is data — elite performers extract insight rather than assign blame',
  'The best coaches create psychological safety for honest post-mortems',
  "Resilience isn't built in success — it's built in deliberate recovery",
  'Teams that discuss failure openly outperform teams that avoid it',
]

export default function SampleLessonPage() {
  return (
    <>
      {/* ───────────────────────── Lesson Header ───────────────────────── */}
      <section className="relative bg-cream overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gold/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-gold">
              Sample Lesson
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Learning From Failure
            </h1>
            <p className="mt-3 text-gray-500">
              Mental Performance Coach — NFL &amp; MLB
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="rounded-full bg-gray-100 px-3 py-1 font-mono text-xs text-gray-600">
                4 min
              </span>
              <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                Performance &amp; Pressure
              </span>
            </div>
          </div>

          {/* ───────────────────────── Video Player ───────────────────────── */}
          <div className="mt-10">
            <div
              className="relative w-full overflow-hidden rounded-xl bg-navy-dark"
              style={{ aspectRatio: '16/9' }}
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Learning From Failure — On This Topic Sample Lesson"
              />
            </div>
          </div>

          {/* ───────────────────────── Key Takeaways ───────────────────────── */}
          <div className="mt-10 rounded-xl border-2 border-gold p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-gray-900">
              Key Takeaways
            </h2>
            <ul className="mt-4 space-y-3">
              {keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ───────────────────────── Learning Supplement ───────────────────────── */}
          <a
            href="#"
            className="mt-6 flex items-center gap-3 rounded-xl border border-gray-200 p-5 transition-colors hover:border-gold/30 hover:bg-gold/10"
          >
            <FileText className="h-6 w-6 shrink-0 text-gold" />
            <span className="font-medium text-gray-900">
              Download Learning Supplement (PDF) &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* ───────────────────────── Most Viewed Lessons ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl">
            Most Viewed Lessons
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mostViewedLessons.slice(0, 9).map((lesson) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                topic={lesson.topic}
                speaker={lesson.speaker}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Post-Lesson CTA ───────────────────────── */}
      <SectionWrapper className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-white">
            Liked what you saw?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Explore 50+ lessons across 5 performance areas — or bring On This
            Topic to your entire team.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/topics" variant="secondary" size="lg" dark>
              Explore All Topics
            </CTAButton>
            <CTAButton href="/contact" variant="primary" size="lg" dark>
              Book a Demo
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Contact Form ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-display text-2xl text-gray-900">
            LET&apos;S TALK DETAILS
          </h2>
          <ContactForm variant="compact" />
        </div>
      </SectionWrapper>
    </>
  )
}
