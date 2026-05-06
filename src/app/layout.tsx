import type { Metadata } from 'next'
import { Noto_Serif, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dr. Bhushan PRP | Clinical Excellence in Hair Restoration',
    template: '%s | Dr. Bhushan Hair Restoration Clinic',
  },
  description:
    'Dr. Bhushan combines advanced PRP therapy with clinical precision to stimulate natural hair growth and restore confidence through personalized medical protocols.',
  keywords: [
    'hair restoration',
    'PRP therapy',
    'FUE transplant',
    'DHI implantation',
    'hair loss treatment',
    'Dr. Bhushan',
    'hair graft calculator',
    'Harley Street clinic',
  ],
  authors: [{ name: 'Dr. Bhushan Hair Restoration Clinic' }],
  metadataBase: new URL('https://www.drbhushanprp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.drbhushanprp.com',
    siteName: 'Dr. Bhushan Hair Restoration Clinic',
    title: 'Dr. Bhushan PRP | Clinical Excellence in Hair Restoration',
    description:
      'Science-backed hair restoration through PRP therapy, FUE transplant, and personalized clinical protocols.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Bhushan Hair Restoration Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Bhushan PRP | Clinical Excellence in Hair Restoration',
    description:
      'Science-backed hair restoration through PRP therapy and FUE transplant.',
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Dr. Bhushan Hair Restoration Clinic',
  url: 'https://www.drbhushanprp.com',
  description:
    'Clinical hair restoration through PRP therapy, FUE transplant, and DHI implantation.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '102 Harley Street, Marylebone',
    addressLocality: 'London',
    postalCode: 'W1G 7JB',
    addressCountry: 'GB',
  },
  telephone: '+44-20-7946-0123',
  email: 'clinical@drbhushanprp.com',
  medicalSpecialty: 'Dermatology',
  openingHours: 'Mo-Sa 09:00-19:00',
  priceRange: '$$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${notoSerif.variable} ${manrope.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
