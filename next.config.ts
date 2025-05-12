// next.config.js
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': require('path').resolve(__dirname, './src'),
      '@lib': require('path').resolve(__dirname, './lib'),
    };
    return config;
  },
};

module.exports = nextConfig;
