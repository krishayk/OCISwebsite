import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Official California Innovators Society | Empowering Students. Strengthening Communities.',
  description: 'OCIS connects youth innovation with real-world business and civic challenges across California through hands-on workshops and collaboration.',
  keywords: 'California, innovation, students, workshops, business, civic, collaboration, youth',
  authors: [{ name: 'Official California Innovators Society' }],
  creator: 'Official California Innovators Society',
  publisher: 'Official California Innovators Society',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ocis.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ocis.org',
    siteName: 'Official California Innovators Society',
    title: 'Official California Innovators Society | Empowering Students. Strengthening Communities.',
    description: 'OCIS connects youth innovation with real-world business and civic challenges across California through hands-on workshops and collaboration.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Official California Innovators Society | Empowering Students. Strengthening Communities.',
    description: 'OCIS connects youth innovation with real-world business and civic challenges across California through hands-on workshops and collaboration.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
