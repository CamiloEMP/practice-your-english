/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'i.imgur.com',
      'lh3.googleusercontent.com',
      'cdn.discordapp.com',
    ],
  },
}

module.exports = nextConfig
