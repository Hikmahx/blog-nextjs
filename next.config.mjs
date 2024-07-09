/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
        pathname: '**',
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
