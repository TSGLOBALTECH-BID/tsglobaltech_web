'use client';
import type { Metadata } from "next";

import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import PageHero from "../components/PageHero";
import { usePortfolioFilter } from "../utils/interactions";

// export const metadata: Metadata = {
//   title: "Our Portfolio - TechVision | IT Solutions Company",
//   description: "Explore TechVision's portfolio of successful projects including web applications, mobile apps, cloud solutions, and AI-powered platforms.",
//   keywords: "portfolio, case studies, projects, web development, mobile apps, software solutions",
// };

export default function Portfolio() {
  // Use the custom portfolio filter hook
  usePortfolioFilter();

  return (
    <>

<PageHero
        badge="Our Portfolio"
        title="Success "
        titleGradient="Stories"
        description="Explore our diverse portfolio of successful projects across industries. Each project represents our commitment to excellence and innovation."
        badgeColor="primary"
      />

      {/* Portfolio Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="portfolio-filter active bg-primary-500 text-white px-6 py-2 rounded-full transition-all duration-300" data-filter="all">
              All Projects
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="web">
              Web Development
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="mobile">
              Mobile Apps
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="cloud">
              Cloud Solutions
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="ai">
              AI & ML
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - E-Commerce Platform */}
            <div className="portfolio-item group" data-category="web">
              <div className="w-full h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
                  <p className="text-dark-400 text-sm">Full-stack e-commerce solution with real-time inventory</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
                <p className="text-dark-300 text-sm mb-4">Built a scalable e-commerce platform processing $10M+ annually</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-secondary-500/20 text-secondary-400 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-400 text-xs rounded-full">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2 - Healthcare App */}
            <div className="portfolio-item group" data-category="mobile">
              <div className="w-full h-64 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">Healthcare App</h3>
                  <p className="text-dark-400 text-sm">HIPAA-compliant telemedicine platform</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">Healthcare App</h3>
                <p className="text-dark-300 text-sm mb-4">100K+ downloads with 4.8-star rating on app stores</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Firebase</span>
                </div>
              </div>
            </div>

            {/* Project 3 - Cloud Migration */}
            <div className="portfolio-item group" data-category="cloud">
              <div className="w-full h-64 bg-gradient-to-br from-accent-500/20 to-green-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">Cloud Migration</h3>
                  <p className="text-dark-400 text-sm">Enterprise cloud migration for Fortune 500</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">Cloud Migration</h3>
                <p className="text-dark-300 text-sm mb-4">Reduced infrastructure costs by 40% with AWS migration</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">AWS</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Terraform</span>
                </div>
              </div>
            </div>

            {/* Project 4 - AI Analytics Dashboard */}
            <div className="portfolio-item group" data-category="ai">
              <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">AI Analytics Dashboard</h3>
                  <p className="text-dark-400 text-sm">Predictive analytics with machine learning</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">AI Analytics Dashboard</h3>
                <p className="text-dark-300 text-sm mb-4">95% accuracy in predictive modeling for sales forecasting</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary-500/20 text-secondary-400 text-xs rounded-full">Python</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">TensorFlow</span>
                </div>
              </div>
            </div>

            {/* Project 5 - SaaS Dashboard */}
            <div className="portfolio-item group" data-category="web">
              <div className="w-full h-64 bg-gradient-to-br from-pink-500/20 to-primary-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">SaaS Dashboard</h3>
                  <p className="text-dark-400 text-sm">Enterprise SaaS platform with real-time data</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">SaaS Dashboard</h3>
                <p className="text-dark-300 text-sm mb-4">Serving 500+ enterprise clients with 99.99% uptime</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">Vue.js</span>
                  <span className="px-3 py-1 bg-secondary-500/20 text-secondary-400 text-xs rounded-full">Python</span>
                </div>
              </div>
            </div>

            {/* Project 6 - Fitness App */}
            <div className="portfolio-item group" data-category="mobile">
              <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-secondary-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">Fitness App</h3>
                  <p className="text-dark-400 text-sm">AI-powered personal fitness trainer</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">Fitness App</h3>
                <p className="text-dark-300 text-sm mb-4">500K+ active users with personalized workout plans</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-secondary-500/20 text-secondary-400 text-xs rounded-full">ML Kit</span>
                </div>
              </div>
            </div>

            {/* Project 7 - Learning Platform */}
            <div className="portfolio-item group" data-category="web">
              <div className="w-full h-64 bg-gradient-to-br from-yellow-500/20 to-accent-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">Learning Platform</h3>
                  <p className="text-dark-400 text-sm">EdTech platform with live collaboration</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">Learning Platform</h3>
                <p className="text-dark-300 text-sm mb-4">50K+ students enrolled with 95% completion rate</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">WebRTC</span>
                </div>
              </div>
            </div>

            {/* Project 8 - Serverless Platform */}
            <div className="portfolio-item group" data-category="cloud">
              <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">Serverless Platform</h3>
                  <p className="text-dark-400 text-sm">Event-driven serverless architecture</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">Serverless Platform</h3>
                <p className="text-dark-300 text-sm mb-4">Handling 1M+ events daily with zero downtime</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">AWS Lambda</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">DynamoDB</span>
                </div>
              </div>
            </div>

            {/* Project 9 - Chatbot Platform */}
            <div className="portfolio-item group">
              <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">Chatbot Platform</h3>
                  <p className="text-dark-400 text-sm">NLP-powered customer support chatbot</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">Chatbot Platform</h3>
                <p className="text-dark-300 text-sm mb-4">Reduced support tickets by 60% with 24/7 automation</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary-500/20 text-secondary-400 text-xs rounded-full">OpenAI</span>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-dark-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-400 mb-2">150+</div>
              <div className="text-dark-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">15+</div>
              <div className="text-dark-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">30+</div>
              <div className="text-dark-400">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Become Our Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Success Story?</span>
          </h2>
          <p className="text-lg text-dark-300 mb-10">Let's discuss how we can help bring your project to life.</p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">Start Your Project</a>
        </div>
      </section>
    </>
  );
}
