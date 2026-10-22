/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "modularcarpet.com.au" }],
      destination: "https://www.modularcarpet.com.au/:path*",
      permanent: true,
    }];
  },
};

export default nextConfig;
