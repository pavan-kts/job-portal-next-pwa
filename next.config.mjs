/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import withPWA from 'next-pwa';

// const isDevelopment = process.env.NODE_ENV === 'development';

const pwaConfig = {
  dest: 'public',
//   disable: isDevelopment, // Disable PWA in development mode
};

const nextConfig = {
  reactStrictMode: true,
  // other Next.js configuration options
};

export default withPWA(pwaConfig)(nextConfig);
