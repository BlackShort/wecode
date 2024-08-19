import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Metadata } from 'next'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'WeCode | Official',
  description: 'A community-driven club dedicated to empowering individuals to explore the world of programming.',
  icons:{
    icon:'./wecode-light.png'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable,
          'bg-background text-text'
        )}
      >
        {children}
      </body>
    </html>
  )
}
