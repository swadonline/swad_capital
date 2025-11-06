import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CorporateHero from '@/components/CorporateHero';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About SWAD Digital Solutions',
  description: 'Learn about SWAD Digital Solutions, a strategic subsidiary of SWAD Holdings Ltd., committed to enabling digital transformation across our group and for external clients. We combine deep industry knowledge, modern engineering practices, and a focus on sustainable, secure systems.',
  keywords: [
    'SWAD Digital Solutions',
    'about SWAD',
    'technology company',
    'digital transformation',
    'enterprise software',
    'IT services',
    'SWAD Holdings',
    'technology partner',
  ],
  path: '/about',
  ogType: 'website',
});

export default function About() {
  const coreValues = [
    {
      name: 'Innovation',
      description: 'Continuously pushing boundaries to deliver cutting-edge solutions.',
      icon: '💡',
    },
    {
      name: 'Integrity',
      description: 'Maintaining the highest ethical standards in all our interactions.',
      icon: '🤝',
    },
    {
      name: 'Excellence',
      description: 'Striving for superior quality in every project and service.',
      icon: '⭐',
    },
    {
      name: 'Reliability',
      description: 'Consistent, dependable service that our clients can count on.',
      icon: '🛡️',
    },
    {
      name: 'Partnership',
      description: 'Building lasting relationships based on mutual success.',
      icon: '🤝',
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-max pt-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' },
          ]}
        />
      </div>

      {/* Hero Section */}
      <CorporateHero
        title="About SWAD Digital Solutions"
        subtitle="Our Story"
        description="A strategic subsidiary of SWAD Holdings Ltd., committed to enabling digital transformation across our group and for external clients."
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft" delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-display-3 font-display font-bold text-corporate-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-corporate-gray-600 leading-relaxed mb-6">
                SWAD Digital Solutions Ltd. Is a strategic subsidiary of SWAD Holdings Ltd., committed to enabling digital transformation across our group and for external clients. We combine deep industry knowledge, modern engineering practices, and a focus on sustainable, secure systems.
              </p>
              <p className="text-lg text-corporate-gray-600 leading-relaxed">
                Our team of experienced professionals brings together expertise in enterprise software development, cloud architecture, cybersecurity, and managed services to deliver comprehensive technology solutions that drive business growth and operational excellence.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.3} className="relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-1.jpg"
                  alt="SWAD Digital Solutions team working on technology infrastructure and digital transformation projects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <article className="card text-center h-full">
                <div className="text-5xl mb-6" aria-hidden="true">🎯</div>
                <h3 className="text-2xl font-display font-bold text-corporate-gray-900 mb-4">Our Mission</h3>
                <p className="text-corporate-gray-600 leading-relaxed">
                  To design, deliver, and manage innovative technology systems that help businesses grow, scale, and lead in the digital era.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <article className="card text-center h-full">
                <div className="text-5xl mb-6" aria-hidden="true">🔮</div>
                <h3 className="text-2xl font-display font-bold text-corporate-gray-900 mb-4">Our Vision</h3>
                <p className="text-corporate-gray-600 leading-relaxed">
                  To be a globally respected technology partner, driving the digital evolution of industries across Africa and beyond.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection animation="fadeInUp" delay={0.2} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-display-3 font-display font-bold text-corporate-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-corporate-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <article className="card text-center h-full">
                  <div className="text-5xl mb-6" aria-hidden="true">{value.icon}</div>
                  <h3 className="text-xl font-display font-semibold text-corporate-gray-900 mb-4">
                    {value.name}
                  </h3>
                  <p className="text-corporate-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Group Relationship Section */}
      <section className="section-padding bg-gradient-to-b from-corporate-gray-900 to-corporate-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Group Relationship
              </h2>
              <p className="text-lg text-corporate-gray-300 leading-relaxed mb-6">
                As part of SWAD Holdings Ltd., SWAD Digital Solutions aligns closely with SWAD Group&apos;s mission to build enduring enterprises. We provide shared digital services and bespoke solutions that accelerate the group&apos;s industrial objectives.
              </p>
              <p className="text-lg text-corporate-gray-300 leading-relaxed">
                This strategic positioning allows us to leverage the group&apos;s extensive network, resources, and market presence while maintaining our focus on delivering world-class technology solutions to both internal and external clients.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.3}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-2.jpg"
                  alt="SWAD Holdings corporate structure and technology infrastructure collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-max text-center">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-corporate-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-corporate-gray-600 mb-10 max-w-2xl mx-auto">
              Our experienced team is ready to help you achieve your digital transformation goals. Let&apos;s discuss how we can partner with your organization.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30">
              Contact Sales
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
