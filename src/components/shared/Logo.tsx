interface LogoProps {
  size?: number
  className?: string
}

/**
 * On This Topic logo mark — "Spotlight"
 *
 * A circle (spotlight / arena light) with a speech bubble tail pointing down-right.
 * Conveys: being on stage, under the lights, speaking from experience.
 * The gold inner circle represents the core insight at the heart of every lesson.
 */
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
      {/* Main circle — the spotlight / arena light / stage */}
      <circle
        cx="15"
        cy="14"
        r="11"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Speech bubble tail — pointing down-right */}
      <path
        d="M21 22L26 28L19 24"
        fill="currentColor"
      />
      {/* Gold inner glow — small concentric circle with pulsating glow */}
      <circle
        cx="15"
        cy="14"
        r="6"
        fill="rgba(201,168,76,0.08)"
        opacity="0.6"
      >
        <animate
          attributeName="r"
          values="5;7;5"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
        />
      </circle>
      <circle
        cx="15"
        cy="14"
        r="4"
        fill="rgba(201,168,76,0.2)"
        stroke="rgba(201,168,76,0.5)"
        strokeWidth="1.5"
      />
    </svg>
  )
}
