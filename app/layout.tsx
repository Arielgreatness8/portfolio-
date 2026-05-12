import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chinonso Ariel | Frontend Developer & Graphic Designer',
  description: 'Chinonso Ariel Onyemauchechukwu — Frontend Developer, Graphic Designer and Digital Communication Specialist. Available for freelance and remote work worldwide.',
  keywords: [
    'Frontend Developer',
    'Graphic Designer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'UI UX Designer',
    'Freelance Developer',
    'Remote Developer',
    'Chinonso Ariel',
    'CAEVO',
    'Digital Communication Specialist',
    'Portfolio',
    'JavaScript Developer',
    'Tailwind CSS',
    'Framer Motion',
    'Nigeria Developer',
    'Africa Developer',
  ],
  authors: [{ name: 'Chinonso Ariel Onyemauchechukwu' }],
  creator: 'Chinonso Ariel Onyemauchechukwu',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-gilt-seven-cpt480qp5k.vercel.app',
    title: 'Chinonso Ariel | Frontend Developer & Graphic Designer',
    description: 'Frontend Developer and Graphic Designer building visually engaging, user-focused digital experiences worldwide.',
    siteName: 'Chinonso Ariel — CAEVO',
    images: [
      {
        url: '/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Chinonso Ariel — Frontend Developer & Graphic Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinonso Ariel | Frontend Developer & Graphic Designer',
    description: 'Frontend Developer and Graphic Designer. Available for remote work worldwide.',
    images: ['/logo-full.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://portfolio-gilt-seven-cpt480qp5k.vercel.app" />
        <meta name="theme-color" content="#A855F7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Benin City, Nigeria" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Chinonso Ariel Onyemauchechukwu',
              alternateName: 'CAEVO',
              url: 'https://portfolio-gilt-seven-cpt480qp5k.vercel.app',
              image: '/logo-full.png',
              jobTitle: 'Frontend Developer & Graphic Designer',
              worksFor: {
                '@type': 'Organization',
                name: 'CAEVO',
              },
              sameAs: [
                'https://github.com/Arielgreatness8',
                'https://www.linkedin.com/in/onyemauchechukwu-chinonso-ariel-582042341',
              ],
              knowsAbout: [
                'Frontend Development',
                'Graphic Design',
                'React',
                'Next.js',
                'Tailwind CSS',
                'UI/UX Design',
                'Digital Communication',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
