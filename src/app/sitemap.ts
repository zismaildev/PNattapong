import { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.url;

  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];

  const projectRoutes = projectsData.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
