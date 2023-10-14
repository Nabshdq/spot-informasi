/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zrbekjgqpvnyqcvbmobw.supabase.co'
      },
    ],
  },
}

module.exports = nextConfig
