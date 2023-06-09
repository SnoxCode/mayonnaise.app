import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayonnaise',
  description: 'Mayonnaise is a web application that happens to be accessible 24/7 from anywhere. Well, you do require a stable internet connection.',
  metadataBase: new URL('https://mayonnaise.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
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