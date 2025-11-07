import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const lastmod = new Date().toISOString();
  const paths = ['/', '/about', '/skills', '/experience', '/projects', '/contact'];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: lastmod, changeFrequency: 'weekly', priority: p === '/' ? 1 : 0.7 }));
}

