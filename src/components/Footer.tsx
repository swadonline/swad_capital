import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary text-white animate-slide-in-bottom">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8 transition-all duration-300 hover:scale-110">
                <Image
                  src="/logo/logo.jpeg"
                  alt="SWAD Digital Solutions Logo"
                  fill
                  className="object-contain rounded-md"
                  sizes="32px"
                />
              </div>
              <span className="text-xl font-bold">SWAD Digital Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Delivering scalable enterprise software, cloud infrastructure, cybersecurity, and managed services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4 animate-fade-in-down">Quick Links</h3>
            <ul className="space-y-2">
              <li className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-all duration-300 hover-scale">
                  About Us
                </Link>
              </li>
              <li className="animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                <Link href="/solutions" className="text-gray-300 hover:text-accent transition-all duration-300 hover-scale">
                  Solutions
                </Link>
              </li>
              <li className="animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
                <Link href="/news" className="text-gray-300 hover:text-accent transition-all duration-300 hover-scale">
                  News & Insights
                </Link>
              </li>
              <li className="animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-all duration-300 hover-scale">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 animate-fade-in-down">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p className="animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
                Email: <a href="mailto:info@swaddigitalsolutions.com" className="text-accent hover:text-accent/80 transition-all duration-300 hover-glow">info@swaddigitalsolutions.com</a>
              </p>
              <p className="animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
                Phone: <a href="tel:+2347011914628" className="text-accent hover:text-accent/80 transition-all duration-300 hover-glow">+234 701 191 4628</a>
              </p>
              <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <p className="font-medium mb-2">Address:</p>
                <p>Landmark Towers, Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="animate-pulse">&copy; 2025 SWAD Digital Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
