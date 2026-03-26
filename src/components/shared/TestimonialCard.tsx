interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <span className="font-display text-8xl leading-none text-gold" aria-hidden="true">
        &ldquo;
      </span>
      <p className="-mt-8 font-body text-lg text-gray-700 leading-relaxed">
        {quote}
      </p>
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">
          {role}, {company}
        </p>
      </div>
    </div>
  )
}
