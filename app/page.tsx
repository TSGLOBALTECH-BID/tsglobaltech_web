'use client';

import type { Metadata } from "next";
import { useCounters } from "./utils/interactions";

// export const metadata: Metadata = {
//   title: "TechVision - IT Solutions Company | Innovation Meets Excellence",
//   description: "TechVision - Leading IT Solutions Company providing innovative technology services",
//   keywords: "IT company, software development, web development, cloud solutions, AI, mobile apps",
//   openGraph: {
//     title: "TechVision - IT Solutions Company",
//     description: "Leading provider of innovative IT solutions and technology services",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "TechVision - IT Solutions Company",
//     description: "Leading provider of innovative IT solutions and technology services",
//   },
// };

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
              <span className="text-sm text-dark-300">Leading IT Solutions Provider</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Innovate.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Transform.</span>
              <br />
              Succeed.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We craft cutting-edge digital solutions that empower businesses to thrive in the modern technological landscape. From AI-driven applications to cloud-native platforms, we turn your vision into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/portfolio" className="btn-secondary text-lg px-8 py-4">
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="stat-card">
                <div className="text-3xl font-bold text-primary-400 counter" data-target="500">0</div>
                <div className="text-sm text-dark-400">Projects Delivered</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-bold text-secondary-400 counter" data-target="150">0</div>
                <div className="text-sm text-dark-400">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-bold text-accent-400 counter" data-target="50">0</div>
                <div className="text-sm text-dark-400">Team Members</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-bold text-primary-400 counter" data-target="15">0</div>
                <div className="text-sm text-dark-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="w-8 h-12 border-2 border-dark-500 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">Our Expertise</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">IT Solutions</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              From concept to deployment, we deliver end-to-end technology services tailored to your unique business requirements.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="service-card group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Web Development</h3>
              <p className="text-dark-400 mb-4">Custom websites and web applications built with modern frameworks like React, Vue, and Next.js for optimal performance.</p>
              <a href="/services" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="service-card group">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 border border-secondary-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Mobile Apps</h3>
              <p className="text-dark-400 mb-4">Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.</p>
              <a href="/services" className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-300 transition-colors">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="service-card group">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-500/20 to-accent-600/20 border border-accent-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
              <p className="text-dark-400 mb-4">Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud platforms.</p>
              <a href="/services" className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="service-card group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-dark-400 mb-4">Intelligent automation and data-driven solutions powered by advanced AI and ML algorithms.</p>
              <a href="/services" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Service Card 5 */}
            <div className="service-card group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-dark-400 mb-4">Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.</p>
              <a href="/services" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Service Card 6 */}
            <div className="service-card group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">UI/UX Design</h3>
              <p className="text-dark-400 mb-4">Beautiful, intuitive interfaces designed to enhance user engagement and drive conversions.</p>
              <a href="/services" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* View All Services */}
          <div className="text-center mt-12">
            <a href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services
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
              <span className="inline-block px-4 py-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Driving Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-pink-400">Transformation</span>
              </h2>
              <p className="text-dark-400 text-lg mb-8">
                At TechVision, we don't just build software – we create technology solutions that drive business growth and innovation. Our team of experts combines decades of experience with cutting-edge technologies to deliver results that matter.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Agile Development</h3>
                    <p className="text-dark-400">Iterative approach ensuring flexibility and continuous improvement throughout the project lifecycle.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
                    <p className="text-dark-400">Future-proof architecture designed to grow seamlessly with your business requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">24/7 Support</h3>
                    <p className="text-dark-400">Dedicated support team available round the clock to ensure your systems run smoothly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-colors">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-1">Fast Delivery</h4>
                    <p className="text-sm text-dark-400">On-time project completion</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-secondary-500/50 transition-colors">
                    <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-1">Secure</h4>
                    <p className="text-sm text-dark-400">Enterprise-grade security</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent-500/50 transition-colors">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-1">Cost-Effective</h4>
                    <p className="text-sm text-dark-400">Competitive pricing</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-colors">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-1">Expert Team</h4>
                    <p className="text-sm text-dark-400">Industry veterans</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-glow animate-float">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
            <span className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-4">Testimonials</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">Clients Say</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it – hear from some of our satisfied clients about their experience working with TechVision.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-dark-300 mb-6">"TechVision transformed our digital presence completely. Their team delivered our e-commerce platform ahead of schedule and exceeded all expectations. The attention to detail and technical expertise is outstanding."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">JD</div>
                <div>
                  <h4 className="font-semibold text-white">John Davidson</h4>
                  <p className="text-sm text-dark-400">CEO, RetailMax Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-dark-300 mb-6">"Working with TechVision was a game-changer for our startup. Their AI solutions helped us automate processes that were consuming 40% of our team's time. Highly recommended!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-semibold">SM</div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Mitchell</h4>
                  <p className="text-sm text-dark-400">Founder, DataFlow AI</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-dark-300 mb-6">"The mobile app TechVision built for us has over 100,000 downloads and a 4.8-star rating. Their team was professional, responsive, and delivered exactly what we needed."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">RK</div>
                <div>
                  <h4 className="font-semibold text-white">Raj Kumar</h4>
                  <p className="text-sm text-dark-400">CTO, HealthFirst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Digital Presence?</span>
          </h2>
          <p className="text-lg text-dark-300 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and discover how TechVision can help you achieve your business goals with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/portfolio" className="btn-secondary text-lg px-8 py-4">
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
