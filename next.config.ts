import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // distDir: 'docs',
  basePath: '/website',
  assetPrefix: '/website/',
  trailingSlash: true
};

export default nextConfig;
