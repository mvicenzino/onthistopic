import { Lock } from 'lucide-react'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { EmailCapture } from '@/components/shared/EmailCapture'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata = {
  title: 'Leadership Insights — L&D Blog',
  description:
    'Leadership insights on story-based learning, elite sport performance, and L&D strategy. Coming soon.',
}

const articles = [
  'What Moneyball Can Teach Your Leadership Team About Decision-Making',
  'Why Story-Based Learning Outperforms Traditional Leadership Training',
  'The 5 Leadership Lessons from Elite Sport That Apply in Any Boardroom',
  'How to Build a Performance Culture: Lessons from the NFL and MLB',
  'Microlearning for Leadership Development: A Guide for L&D Teams',
  'How On This Topic Helps L&D Teams Justify Budget to the C-Suite',
]

export default function BlogPage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative bg-cream overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-sm uppercase tracking-[0.2em] text-gold">Blog</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black mt-3">
            Leadership Insights
          </h1>
        </div>
      </section>

      {/* ───────────────────────── Coming Soon ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900">
            Leadership insights are on their way.
          </h2>
          <p className="mt-4 text-gray-600">
            We&apos;re building a library of thought leadership on story-based
            learning, elite sport performance, and L&amp;D strategy. Be the
            first to know when we publish.
          </p>
          <div className="mt-8">
            <EmailCapture variant="light" />
          </div>
        </div>
      </SectionWrapper>

      {/* ───────────────────────── Teaser Article Cards ───────────────────────── */}
      <SectionWrapper className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((title) => (
              <div
                key={title}
                className="pointer-events-none relative overflow-hidden rounded-xl border border-gray-200 opacity-50"
              >
                <div className="relative">
                  <ImagePlaceholder
                    label="Coming Soon"
                    aspect="16/9"
                    className="rounded-none grayscale"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full bg-gold/90 px-3 py-1 font-mono text-xs font-semibold text-navy">
                    Coming Soon
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg leading-snug text-gray-700">
                    {title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
