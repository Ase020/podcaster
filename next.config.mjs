/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lovely-flamingo-139.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "honorable-spoonbill-776.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "img.clerk.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
