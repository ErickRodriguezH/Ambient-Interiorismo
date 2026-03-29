/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/tarjeta',     destination: '/tarjetas/ambienta/felipe', permanent: true },
      { source: '/tarjeta-fdav', destination: '/tarjetas/fdav/felipe',    permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
