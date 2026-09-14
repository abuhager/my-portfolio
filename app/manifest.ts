import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Adham Abu Hager — Full Stack Developer',
    short_name: 'Adham Abu Hager',
    description:
      'Portfolio of Adham Abu Hager, a Full Stack Developer based in Amman, Jordan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3f1ea',
    theme_color: '#f3f1ea',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
