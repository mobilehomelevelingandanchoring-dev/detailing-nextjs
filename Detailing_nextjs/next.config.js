const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Canonical domain enforcement ─────────────────────────────────────────
  // Redirect bare domain to www. Vercel also handles this at the edge level,
  // but Next.js-level redirects ensure it works in all hosting contexts.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'srvdetailing.co.uk' }],
        destination: 'https://www.srvdetailing.co.uk/:path*',
        permanent: true, // 308 → 301 for GET
      },
    ];
  },

  // ─── Security & crawl-signal headers ──────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME sniffing — avoids content injection vectors
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Disallow framing (clickjacking protection, also an E-E-A-T trust signal)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Send full referrer to same-origin, origin-only across origins
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Disable legacy browser XSS filter (modern CSP is preferred)
          { key: 'X-XSS-Protection', value: '0' },
          // Limit permission access to minimum required
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
      // Long-lived cache for static assets (images, fonts, JS chunks)
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|gif|svg|woff|woff2|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ─── Image optimisation ────────────────────────────────────────────────────
  images: {
    // Serve modern formats by default (Next.js already does this, explicit for clarity)
    formats: ['image/avif', 'image/webp'],
    // Breakpoints that match Tailwind's responsive prefixes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovable.dev',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },

  // ─── Build ────────────────────────────────────────────────────────────────
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Remove "X-Powered-By: Next.js" header (minor security hardening)
  poweredByHeader: false,
  // Enable gzip/brotli compression for text responses
  compress: true,
};

module.exports = nextConfig;
