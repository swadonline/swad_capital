import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CorporateHero from '@/components/CorporateHero';
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Solutions - Technology Services',
  description: 'Comprehensive technology solutions including digital infrastructure, enterprise software, cybersecurity, and managed IT services to empower your digital transformation. Scalable, secure, and designed for business growth.',
  keywords: [
    'technology solutions',
    'enterprise software',
    'cloud infrastructure',
    'cybersecurity services',
    'managed IT services',
    'digital transformation',
    'IT consulting',
    'software development',
    'cloud migration',
    'data protection',
  ],
  path: '/solutions',
  ogType: 'website',
});

export default function Solutions() {
  const solutions = [
    {
      title: 'Digital Infrastructure & Cloud',
      description: 'We design and deploy scalable cloud and hybrid infrastructure that enhances performance, agility, and data security.',
      benefits: [
        'Scalable architecture for growth',
        'Reduced operational overhead',
        'Enterprise-grade availability and monitoring'
      ],
      icon: '☁️',
      image: '/solutions-1.jpg'
    },
    {
      title: 'Enterprise Software',
      description: 'Custom enterprise applications built to streamline workflows, automate processes, and provide actionable insights.',
      benefits: [
        'Tailored to business processes',
        'Integrated analytics and reporting',
        'Secure, maintainable codebase'
      ],
      icon: '💼',
      image: '/solutions-2.jpg'
    },
    {
      title: 'Cybersecurity & Data Protection',
      description: 'End-to-end security services including risk assessments, architecture, monitoring, and incident response.',
      benefits: [
        'Proactive threat detection',
        'Regulatory compliance support',
        'Business continuity planning'
      ],
      icon: '🔒',
      image: '/solutions-3.jpg'
    },
    {
      title: 'Managed IT Services',
      description: 'End-to-end managed services: helpdesk, patching, monitoring, backups, and SLA-driven support.',
      benefits: [
        '24/7 technical support',
        'Predictable operational costs',
        'Rapid response and remediation'
      ],
      icon: '🛠️',
      image: '/news-3.jpg'
    }
  ];

  // Generate service schemas
  const serviceSchemas = solutions.map(solution => 
    generateServiceSchema({
      name: solution.title,
      description: solution.description,
      provider: 'SWAD Digital Solutions',
      areaServed: ['Global'],
      serviceType: solution.title,
    })
  );

  return (
    <>
      {/* Service Schema Markup */}
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* Breadcrumbs */}
      <div className="container-max pt-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
          ]}
        />
      </div>

      {/* Hero Section */}
      <CorporateHero
        title="Our Solutions Empower Digital Transformation"
        subtitle="Technology Services"
        description="Comprehensive technology services designed to accelerate your business growth and operational excellence"
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <article key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <AnimatedSection animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} delay={0.2}>
                    <div className="flex items-center mb-8">
                      <div className="text-5xl mr-4" aria-hidden="true">{solution.icon}</div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-corporate-gray-900">
                        {solution.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-corporate-gray-600 leading-relaxed mb-8">
                      {solution.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-display font-semibold text-corporate-gray-900 mb-6">Key Benefits:</h3>
                      <ul className="space-y-4">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-corporate-gray-700 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <AnimatedSection animation={index % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'} delay={0.3}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={solution.image}
                        alt={`${solution.title} - ${solution.description}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-max">
          <AnimatedSection animation="fadeInUp" delay={0.2} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-corporate-gray-900 mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-corporate-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and long-term value
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery', desc: 'Understanding your business needs and technical requirements' },
              { step: '2', title: 'Design', desc: 'Creating tailored solutions that align with your objectives' },
              { step: '3', title: 'Deploy', desc: 'Implementing solutions with minimal disruption to your operations' },
              { step: '4', title: 'Support', desc: 'Ongoing maintenance and optimization for continued success' },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <article className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6" aria-label={`Step ${item.step}`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-corporate-gray-900 mb-3">{item.title}</h3>
                  <p className="text-corporate-gray-600">{item.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-corporate-gray-900 to-corporate-gray-800 text-white">
        <div className="container-max text-center relative z-10">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-xl text-corporate-gray-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our solutions can accelerate your digital transformation and drive business growth.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30">
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
