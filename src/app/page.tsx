'use client'

import { motion } from 'framer-motion'
import {
  ChevronDown,
  User,
  Users,
  MessageSquare,
  Check,
  Brain,
  Clock,
  Trophy,
  Rocket,
} from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'
import { StatCounter } from '@/components/shared/StatCounter'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { TopicCard } from '@/components/shared/TopicCard'
import { EmailCapture } from '@/components/shared/EmailCapture'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { topics } from '@/lib/data/topics'

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'On This Topic',
            url: 'https://onthistopic.com',
            description:
              'Story-based leadership development from elite sport. Built for L&D teams.',
            sameAs: [],
          }),
        }}
      />

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center bg-dark-base overflow-hidden">
        {/* Grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Subtle diagonal gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-dark-base via-dark-base to-dark-card/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl font-black text-white max-w-4xl md:text-7xl"
            >
              Leadership Lessons Earned on the World&apos;s Biggest Stages.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl font-body text-lg text-white/70 md:text-xl"
            >
              Bite-size, story-based lessons from elite sport athletes, coaches, and
              executives — building the performance culture your teams need.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <CTAButton href="/sample-lesson" variant="primary" size="lg" dark>
                Watch a Sample Lesson
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg" dark>
                Book a Demo
              </CTAButton>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-12 text-xs uppercase tracking-[0.2em] text-white/50 font-mono"
            >
              Trusted by L&amp;D leaders at Fortune 500 organizations
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </section>

      {/* ───────────────────────── Stats Bar ───────────────────────── */}
      <SectionWrapper className="bg-dark-elevated py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCounter value={50} suffix="+" label="Lessons" />
            <StatCounter value={5} label="Topic Areas" />

            {/* Text-based stats styled to match StatCounter */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-mono text-4xl font-bold text-gold md:text-5xl">
                3&ndash;5
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white">
                Min / Per Lesson
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-mono text-4xl font-bold text-gold md:text-5xl">
                100%
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white">
                First-Person
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Trust Logo Strip ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-8 text-sm uppercase tracking-wider text-white/40">
            Organizations building stronger teams with On This Topic
          </p>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {[
              'Healthcare',
              'Technology',
              'Financial Services',
              'Media & Entertainment',
              'Professional Services',
              'Manufacturing',
            ].map((label) => (
              <div
                key={label}
                className="flex h-[60px] w-full items-center justify-center rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-xs font-mono text-white/30">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── How People Use It ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-white">
            How People Use It
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                Icon: User,
                title: 'Individual Growth',
                description:
                  'Self-guided development at your own pace, on any device.',
              },
              {
                Icon: Users,
                title: 'Team Development',
                description:
                  'Shared lessons that spark real conversations and build common language.',
              },
              {
                Icon: MessageSquare,
                title: 'Performance Conversations',
                description:
                  'A structured way to connect development to day-to-day work.',
              },
            ].map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-8"
              >
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-display text-xl mb-2 text-white">{title}</h3>
                <p className="text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── What It Builds ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: pull quote */}
            <div className="flex items-center">
              <p className="font-display text-3xl leading-tight text-white md:text-4xl">
                &ldquo;We don&apos;t teach theory. We share what elite performers
                have learned under real pressure — and translate it into lessons your
                teams can use tomorrow.&rdquo;
              </p>
            </div>

            {/* Right: checklist */}
            <div className="flex items-center">
              <ul className="space-y-5">
                {[
                  'Decision-making under pressure',
                  'Trust, communication & accountability',
                  'Healthier performance conversations',
                  'Shared performance language',
                  'Resilience through challenge',
                  'Ownership and execution',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Topic Preview ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-white">
            Explore by Topic
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {topics.slice(0, 3).map((topic) => (
              <TopicCard key={topic.slug} {...topic} />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:mx-auto md:max-w-2xl lg:max-w-3xl">
            {topics.slice(3, 5).map((topic) => (
              <TopicCard key={topic.slug} {...topic} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Why It Works ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-white">
            Why On This Topic Works
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Brain,
                title: 'Improved Recall',
                stat: '22x better retention',
                description:
                  "Stories activate memory in ways data alone can't. Research shows story-based learning dramatically outperforms traditional formats.",
              },
              {
                Icon: Clock,
                title: 'Fits Real Workdays',
                stat: '3\u20135 minutes',
                description:
                  'No scheduling conflicts. No lengthy modules. Lessons designed to fit between meetings.',
              },
              {
                Icon: Trophy,
                title: 'Elite Credibility',
                stat: 'Earned under pressure',
                description:
                  "Every lesson comes from someone who performed on the world's biggest stages. Real stakes. Real insight.",
              },
              {
                Icon: Rocket,
                title: 'Work-Ready Insight',
                stat: 'Apply tomorrow',
                description:
                  'Lessons are designed for action, not theory. Watch, reflect, discuss, apply.',
              },
            ].map(({ Icon, title, stat, description }) => (
              <div
                key={title}
                className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6"
              >
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-display text-lg text-white">{title}</h3>
                <p className="mt-1 font-mono text-sm text-gold">{stat}</p>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Testimonials ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl md:text-4xl text-white">
            What L&amp;D Leaders Say
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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
            <TestimonialCard
              quote="My employees thank me."
              name="J. Walker"
              role="Director of L&D"
              company="Global 2000"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Email Capture ───────────────────────── */}
      <SectionWrapper className="bg-dark-card py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-white">
            Get 3 Free Sample Lessons
          </h2>
          <div className="mt-8">
            <EmailCapture dark />
          </div>
          <p className="mt-4 text-sm text-white/50">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
