/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:4000/api/:slug*',
      },
    ];
  },
  images: {
    domains: ['via.placeholder.com', 'dummyimage.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
