import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - #SafeZone',
    default: '#SafeZone - Your Personal Safety Companion',
  },
  description:
    'Empower yourself with #SafeZone. Report incidents, receive real-time alerts, and stay connected with our AI companion. Join the community making neighborhoods safer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-blue-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
