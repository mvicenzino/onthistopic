interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <div className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 border-l-[3px] border-l-gold p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <span className="font-display text-8xl leading-none text-gold" aria-hidden="true">
        &ldquo;
      </span>
      <p className="-mt-8 font-body text-lg text-white/80 leading-relaxed">
        {quote}
      </p>
      <div className="mt-6">
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-sm text-white/50">
          {role}, {company}
        </p>
      </div>
    </div>
  )
}
