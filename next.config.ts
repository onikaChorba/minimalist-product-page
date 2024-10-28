import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "out",
  reactStrictMode: true,
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

export default nextConfig;
