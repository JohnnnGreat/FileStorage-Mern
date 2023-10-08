/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
