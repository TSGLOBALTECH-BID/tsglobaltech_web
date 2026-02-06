import siteContent from './site-content.json';
import type { SiteContent } from './types';

// Type assertion for the imported JSON
const content: SiteContent = siteContent as SiteContent;

// Helper functions for easy content access
export const getContent = () => content;

export const common = content.common;
export const hero = content.hero;
export const services = content.services;
export const whyChooseUs = content.whyChooseUs;
export const testimonials = content.testimonials;
export const cta = content.cta;
export const navigation = content.navigation;

// Re-export types for convenience
export type { SiteContent } from './types';
export type { CommonContent } from './types';
export type { HeroContent } from './types';
export type { ServicesContent } from './types';
export type { WhyChooseUsContent } from './types';
export type { TestimonialsContent } from './types';
export type { CTAContent } from './types';
export type { NavigationContent } from './types';

export default content;
