import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://my-portfolio-five-azure-69.vercel.app',
      lastModified: new Date('2026-09-14'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
