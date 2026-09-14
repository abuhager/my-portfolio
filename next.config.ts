import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/abuhager/Aoun-Project_FrontEnd/main/docs/screenshots/**',
      },
    ],
  },
};

export default nextConfig;
