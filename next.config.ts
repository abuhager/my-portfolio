import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'my-portfolio-five-azure-69.vercel.app',
          },
        ],
        destination: 'https://www.adhamabuhagerdev.site/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
