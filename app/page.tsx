import { Metadata } from "next";
import HomeContent from "./HomeContent";
import { common } from "./content";

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
    "AI services"
  ],
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
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'en-GB': '/en',
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

export default function Home() {
  return <HomeContent/>
}
