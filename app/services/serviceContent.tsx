import PageHero from "../components/PageHero";
import { common } from "../content";

export default function ServiceContent() {
    return (
        <>
            <PageHero
                badge="Our Services"
                title="Comprehensive "
                titleGradient="IT Solutions"
                description="From concept to deployment, we deliver end-to-end technology services tailored to your unique business requirements. Our expertise spans the entire digital landscape."
                badgeColor="primary"
            />

            {/* Services Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* AI & Machine Learning */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="lg:order-2">
                            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                                <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                                    <div className="flex items-center justify-center h-48">
                                        <div className="relative">
                                            <div className="w-32 h-32 border-4 border-primary-500/30 rounded-full"></div>
                                            <div className="absolute top-0 left-0 w-32 h-32 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                                            <div className="absolute inset-4 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">AI & Machine Learning</h2>
                            <p className="text-dark-400 text-lg mb-6">
                                Transform your business with intelligent automation and data-driven insights. Our AI solutions help you stay ahead of the competition.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    AI Agents (Agentic solutions)
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Predictive Analytics
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Natural Language Processing
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Computer Vision
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Chatbots & Virtual Assistants
                                </li>
                            </ul>
                            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Web Development */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/30 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Web Development</h2>
                            <p className="text-dark-400 text-lg mb-6">
                                We craft stunning, high-performance websites and web applications that engage users and drive conversions. Our development approach combines cutting-edge technologies with proven methodologies.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Responsive Web Design & Development
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Progressive Web Apps (PWA)
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    E-commerce Solutions
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    CMS Development
                                </li>
                            </ul>
                            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                                <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="flex-1 bg-dark-900 rounded-lg px-3 py-1 text-xs text-dark-400 text-center">index.html</div>
                                    </div>
                                    <div className="font-mono text-sm space-y-2">
                                        <div className="text-secondary-400">{"<div class=\"hero\">"}</div>
                                        <div className="pl-4 text-dark-300">{`<h1>Welcome to ${common.companyName}</h1>`}</div>
                                        <div className="pl-4 text-dark-300">{"<p>Innovation meets excellence</p>"}</div>
                                        <div className="text-secondary-400">{"</div>"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Apps */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="lg:order-2">
                            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                                <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                                    <div className="flex justify-center">
                                        <div className="w-48 h-96 bg-gradient-to-b from-dark-700 to-dark-800 rounded-[2rem] border-4 border-dark-600 p-4 relative">
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-dark-900 rounded-full"></div>
                                            <div className="mt-8 space-y-4">
                                                <div className="h-32 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-xl"></div>
                                                <div className="h-4 bg-dark-700 rounded w-3/4"></div>
                                                <div className="h-4 bg-dark-700 rounded w-full"></div>
                                                <div className="h-4 bg-dark-700 rounded w-5/6"></div>
                                                <div className="mt-8 h-12 bg-primary-500 rounded-xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 border border-secondary-500/30 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Mobile App Development</h2>
                            <p className="text-dark-400 text-lg mb-6">
                                Deliver exceptional mobile experiences with our expert app development team. We build native and cross-platform applications that users love.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Native iOS & Android Apps
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Cross-Platform (React Native, Flutter)
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    App UI/UX Design
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    App Store Optimization
                                </li>
                            </ul>
                            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Cloud Solutions */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-accent-600/20 border border-accent-500/30 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Cloud Solutions</h2>
                            <p className="text-dark-400 text-lg mb-6">
                                Scale your business with our robust cloud infrastructure and migration services. We help you leverage the power of AWS, Azure, and Google Cloud.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Cloud Migration Strategy
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Infrastructure as Code (IaC)
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Serverless Architecture
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    DevOps & CI/CD Pipelines
                                </li>
                            </ul>
                            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-dark-800 rounded-xl p-4 border border-white/5 text-center">
                                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                        </div>
                                        <div className="text-sm text-dark-300">AWS</div>
                                    </div>
                                    <div className="bg-dark-800 rounded-xl p-4 border border-white/5 text-center">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M13.05 4.24l-5.5 9.53 1.41 1.41 9.53-5.5-5.44-1.44z" /></svg>
                                        </div>
                                        <div className="text-sm text-dark-300">Azure</div>
                                    </div>
                                    <div className="bg-dark-800 rounded-xl p-4 border border-white/5 text-center">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        </div>
                                        <div className="text-sm text-dark-300">GCP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Cybersecurity */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Cybersecurity</h2>
                            <p className="text-dark-400 text-lg mb-6">
                                Protect your digital assets with our comprehensive security solutions. We safeguard your business against evolving cyber threats.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Security Audits & Assessment
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Penetration Testing
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Compliance & Risk Management
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 Security Monitoring
                                </li>
                            </ul>
                            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-dark-800 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white">Firewall Protection</span>
                                        </div>
                                        <span className="text-green-400 text-sm font-medium">Active</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-dark-800 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white">SSL Certificate</span>
                                        </div>
                                        <span className="text-green-400 text-sm font-medium">Valid</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-dark-800 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white">Threat Detection</span>
                                        </div>
                                        <span className="text-green-400 text-sm font-medium">Monitoring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* UI/UX Design */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-2">
                            <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
                                <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-dark-900 rounded-xl p-4 border border-white/5">
                                            <div className="w-full h-20 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg mb-3"></div>
                                            <div className="h-3 bg-dark-700 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-dark-700 rounded w-1/2"></div>
                                        </div>
                                        <div className="bg-dark-900 rounded-xl p-4 border border-white/5">
                                            <div className="w-full h-20 bg-gradient-to-br from-accent-500/30 to-primary-500/30 rounded-lg mb-3"></div>
                                            <div className="h-3 bg-dark-700 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-dark-700 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">UI/UX Design</h2>
                            <p className="text-dark-400 text-lg mb-6">
                                Create memorable digital experiences with our expert design team. We craft intuitive interfaces that users love.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    User Research & Personas
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Wireframing & Prototyping
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Visual Design & Branding
                                </li>
                                <li className="flex items-center gap-3 text-dark-300">
                                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Usability Testing
                                </li>
                            </ul>
                            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-dark-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-4">Our Process</span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">Work</span></h2>
                        <p className="text-dark-400 max-w-2xl mx-auto">Our proven methodology ensures successful project delivery every time.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-400">1</div>
                            <h3 className="font-heading text-lg font-semibold text-white mb-2">Discovery</h3>
                            <p className="text-dark-400 text-sm">We learn about your business, goals, and requirements through deep consultation.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-400">2</div>
                            <h3 className="font-heading text-lg font-semibold text-white mb-2">Planning</h3>
                            <p className="text-dark-400 text-sm">We create detailed project plans, wireframes, and technical specifications.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-400">3</div>
                            <h3 className="font-heading text-lg font-semibold text-white mb-2">Development</h3>
                            <p className="text-dark-400 text-sm">Our team builds your solution using agile methodologies with regular updates.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-400">4</div>
                            <h3 className="font-heading text-lg font-semibold text-white mb-2">Delivery</h3>
                            <p className="text-dark-400 text-sm">We launch, test, and provide ongoing support to ensure your success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Next Project?</span>
                    </h2>
                    <p className="text-lg text-dark-300 mb-10">Let's discuss how our expert team can bring your vision to life.</p>
                    <a href="/contact" className="btn-primary text-lg px-8 py-4">Get Free Consultation</a>
                </div>
            </section>
        </>
    )
}
