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
      {/* Subtle gold fill inside the peak */}
      <path d="M8 24L16 10L24 24Z" fill="rgba(201,168,76,0.12)" />
      {/* Upward peak / chevron — two angled lines forming a summit */}
      <path
        d="M6 24L16 8L26 24"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Circle at the apex — represents a person / speaker / topic dot */}
      <circle cx="16" cy="6" r="3" fill="currentColor" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
    </svg>
  )
}
