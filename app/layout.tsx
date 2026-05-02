import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chinonso Ariel Onyemauchechukwu | Frontend Developer & Graphic Designer',
  description:
    'Frontend Developer and Graphic Designer with a strong focus on digital communication. Building visually engaging, user-focused digital experiences.',
  keywords: ['Frontend Developer', 'Graphic Designer', 'React', 'Next.js', 'UI/UX', 'Digital Communication'],
  authors: [{ name: 'Chinonso Ariel Onyemauchechukwu' }],
  openGraph: {
    title: 'Chinonso Ariel | Portfolio',
    description: 'Frontend Developer & Graphic Designer based in Benin City, Nigeria.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
