import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brian Gargallo',
  description: 'Brian Gargallo CV and Portfolio',
  icons: {
    icon: 'icon.svg' , // /public path
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
