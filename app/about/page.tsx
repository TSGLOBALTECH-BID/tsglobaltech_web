import type { Metadata } from "next";
import { common } from '../content';
import AboutContent from "./aboutContent";

export const metadata: Metadata = {
  title: {
    default: `About ${common.companyName} - IT Solutions & Digital Transformation`,
    template: `About %s | ${common.companyName}`
  },
  description: `Learn about ${common.companyName} - a leading IT solutions provider founded in 2025, offering innovative web development, mobile apps, cloud services, and AI solutions for digital transformation.`,
  keywords: [
    "about TS Global Tech",
    "company profile",
    "IT company",
    "technology company",
    "web development company",
    "AI solutions company",
    "software development company",
    "digital transformation",
    "business technology",
    "IT consulting",
    "technology solutions",
    "company story",
    "tech company",
    "software company",
    "IT services provider",
    "digital solutions",
    "technology consulting",
    "business solutions",
    "innovation",
    "expertise",
    "professional services"
  ],
  openGraph: {
    title: `About ${common.companyName} - IT Solutions & Digital Transformation`,
    description: `Learn about ${common.companyName} - a leading IT solutions provider founded in 2025, offering innovative web development, mobile apps, cloud services, and AI solutions for digital transformation.`,
    url: '/about',
    siteName: common.companyName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `About ${common.companyName} - IT Solutions & Digital Transformation`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${common.companyName} - IT Solutions & Digital Transformation`,
    description: `Learn about ${common.companyName} - a leading IT solutions provider founded in 2025, offering innovative web development, mobile apps, cloud services, and AI solutions for digital transformation.`,
    images: ['/og-image.jpg'],
    creator: '@tsglobaltech',
  },
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en/about',
      'en-GB': '/en/about',
    },
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

export default function About() {
  return (
    <AboutContent />
  );
}
