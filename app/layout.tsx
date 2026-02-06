import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LoadingProvider from "./components/LoadingProvider";
import { common } from "./content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${common.companyName} - IT Solutions & Digital Transformation`,
    template: `%s | ${common.companyName}`
  },
  description: "Leading IT solutions provider offering web development, mobile apps, cloud services, and AI solutions for digital transformation.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile apps",
    "cloud computing",
    "AI solutions",
    "machine learning",
    "cybersecurity",
    "UI/UX design",
    "digital transformation",
    "software development",
    "technology consulting",
    "business solutions"
  ],
  authors: [{ name: common.companyName }],
  creator: common.companyName,
  publisher: common.companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tsglobaltech.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'en-GB': '/en',
    },
  },
  openGraph: {
    title: `${common.companyName} - IT Solutions & Digital Transformation`,
    description: "Leading IT solutions provider offering web development, mobile apps, cloud services, and AI solutions for digital transformation.",
    url: '/',
    siteName: common.companyName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${common.companyName} - IT Solutions & Digital Transformation`,
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: `${common.companyName} Logo`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${common.companyName} - IT Solutions & Digital Transformation`,
    description: "Leading IT solutions provider offering web development, mobile apps, cloud services, and AI solutions for digital transformation.",
    images: ['/og-image.jpg'],
    creator: '@tsglobaltech',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1bb1dc' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#1bb1dc',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#1bb1dc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1bb1dc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={common.companyName} />
        <meta name="application-name" content={common.companyName} />
        <meta name="msapplication-TileColor" content="#1bb1dc" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-dark-950 text-dark-100`}
      >
        <LoadingProvider>
          <div className="min-h-screen">
            {/* Navigation */}
            <Navigation />
            <main className="">
              {children}
            </main>
            {/* Footer */}
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
