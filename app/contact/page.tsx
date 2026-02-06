import type { Metadata } from "next";
import { common } from '../content';
import ContactContent from "./contactContent";

export const metadata: Metadata = {
  title: {
    default: `Contact ${common.companyName} - IT Solutions & Digital Transformation`,
    template: `Contact %s | ${common.companyName}`
  },
  description: `Get in touch with ${common.companyName} for expert IT solutions, web development, mobile apps, AI consulting, and digital transformation services. Schedule a free consultation with our technology specialists.`,
  keywords: [
    "contact TS Global Tech",
    "IT company contact",
    "free consultation",
    "technology consultation",
    "web development contact",
    "AI solutions contact",
    "software development inquiry",
    "business inquiry",
    "project consultation",
    "IT services contact",
    "digital transformation contact",
    "expert IT advice",
    "technology solutions",
    "professional IT services",
    "business technology consulting",
    "software consulting",
    "IT consulting",
    "technology consulting",
    "digital solutions",
    "innovation consulting",
    "expert guidance",
    "technical support",
    "AI implementation",
    "AI development",
    "AI integration",
    "AI consulting",
    "AI training",
    "AI agents",
    "technical guidance",
    "technology guidance",
    "business solutions",
    "enterprise solutions",
    "custom software",
    "IT solutions provider",
    "technology services"
  ],
  openGraph: {
    title: `Contact ${common.companyName} - IT Solutions & Digital Transformation`,
    description: `Get in touch with ${common.companyName} for expert IT solutions, web development, mobile apps, AI consulting, and digital transformation services. Schedule a free consultation with our technology specialists.`,
    url: '/contact',
    siteName: common.companyName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `Contact ${common.companyName} - IT Solutions & Digital Transformation`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${common.companyName} - IT Solutions & Digital Transformation`,
    description: `Get in touch with ${common.companyName} for expert IT solutions, web development, mobile apps, AI consulting, and digital transformation services. Schedule a free consultation with our technology specialists.`,
    images: ['/og-image.jpg'],
    creator: '@tsglobaltech',
  },
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en/contact',
      'en-GB': '/en/contact',
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

export default function Contact() {
  return (
    <ContactContent />
  );
}
