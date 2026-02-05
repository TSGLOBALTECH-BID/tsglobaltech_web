"use client";

import { useState } from 'react';
import PageHero from "../components/PageHero";

// export const metadata: Metadata = {
//   title: "Contact Us - TechVision | IT Solutions Company",
//   description: "Contact TechVision for your IT project needs. Get a free consultation for web development, mobile apps, cloud solutions, and more.",
//   keywords: "contact techvision, IT company contact, free consultation, project inquiry, get in touch",
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  

  return (
  <>
      <PageHero
        badge="Contact Us"
        title="Let's Build Something "
        titleGradient="Amazing Together"
        description="Ready to start your next project? We're here to help. Reach out to us for a free consultation and let's discuss how we can bring your vision to life."
        badgeColor="primary"
      />

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-dark-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your Company Inc."
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select bg-dark-900"
                  >
                    <option value="">Select a service...</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget" className="form-label">Project Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select bg-dark-900"
                  >
                    <option value="">Select budget range...</option>
                    <option value="small">$5,000 - $25,000</option>
                    <option value="medium">$25,000 - $75,000</option>
                    <option value="large">$75,000 - $150,000</option>
                    <option value="enterprise">$150,000+</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-lg">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-dark-400 mb-8">Prefer to talk directly? Here are the ways to reach us.</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-dark-400">+1 (555) 123-4567</p>
                    <p className="text-dark-500 text-sm">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 bg-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-dark-400">info@techvision.com</p>
                    <p className="text-dark-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 bg-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">Office</h3>
                    <p className="text-dark-400">123 Tech Street</p>
                    <p className="text-dark-400">Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-dark-900/50 rounded-2xl p-6 border border-white/10">
                <h3 className="font-heading text-lg font-semibold text-white mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="faq-item">
                    <button className="faq-button" aria-expanded="false">
                      <span>What is your typical project timeline?</span>
                      <svg className="faq-icon w-5 h-5 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    <div className="faq-content">
                      <p>Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.</p>
                    </div>
                  </div>
                  
                  <div className="faq-item">
                    <button className="faq-button" aria-expanded="false">
                      <span>Do you offer ongoing support?</span>
                      <svg className="faq-icon w-5 h-5 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    <div className="faq-content">
                      <p>Yes! We offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team is available 24/7 for critical issues.</p>
                    </div>
                  </div>
                  
                  <div className="faq-item">
                    <button className="faq-button" aria-expanded="false">
                      <span>How do you handle project confidentiality?</span>
                      <svg className="faq-icon w-5 h-5 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    <div className="faq-content">
                      <p>We sign comprehensive NDAs with all clients. Your project details, data, and intellectual property are kept strictly confidential. We also implement secure development practices to protect your assets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-dark-400">Located in the heart of Silicon Valley</p>
          </div>
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
            <div className="aspect-[21/9] bg-dark-800 rounded-2xl flex items-center justify-center border border-white/5">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">TechVision HQ</h3>
                <p className="text-dark-400">123 Tech Street, Silicon Valley, CA 94025</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-400 mt-4 hover:text-primary-300 transition-colors">
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Digital Transformation?</span>
          </h2>
          <p className="text-lg text-dark-300 mb-10">Let's schedule a free consultation to discuss your project.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+15551234567" className="btn-primary text-lg px-8 py-4">Call Us Now</a>
            <a href="/services" className="btn-secondary text-lg px-8 py-4">Explore Services</a>
          </div>
        </div>
      </section>
    </>
  );
}
