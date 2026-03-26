'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

interface EmailCaptureProps {
  dark?: boolean
}

export function EmailCapture({ dark = false }: EmailCaptureProps) {
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
      <p className={cn('text-sm font-medium', dark ? 'text-gold' : 'text-navy')}>
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
          className={cn(
            'w-full rounded-full px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2',
            dark
              ? 'bg-white/10 text-white placeholder-white/50 focus:ring-gold'
              : 'border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-navy'
          )}
        />
        {error && <p className="mt-1 pl-4 text-xs text-red-400">{error}</p>}
      </div>
      <button
        type="submit"
        className={cn(
          'shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-colors',
          dark
            ? 'bg-gold text-navy hover:bg-gold-light'
            : 'bg-navy text-white hover:bg-navy-light'
        )}
      >
        Subscribe
      </button>
    </form>
  )
}
