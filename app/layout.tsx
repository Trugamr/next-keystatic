import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next + Keystatic',
  description: 'Trying out keystatic with next',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="selection:bg-pink-200">{children}</body>
    </html>
  )
}
