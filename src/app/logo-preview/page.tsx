'use client'

import { Logo } from '@/components/shared/Logo'

const variants = [
  {
    id: 'spotlight' as const,
    name: 'Spotlight',
    description: 'A circle (spotlight / arena light) with a speech bubble tail. Conveys: being on stage, under the lights, speaking from experience. Sport + storytelling.',
  },
  {
    id: 'quotemark' as const,
    name: 'Quotemark',
    description: 'Stylized opening quotation marks with a gold underline. Conveys: first-person stories, voice, narrative. The mark IS the story.',
  },
  {
    id: 'playbook' as const,
    name: 'Playbook',
    description: 'An open book/playbook with a play triangle on the right page and text lines on the left. Conveys: the coach\'s playbook, video lessons, sport + learning.',
  },
  {
    id: 'monogram' as const,
    name: 'Monogram',
    description: 'A bold "OT" ligature where the O and T share a vertical stroke, with a gold dot accent. Conveys: institutional authority, like a sports team mark.',
  },
]

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-cream py-20">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="font-display text-4xl md:text-5xl text-gray-900 font-black">
          Logo Concepts
        </h1>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl">
          Four directions for the On This Topic mark. Each shown at 3 sizes, on light and dark backgrounds.
        </p>

        <div className="space-y-20 mt-16">
          {variants.map((v) => (
            <div key={v.id}>
              <h2 className="font-display text-2xl text-gray-900 font-bold">{v.name}</h2>
              <p className="text-gray-500 mt-2 max-w-xl">{v.description}</p>

              {/* Light background row */}
              <div className="mt-6 flex items-end gap-10 bg-white rounded-xl border border-black/5 p-8">
                <div className="text-center">
                  <Logo size={24} variant={v.id} className="text-navy mx-auto" />
                  <span className="text-xs text-gray-400 mt-2 block">24px</span>
                </div>
                <div className="text-center">
                  <Logo size={40} variant={v.id} className="text-navy mx-auto" />
                  <span className="text-xs text-gray-400 mt-2 block">40px</span>
                </div>
                <div className="text-center">
                  <Logo size={64} variant={v.id} className="text-navy mx-auto" />
                  <span className="text-xs text-gray-400 mt-2 block">64px</span>
                </div>
                <div className="text-center">
                  <Logo size={96} variant={v.id} className="text-navy mx-auto" />
                  <span className="text-xs text-gray-400 mt-2 block">96px</span>
                </div>
                {/* With wordmark text */}
                <div className="flex items-center gap-3 ml-auto">
                  <Logo size={32} variant={v.id} className="text-navy" />
                  <span className="font-display font-black text-xl tracking-tight text-navy">
                    On This Topic
                  </span>
                </div>
              </div>

              {/* Dark background row */}
              <div className="mt-4 flex items-end gap-10 bg-navy-dark rounded-xl p-8">
                <div className="text-center">
                  <Logo size={24} variant={v.id} className="text-white mx-auto" />
                  <span className="text-xs text-white/40 mt-2 block">24px</span>
                </div>
                <div className="text-center">
                  <Logo size={40} variant={v.id} className="text-white mx-auto" />
                  <span className="text-xs text-white/40 mt-2 block">40px</span>
                </div>
                <div className="text-center">
                  <Logo size={64} variant={v.id} className="text-white mx-auto" />
                  <span className="text-xs text-white/40 mt-2 block">64px</span>
                </div>
                <div className="text-center">
                  <Logo size={96} variant={v.id} className="text-white mx-auto" />
                  <span className="text-xs text-white/40 mt-2 block">96px</span>
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  <Logo size={32} variant={v.id} className="text-white" />
                  <span className="font-display font-black text-xl tracking-tight text-white">
                    On This Topic
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
