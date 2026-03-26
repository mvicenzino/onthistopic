interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Upward peak / chevron — two angled lines forming a summit */}
      <path
        d="M6 24L16 8L26 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Circle at the apex — represents a person / speaker / topic dot */}
      <circle cx="16" cy="6" r="2.5" fill="currentColor" />
    </svg>
  )
}
