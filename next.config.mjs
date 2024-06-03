/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lovely-flamingo-139.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
