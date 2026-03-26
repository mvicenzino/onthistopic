import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about-1', destination: '/about', permanent: true },
      { source: '/why-it-works-1', destination: '/why-it-works', permanent: true },
      { source: '/contact-1', destination: '/contact', permanent: true },
    ]
  },
}

export default nextConfig
