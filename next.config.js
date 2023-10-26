const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProduction ? 'https://retr0327.github.io/docker-101' : '/',
  output: 'export',
  images: { unoptimized: true },
};

module.exports = withBundleAnalyzer(nextConfig);
