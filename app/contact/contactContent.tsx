import PageHero from "../components/PageHero";
import { common } from "../content";
import ContactForm from "./contactForm";

export default function ContactContent() {
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
      <ContactForm />

      {/* Map Section */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Visit Our Office</h2>
            {/* <p className="text-dark-400">Located in the heart of Silicon Valley</p> */}
          </div>
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/10">
            <div className="aspect-[21/9] bg-dark-800 rounded-2xl flex items-center justify-center border border-white/5">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{common.companyName} HQ</h3>
                <p className="text-dark-400">{common.contact.address}</p>
                <a href={`https://maps.google.com/?q=${common.contact.lattitude},${common.contact.longitude}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-400 mt-4 hover:text-primary-300 transition-colors">
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
            <a href={`https://wa.me/${common.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Connect Now
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.546 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a href="/services" className="btn-secondary text-lg px-8 py-4">Explore Services</a>
          </div>
        </div>
      </section>
    </>
  )
}