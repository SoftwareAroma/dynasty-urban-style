/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'assets.vercel.com',
      'dummyimage.com',
      'googleusercontent.com',
      'avatars.githubusercontent.com',
      'firebasestorage.googleapis.com/',
      'flowbite.com',
      'source.unsplash.com',
      'picsum.photos',
      'static.xx.fbcdn.net',
      "cdn.dribbble.com",
      "images.unsplash.com",
      "www.gravatar.com",
      "cdn.onedio.com",
      "s3 - us - west - 2.amazonaws.com",
    ],
  },
  env: {
    API_URL: 'http://localhost:5000',
  },
}

module.exports = nextConfig
