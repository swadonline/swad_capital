import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact SWAD Digital Solutions - Get in Touch',
  description: 'Get in touch with SWAD Digital Solutions for partnerships, enterprise solutions, or general enquiries. Our global teams are ready to help.',
};

export default function Contact() {

  const contactInfo = [
    {
      title: 'Email',
      value: 'info@swaddigitalsolutions.com',
      icon: '📧',
      description: 'Send us an email anytime'
    },
    {
      title: 'Phone',
      value: '+234 701 191 4628',
      icon: '📞',
      description: 'Call us during business hours'
    },
    {
      title: 'Address',
      value: 'Landmark Towers, Victoria Island, Lagos, Nigeria',
      icon: '📍',
      description: 'Visit our Lagos office'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              
              <h1 className="text-4xl md:text-5xl font-bold">
                Contact SWAD Digital Solutions
              </h1>
            </div>
            <p className="text-xl text-gray-200 leading-relaxed">
              Get in touch for partnerships, enterprise solutions, or general enquiries. Our team in Lagos, Nigeria is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {info.title}
                      </h3>
                      {info.title === 'Email' ? (
                        <a 
                          href={`mailto:${info.value}`}
                          className="text-lg text-accent hover:text-accent/80 transition-colors mb-1 block"
                        >
                          {info.value}
                        </a>
                      ) : info.title === 'Phone' ? (
                        <a 
                          href={`tel:${info.value.replace(/\s/g, '')}`}
                          className="text-lg text-accent hover:text-accent/80 transition-colors mb-1 block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-700 mb-1">
                          {info.value}
                        </p>
                      )}
                      <p className="text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <Image
                  src="/contact-1.jpg"
                  alt="Contact us"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600">
              We have a presence across four continents to serve our clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: 'London', country: 'United Kingdom', timezone: 'GMT' },
              { city: 'Lagos', country: 'Nigeria', timezone: 'WAT' },
              { city: 'Dubai', country: 'UAE', timezone: 'GST' },
              { city: 'New York', country: 'United States', timezone: 'EST' }
            ].map((office, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600 mb-1">
                  {office.country}
                </p>
                <p className="text-sm text-gray-500">
                  {office.timezone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
