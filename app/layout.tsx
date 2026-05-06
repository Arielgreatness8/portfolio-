import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chinonso Ariel Onyemauchechukwu | Frontend Developer & Graphic Designer',
  description: 'Frontend Developer and Graphic Designer with a strong focus on digital communication.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
