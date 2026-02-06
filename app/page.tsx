'use client';

import { useCounters } from "./utils/interactions";
import { common, hero, services, whyChooseUs, testimonials, cta } from "./content";

export default function Home() {
  // Use the custom counter hook for animated statistics
  useCounters();

  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary-500/5 via-secondary-500/5 to-accent-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-dark-300">{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              {hero.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">{hero.titleGradient}</span>
              <br />
              {hero.titleSuffix}.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href={hero.ctaPrimary.href} className="btn-primary text-lg px-8 py-4">
                {hero.ctaPrimary.text}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href={hero.ctaSecondary.href} className="btn-secondary text-lg px-8 py-4">
                {hero.ctaSecondary.text}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {common.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="text-3xl font-bold text-primary-400">
                    <span className="counter" data-target={stat.value}>0</span>+
                  </div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="w-8 h-12 border-2 border-dark-500 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">{services.sectionBadge}</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {services.sectionTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">{services.sectionTitleGradient}</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              {services.sectionSubtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.items.map((service, index) => (
              <div key={index} className="service-card group">
                <div className={`w-14 h-14 bg-gradient-to-br from-${service.color}-500/20 to-${service.color}-600/20 border border-${service.color}-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-7 h-7 text-${service.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-dark-400 mb-4">{service.description}</p>
                <a href={service.learnMoreHref} className={`inline-flex items-center gap-2 text-${service.color}-400 hover:text-${service.color}-300 transition-colors`}>
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* View All Services */}
          <div className="text-center mt-12">
            <a href="/services" className="btn-secondary inline-flex items-center gap-2">
              {services.viewAllText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-sm font-medium mb-4">{whyChooseUs.sectionBadge}</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {whyChooseUs.sectionTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-pink-400">{whyChooseUs.sectionTitleGradient}</span>
              </h2>
              <p className="text-dark-400 text-lg mb-8">
                {whyChooseUs.sectionSubtitle}
              </p>

              <div className="space-y-6">
                {whyChooseUs.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-dark-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {whyChooseUs.featureCards.map((card, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-colors">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-white mb-1">{card.title}</h4>
                      <p className="text-sm text-dark-400">{card.subtitle}</p>
                    </div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-15 h-15 bg-gradient-to-br from-white to-secondary-500 rounded-2xl flex items-center justify-center shadow-glow animate-float">
                 <img src="/site-logo.svg" alt="" />
                  {/* <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-4">{testimonials.sectionBadge}</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {testimonials.sectionTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">{testimonials.sectionTitleGradient}</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              {testimonials.sectionSubtitle}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.items.map((item, index) => (
              <div key={index} className="testimonial-card flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, starIndex) => (
                    <svg key={starIndex} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark-300 mb-6 flex-grow">"{item.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">{item.initials}</div>
                  <div>
                    <h4 className="font-semibold text-white">{item.author}</h4>
                    <p className="text-sm text-dark-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {cta.sectionTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">{cta.sectionTitleGradient}</span>
          </h2>
          <p className="text-lg text-dark-300 mb-10 max-w-2xl mx-auto">
            {cta.sectionSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={cta.ctaPrimary.href} className="btn-primary text-lg px-8 py-4">
              {cta.ctaPrimary.text}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href={cta.ctaSecondary.href} className="btn-secondary text-lg px-8 py-4">
              {cta.ctaSecondary.text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
