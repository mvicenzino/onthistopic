'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "My team could not love this more.",
    name: "Belinda Walker",
    role: "L&D Executive",
    company: "Fortune 500",
  },
  {
    quote: "The courses are short, entertaining and sticky.",
    name: "S. Logan",
    role: "L&D Specialist",
    company: "Fortune 1000",
  },
  {
    quote: "My employees thank me.",
    name: "J. Walker",
    role: "Director of L&D",
    company: "Global 2000",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Massive decorative quote mark */}
      <div className="absolute -top-8 -left-4 text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-display text-gold/30 leading-none select-none pointer-events-none" aria-hidden>
        &ldquo;
      </div>

      {/* Quote area with gold left edge */}
      <div className="border-l-4 border-gold pl-8 md:pl-12 min-h-[200px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display italic text-gray-900 leading-snug">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">
                  {testimonials[current].name[0]}
                </span>
              </div>
              <div>
                <div className="text-gray-900 font-semibold">{testimonials[current].name}</div>
                <div className="text-gray-500 font-mono text-sm">
                  {testimonials[current].role}, {testimonials[current].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="flex gap-3 mt-10 pl-8 md:pl-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-gold' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
