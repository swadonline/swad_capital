import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import StaggeredGrid from '@/components/StaggeredGrid';

export const metadata = {
  title: 'About SWAD Digital Solutions - Digital Transformation Partner',
  description: 'Learn about SWAD Digital Solutions, a strategic subsidiary of SWAD Holdings Ltd., committed to enabling digital transformation across our group and for external clients.',
};

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white section-padding">
        <div className="container-max">
          <AnimatedSection animation="fadeInDown" delay={200} duration={1000} className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
             
              <h1 className="text-4xl md:text-5xl font-bold">
                About SWAD Digital Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-200 leading-relaxed">
              A strategic subsidiary of SWAD Holdings Ltd., committed to enabling digital transformation across our group and for external clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft" delay={200} duration={1000}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SWAD Digital Solutions Ltd. Is a strategic subsidiary of SWAD Holdings Ltd., committed to enabling digital transformation across our group and for external clients. We combine deep industry knowledge, modern engineering practices, and a focus on sustainable, secure systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of experienced professionals brings together expertise in enterprise software development, cloud architecture, cybersecurity, and managed services to deliver comprehensive technology solutions that drive business growth and operational excellence.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="zoomIn" delay={400} duration={1200} className="relative">
              <Image
                src="/about-1.jpg"
                alt="SWAD Digital Solutions team"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="flipInX" delay={200} duration={1000}>
              <div className="card text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To design, deliver, and manage innovative technology systems that help businesses grow, scale, and lead in the digital era.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="flipInX" delay={400} duration={1000}>
              <div className="card text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a globally respected technology partner, driving the digital evolution of industries across Africa and beyond.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection animation="fadeInDown" delay={200} duration={1000} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </AnimatedSection>

          <StaggeredGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            itemClassName="card text-center hover:shadow-xl transition-shadow duration-300"
            staggerDelay={200}
            duration={1200}
            animationPattern="wave"
            gridColumns={3}
          >
            {coreValues.map((value, index) => (
              <div key={index}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Group Relationship Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Group Relationship
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                As part of SWAD Holdings Ltd., SWAD Digital Solutions aligns closely with SWAD Group&apos;s mission to build enduring enterprises. We provide shared digital services and bespoke solutions that accelerate the group&apos;s industrial objectives.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                This strategic positioning allows us to leverage the group&apos;s extensive network, resources, and market presence while maintaining our focus on delivering world-class technology solutions to both internal and external clients.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about-2.jpg"
                alt="SWAD Holdings group relationship"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experienced team is ready to help you achieve your digital transformation goals. Let&apos;s discuss how we can partner with your organization.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Contact Sales
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
