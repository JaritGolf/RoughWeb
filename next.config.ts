import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Improve dev server stability
  experimental: {
    // Enable more stable file watching
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    },
  },
  // Optimize for development
  swcMinify: true,
  // Increase memory limit for better stability
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Disable some features that can cause instability in dev
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
