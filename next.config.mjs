/** @type {import('next').NextConfig} */
const nextConfig = {
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
