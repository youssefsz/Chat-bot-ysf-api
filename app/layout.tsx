import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Chat API - AI-Powered Conversations',
  description: 'A powerful AI chat API built for developers. Integrate intelligent conversations into your applications with ease.',
  keywords: 'AI, Chat API, Mistral AI, Developer Tools, Chatbot, API Integration',
  authors: [{ name: 'Youssef Dhibi', url: 'https://youssef.tn' }],
  creator: 'Youssef Dhibi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
