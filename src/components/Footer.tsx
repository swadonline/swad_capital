'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'News & Insights', href: '/news' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Terms of Use', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ],
  };

  return (
    <footer className="bg-corporate-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10 bg-white/10 p-1 rounded-md border border-white/20">
                <Image
                  src="/logo/logo.jpeg"
                  alt="SWAD Digital Solutions Logo"
                  fill
                  className="object-contain rounded-md"
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-display font-bold">SWAD Digital</span>
            </div>
            <p className="text-corporate-gray-400 mb-6 leading-relaxed">
              Delivering scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-corporate-gray-400 hover:text-white transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/hardware" className="text-corporate-gray-400 hover:text-white transition-colors duration-300 inline-block">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/solutions/software" className="text-corporate-gray-400 hover:text-white transition-colors duration-300 inline-block">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/solutions/services" className="text-corporate-gray-400 hover:text-white transition-colors duration-300 inline-block">
                  Services
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-corporate-gray-400">
              <p>
                <a href="mailto:info@swaddigitalsolutions.com" className="hover:text-white transition-colors duration-300">
                  info@swaddigitalsolutions.com
                </a>
              </p>
              <p>
                <a href="tel:+2347011914628" className="hover:text-white transition-colors duration-300">
                  +234 701 191 4628
                </a>
              </p>
              <div className="mt-6">
                <p className="font-medium text-white mb-2">Global Offices</p>
                <p className="text-sm">Lagos, Nigeria</p>
                <p className="text-sm">London, UK</p>
                <p className="text-sm">New York, USA</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-corporate-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-corporate-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SWAD Digital Solutions Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-corporate-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
