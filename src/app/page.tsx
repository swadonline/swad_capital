import Image from 'next/image';
import Link from 'next/link';
import CountUp from '@/components/CountUp';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft" delay={200} duration={1000}>
              <div className="flex items-center space-x-4 mb-6">
                {/* <div className="relative w-16 h-16 animate-bounce-in">
                  <Image
                    src="/logo/logo3.jpeg"
                    alt="SWAD Digital Solutions Logo"
                    fill
                    className="object-contain rounded-lg"
                    sizes="64px"
                    priority
                  />
                </div> */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Powering the Future Through Technology and Innovation
                  </h1>
                </div>
              </div>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Building intelligent systems and resilient infrastructure that accelerate business transformation.
              </p>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="zoomIn" delay={400} duration={1200}>
              <div className="relative w-full">
                <div className="w-full">
                  <Image
                    src="/hero-image.jpg"
                    alt="Technology and innovation"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedSection animation="fadeInUp" delay={100} duration={1000}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="relative w-10 h-10 opacity-60">
                  <Image
                    src="/logo/logo.jpeg"
                    alt="SWAD Digital Solutions Logo"
                    fill
                    className="object-contain rounded-lg"
                    sizes="40px"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-primary">SWAD Digital Solutions Ltd.</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The technology arm of SWAD Holdings Ltd., delivering scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients across emerging and developed markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection animation="fadeInDown" delay={100} duration={1000}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation journey
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="flipInX" delay={200} duration={1000}>
              <div className="card text-center hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Enterprise Software</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom software solutions built to scale with your business needs and integrate seamlessly with existing systems.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="flipInX" delay={400} duration={1000}>
              <div className="card text-center hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Robust cloud solutions that provide scalability, reliability, and cost-effectiveness for modern businesses.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="flipInX" delay={600} duration={1000}>
              <div className="card text-center hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Cybersecurity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced security solutions to protect your digital assets and ensure compliance with industry standards.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft" delay={200} duration={1000}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Why Choose SWAD Digital?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We combine deep technical expertise with a deep understanding of emerging markets to deliver solutions that work in the real world.
                </p>
                
                <div className="space-y-6">
                  <AnimatedSection animation="bounceIn" delay={400} duration={800}>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Proven Track Record</h3>
                        <p className="text-gray-600">Successfully delivered projects across multiple industries and markets.</p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="bounceIn" delay={600} duration={800}>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Round-the-clock technical support to keep your systems running smoothly.</p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation="bounceIn" delay={800} duration={800}>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Scalable Solutions</h3>
                        <p className="text-gray-600">Architecture designed to grow with your business from startup to enterprise.</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="rotateIn" delay={400} duration={1200}>
              <div className="relative w-full">
                <Image
                  src="/about-1.jpg"
                  alt="Technology team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <AnimatedSection animation="fadeInDown" delay={100} duration={1000}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Our solutions power organizations across emerging and developed markets
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="zoomIn" delay={200} duration={1000}>
              <div className="text-center">
                <CountUp 
                  end={100} 
                  suffix="+" 
                  duration={2500}
                  className="text-4xl md:text-5xl font-bold text-accent mb-2"
                />
                <div className="text-lg text-gray-200">Projects Delivered</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoomIn" delay={400} duration={1000}>
              <div className="text-center">
                <CountUp 
                  end={50} 
                  suffix="+" 
                  duration={2000}
                  className="text-4xl md:text-5xl font-bold text-accent mb-2"
                />
                <div className="text-lg text-gray-200">Happy Clients</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoomIn" delay={600} duration={1000}>
              <div className="text-center">
                <CountUp 
                  end={99.9} 
                  suffix="%" 
                  duration={3000}
                  className="text-4xl md:text-5xl font-bold text-accent mb-2"
                />
                <div className="text-lg text-gray-200">Uptime Guarantee</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="zoomIn" delay={800} duration={1000}>
              <div className="text-center">
                <CountUp 
                  end={24} 
                  suffix="/7" 
                  duration={1500}
                  className="text-4xl md:text-5xl font-bold text-accent mb-2"
                />
                <div className="text-lg text-gray-200">Support Available</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedSection animation="flipInY" delay={200} duration={1200}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let&apos;s discuss how our technology solutions can accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Started Today
                </Link>
                <Link href="/solutions" className="btn-outline text-lg px-8 py-4">
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