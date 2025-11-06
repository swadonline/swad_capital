import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Solutions - SWAD Digital Solutions',
  description: 'Custom enterprise software solutions, application development, and digital platforms to streamline your business operations.',
  openGraph: {
    title: 'Software Solutions - SWAD Digital Solutions',
    description: 'Custom enterprise software solutions, application development, and digital platforms.',
    url: 'https://www.swaddigitalsolutions.com/solutions/software',
  },
};

export default function Software() {
  const softwareSolutions = [
    {
      title: 'Custom Application Development',
      description: 'Tailored software applications built to meet your specific business requirements and workflows.',
      features: ['Custom design', 'Scalable architecture', 'API integration', 'Cloud-ready'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Enterprise Software',
      description: 'Comprehensive enterprise solutions including ERP, CRM, and business management platforms.',
      features: ['Process automation', 'Data analytics', 'User management', 'Reporting tools'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Web & Mobile Applications',
      description: 'Modern web and mobile applications that provide seamless user experiences across all devices.',
      features: ['Responsive design', 'Cross-platform', 'Real-time updates', 'Offline capability'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of new and existing systems to create unified business solutions.',
      features: ['API development', 'Data migration', 'Legacy system integration', 'Workflow automation'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Software Solutions"
        subtitle="Custom Development"
        description="Custom software development and enterprise applications designed to transform your business operations"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      />

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareSolutions.map((solution, index) => (
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
              Ready to Build Your Software Solution?
            </h2>
            <p className="text-xl text-corporate-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our software solutions can streamline your operations and drive innovation.
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
