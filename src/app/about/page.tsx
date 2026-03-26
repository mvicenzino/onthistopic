import type { Metadata } from 'next'
import { CTAButton } from '@/components/shared/CTAButton'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { StatCounter } from '@/components/shared/StatCounter'

export const metadata: Metadata = {
  title: 'About — Karen DePodesta & Michelle Tannenbaum',
  description:
    'Meet the founders of On This Topic. High achievers bringing leadership lessons from elite sport to your organization.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-cream overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-sm uppercase tracking-[0.2em] text-gold">About</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black mt-3">
            High Achievers. Lived Experiences. Actionable Lessons.
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl">
            On This Topic was built by two women with unparalleled access to the
            world of elite professional sport.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 space-y-0">
          {/* Karen DePodesta — image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <ImagePlaceholder label="Karen DePodesta" aspect="1/1" className="rounded-2xl max-w-sm mx-auto lg:mx-0" />
            </div>
            <div className="lg:col-span-3">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-gold">Co-Founder</div>
              <h3 className="font-display text-3xl md:text-4xl text-gray-900 mt-2">Karen DePodesta</h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-6">
                Karen has spent over two decades immersed in the world of elite
                professional sport, developing a rare perspective on what
                separates high performers from the rest. Her access to NFL, MLB,
                and NBA front offices gave her a firsthand education in
                performance, leadership, and decision-making under pressure. She
                witnessed these lessons in environments where outcomes were real
                and consequences were immediate — and recognized that the same
                frameworks could strengthen leaders and teams in any
                organization. A businesswoman with deep experience in operations,
                brand, and strategy, Karen co-founded On This Topic to make
                those hard-earned lessons accessible at scale. Her connection to
                Paul DePodesta — the executive made famous by Moneyball —
                provided an unparalleled window into how elite organizations
                build and sustain winning cultures.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/karendepodesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                  aria-label="Karen DePodesta on LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Gold divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent my-16" />

          {/* Michelle Tannenbaum — text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="font-mono text-sm uppercase tracking-[0.2em] text-gold">Co-Founder</div>
              <h3 className="font-display text-3xl md:text-4xl text-gray-900 mt-2">Michelle Tannenbaum</h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-6">
                Michelle has spent years inside the culture of
                championship-level professional football, learning the
                discipline, leadership, and performance standards that define
                elite organizations. Her closeness to NFL executive Mike
                Tannenbaum — who led teams as General Manager of the New York
                Jets and Miami Dolphins before joining ESPN — gave her an
                education in organizational dynamics that no classroom could
                replicate. She developed a deep appreciation for how the best
                coaches and leaders build trust, navigate pressure, and drive
                performance in high-stakes environments. A connector, strategist,
                and advocate for accessible development, Michelle co-founded On
                This Topic to bring those hard-won insights into the
                organizations and teams that need them most.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/michelletannenbaum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                  aria-label="Michelle Tannenbaum on LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ImagePlaceholder label="Michelle Tannenbaum" aspect="1/1" className="rounded-2xl max-w-sm mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Story */}
      <SectionWrapper className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <blockquote className="border-l-4 border-gold pl-8">
            <p className="font-display text-2xl italic text-gray-900">
              &ldquo;The greatest lessons in leadership aren&rsquo;t found in
              textbooks — they&rsquo;re lived, experienced, and told through
              stories.&rdquo;
            </p>
          </blockquote>
          <div className="mt-12 space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Karen DePodesta and Michelle Tannenbaum didn&rsquo;t set out to
              build a learning platform. They set out to answer a question: why
              do the best lessons in leadership, performance, and culture live
              inside locker rooms, front offices, and sidelines — but never
              reach the teams and organizations that need them most? With decades
              of combined access to elite professional sport — NFL, MLB, NBA —
              they watched firsthand as coaches, athletes, and executives
              navigated the highest-pressure environments imaginable. They saw
              what worked, what didn&rsquo;t, and what separated the great from
              the good.
            </p>
            <p>
              On This Topic is the answer to that question. It&rsquo;s a
              platform built on the belief that real stories from real performers
              — told in their own words — are the most powerful development tool
              available. Every lesson is designed to be short enough for a busy
              workday, memorable enough to stick, and practical enough to apply
              immediately. Karen and Michelle built On This Topic to give every
              organization access to the kind of insight that was once reserved
              for the elite.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* By the Numbers */}
      <SectionWrapper className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={50} suffix="+" label="Lessons Produced" />
            <StatCounter value={5} label="Topic Areas" />
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-gold md:text-5xl">
                3
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white">
                Fortune 500 Early Adopters
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-4xl font-bold text-gold md:text-5xl">
                2023
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white">
                Founded
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Doing Good */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl text-gray-900">
                Giving Back
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                On This Topic is committed to making an impact beyond the
                platform.
              </p>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <span>
                    A charitable donation is made for every featured talent — to
                    the cause of their choice.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <span>
                    Partnerships with YMCA and Boys &amp; Girls Clubs support
                    youth leadership development.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                  <span>
                    In 2025, we supported development programs reaching
                    underserved communities across the U.S.
                  </span>
                </li>
              </ul>
            </div>
            <ImagePlaceholder label="Community Impact" aspect="4/3" />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/blog" variant="secondary">
              Read the Blog
            </CTAButton>
            <CTAButton href="/contact" variant="primary">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
