import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/minimalist-product-page',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

export default nextConfig;
