// Content Types for Site Content Management

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  lattitude: string;
  longitude: string;
}

export interface SocialLinks {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface FooterLinks {
  services: { name: string; href: string }[];
  company: { name: string; href: string }[];
  legal: { name: string; href: string }[];
}

export interface CommonContent {
  companyName: string;
  companyNameShort: string;
  companyDescription: string;
  tagline: string;
  contact: ContactInfo;
  socialLinks: SocialLinks;
  navItems: NavItem[];
  footerLinks: FooterLinks;
  legalText: string;  
  stats: { value: number; label: string }[];
}

export interface HeroContent {
  badge: string;
  title: string;
  titleGradient: string;
  titleSuffix: string;
  subtitle: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
}

export interface ServiceItem {
  name: string;
  description: string;
  learnMoreHref: string;
  icon: string;
  color: 'primary' | 'secondary' | 'accent' | 'green' | 'cyan' | 'pink';
}

export interface ServicesContent {
  sectionBadge: string;
  sectionTitle: string;
  sectionTitleGradient: string;
  sectionSubtitle: string;
  viewAllText: string;
  items: ServiceItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureCard {
  title: string;
  subtitle: string;
  icon: string;
}

export interface WhyChooseUsContent {
  sectionBadge: string;
  sectionTitle: string;
  sectionTitleGradient: string;
  sectionSubtitle: string;
  features: FeatureItem[];
  featureCards: FeatureCard[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  initials: string;
  role: string;
  rating: number;
}

export interface TestimonialsContent {
  sectionBadge: string;
  sectionTitle: string;
  sectionTitleGradient: string;
  sectionSubtitle: string;
  items: TestimonialItem[];
}

export interface CTAContent {
  sectionTitle: string;
  sectionTitleGradient: string;
  sectionSubtitle: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
}

export interface NavigationContent {
  ctaText: string;
  ctaHref: string;
}

export interface SiteContent {
  common: CommonContent;
  hero: HeroContent;
  services: ServicesContent;
  whyChooseUs: WhyChooseUsContent;
  testimonials: TestimonialsContent;
  cta: CTAContent;
  navigation: NavigationContent;
}
