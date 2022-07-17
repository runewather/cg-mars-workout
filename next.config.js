/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cgcdn.s3.amazonaws.com", "virtual-library.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
