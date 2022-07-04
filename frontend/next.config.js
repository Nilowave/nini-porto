/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  transpile: ['gsap'],
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
  eslint: {
    dirs: ['src'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
