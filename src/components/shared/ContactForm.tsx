'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { CTAButton } from '@/components/shared/CTAButton'

const baseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  employees: z.string().min(1, 'Please select company size'),
  message: z.string().optional(),
})

const fullSchema = baseSchema.extend({
  ldGoal: z.string().optional(),
  lmsPlatform: z.string().optional(),
})

type BaseFormData = z.infer<typeof baseSchema>
type FullFormData = z.infer<typeof fullSchema>
type FormData = BaseFormData | FullFormData

interface ContactFormProps {
  variant?: 'full' | 'compact'
}

const employeeOptions = [
  { value: '', label: 'Select company size' },
  { value: '25-100', label: '25 - 100 employees' },
  { value: '100-500', label: '100 - 500 employees' },
  { value: '500-1000', label: '500 - 1,000 employees' },
  { value: '1000+', label: '1,000+ employees' },
]

const ldGoalOptions = [
  { value: '', label: 'Select primary goal' },
  { value: 'leadership-development', label: 'Leadership Development' },
  { value: 'team-building', label: 'Team Building' },
  { value: 'employee-engagement', label: 'Employee Engagement' },
  { value: 'culture-transformation', label: 'Culture Transformation' },
  { value: 'onboarding', label: 'Onboarding & Training' },
  { value: 'other', label: 'Other' },
]

const inputClasses =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/20'
const errorClasses = 'mt-1 text-xs text-red-500'

export function ContactForm({ variant = 'compact' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const schema = variant === 'full' ? fullSchema : baseSchema

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      employees: '',
      message: '',
      ...(variant === 'full' ? { ldGoal: '', lmsPlatform: '' } : {}),
    },
  })

  const onSubmit = (data: FormData) => {
    const result = schema.safeParse(data)
    if (!result.success) return

    setSubmittedName(data.name)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-white/5 border border-white/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-white">
          Thanks, {submittedName}!
        </h3>
        <p className="mt-2 text-white/60">
          We&apos;ll be in touch within 1 business day.
        </p>
        <div className="mt-6">
          <Link
            href="/sample-lesson"
            className="inline-flex items-center text-sm font-medium text-gold hover:underline"
          >
            Watch a sample lesson while you wait
            <span className="ml-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name *"
            className={inputClasses}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-company" className="sr-only">Company</label>
          <input
            id="contact-company"
            type="text"
            placeholder="Company *"
            className={inputClasses}
            {...register('company', { required: 'Company is required' })}
          />
          {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">Email</label>
        <input
          id="contact-email"
          type="email"
          placeholder="Work email *"
          className={inputClasses}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' },
          })}
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-employees" className="sr-only">Company size</label>
        <select
          id="contact-employees"
          className={inputClasses}
          {...register('employees', { required: 'Please select company size' })}
        >
          {employeeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.employees && <p className={errorClasses}>{errors.employees.message}</p>}
      </div>

      {variant === 'full' && (
        <>
          <div>
            <label htmlFor="contact-ld-goal" className="sr-only">Primary L&amp;D Goal</label>
            <select
              id="contact-ld-goal"
              className={inputClasses}
              {...register('ldGoal' as keyof FormData)}
            >
              {ldGoalOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contact-lms" className="sr-only">Current LMS Platform</label>
            <input
              id="contact-lms"
              type="text"
              placeholder="Current LMS platform (optional)"
              className={inputClasses}
              {...register('lmsPlatform' as keyof FormData)}
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Tell us about your L&amp;D goals (optional)"
          className={inputClasses}
          {...register('message')}
        />
      </div>

      <CTAButton type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Get in Touch'}
      </CTAButton>
    </form>
  )
}
