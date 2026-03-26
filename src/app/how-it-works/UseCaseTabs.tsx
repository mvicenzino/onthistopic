'use client'

import { useState } from 'react'
import { User, Users, Building2 } from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'

type Tab = 'individual' | 'team' | 'organization'

const tabs: { key: Tab; label: string }[] = [
  { key: 'individual', label: 'Individual' },
  { key: 'team', label: 'Team' },
  { key: 'organization', label: 'Organization' },
]

const content: Record<
  Tab,
  {
    Icon: typeof User
    heading: string
    bullets: string[]
    ctaLabel: string
    ctaHref: string
  }
> = {
  individual: {
    Icon: User,
    heading: 'Self-Directed Growth',
    bullets: [
      'Browse and watch lessons at your own pace',
      'Build a personal learning path aligned to your development goals',
      'Use reflection prompts to deepen understanding',
      'Track your progress across topics and lessons',
    ],
    ctaLabel: 'Watch a Sample Lesson',
    ctaHref: '/sample-lesson',
  },
  team: {
    Icon: Users,
    heading: 'Shared Team Development',
    bullets: [
      'Assign lessons aligned to team goals and challenges',
      'Use discussion guides in team meetings and offsites',
      'Build shared language around performance and leadership',
      'Track participation and engagement across the team',
    ],
    ctaLabel: 'See Pricing',
    ctaHref: '/pricing',
  },
  organization: {
    Icon: Building2,
    heading: 'Enterprise-Wide Programs',
    bullets: [
      'Deploy across departments, regions, or the entire organization',
      'Integrate with your existing LMS via SCORM/xAPI',
      'Customize learning paths aligned to organizational competencies',
      'Access reporting, analytics, and dedicated support',
    ],
    ctaLabel: 'Book a Demo',
    ctaHref: '/contact',
  },
}

export function UseCaseTabs() {
  const [active, setActive] = useState<Tab>('individual')
  const { Icon, heading, bullets, ctaLabel, ctaHref } = content[active]

  return (
    <div>
      {/* Tab pills */}
      <div className="flex justify-center gap-2">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
              active === key
                ? 'bg-gold/20 text-gold border border-gold/30'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-10 mx-auto max-w-2xl rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
            <Icon className="h-5 w-5 text-gold" />
          </div>
          <h3 className="font-display text-2xl text-gold">{heading}</h3>
        </div>

        <ul className="mt-6 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span className="text-white/70">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAButton href={ctaHref} variant="ghost">
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </div>
  )
}
