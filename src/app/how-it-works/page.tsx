import type { Metadata } from 'next'
import {
  Cloud,
  BarChart3,
  Gamepad2,
  Route,
  Puzzle,
  Shield,
} from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { UseCaseTabs } from './UseCaseTabs'

export const metadata: Metadata = {
  title: 'How It Works — Story-Based Microlearning for Leadership Teams',
  description:
    'A simple, flexible learning experience designed to fit into real workdays — for individuals, teams, and organizations.',
}

const steps = [
  {
    number: 1,
    title: 'Find a Topic',
    description:
      'Browse five core topic areas covering everything from leadership and strategy to personal performance. Each topic maps to real challenges your team faces.',
    image: 'Browse Topics',
  },
  {
    number: 2,
    title: 'Watch a Short Lesson',
    description:
      'Each lesson is 3\u20135 minutes, told first-person by elite sport athletes, coaches, and executives. Engaging, memorable, and professionally produced.',
    image: 'Watch Lesson',
  },
  {
    number: 3,
    title: 'Reflect & Discuss',
    description:
      'Use built-in reflection prompts and discussion guides to deepen understanding. Perfect for team meetings and 1:1 development conversations.',
    image: 'Team Discussion',
  },
  {
    number: 4,
    title: 'Apply It at Work',
    description:
      'Every lesson connects to a real workplace behavior. Apply insights to your day-to-day work and track growth over time.',
    image: 'Apply at Work',
  },
]

const features = [
  {
    Icon: Cloud,
    title: 'Cloud-Based LMS',
    description: 'Access anywhere, any device, no download required.',
    bold: false,
  },
  {
    Icon: BarChart3,
    title: 'Reporting & Insights',
    description:
      'Track participation, completion, and engagement across your organization.',
    bold: false,
  },
  {
    Icon: Gamepad2,
    title: 'Gamification',
    description:
      'Progress tracking and engagement cues that keep learners motivated.',
    bold: false,
  },
  {
    Icon: Route,
    title: 'Learning Path Design',
    description:
      'Custom paths aligned to your development programs and competency models.',
    bold: false,
  },
  {
    Icon: Puzzle,
    title: 'SCORM / xAPI Compatible',
    description:
      'Integrates with Workday Learning, SAP SuccessFactors, Cornerstone, and more.',
    bold: true,
  },
  {
    Icon: Shield,
    title: 'SSO Support',
    description:
      'Single sign-on for frictionless enterprise access and simplified administration.',
    bold: true,
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-gold">
            How It Works
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-white">
            A Simple, Flexible Learning Experience
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/70">
            Designed to fit into real workdays — for individuals, teams, and
            organizations.
          </p>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── 4-Step Process ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            {/* Badges row with connecting line */}
            <div className="relative flex items-center justify-between">
              {/* Gold connecting line */}
              <div className="absolute left-[calc(theme(spacing.6))] right-[calc(theme(spacing.6))] top-1/2 -translate-y-1/2 h-0.5 bg-gold" />
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative z-10 flex w-12 h-12 items-center justify-center rounded-full bg-gold text-navy font-bold text-lg"
                >
                  {step.number}
                </div>
              ))}
            </div>

            {/* Content grid */}
            <div className="mt-8 grid grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number}>
                  <h3 className="font-display text-xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4">
                    <ImagePlaceholder label={step.image} aspect="4/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-10">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Vertical line + badge */}
                <div className="flex flex-col items-center">
                  <div className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy font-bold text-lg">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-2 w-0.5 grow bg-gold" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-4">
                  <h3 className="font-display text-xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4">
                    <ImagePlaceholder label={step.image} aspect="4/3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Use Cases (Tabbed) ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-white">
            Built for Every Level
          </h2>
          <div className="mt-12">
            <UseCaseTabs />
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Platform Features ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-white">
            Platform Features
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, description, bold }) => (
              <div
                key={title}
                className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6"
              >
                <Icon className="h-8 w-8 text-gold" />
                <h3
                  className={`mt-4 font-display text-lg text-white ${
                    bold ? 'font-bold' : ''
                  }`}
                >
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── ROI Callout ───────────────────────── */}
      <SectionWrapper className="bg-gradient-to-r from-dark-card via-dark-elevated to-dark-card py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-white">
            At $144 per user per year —
          </p>
          <p className="mt-2 font-display text-3xl md:text-4xl text-gold">
            that&apos;s $12 per month.
          </p>
          <p className="mt-4 text-white/70">
            Less than one coffee per employee for world-class leadership
            development.
          </p>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Dual CTA ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/70">
            See how story-based learning can transform your team.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book a Demo
            </CTAButton>
            <CTAButton href="/sample-lesson" variant="secondary" size="lg">
              Watch a Sample Lesson
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
