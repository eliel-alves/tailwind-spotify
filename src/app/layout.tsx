import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'A Spotify clone using Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-text">{children}</body>
    </html>
  )
}
