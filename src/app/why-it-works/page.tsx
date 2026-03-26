import type { Metadata } from 'next'
import { Play, Brain, MessageCircle, Rocket } from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata: Metadata = {
  title: 'Why Story-Based Leadership Training Works — Science + Sport',
  description:
    'The science and sport behind every lesson. Story-based learning drives 22x better recall than traditional formats.',
}

const pillars = [
  {
    badge: 'PILLAR 01',
    title: 'Improved Recall',
    description:
      "Stories activate memory in ways facts alone can't. Research shows story-based learning drives 22x better recall than traditional formats.",
    tags: ['Memorable', 'Human', 'Easy to Grasp'],
    image: 'Sport Moment',
    imageFirst: true,
  },
  {
    badge: 'PILLAR 02',
    title: 'Fits Real Workdays',
    description:
      '3\u20135 minutes. No scheduling conflicts. No theory-heavy modules. Lessons designed to fit between meetings, commutes, or morning routines.',
    tags: ['Micro-Learning', 'Easy to Schedule', 'No Friction'],
    image: 'Mobile Learning',
    imageFirst: false,
  },
  {
    badge: 'PILLAR 03',
    title: 'Elite Credibility',
    description:
      "Every lesson comes from someone who earned their insight under real pressure, at the highest level of sport. These aren't actors reading scripts — they're leaders sharing hard-won wisdom.",
    tags: ['Big Stages', 'Real Consequences', 'Earned Insight'],
    image: 'Stadium Arena',
    imageFirst: true,
  },
  {
    badge: 'PILLAR 04',
    title: 'Work-Ready Insight',
    description:
      'Lessons are designed to be applied, not just consumed. Each one connects to a real workplace behavior your team can practice tomorrow.',
    tags: ['Actionable', 'Practical', 'Immediate'],
    image: 'Team Meeting',
    imageFirst: false,
  },
]

const frameworkSteps = [
  {
    number: 1,
    Icon: Play,
    name: 'Watch',
    description:
      'Engage with a short, story-based lesson from an elite performer.',
  },
  {
    number: 2,
    Icon: Brain,
    name: 'Reflect',
    description:
      'Use built-in prompts to connect the lesson to your own experience.',
  },
  {
    number: 3,
    Icon: MessageCircle,
    name: 'Discuss',
    description:
      'Share insights with your team using guided discussion frameworks.',
  },
  {
    number: 4,
    Icon: Rocket,
    name: 'Apply',
    description:
      'Put the lesson into practice with actionable workplace behaviors.',
  },
]

export default function WhyItWorksPage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-gold">
            Why It Works
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-white">
            The Science and Sport Behind Every Lesson
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70">
            We combine proven learning science with first-person stories from
            elite sport — creating lessons that stick, scale, and translate
            directly to the workplace.
          </p>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── 4 Pillars — Alternating Layout ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
          {pillars.map((pillar) => {
            const imageBlock = (
              <div key={`img-${pillar.badge}`}>
                <ImagePlaceholder label={pillar.image} aspect="4/3" />
              </div>
            )

            const textBlock = (
              <div key={`txt-${pillar.badge}`} className="flex flex-col justify-center">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-gold">
                  {pillar.badge}
                </p>
                <h3 className="mt-3 font-display text-3xl text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )

            return (
              <div
                key={pillar.badge}
                className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center"
              >
                {pillar.imageFirst ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Learning Science Quote Block ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-4 border-gold pl-8">
            <p className="font-display text-xl md:text-2xl italic text-white leading-relaxed">
              &ldquo;Story-based learning increases knowledge retention by up to
              65% compared to lecture-style formats.&rdquo;
            </p>
            <footer className="mt-4 text-white/40 text-sm">
              — Learning &amp; Development Research
            </footer>
          </blockquote>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Learning Framework ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-white">
            The On This Topic Learning Framework
          </h2>

          <div className="relative mt-16">
            {/* Gold connecting line — desktop only */}
            <div className="hidden md:block absolute top-6 left-[calc(12.5%+theme(spacing.6))] right-[calc(12.5%+theme(spacing.6))] h-0.5 bg-gold" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {frameworkSteps.map(({ number, Icon, name, description }) => (
                <div key={name} className="relative text-center">
                  {/* Number badge */}
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy font-bold text-lg">
                    {number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 flex justify-center">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>

                  {/* Name */}
                  <h3 className="mt-3 font-display text-xl text-white">
                    {name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <SectionWrapper className="bg-dark-card py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-white">
            See It in Action
          </h2>
          <div className="mt-8">
            <CTAButton href="/sample-lesson" variant="primary" size="lg" dark>
              Watch a Sample Lesson
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
