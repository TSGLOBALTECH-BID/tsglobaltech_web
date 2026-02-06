import type { Metadata } from "next";
import { common } from "../content";
import ServiceContent from "./serviceContent";

export const metadata: Metadata = {
  title: {
    default: `Services - ${common.companyName} | IT Solutions & Digital Transformation`,
    template: `%s Services | ${common.companyName}`
  },
  description: `Explore ${common.companyName}'s comprehensive IT services including AI solutions, web development, mobile apps, cloud computing, cybersecurity, and UI/UX design. We deliver cutting-edge technology solutions tailored to your business needs.`,
  keywords: [
    "IT services",
    "web development",
    "mobile app development",
    "cloud computing",
    "AI solutions",
    "machine learning",
    "artificial intelligence",
    "AI agents",
    "AI training",
    "technical guidance",
    "technology guidance",
    "AI consulting",
    "AI implementation",
    "AI development",
    "AI integration",
    "cybersecurity",
    "UI/UX design",
    "digital transformation",
    "software development",
    "custom software",
    "enterprise solutions",
    "business automation",
    "technology consulting",
    "business solutions",
    "software consulting",
    "IT consulting",
    "technology services",
    "digital solutions",
    "cloud solutions",
    "web applications",
    "mobile development",
    "app development",
    "AI tools",
    "AI platforms",
    "machine learning development",
    "deep learning",
    "neural networks",
    "AI chatbots",
    "AI assistants",
    "intelligent automation",
    "smart solutions",
    "AI strategy",
    "AI deployment",
    "AI optimization",
    "AI models",
    "AI systems",
    "AI services",
    "professional IT services",
    "business technology solutions",
    "software engineering",
    "technology integration",
    "digital consulting",
    "expert IT solutions"
  ],
  openGraph: {
    title: `Services - ${common.companyName} | IT Solutions & Digital Transformation`,
    description: `Explore ${common.companyName}'s comprehensive IT services including AI solutions, web development, mobile apps, cloud computing, cybersecurity, and UI/UX design. We deliver cutting-edge technology solutions tailored to your business needs.`,
    url: '/services',
    siteName: common.companyName,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `Services - ${common.companyName} - IT Solutions & Digital Transformation`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Services - ${common.companyName} | IT Solutions & Digital Transformation`,
    description: `Explore ${common.companyName}'s comprehensive IT services including AI solutions, web development, mobile apps, cloud computing, cybersecurity, and UI/UX design. We deliver cutting-edge technology solutions tailored to your business needs.`,
    images: ['/og-image.jpg'],
    creator: '@tsglobaltech',
  },
  alternates: {
    canonical: '/services',
    languages: {
      'en-US': '/en/services',
      'en-GB': '/en/services',
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

export default function Services() {

  return (
   <ServiceContent/>
  );
}
