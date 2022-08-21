/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['54.169.31.224', 'flowbite.com'],
  },
}

module.exports = nextConfig
