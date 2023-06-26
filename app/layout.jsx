import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayonnaise. Saucery. Perfection.',
  description: 'Mayonnaise is not just a web application, it is more and better than that. It is the sauce.',
  metadataBase: new URL('https://mayonnaise.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    siteName: 'Mayonnaise.',
    type: 'website',
    images: '/cover.png'
  },
  twitter: { 
    card: 'summary_large_image'
  },
  themeColor: '#c03b17'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}