interface LogoProps {
  size?: number
  className?: string
  variant?: 'quotemark' | 'playbook' | 'monogram' | 'spotlight'
}

/**
 * Logo variants:
 *
 * "quotemark" — A stylized opening quotation mark that doubles as a play button / forward arrow.
 *   Conveys: first-person stories, voice, narrative. The slight rightward lean suggests momentum.
 *
 * "playbook" — An open book/playbook shape with a play triangle inside.
 *   Conveys: the coach's playbook, lessons, watching video content. Sport + learning in one mark.
 *
 * "monogram" — A bold "OT" ligature where the O and T share a vertical stroke.
 *   Conveys: confidence, institutional authority, like a sports team mark or law firm monogram.
 *
 * "spotlight" — A circle (spotlight/arena light) with a speech bubble notch cut from it.
 *   Conveys: being on stage, under the lights, speaking from experience. Sport + storytelling.
 */
export function Logo({ size = 32, className, variant = 'spotlight' }: LogoProps) {
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
      {variant === 'quotemark' && (
        <>
          {/* Two bold quotation strokes, angled to suggest forward motion */}
          <path
            d="M7 8C7 8 5 14 5 17C5 19.8 7 21 9 21C11.2 21 13 19.2 13 17C13 14.8 11.2 13 9 13C8.4 13 7.8 13.2 7.3 13.5C7.8 11 9.5 8 9.5 8L7 8Z"
            fill="currentColor"
          />
          <path
            d="M20 8C20 8 18 14 18 17C18 19.8 20 21 22 21C24.2 21 26 19.2 26 17C26 14.8 24.2 13 22 13C21.4 13 20.8 13.2 20.3 13.5C20.8 11 22.5 8 22.5 8L20 8Z"
            fill="currentColor"
          />
          {/* Subtle gold accent line beneath */}
          <rect x="5" y="24" width="21" height="2" rx="1" fill="rgba(201,168,76,0.4)" />
        </>
      )}

      {variant === 'playbook' && (
        <>
          {/* Open book / playbook shape */}
          <path
            d="M4 6C4 5.4 4.4 5 5 5H14C14.6 5 15 5.2 16 6C17 5.2 17.4 5 18 5H27C27.6 5 28 5.4 28 6V24C28 24.6 27.6 25 27 25H18.5C17.7 25 17 25.3 16 26C15 25.3 14.3 25 13.5 25H5C4.4 25 4 24.6 4 24V6Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center spine */}
          <path d="M16 6V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Play triangle on the right page */}
          <path
            d="M20 13L24.5 16L20 19V13Z"
            fill="rgba(201,168,76,0.6)"
            stroke="rgba(201,168,76,0.8)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Text lines on left page */}
          <line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <line x1="7" y1="13.5" x2="12" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <line x1="7" y1="17" x2="11" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </>
      )}

      {variant === 'monogram' && (
        <>
          {/* Bold "OT" monogram — the O and T share visual space */}
          {/* O shape */}
          <path
            d="M5 16C5 10 9 5.5 14 5.5C16 5.5 17 6.2 17 6.2"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M17 25.8C16 26.2 15 26.5 14 26.5C9 26.5 5 22 5 16"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* T vertical stem — shared with the O's right side */}
          <path
            d="M17 7V26"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* T crossbar */}
          <path
            d="M13 7H27"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Gold dot accent */}
          <circle cx="26" cy="22" r="2.5" fill="rgba(201,168,76,0.7)" />
        </>
      )}

      {variant === 'spotlight' && (
        <>
          {/* Main circle — the spotlight / arena light / stage */}
          <circle
            cx="15"
            cy="14"
            r="11"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          {/* Speech bubble tail — cut from the circle, pointing down-right */}
          <path
            d="M21 22L26 28L19 24"
            fill="currentColor"
          />
          {/* Gold inner glow — small concentric circle */}
          <circle
            cx="15"
            cy="14"
            r="4"
            fill="rgba(201,168,76,0.2)"
            stroke="rgba(201,168,76,0.5)"
            strokeWidth="1.5"
          />
        </>
      )}
    </svg>
  )
}
