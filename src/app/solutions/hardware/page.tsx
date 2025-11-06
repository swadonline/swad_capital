import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware Solutions - SWAD Digital Solutions',
  description: 'Enterprise hardware solutions including servers, networking equipment, and infrastructure components for robust digital operations.',
  openGraph: {
    title: 'Hardware Solutions - SWAD Digital Solutions',
    description: 'Enterprise hardware solutions including servers, networking equipment, and infrastructure components.',
    url: 'https://www.swaddigitalsolutions.com/solutions/hardware',
  },
};

export default function Hardware() {
  const hardwareSolutions = [
    {
      title: 'Server Infrastructure',
      description: 'High-performance server solutions designed for enterprise workloads, cloud computing, and data center operations.',
      features: ['Scalable architecture', 'High availability', 'Energy efficient', '24/7 monitoring'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Networking Equipment',
      description: 'Enterprise-grade networking hardware including routers, switches, firewalls, and wireless access points.',
      features: ['High-speed connectivity', 'Secure networking', 'Scalable design', 'Managed solutions'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Storage Solutions',
      description: 'Robust storage systems including SAN, NAS, and cloud-integrated storage for data management and backup.',
      features: ['High capacity', 'Data redundancy', 'Fast access', 'Disaster recovery'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: 'Workstation & Endpoints',
      description: 'Professional workstations and endpoint devices optimized for productivity and performance.',
      features: ['High performance', 'Security features', 'Remote management', 'Enterprise support'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Hardware Solutions"
        subtitle="Enterprise Infrastructure"
        description="Enterprise-grade hardware infrastructure designed for reliability, performance, and scalability"
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareSolutions.map((solution, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <div className="group relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-corporate-gray-200 hover:border-primary/30 p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <div className="text-primary">
                          {solution.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-corporate-gray-900 mb-4 group-hover:text-primary transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-corporate-gray-600 leading-relaxed mb-6">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-corporate-gray-700">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-corporate-gray-900 via-corporate-gray-800 to-corporate-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-max text-center relative z-10">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-display-3 font-display font-bold mb-6">
              Ready to Upgrade Your Hardware Infrastructure?
            </h2>
            <p className="text-xl text-corporate-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our hardware solutions can enhance your operations and support your business growth.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-5 bg-primary text-white font-semibold rounded-xl transition-all duration-300 hover:bg-primary-light hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
