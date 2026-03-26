'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { ContactForm } from '@/components/shared/ContactForm'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

interface Tier {
  name: string
  range: string
  price: number
  popular?: boolean
  features: string[]
  ctaLabel: string
  ctaVariant: 'primary' | 'secondary'
}

const tiers: Tier[] = [
  {
    name: 'Leadership',
    range: '25 – 100 Learners',
    price: 180,
    features: [
      'Full lesson library',
      'Course assignment tools',
      'Usage reporting',
      'Email support',
      'Rollout guidance',
    ],
    ctaLabel: 'Get Started',
    ctaVariant: 'secondary',
  },
  {
    name: 'High-Impact',
    range: '100 – 500 Learners',
    price: 144,
    popular: true,
    features: [
      'Full lesson library',
      'Course assignment tools',
      'Usage reporting',
      'Dedicated success manager',
      'Rollout guidance',
      'Quarterly check-ins',
    ],
    ctaLabel: 'Get Started',
    ctaVariant: 'primary',
  },
  {
    name: 'Enterprise',
    range: '500+ Learners',
    price: 96,
    features: [
      'Full lesson library',
      'Course assignment tools',
      'Advanced analytics',
      'Dedicated success manager',
      'Custom learning paths',
      'SSO + LMS integration',
      'Custom content options',
      'Executive briefing',
    ],
    ctaLabel: 'Contact Us',
    ctaVariant: 'secondary',
  },
]

function formatNumber(n: number): string {
  return n.toLocaleString('en-US')
}

function getTierName(employees: number): string {
  if (employees <= 100) return 'Leadership'
  if (employees <= 500) return 'High-Impact'
  return 'Enterprise'
}

function getRate(employees: number): number {
  if (employees <= 100) return 180
  if (employees <= 500) return 144
  return 96
}

export default function PricingPage() {
  const [employees, setEmployees] = useState(100)
  const rate = getRate(employees)
  const annual = employees * rate
  const monthly = (rate / 12).toFixed(2)

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative bg-cream overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-sm uppercase tracking-[0.2em] text-gold">Pricing</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black mt-3">
            Organizational Licensing
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl">
            Transparent, per-participant annual pricing. No hidden fees.
          </p>
        </div>
      </section>

      {/* ───────────────────────── Pricing Tiers ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 ${
                  tier.popular
                    ? 'border-2 border-gold bg-navy lg:scale-105 lg:z-10 shadow-[0_0_30px_rgba(201,168,76,0.15)]'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 font-mono text-sm font-bold text-navy">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display text-xl ${tier.popular ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                <p className={`mt-1 text-sm ${tier.popular ? 'text-white/50' : 'text-gray-500'}`}>{tier.range}</p>
                <div className="mt-6">
                  <span className={`font-display font-bold ${tier.popular ? 'text-white text-5xl md:text-6xl' : 'text-gray-900 text-4xl'}`}>
                    ${tier.price}
                  </span>
                  <span className={`text-sm ${tier.popular ? 'text-white/50' : 'text-gray-500'}`}>/participant</span>
                  <p className={`text-sm ${tier.popular ? 'text-white/50' : 'text-gray-500'}`}>per year</p>
                </div>
                <hr className={`my-6 ${tier.popular ? 'border-white/10' : 'border-gray-200'}`} />
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className={`text-sm ${tier.popular ? 'text-white/70' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTAButton
                    href="/contact"
                    variant={tier.ctaVariant}
                    size="md"
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── ROI Calculator ───────────────────────── */}
      <SectionWrapper className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-gray-900">
            Calculate Your Investment
          </h2>
          <div className="mt-10 rounded-2xl bg-white border border-gray-200 shadow-sm p-8">
            <label
              htmlFor="employee-slider"
              className="block text-sm font-medium text-gray-600"
            >
              Number of participants:{' '}
              <span className="font-mono font-bold text-gray-900">{employees}</span>
            </label>
            <input
              id="employee-slider"
              type="range"
              min={25}
              max={1000}
              step={25}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="mt-4 w-full accent-gold"
            />
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>25</span>
              <span>1,000</span>
            </div>

            <div className="mt-8 text-center">
              <p className="font-display text-3xl font-bold text-gray-900">
                Annual Investment: ${formatNumber(annual)}
              </p>
              <p className="mt-2 font-mono text-gold">
                ${monthly} / employee / month
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {getTierName(employees)} tier
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── 30-Day Pilot ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gold/10 border border-gold/20 p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold text-gray-900">
              Start with a 30-Day Team Pilot
            </h2>
            <p className="mt-3 text-gray-600">
              Test On This Topic with up to 25 users before committing. No
              obligation.
            </p>
            <div className="mt-6">
              <CTAButton href="/contact" variant="primary" size="lg">
                Apply for a Pilot Program &rarr;
              </CTAButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Nonprofit Note ───────────────────────── */}
      <SectionWrapper className="bg-white pb-16 text-center">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            Nonprofits: Custom pricing available.
          </p>
          <p className="mt-1">
            Email{' '}
            <a
              href="mailto:hello@onthistopic.com"
              className="font-medium text-gold hover:underline"
            >
              hello@onthistopic.com
            </a>
          </p>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Testimonials ───────────────────────── */}
      <SectionWrapper className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TestimonialCard
              quote="My team could not love this more."
              name="Belinda Walker"
              role="L&D Executive"
              company="Fortune 500"
            />
            <TestimonialCard
              quote="The courses are short, entertaining and sticky."
              name="S. Logan"
              role="L&D Specialist"
              company="Fortune 1000"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Contact Form ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-display text-2xl text-gray-900">
            Ready to get started?
          </h2>
          <ContactForm variant="compact" />
        </div>
      </SectionWrapper>
    </>
  )
}
