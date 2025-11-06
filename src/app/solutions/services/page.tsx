import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - SWAD Digital Solutions',
  description: 'Comprehensive IT services including managed services, cloud solutions, cybersecurity, and technical support.',
  openGraph: {
    title: 'Services - SWAD Digital Solutions',
    description: 'Comprehensive IT services including managed services, cloud solutions, cybersecurity, and technical support.',
    url: 'https://www.swaddigitalsolutions.com/solutions/services',
  },
};

export default function Services() {
  const services = [
    {
      title: 'Managed IT Services',
      description: 'Comprehensive managed services including helpdesk support, system monitoring, maintenance, and 24/7 technical assistance.',
      features: ['24/7 support', 'Proactive monitoring', 'Regular maintenance', 'SLA guarantees'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure management, migration services, and cloud optimization to enhance your business agility.',
      features: ['Cloud migration', 'Infrastructure management', 'Cost optimization', 'Multi-cloud support'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: 'Cybersecurity Services',
      description: 'End-to-end security services including threat detection, vulnerability assessments, and incident response.',
      features: ['Security audits', 'Threat monitoring', 'Incident response', 'Compliance support'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Consulting & Strategy',
      description: 'Expert technology consulting to help you make informed decisions and develop effective digital transformation strategies.',
      features: ['Technology assessment', 'Strategic planning', 'Architecture design', 'Best practices'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Professional Services"
        subtitle="IT Services"
        description="Comprehensive IT services to support, optimize, and secure your technology infrastructure"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <div className="group relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-corporate-gray-200 hover:border-primary/30 p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <div className="text-primary">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-corporate-gray-900 mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-corporate-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
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
              Ready to Enhance Your IT Services?
            </h2>
            <p className="text-xl text-corporate-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our professional services can support your business objectives and drive efficiency.
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
