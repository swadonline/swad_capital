import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - SWAD Digital Solutions',
  description: 'Privacy Policy for SWAD Digital Solutions Ltd. Learn how we collect, use, and protect your personal information. Effective Date: November 5, 2025.',
  openGraph: {
    title: 'Privacy Policy - SWAD Digital Solutions',
    description: 'Privacy Policy for SWAD Digital Solutions Ltd. Learn how we collect, use, and protect your personal information.',
    url: 'https://www.swaddigitalsolutions.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Privacy Policy"
        subtitle="Data Protection"
        description="Effective Date: November 5, 2025"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      />

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 mb-12 text-corporate-gray-700 leading-relaxed">
                  <p className="text-lg">
                    This Privacy Policy explains how SWAD Digital Solutions Ltd (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) collects, uses, and protects your personal information when you use our website (the &quot;Site&quot;) and related digital services.
                  </p>
                  <p className="text-lg">
                    By accessing or using our Site, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use immediately.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">1. Company Information</h2>
                    <div className="bg-corporate-gray-50 p-6 rounded-lg border border-corporate-gray-200 space-y-2 text-corporate-gray-700">
                      <p className="font-display font-semibold text-corporate-gray-900 text-lg">SWAD Digital Solutions Ltd</p>
                      <p>A subsidiary of SWAD Holdings Ltd</p>
                      <p>
                        Email: <a href="mailto:info@swaddigitalsolutions.com" className="text-primary hover:text-primary-light transition-colors font-medium">info@swaddigitalsolutions.com</a>
                      </p>
                      <p>Registered in Nigeria</p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">2. Information We Collect</h2>
                    <p className="text-corporate-gray-700 leading-relaxed mb-6">
                      We may collect the following types of information:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-display font-semibold text-corporate-gray-900 mb-3">a. Personal Information:</h3>
                        <p className="text-corporate-gray-700 leading-relaxed">
                          Information you voluntarily provide, such as your name, email address, phone number, company name, or any data submitted through forms or inquiries.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-corporate-gray-900 mb-3">b. Technical Information:</h3>
                        <p className="text-corporate-gray-700 leading-relaxed">
                          Automatically collected data including your IP address, browser type, device information, pages visited, and time spent on the Site.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-corporate-gray-900 mb-3">c. Cookies and Tracking Technologies:</h3>
                        <p className="text-corporate-gray-700 leading-relaxed">
                          We use cookies and similar tools to enhance user experience, analyze traffic, and improve our services. You may adjust your browser settings to disable cookies, but this may limit Site functionality.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">3. How We Use Your Information</h2>
                    <p className="text-corporate-gray-700 leading-relaxed mb-6">
                      We use collected information for:
                    </p>
                    <ul className="space-y-3 text-corporate-gray-700">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Providing and improving our digital services and website functionality.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Responding to inquiries and customer support requests.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Sending service updates, offers, and communications (if consented).</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Conducting analytics, security checks, and system maintenance.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Fulfilling legal obligations or protecting our rights.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">4. Data Sharing and Disclosure</h2>
                    <p className="text-corporate-gray-700 leading-relaxed mb-6">
                      We do not sell or rent your personal data. However, we may share limited information with:
                    </p>
                    <ul className="space-y-3 text-corporate-gray-700 mb-6">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Service providers or contractors that support our operations (e.g., hosting, analytics, security).</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Regulatory or legal authorities, when required by law or to protect our legal interests.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Affiliates within the SWAD Group, for business and operational purposes under strict confidentiality.</span>
                      </li>
                    </ul>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      All data sharing follows confidentiality and data protection obligations.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">5. Data Retention</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When no longer needed, data is securely deleted or anonymized.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">6. Data Security</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      We apply reasonable technical and organizational safeguards to protect your information against unauthorized access, disclosure, alteration, or destruction. However, no online system is fully secure; use the Site at your own discretion.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">7. Your Rights</h2>
                    <p className="text-corporate-gray-700 leading-relaxed mb-6">
                      Depending on applicable law, you may have the right to:
                    </p>
                    <ul className="space-y-3 text-corporate-gray-700 mb-6">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Access, correct, or request deletion of your personal data.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Withdraw consent for marketing communications.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Request information about how your data is processed.</span>
                      </li>
                    </ul>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      To exercise these rights, contact <a href="mailto:info@swaddigitalsolutions.com" className="text-primary hover:text-primary-light transition-colors font-medium">info@swaddigitalsolutions.com</a>.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">8. Children&apos;s Privacy</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      Our Site is not directed toward children under 18. We do not knowingly collect personal information from minors. If you believe a child has provided us with data, contact us for prompt deletion.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">9. Third-Party Links</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      Our Site may contain links to third-party websites. We are not responsible for their privacy practices or content. Review their privacy policies before providing any information.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">10. Changes to This Policy</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      We may update this Privacy Policy at any time. The revised version will be posted on this page with a new effective date. Continued use of the Site after changes means you accept the updated policy.
                    </p>
                  </div>

                  {/* Section 11 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">11. Contact Us</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        For any questions, complaints, or data-related inquiries, contact:
                      </p>
                      <div className="bg-corporate-gray-50 p-6 rounded-lg border border-corporate-gray-200">
                        <p className="font-display font-semibold text-corporate-gray-900 mb-3 text-lg">SWAD Digital Solutions Ltd</p>
                        <p>
                          Email: <a href="mailto:info@swaddigitalsolutions.com" className="text-primary hover:text-primary-light transition-colors font-medium">info@swaddigitalsolutions.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
