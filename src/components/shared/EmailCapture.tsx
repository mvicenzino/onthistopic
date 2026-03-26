'use client'

import { useState, type FormEvent } from 'react'

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
      <p className="text-sm font-medium text-white/70">
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
          className="w-full rounded-full px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:ring-gold focus:border-gold"
        />
        {error && <p className="mt-1 pl-4 text-xs text-red-400">{error}</p>}
      </div>
      <button
        type="submit"
        className="shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-colors bg-gold/20 text-gold border border-gold/30 backdrop-blur hover:bg-gold/30 hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]"
      >
        Subscribe
      </button>
    </form>
  )
}
