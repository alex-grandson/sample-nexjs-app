/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
