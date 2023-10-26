const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/docker-101',
  output: 'export',
  images: { unoptimized: true },
};

module.exports = withBundleAnalyzer(nextConfig);
