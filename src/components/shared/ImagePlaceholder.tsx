import { cn } from '@/lib/utils'

export function ImagePlaceholder({ label, aspect = "16/9", className }: {
  label: string
  aspect?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br from-navy-dark via-navy to-navy-light",
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/40 text-sm font-mono tracking-widest uppercase">{label}</span>
      </div>
    </div>
  )
}
