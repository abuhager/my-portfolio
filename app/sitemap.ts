import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://adhamabuhagerdev.site',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://adhamabuhagerdev.site/projects/helpdesk',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
