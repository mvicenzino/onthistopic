import { Mail, Clock, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/shared/ContactForm'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export const metadata = {
  title: 'Contact — Book a Demo',
  description:
    'Ready to elevate your team? Book a demo or get in touch with On This Topic.',
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative bg-cream overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] gold-glow pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-sm uppercase tracking-[0.2em] text-gold">Contact</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black mt-3">
            Ready to Elevate Your Team?
          </h1>
        </div>
      </section>

      {/* ───────────────────────── Two-Column Layout ───────────────────────── */}
      <SectionWrapper className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left — Contact Info */}
            <div>
              <div className="rounded-2xl bg-cream border border-black/5 p-8">
                <ul className="space-y-5">
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-gold" />
                    <a
                      href="mailto:hello@onthistopic.com"
                      className="text-gray-700 hover:text-gold"
                    >
                      hello@onthistopic.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <LinkedInIcon className="h-5 w-5 shrink-0 text-gold" />
                    <a
                      href="https://www.linkedin.com/in/karendepodesta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gold"
                    >
                      Karen DePodesta
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <LinkedInIcon className="h-5 w-5 shrink-0 text-gold" />
                    <a
                      href="https://www.linkedin.com/in/michelletannenbaum/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gold"
                    >
                      Michelle Tannenbaum
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-gray-500">
                      We respond within 1 business day.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-gray-500">
                      Based in the United States.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <TestimonialCard
                  quote="The courses are short, entertaining and sticky."
                  name="S. Logan"
                  role="L&D Specialist"
                  company="Fortune 1000"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <ContactForm variant="full" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
