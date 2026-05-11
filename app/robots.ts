import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://portfolio-gilt-seven-cpt480qp5k.vercel.app/sitemap.xml',
  }
}
