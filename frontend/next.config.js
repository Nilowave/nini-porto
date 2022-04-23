/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost'],
  },
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  webpack(config) {
    // const path = require('path');

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   modules: [path.resolve('./src'), path.resolve('./node_modules')],
    //   // your aliases
    // };

    return config;
  },
};

module.exports = nextConfig;
