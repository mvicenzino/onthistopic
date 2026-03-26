'use client'

import { useState, type FormEvent } from 'react'

interface EmailCaptureProps {
  variant?: 'dark' | 'gold' | 'light'
}

export function EmailCapture({ variant = 'dark' }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className={`text-sm font-medium ${variant === 'gold' ? 'text-navy/70' : variant === 'light' ? 'text-gray-600' : 'text-white/70'}`}>
        You&apos;re in! Watch for our next update.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row" noValidate>
      <div className="flex-1">
        <label htmlFor="email-capture" className="sr-only">Email address</label>
        <input
          id="email-capture"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-full px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
            variant === 'gold'
              ? 'bg-navy-dark/10 border border-navy/20 text-navy-dark placeholder:text-navy/50 focus:ring-navy/30 focus:border-navy'
              : variant === 'light'
              ? 'bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-gold focus:border-gold'
              : 'bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:ring-gold focus:border-gold'
          }`}
        />
        {error && <p className="mt-1 pl-4 text-xs text-red-400">{error}</p>}
      </div>
      <button
        type="submit"
        className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
          variant === 'gold'
            ? 'bg-navy-dark text-gold font-bold hover:bg-navy'
            : variant === 'light'
            ? 'bg-navy text-white font-bold hover:bg-navy-dark'
            : 'bg-gold text-navy-dark font-bold hover:bg-gold-light'
        }`}
      >
        Subscribe
      </button>
    </form>
  )
}
