/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerceplatform-y7ck.onrender.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
