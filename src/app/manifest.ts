import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SWAD Digital Solutions - Technology and Innovation',
    short_name: 'SWAD Digital',
    description: 'SWAD Digital Solutions delivers scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients across emerging and developed markets.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6C0000',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'technology', 'enterprise'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}

