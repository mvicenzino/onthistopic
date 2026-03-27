'use client'

import { useRef } from 'react'
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
  ChevronLeft,
  ChevronRight,
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
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 400
    scrollRef.current.scrollBy({
      left: direction === 'right' ? cardWidth + 24 : -(cardWidth + 24),
      behavior: 'smooth',
    })
  }

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
      <section className="relative min-h-[85vh] md:min-h-screen flex flex-col overflow-hidden bg-navy-dark">
        {/* Talent banner background — photo collage of elite sport leaders */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/talentbanner.png')" }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/70 to-navy-dark" />
        {/* Grain texture overlay */}
        <div className="grain-overlay" />
        {/* Gold radial glow behind headline */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[700px] lg:h-[500px] gold-glow pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-36 lg:pt-44 pb-8 md:pb-20 flex-1 flex flex-col justify-center">
          <div className="max-w-5xl">
            {/* Staggered entrance with blur-to-clear */}
            <motion.h1
              className="font-display font-black text-white text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-[110px] leading-[1.15] sm:leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Leadership Lessons{' '}
              <span className="text-gold">Earned</span>{' '}on the{' '}
              World&rsquo;s Biggest Stages.
            </motion.h1>

            <motion.p
              className="mt-5 md:mt-8 text-base md:text-xl text-ice-blue/80 max-w-xl font-body"
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              Bite-size, story-based lessons from elite sport athletes, coaches,
              and executives — building the performance culture your teams need.
            </motion.p>

            <motion.div
              className="mt-6 md:mt-10 flex flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Desktop: large solid buttons. Mobile: compact glass buttons */}
              <a
                href="/sample-lesson"
                className="hidden md:inline-flex items-center font-black rounded-full px-8 py-4 text-lg bg-navy text-white shadow-[0_0_40px_rgba(27,46,75,0.3)] hover:shadow-[0_0_60px_rgba(27,46,75,0.5)] hover:bg-navy-light active:scale-[0.98] transition-all duration-300"
              >
                Watch a Sample Lesson
              </a>
              <a
                href="/contact"
                className="hidden md:inline-flex items-center font-bold rounded-full px-8 py-4 text-lg bg-navy text-white shadow-lg hover:bg-navy-light hover:shadow-[0_0_30px_rgba(27,46,75,0.4)] active:scale-[0.98] transition-all duration-300"
              >
                Book a Demo
              </a>
              {/* Mobile: compact liquid glass buttons */}
              <a
                href="/sample-lesson"
                className="md:hidden inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/20 active:scale-[0.97] transition-all duration-300"
              >
                Watch a Sample Lesson
              </a>
              <a
                href="/contact"
                className="md:hidden inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold backdrop-blur-xl bg-gold/15 border border-gold/25 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-gold/25 hover:shadow-[0_0_15px_rgba(201,168,76,0.2)] active:scale-[0.97] transition-all duration-300"
              >
                Book a Demo
              </a>
            </motion.div>

            <motion.p
              className="mt-6 md:mt-12 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/40 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Trusted by L&amp;D leaders at Fortune 500 organizations
            </motion.p>
          </div>
        </div>

        {/* Stats bar integrated at bottom of hero */}
        <div className="relative z-10 bg-navy-dark/80 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <StatCounter value={50} suffix="+" label="Lessons" />
              <StatCounter value={5} label="Topic Areas" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-gold">3&ndash;5</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/60 font-mono mt-1 md:mt-2">Min Per Lesson</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-gold">100%</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/60 font-mono mt-1 md:mt-2">First-Person</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── SECTION 2: Trust Strip ───────────────────────── */}
      <div className="bg-cream border-y border-gold/20 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 px-4 text-sm font-mono uppercase tracking-[0.3em] text-navy/40">
              <span>Healthcare</span><span className="text-navy/20">&middot;</span>
              <span>Technology</span><span className="text-navy/20">&middot;</span>
              <span>Financial Services</span><span className="text-navy/20">&middot;</span>
              <span>Media &amp; Entertainment</span><span className="text-navy/20">&middot;</span>
              <span>Professional Services</span><span className="text-navy/20">&middot;</span>
              <span>Manufacturing</span><span className="text-navy/20">&middot;</span>
              <span>Trusted by Leaders Across Industries</span><span className="text-navy/20">&middot;</span>
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────────── SECTION 3: How People Use It ───────────────────────── */}
      <SectionWrapper className="bg-cream py-20 md:py-28" transition="slideLeft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold">
            How People Use It
          </h2>
          <div className="w-24 h-1.5 bg-gold mt-4 rounded-full" />
        </div>

        {/* Navigation arrows — desktop */}
        <div className="hidden md:flex gap-2 mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollCards('left')}
            className="w-11 h-11 rounded-full border-2 border-navy/15 text-navy/60 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollCards('right')}
            className="w-11 h-11 rounded-full border-2 border-navy/15 text-navy/60 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="mt-6 md:mt-8 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-6 lg:px-8 scrollbar-hide scroll-smooth"
        >
          {useCases.map((card, i) => (
            <motion.div
              key={card.title}
              className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center flex-shrink-0 relative rounded-2xl bg-white border border-black/5 shadow-sm p-10 md:p-14 overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Big decorative number */}
              <span className="absolute top-6 right-8 font-mono text-8xl text-navy/5 select-none">
                0{i + 1}
              </span>
              <div className="relative z-10">
                <card.icon className="w-12 h-12 text-navy" />
                <h3 className="font-display text-2xl md:text-3xl text-gray-900 mt-6">{card.title}</h3>
                <p className="text-gray-600 text-lg mt-4 max-w-md">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 4: What It Builds ───────────────────────── */}
      <SectionWrapper className="relative bg-white py-20 md:py-28 overflow-hidden" transition="fadeUp">
        <div className="grid-scoreboard" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left: massive quote — 3 cols */}
            <div className="lg:col-span-3">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
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
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 5: Topic Preview ───────────────────────── */}
      <SectionWrapper className="bg-cream-dark py-20 md:py-28" transition="slideRight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold">
            Explore by Topic
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-xl">
            Five core areas of workplace performance, explored through lessons earned in elite sport.
          </p>
          <div className="w-24 h-1.5 bg-gold mt-4 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {topics.slice(0, 3).map((topic, i) => (
              <div key={topic.slug}>
                <TopicCard {...topic} index={i} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {topics.slice(3).map((topic, i) => (
              <div key={topic.slug}>
                <TopicCard {...topic} index={i + 3} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 6: Why It Works ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28" transition="fadeUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold">
            Why It Works
          </h2>
          <div className="w-24 h-1.5 bg-gold mt-4 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
            {/* Featured pillar — spans 2 cols */}
            <div className="lg:col-span-2 rounded-2xl bg-navy border border-navy-light/20 p-10 md:p-14">
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
              <div className="rounded-2xl bg-cream border border-black/5 shadow-sm p-6">
                <Clock className="w-8 h-8 text-navy" />
                <h3 className="font-display text-xl text-gray-900 mt-3">Fits Real Workdays</h3>
                <div className="font-mono text-2xl text-gold mt-2">3&ndash;5 min</div>
                <p className="text-gray-500 text-sm mt-2">No scheduling conflicts. Lessons fit between meetings.</p>
              </div>
              <div className="rounded-2xl bg-cream border border-black/5 shadow-sm p-6">
                <Trophy className="w-8 h-8 text-navy" />
                <h3 className="font-display text-xl text-gray-900 mt-3">Elite Credibility</h3>
                <div className="font-mono text-2xl text-gold mt-2">Earned under pressure</div>
                <p className="text-gray-500 text-sm mt-2">Real stakes. Real insight. The world&rsquo;s biggest stages.</p>
              </div>
              <div className="rounded-2xl bg-cream border border-black/5 shadow-sm p-6">
                <Rocket className="w-8 h-8 text-navy" />
                <h3 className="font-display text-xl text-gray-900 mt-3">Work-Ready Insight</h3>
                <div className="font-mono text-2xl text-gold mt-2">Apply tomorrow</div>
                <p className="text-gray-500 text-sm mt-2">Watch, reflect, discuss, apply. Action, not theory.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── SECTION 7: Testimonials ───────────────────────── */}
      <SectionWrapper className="bg-cream py-20 md:py-28" transition="fadeIn">
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
