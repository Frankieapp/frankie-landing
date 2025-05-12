// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config: import('webpack').Configuration) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        '@': require('path').resolve(__dirname, './src'),
      },
    };
    return config;
  },
};

export default nextConfig;
