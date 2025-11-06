import Image from 'next/image';
import Link from 'next/link';
import CorporateHero from '@/components/CorporateHero';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import AnimatedStat from '@/components/AnimatedStat';
import AnimatedAdvantage from '@/components/AnimatedAdvantage';
import AnimatedImage from '@/components/AnimatedImage';
import AnimatedFeatureCard from '@/components/AnimatedFeatureCard';
import Newsletter from '@/components/Newsletter';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SWAD Digital Solutions - Powering the Future Through Technology',
  description: 'SWAD Digital Solutions delivers scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients across emerging and developed markets.',
  openGraph: {
    title: 'SWAD Digital Solutions - Powering the Future Through Technology',
    description: 'SWAD Digital Solutions delivers scalable enterprise software, cloud infrastructure, cybersecurity, and managed services.',
    url: 'https://www.swaddigitalsolutions.com',
    siteName: 'SWAD Digital Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SWAD Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWAD Digital Solutions - Powering the Future Through Technology',
    description: 'SWAD Digital Solutions delivers scalable enterprise software, cloud infrastructure, cybersecurity, and managed services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const services = [
    {
      title: 'Enterprise Software',
      description: 'Custom software solutions built to scale with your business needs and integrate seamlessly with existing systems.',
      link: '/solutions/software',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Robust cloud solutions that provide scalability, reliability, and cost-effectiveness for modern businesses.',
      link: '/solutions/services',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance with industry standards.',
      link: '/solutions/services',
    },
    {
      title: 'Hardware Solutions',
      description: 'Enterprise-grade hardware infrastructure designed for reliability, performance, and scalability.',
      link: '/solutions/hardware',
    },
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered', suffix: '+' },
    { value: '50+', label: 'Enterprise Clients', suffix: '+' },
    { value: '99.9', label: 'Uptime SLA', suffix: '%' },
    { value: '24/7', label: 'Global Support', suffix: '' },
  ];

  const advantages = [
    { 
      title: 'Proven Track Record', 
      desc: 'Successfully delivered projects across multiple industries and markets with measurable ROI.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: '24/7 Global Support', 
      desc: 'Round-the-clock technical support across multiple time zones to keep your systems running smoothly.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: 'Scalable Architecture', 
      desc: 'Solutions designed to grow with your business from startup to enterprise scale with minimal disruption.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Corporate Hero Section */}
          <CorporateHero
            title="Powering the Future Through Technology and Innovation"
            subtitle="Global Technology Solutions"
            description="Building intelligent systems and resilient infrastructure that accelerate business transformation across emerging and developed markets."
            ctaText="Explore Our Solutions"
            ctaLink="/solutions"
            secondaryCtaText="Contact Us"
            secondaryCtaLink="/contact"
            backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            size="large"
          />

      {/* Company Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-display-2 font-display font-bold text-corporate-gray-900 mb-8 leading-tight">
                  Connecting Technology with Business Excellence
                </h2>
                <p className="text-xl md:text-2xl text-corporate-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
                  SWAD Digital Solutions is the technology arm of SWAD Holdings Ltd., delivering scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients across emerging and developed markets.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedFeatureCard
                title="Global Presence"
                description="Offices across Nigeria, UK, and USA serving clients worldwide with localized expertise."
                icon={
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                delay={0.3}
              />
              <AnimatedFeatureCard
                title="Innovation Focus"
                description="Cutting-edge technology solutions driving digital transformation and competitive advantage."
                icon={
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                delay={0.4}
              />
              <AnimatedFeatureCard
                title="Trusted Partnership"
                description="Long-term relationships built on reliability, security, and operational excellence."
                icon={
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-max">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-display-2 font-display font-bold text-corporate-gray-900 mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-corporate-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your digital transformation journey
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const icons = [
                <svg key={0} className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>,
                <svg key={1} className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>,
                <svg key={2} className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>,
                <svg key={3} className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>,
              ];

              return (
                <AnimatedServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  icon={icons[index]}
                  delay={index * 0.1}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-corporate-gray-900 via-corporate-gray-800 to-corporate-gray-900 text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }} />
        </div>
        <div className="container-max relative z-10">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-corporate-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our solutions power organizations across emerging and developed markets
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-corporate-gray-900 mb-8 leading-tight">
                  Why Choose SWAD Digital?
                </h2>
                <p className="text-xl text-corporate-gray-600 mb-12 leading-relaxed">
                  We combine deep technical expertise with a deep understanding of emerging markets to deliver solutions that work in the real world.
                </p>

                <AnimatedAdvantage advantages={advantages} />
              </div>
            </AnimatedSection>

            <AnimatedImage />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-corporate-gray-50 via-white to-corporate-gray-50">
        <div className="container-max">
          <AnimatedSection animation="fadeInUp">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-corporate-gray-900 mb-8 leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-corporate-gray-600 mb-12 leading-relaxed">
                Let&apos;s discuss how our technology solutions can accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-primary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-primary-light hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link
                  href="/solutions"
                  className="px-10 py-5 border-2 border-corporate-gray-300 text-corporate-gray-900 font-semibold rounded-xl transition-all duration-300 hover:border-primary hover:text-primary hover:bg-white hover:shadow-xl"
                >
                  View Our Solutions
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
