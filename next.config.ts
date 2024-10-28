import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: "out",
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

export default nextConfig;
