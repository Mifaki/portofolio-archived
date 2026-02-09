/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "84y8dhtha6.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
