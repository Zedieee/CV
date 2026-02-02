import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brian Hermam Gargallo Carnalla - Professional Experience Portfolio',
  description: 'Brian Gargallo CV and Portfolio',
  icons: {
    icon: 'icon.svg', // /public path
  },
  alternates: {
    languages: {
      en: 'https://www.brian-g.com/?lang=en',
      es: 'https://www.brian-g.com/?lang=es',
      'x-default': 'https://www.brian-g.com/?lang=en',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${inter.className} bg-github-bg text-github-text font-display antialiased min-h-screen flex flex-col items-center py-16 px-6`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
