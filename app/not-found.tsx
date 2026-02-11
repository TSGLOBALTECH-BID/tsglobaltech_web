'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-primary-500 opacity-20">
            404
          </div>
          <div className={`absolute inset-0 flex items-center justify-center text-9xl font-bold text-primary-400 transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            404
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-dark-400 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for seems to have vanished into the digital void. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-lg border border-dark-700 transition-all duration-200 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="bg-dark-900/50 rounded-2xl p-8 border border-dark-800">
          <h2 className="text-2xl font-semibold text-white mb-6">Looking for something?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Link 
              href="/services"
              className="group p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-all duration-200 hover:bg-dark-800"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-500/30 transition-colors">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A8.997 8.997 0 1112 3a8.997 8.997 0 019 10.255zM12 8v4l3 3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  Services
                </h3>
              </div>
              <p className="text-dark-400 text-sm">
                Explore our comprehensive range of digital solutions
              </p>
            </Link>

            <Link 
              href="/portfolio"
              className="group p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-all duration-200 hover:bg-dark-800"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-secondary-500/30 transition-colors">
                  <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-secondary-400 transition-colors">
                  Portfolio
                </h3>
              </div>
              <p className="text-dark-400 text-sm">
                Discover our latest projects and success stories
              </p>
            </Link>

            <Link 
              href="/about"
              className="group p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/50 transition-all duration-200 hover:bg-dark-800"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent-500/30 transition-colors">
                  <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                  About Us
                </h3>
              </div>
              <p className="text-dark-400 text-sm">
                Learn more about our team and company values
              </p>
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 text-dark-400">
          <p className="mb-2">Still can't find what you're looking for?</p>
          <p className="text-sm">
            Try navigating through the menu above
          </p>
        </div>
      </div>
    </div>
  );
}
