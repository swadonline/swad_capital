import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SWAD Digital Solutions - Get in Touch',
  description: 'Get in touch with SWAD Digital Solutions for partnerships, enterprise solutions, or general enquiries. Our global teams are ready to help.',
  openGraph: {
    title: 'Contact SWAD Digital Solutions - Get in Touch',
    description: 'Get in touch with SWAD Digital Solutions for partnerships, enterprise solutions, or general enquiries.',
    url: 'https://www.swaddigitalsolutions.com/contact',
  },
};

export default function Contact() {

  const contactInfo = [
    {
      title: 'Email',
      value: 'info@swaddigitalsolutions.com',
      description: 'Send us an email anytime',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '+234 701 191 4628',
      description: 'Call us during business hours',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  const officeLocations = [
    {
      city: 'Lagos',
      country: 'Nigeria',
      address: 'Landmark Towers, Victoria Island, Lagos, Nigeria',
    },
    {
      city: 'Owerri',
      country: 'Nigeria',
      address: 'Road 1 house 18b FHE Owerri, Imo, Nigeria',
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '40 Bank Street, Canary Wharf, London, UK',
      phone: '+44 7400 727165',
    },
    {
      city: 'New York',
      country: 'United States',
      address: '447 Broadway, 7th floor, New York City, NY, United States',
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Contact SWAD Digital Solutions"
        subtitle="Get in Touch"
        description="Get in touch for partnerships, enterprise solutions, or general enquiries. Our global teams are ready to help."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <AnimatedSection animation="fadeInLeft" delay={0.2}>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Contact Information */}
            <div>
              <AnimatedSection animation="fadeInRight" delay={0.3}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-corporate-gray-900 mb-10">
                  Get in Touch
                </h2>
                
                <div className="space-y-8 mb-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl bg-corporate-gray-50 hover:bg-corporate-gray-100 transition-all duration-300 border border-corporate-gray-200 hover:border-primary/30">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-corporate-gray-900 mb-3">
                          {info.title}
                        </h3>
                        {info.title === 'Email' ? (
                          <a 
                            href={`mailto:${info.value}`}
                            className="text-lg text-primary hover:text-primary-light transition-colors mb-3 block font-medium"
                          >
                            {info.value}
                          </a>
                        ) : info.title === 'Phone' ? (
                          <a 
                            href={`tel:${info.value.replace(/\s/g, '')}`}
                            className="text-lg text-primary hover:text-primary-light transition-colors mb-3 block font-medium"
                          >
                            {info.value}
                          </a>
                        ) : null}
                        <p className="text-corporate-gray-600 leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/contact-1.jpg"
                    alt="Modern office and technology workspace"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-gray-900/20 to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-max">
          <AnimatedSection animation="fadeInUp" delay={0.2} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-display-3 font-display font-bold text-corporate-gray-900 mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-corporate-gray-600">
              We have a presence across multiple locations to serve our clients worldwide
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeLocations.map((office, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <div className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-corporate-gray-200 hover:border-primary/30 text-center h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all duration-500" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-corporate-gray-900 mb-3">
                      {office.city}
                    </h3>
                    <p className="text-corporate-gray-600 mb-4 font-semibold">
                      {office.country}
                    </p>
                    <p className="text-sm text-corporate-gray-600 leading-relaxed mb-3">
                      {office.address}
                    </p>
                    {office.phone && (
                      <a 
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="text-sm text-primary hover:text-primary-light transition-colors font-medium inline-block"
                      >
                        {office.phone}
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
