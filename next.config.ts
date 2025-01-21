import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // For best debugging, you can try "eval-source-map" or "inline-source-map"
      config.devtool = 'eval-source-map';
    }
    return config;
  },
  output: 'export',
};

export default nextConfig;
