'use client'

import { motion } from 'framer-motion'
import {
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
import { TopicCard } from '@/components/shared/TopicCard'
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel'
import { EmailCapture } from '@/components/shared/EmailCapture'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { topics } from '@/lib/data/topics'

const useCases = [
  {
    icon: User,
    title: 'Individual Growth',
    description:
      'Self-guided development at your own pace, on any device. Build a personal learning path aligned to your goals.',
  },
  {
    icon: Users,
    title: 'Team Development',
    description:
      'Shared lessons that spark real conversations and build common language across your team.',
  },
  {
    icon: MessageSquare,
    title: 'Performance Conversations',
    description:
      'A structured way to connect development to day-to-day work and drive real behavior change.',
  },
]

const buildItems = [
  'Decision-making under pressure',
  'Trust, communication & accountability',
  'Healthier performance conversations',
  'Shared performance language',
  'Resilience through challenge',
  'Ownership and execution',
]

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

      {/* ───────────────────────── SECTION 1: Hero ───────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-dark-base via-dark-surface to-dark-base">
        {/* Grain texture overlay */}
        <div className="grain-overlay" />
        {/* Grid scoreboard subtle pattern */}
        <div className="grid-scoreboard" />
        {/* Gold radial glow behind headline */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] md:w-[700px] md:h-[500px] gold-glow pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl">
            {/* Staggered entrance with blur-to-clear */}
            <motion.h1
              className="font-display font-black text-white text-5xl md:text-7xl lg:text-[110px] xl:text-[120px] leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Leadership Lessons{' '}
              <span className="text-gold">Earned</span> on the
              World&rsquo;s Biggest Stages.
            </motion.h1>

            <motion.p
              className="mt-8 text-lg md:text-xl text-ice-blue/80 max-w-xl font-body"
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              Bite-size, story-based lessons from elite sport athletes, coaches,
              and executives — building the performance culture your teams need.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <CTAButton href="/sample-lesson" variant="premium" size="xl">
                Watch a Sample Lesson
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Book a Demo
              </CTAButton>
            </motion.div>

            <motion.p
              className="mt-12 text-xs uppercase tracking-[0.2em] text-white/40 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Trusted by L&amp;D leaders at Fortune 500 organizations
            </motion.p>
          </div>
        </div>

        {/* Stats bar integrated at bottom of hero */}
        <div className="relative z-10 mt-auto bg-dark-elevated/80 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value={50} suffix="+" label="Lessons" />
              <StatCounter value={5} label="Topic Areas" />
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-gold">3&ndash;5</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-mono mt-2">Min Per Lesson</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-gold">100%</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-mono mt-2">First-Person</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── SECTION 2: Trust Strip ───────────────────────── */}
      <div className="bg-dark-base border-y border-gold/10 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-sm font-mono uppercase tracking-[0.3em] text-gold/60">
              <span>Healthcare</span><span className="text-gold/30">&middot;</span>
              <span>Technology</span><span className="text-gold/30">&middot;</span>
              <span>Financial Services</span><span className="text-gold/30">&middot;</span>
              <span>Media &amp; Entertainment</span><span className="text-gold/30">&middot;</span>
              <span>Professional Services</span><span className="text-gold/30">&middot;</span>
              <span>Manufacturing</span><span className="text-gold/30">&middot;</span>
              <span>Trusted by Leaders Across Industries</span><span className="text-gold/30">&middot;</span>
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────────── SECTION 3: How People Use It ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28" transition="slideLeft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            How People Use It
          </h2>
          <div className="w-24 h-1.5 bg-gold mt-4 rounded-full" />
        </div>

        <div className="mt-12 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-6 lg:px-8 scrollbar-hide">
          {useCases.map((card, i) => (
            <motion.div
              key={card.title}
              className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center flex-shrink-0 relative rounded-2xl bg-gradient-to-br from-dark-card to-dark-elevated border border-white/10 p-10 md:p-14 overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Big decorative number */}
              <span className="absolute top-6 right-8 font-mono text-8xl text-gold/10 select-none">
                0{i + 1}
              </span>
              <div className="relative z-10">
                <card.icon className="w-12 h-12 text-gold" />
                <h3 className="font-display text-2xl md:text-3xl text-white mt-6">{card.title}</h3>
                <p className="text-white/70 text-lg mt-4 max-w-md">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 4: What It Builds ───────────────────────── */}
      <SectionWrapper className="relative bg-dark-surface py-20 md:py-28 overflow-hidden" transition="fadeUp">
        <div className="grid-scoreboard" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left: massive quote — 3 cols */}
            <div className="lg:col-span-3">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                We don&rsquo;t teach theory. We share what elite performers have learned under{' '}
                <span className="text-gold">real pressure</span> — and translate it into lessons your teams can use tomorrow.
              </p>
            </div>

            {/* Gold vertical divider — hidden on mobile */}
            <div className="hidden lg:flex justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
            </div>

            {/* Right: checklist — 1 col */}
            <div className="space-y-5">
              {buildItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 5: Topic Preview ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28" transition="slideRight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Explore by Topic
          </h2>
          <p className="text-ice-blue/60 text-lg mt-3 max-w-xl">
            Five core areas of workplace performance, explored through lessons earned in elite sport.
          </p>
          <div className="w-24 h-1.5 bg-gold mt-4 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {topics.slice(0, 3).map((topic, i) => (
              <div key={topic.slug} className={i === 1 ? 'md:mt-12' : i === 2 ? 'md:mt-6' : ''}>
                <TopicCard {...topic} index={i} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {topics.slice(3).map((topic, i) => (
              <div key={topic.slug} className={i === 1 ? 'md:mt-8' : ''}>
                <TopicCard {...topic} index={i + 3} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 6: Why It Works ───────────────────────── */}
      <SectionWrapper className="bg-dark-surface py-20 md:py-28" transition="fadeUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Why It Works
          </h2>
          <div className="w-24 h-1.5 bg-gold mt-4 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            {/* Featured pillar — spans 2 cols */}
            <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-gold/10 to-dark-card border border-gold/20 p-10 md:p-14">
              <Brain className="w-10 h-10 text-gold" />
              <h3 className="font-display text-2xl md:text-3xl text-white mt-4">Improved Recall</h3>
              <div className="font-mono text-5xl md:text-6xl text-gold mt-4">22&times;</div>
              <p className="text-white/60 text-sm font-mono uppercase tracking-wider mt-1">better retention</p>
              <p className="text-white/70 text-lg mt-6 max-w-lg">
                Stories activate memory in ways data alone can&rsquo;t. Research shows story-based learning dramatically outperforms traditional formats.
              </p>
            </div>

            {/* 3 compact cards stacked */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <Clock className="w-8 h-8 text-gold" />
                <h3 className="font-display text-xl text-white mt-3">Fits Real Workdays</h3>
                <div className="font-mono text-2xl text-gold mt-2">3&ndash;5 min</div>
                <p className="text-white/60 text-sm mt-2">No scheduling conflicts. Lessons fit between meetings.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <Trophy className="w-8 h-8 text-gold" />
                <h3 className="font-display text-xl text-white mt-3">Elite Credibility</h3>
                <div className="font-mono text-2xl text-gold mt-2">Earned under pressure</div>
                <p className="text-white/60 text-sm mt-2">Real stakes. Real insight. The world&rsquo;s biggest stages.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <Rocket className="w-8 h-8 text-gold" />
                <h3 className="font-display text-xl text-white mt-3">Work-Ready Insight</h3>
                <div className="font-mono text-2xl text-gold mt-2">Apply tomorrow</div>
                <p className="text-white/60 text-sm mt-2">Watch, reflect, discuss, apply. Action, not theory.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 7: Testimonials ───────────────────────── */}
      <SectionWrapper className="bg-dark-base py-20 md:py-28" transition="fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel />
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 8: Email Capture ───────────────────────── */}
      <section className="relative bg-gold py-20 md:py-28 overflow-hidden">
        <div className="grain-overlay opacity-10" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy-dark">
            Get 3 Free Sample Lessons
          </h2>
          <p className="mt-4 text-navy/70 text-lg">
            See what story-based leadership development looks like in action.
          </p>
          <div className="mt-8">
            <EmailCapture variant="gold" />
          </div>
          <p className="mt-4 text-navy/50 text-sm">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
