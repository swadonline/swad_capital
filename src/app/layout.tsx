import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SWAD Digital Solutions - Powering the Future Through Technology',
    template: '%s | SWAD Digital Solutions'
  },
  description: 'SWAD Digital Solutions delivers scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients across emerging and developed markets.',
  keywords: [
    'technology solutions',
    'enterprise software',
    'cloud infrastructure', 
    'cybersecurity',
    'managed services',
    'digital transformation',
    'IT consulting',
    'software development',
    'cloud migration',
    'data protection',
    'SWAD Digital',
    'SWAD Holdings'
  ],
  authors: [{ name: 'SWAD Digital Solutions' }],
  creator: 'SWAD Digital Solutions',
  publisher: 'SWAD Digital Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.swaddigitalsolutions.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SWAD Digital Solutions - Powering the Future Through Technology',
    description: 'Building intelligent systems and resilient infrastructure that accelerate business transformation.',
    url: 'https://www.swaddigitalsolutions.com', // Replace with your actual domain
    siteName: 'SWAD Digital Solutions',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'SWAD Digital Solutions - Technology and Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWAD Digital Solutions - Powering the Future Through Technology',
    description: 'Building intelligent systems and resilient infrastructure that accelerate business transformation.',
    images: ['/og-image.jpg'], // You'll need to create this image
    creator: '@swadtech', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}