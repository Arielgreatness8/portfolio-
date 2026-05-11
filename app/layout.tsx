import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chinonso Ariel | Frontend Developer & Graphic Designer Nigeria',
  description: 'Chinonso Ariel Onyemauchechukwu — Frontend Developer, Graphic Designer and Digital Communication Specialist based in Benin City, Nigeria. Available for freelance and remote work worldwide.',
  keywords: [
    'Frontend Developer Nigeria',
    'Graphic Designer Nigeria',
    'Web Developer Benin City',
    'React Developer Nigeria',
    'UI UX Designer Nigeria',
    'Freelance Developer Nigeria',
    'Chinonso Ariel',
    'CAEVO',
    'Digital Communication Specialist',
    'Next.js Developer Nigeria',
    'Portfolio Nigeria',
    'Remote Developer Africa',
  ],
  authors: [{ name: 'Chinonso Ariel Onyemauchechukwu' }],
  creator: 'Chinonso Ariel Onyemauchechukwu',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://portfolio-gilt-seven-cpt480qp5k.vercel.app',
    title: 'Chinonso Ariel | Frontend Developer & Graphic Designer',
    description: 'Frontend Developer and Graphic Designer based in Nigeria. Building visually engaging digital experiences.',
    siteName: 'Chinonso Ariel Portfolio',
    images: [
      {
        url: '/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Chinonso Ariel Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinonso Ariel | Frontend Developer & Graphic Designer',
    description: 'Frontend Developer and Graphic Designer based in Nigeria.',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
