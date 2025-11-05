import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Solutions - SWAD Digital Solutions',
  description: 'Comprehensive technology solutions including digital infrastructure, enterprise software, cybersecurity, and managed IT services to empower your digital transformation.',
};

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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Solutions Empower Digital Transformation
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive technology services designed to accelerate your business growth and operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{solution.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                      {solution.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary mb-4">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and long-term value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your business needs and technical requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Design</h3>
              <p className="text-gray-600">Creating tailored solutions that align with your objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Deploy</h3>
              <p className="text-gray-600">Implementing solutions with minimal disruption to your operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and optimization for continued success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our solutions can accelerate your digital transformation and drive business growth.
          </p>
          <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
