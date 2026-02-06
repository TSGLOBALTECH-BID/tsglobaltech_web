import PageHero from "../components/PageHero"
import { common } from "../content"

export default function AboutContent() {
    return (
        <>
            <PageHero
                badge={`About ${common.companyName}`}
                title="Pioneering "
                titleGradient="Digital Innovation"
                description="We're a team of passionate technologists dedicated to transforming businesses through cutting-edge software solutions and innovative digital strategies."
                badgeColor="primary"
            />

            {/* Our Story Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-sm font-medium mb-4">Our Story</span>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                                From a Small Startup to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-pink-400">Global Technology Leader</span>
                            </h2>
                            <div className="space-y-6 text-dark-300">
                                <p>
                                    Founded in January 2025, TS Global Tech emerged from a vision to bridge the gap between cutting-edge technology and practical business solutions. Our journey began with a team of experienced professionals who recognized the growing need for innovative, scalable IT services in an increasingly digital world.
                                </p>
                                <p>
                                    We've already established ourselves as a forward-thinking technology partner, leveraging the latest advancements in AI, cloud computing, and cybersecurity. Our team combines decades of collective experience with fresh perspectives to deliver solutions that are both innovative and practical.
                                </p>
                                <p>
                                    Today, TS Global Tech is positioned at the forefront of digital transformation, helping businesses harness the power of emerging technologies. We're building a reputation for delivering exceptional results, fostering long-term partnerships, and pushing the boundaries of what's possible in the digital landscape.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="text-4xl font-bold text-primary-400 mb-2">{common.stats[0].value}+</div>
                                        <div className="text-dark-400 text-sm">{common.stats[0].label}</div>
                                    </div>
                                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="text-4xl font-bold text-secondary-400 mb-2">{common.stats[1].value}+</div>
                                        <div className="text-dark-400 text-sm">{common.stats[1].label}</div>
                                    </div>
                                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="text-4xl font-bold text-accent-400 mb-2">{common.stats[2].value}+</div>
                                        <div className="text-dark-400 text-sm">{common.stats[2].label}</div>
                                    </div>
                                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="text-4xl font-bold text-green-400 mb-2">{common.stats[3].value}+</div>
                                        <div className="text-dark-400 text-sm">{common.stats[3].label}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-4">Mission & Vision</span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Our Purpose & Aspirations</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="service-card">
                            <div className="w-14 h-14 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-4">Our Mission</h3>
                            <p className="text-dark-400">
                                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting competitive advantages in the digital age.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="w-14 h-14 bg-secondary-500/20 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-4">Our Vision</h3>
                            <p className="text-dark-400">
                                To be the world's most trusted partner in digital transformation, recognized for delivering solutions that shape the future of industries and improve lives globally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">Core Values</span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">The Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-primary-400">Guide Us</span></h2>
                        <p className="text-dark-400 max-w-2xl mx-auto">These values are the foundation of everything we do and every decision we make.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="service-card group">
                            <div className="w-14 h-14 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">Integrity</h3>
                            <p className="text-dark-400">We believe in transparent, honest relationships with clients, partners, and team members. We do what we say and say what we do.</p>
                        </div>
                        <div className="service-card group">
                            <div className="w-14 h-14 bg-secondary-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">Innovation</h3>
                            <p className="text-dark-400">We embrace change and constantly push boundaries to find better ways of solving problems and creating value.</p>
                        </div>
                        <div className="service-card group">
                            <div className="w-14 h-14 bg-accent-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">Collaboration</h3>
                            <p className="text-dark-400">We believe the best results come from working together – with our clients, our partners, and each other.</p>
                        </div>
                        <div className="service-card group">
                            <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">Excellence</h3>
                            <p className="text-dark-400">We hold ourselves to the highest standards and never settle for "good enough" – we strive for exceptional.</p>
                        </div>
                        <div className="service-card group">
                            <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                            <p className="text-dark-400">Technology evolves rapidly, and so do we. We're committed to ongoing learning and staying at the forefront of innovation.</p>
                        </div>
                        <div className="service-card group">
                            <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">Client Success</h3>
                            <p className="text-dark-400">Our clients' success is our success. We're invested in their long-term growth and committed to delivering measurable results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">Our Team</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Experts</span></h2>
            <p className="text-dark-400 max-w-2xl mx-auto">Our diverse team of experts brings together decades of experience and a shared passion for innovation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="team-card">
              <div className="w-28 h-28 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">MP</div>
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Michael Patterson</h3>
              <p className="text-primary-400 text-sm mb-3">CEO & Founder</p>
              <p className="text-dark-400 text-sm">20+ years in software engineering. Former VP Engineering at Fortune 500 tech company.</p>
            </div>
            <div className="team-card">
              <div className="w-28 h-28 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">SC</div>
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Sarah Chen</h3>
              <p className="text-secondary-400 text-sm mb-3">CTO</p>
              <p className="text-dark-400 text-sm">AI/ML expert with PhD from MIT. Led teams at Google and OpenAI.</p>
            </div>
            <div className="team-card">
              <div className="w-28 h-28 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">JR</div>
              <h3 className="font-heading text-lg font-semibold text-white mb-1">James Rodriguez</h3>
              <p className="text-accent-400 text-sm mb-3">VP of Engineering</p>
              <p className="text-dark-400 text-sm">15+ years building scalable systems. Cloud architecture certified expert.</p>
            </div>
            <div className="team-card">
              <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">EP</div>
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Emily Parker</h3>
              <p className="text-green-400 text-sm mb-3">Head of Design</p>
              <p className="text-dark-400 text-sm">Award-winning UX designer. Previously at Apple and Airbnb.</p>
            </div>
          </div>
        </div>
      </section> */}

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Work With a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Team That Cares?</span>
                    </h2>
                    <p className="text-lg text-dark-300 mb-10">Let's discuss how we can help transform your business with innovative technology solutions.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/contact" className="btn-primary text-lg px-8 py-4">Start Your Project</a>
                        <a href="/services" className="btn-secondary text-lg px-8 py-4">Explore Services</a>
                    </div>
                </div>
            </section>
        </>

    )
}
