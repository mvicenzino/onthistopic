import Link from 'next/link'
import { CTAButton } from '@/components/shared/CTAButton'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata = {
  title: 'Workplace Performance Development',
  description:
    'What is workplace performance development? How elite sport provides a powerful lens for leadership and team development.',
}

const tocItems = [
  { id: 'what-is', label: 'What Is Workplace Performance Development?' },
  { id: 'expanding', label: 'How It Expands Traditional Leadership Development' },
  { id: 'elite-sport', label: 'Why Elite Sport Is a Powerful Lens' },
  { id: 'core-drivers', label: 'The Core Drivers of Workplace Performance' },
  { id: 'how-organizations', label: 'How Organizations Apply It' },
  { id: 'story-based', label: 'Story-Based Learning That Drives Retention' },
]

const coreDrivers = [
  {
    name: 'Leadership & Strategy',
    description: 'Leading with clarity, making high-stakes decisions, sustaining success',
  },
  {
    name: 'People & Teams',
    description: 'Building trust, communicating effectively, creating cultures that perform',
  },
  {
    name: 'Performance & Pressure',
    description: 'Performing under pressure, embracing competition, leading through change',
  },
  {
    name: 'Personal Performance',
    description: 'Managing time, sustaining energy, building careers with intention',
  },
  {
    name: 'Talent & Impact',
    description: 'Developing talent, negotiating effectively, creating lasting impact',
  },
]

const orgApplications = [
  {
    name: 'Individual development',
    description:
      'Employees browse and complete lessons at their own pace, building skills aligned to their personal development goals.',
  },
  {
    name: 'Team learning',
    description:
      'Managers assign lessons to their teams and use discussion guides to facilitate conversations in team meetings, offsites, or 1:1s.',
  },
  {
    name: 'Enterprise programs',
    description:
      'L&D teams deploy On This Topic across departments or the entire organization, integrating it with existing LMS platforms and competency frameworks.',
  },
  {
    name: 'Onboarding',
    description:
      "New hires experience curated learning paths that introduce them to the organization's performance culture and shared language.",
  },
  {
    name: 'Leadership pipelines',
    description:
      'High-potential programs use On This Topic to supplement coaching and workshops with scalable, story-based content.',
  },
]

export default function WorkplacePerformancePage() {
  return (
    <>
      <section className="relative bg-cream overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_1fr]">
            {/* ─── Table of Contents ─── */}
            <nav className="hidden lg:block">
              <div className="sticky top-24">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gold">
                  On This Page
                </p>
                <ul className="space-y-3">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`#${item.id}`}
                        className="text-sm text-gray-400 transition-colors hover:text-navy"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* ─── Article Content ─── */}
            <article className="max-w-3xl">
              {/* Author Byline */}
              <div className="mb-12">
                <p className="text-sm text-gray-400">
                  By Karen DePodesta &amp; Michelle Tannenbaum, Co-Founders, On
                  This Topic
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Published March 2026
                </p>
              </div>

              {/* Section 1 */}
              <section id="what-is" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                  What Is Workplace Performance Development?
                </h2>
                <p className="mt-6 font-body leading-relaxed text-gray-700">
                  Workplace performance development is a holistic approach to
                  building the skills, mindsets, and behaviors that drive results
                  in professional environments. Unlike traditional training
                  programs that focus on technical skills or compliance, workplace
                  performance development addresses the human side of performance
                  — leadership, communication, resilience, decision-making, and
                  team dynamics.
                </p>
                <p className="mt-4 font-body leading-relaxed text-gray-700">
                  It recognizes that the gap between good teams and great teams
                  isn&apos;t usually about knowledge — it&apos;s about how people
                  show up, interact, and perform under pressure. Organizations
                  that invest in workplace performance development see
                  improvements in engagement, retention, collaboration, and
                  ultimately, business outcomes.
                </p>
              </section>

              {/* Section 2 */}
              <section id="expanding" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                  How It Expands Traditional Leadership Development
                </h2>
                <p className="mt-6 font-body leading-relaxed text-gray-700">
                  Traditional leadership development often relies on classroom
                  workshops, lengthy e-learning modules, or executive coaching
                  reserved for senior leaders. While these approaches have their
                  place, they share common limitations: they&apos;re expensive to
                  scale, difficult to schedule, and often disconnected from the
                  day-to-day realities of work.
                </p>
                <p className="mt-4 font-body leading-relaxed text-gray-700">
                  Workplace performance development expands this model by making
                  development accessible to everyone — not just executives. It
                  emphasizes practical, applicable skills over abstract theory. It
                  meets learners where they are, in the flow of work, with
                  content that&apos;s engaging enough to compete for their
                  attention and short enough to fit between meetings.
                </p>
              </section>

              {/* Section 3 */}
              <section id="elite-sport" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                  Why Elite Sport Is a Powerful Lens
                </h2>
                <p className="mt-6 font-body leading-relaxed text-gray-700">
                  Elite sport is one of the most visible, high-stakes performance
                  environments in the world. Athletes, coaches, and executives in
                  professional sport face many of the same challenges that leaders
                  face in business: building trust, making decisions under
                  pressure, managing diverse teams, navigating change, and
                  sustaining performance over time.
                </p>
                <p className="mt-4 font-body leading-relaxed text-gray-700">
                  The difference is that in sport, these moments play out on the
                  world&apos;s biggest stages, with real consequences and
                  immediate feedback. The lessons learned in these environments
                  are vivid, memorable, and deeply human — making them powerful
                  tools for development in any context.
                </p>
              </section>

              {/* Inline CTA */}
              <div className="mb-16 rounded-xl bg-cream border border-black/5 p-6 md:p-8">
                <CTAButton href="/sample-lesson" variant="ghost">
                  Explore a Sample Lesson
                </CTAButton>
              </div>

              {/* Section 4 */}
              <section id="core-drivers" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                  The Core Drivers of Workplace Performance
                </h2>
                <p className="mt-6 font-body leading-relaxed text-gray-700">
                  On This Topic organizes its content around five core drivers of
                  workplace performance:
                </p>
                <ul className="mt-6 space-y-4">
                  {coreDrivers.map((driver) => (
                    <li key={driver.name} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <span className="font-body text-gray-700">
                        <strong className="text-navy">{driver.name}</strong> —{' '}
                        {driver.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-body leading-relaxed text-gray-700">
                  Each driver maps to real challenges that teams and leaders face
                  every day. Together, they provide a comprehensive framework for
                  developing the skills that matter most.
                </p>
              </section>

              {/* Section 5 */}
              <section id="how-organizations" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                  How Organizations Apply It
                </h2>
                <p className="mt-6 font-body leading-relaxed text-gray-700">
                  Organizations use On This Topic in a variety of ways:
                </p>
                <ul className="mt-6 space-y-4">
                  {orgApplications.map((app) => (
                    <li key={app.name} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <span className="font-body text-gray-700">
                        <strong className="text-navy">{app.name}</strong> —{' '}
                        {app.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 6 */}
              <section id="story-based" className="mb-16">
                <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                  Story-Based Learning That Drives Retention
                </h2>
                <p className="mt-6 font-body leading-relaxed text-gray-700">
                  Research consistently shows that stories are one of the most
                  effective vehicles for learning and retention. Story-based
                  learning activates multiple areas of the brain — engaging
                  emotion, memory, and imagination in ways that facts and bullet
                  points simply can&apos;t.
                </p>
                <p className="mt-4 font-body leading-relaxed text-gray-700">
                  On This Topic leverages this science by delivering every lesson
                  as a first-person story from an elite performer. Learners
                  don&apos;t just absorb information — they experience it through
                  the eyes of someone who lived it. This approach drives up to 22x
                  better recall compared to traditional training formats and
                  ensures that lessons stick long after they&apos;re completed.
                </p>
                <p className="mt-4 font-body leading-relaxed text-gray-700">
                  Combined with reflection prompts, discussion guides, and
                  practical application frameworks, On This Topic creates a
                  complete learning experience that goes beyond consumption to
                  drive real behavior change.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* ───────────────────────── End CTA ───────────────────────── */}
      <SectionWrapper className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-white">
            See How Organizations Use On This Topic
          </h2>
          <div className="mt-8">
            <CTAButton href="/contact" variant="primary" size="lg" dark>
              Get in Touch &rarr;
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
