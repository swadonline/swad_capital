import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - SWAD Digital Solutions',
  description: 'Terms of Use for SWAD Digital Solutions Ltd website. Effective Date: November 5, 2025.',
  openGraph: {
    title: 'Terms of Use - SWAD Digital Solutions',
    description: 'Terms of Use for SWAD Digital Solutions Ltd website. Effective Date: November 5, 2025.',
    url: 'https://www.swaddigitalsolutions.com/terms',
  },
};

export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Terms of Use"
        subtitle="Legal Information"
        description="Effective Date: November 5, 2025"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-corporate-gray-700 leading-relaxed mb-12">
                  Welcome to the official website of SWAD Digital Solutions Ltd (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By accessing or using this website (the &quot;Site&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree, do not use the Site.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">1. Company Information</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        SWAD Digital Solutions Ltd is a subsidiary of SWAD Holdings Ltd, operating in digital technology, software, and related services.
                      </p>
                      <div className="bg-corporate-gray-50 p-6 rounded-lg border border-corporate-gray-200">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">Registered Office:</span>
                            <span>Lagos, Nigeria</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-semibold mr-2">Email:</span>
                            <a href="mailto:info@swaddigitalsolutions.com" className="text-primary hover:text-primary-light transition-colors font-medium">info@swaddigitalsolutions.com</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">2. Use of the Website</h2>
                    <p className="text-corporate-gray-700 leading-relaxed mb-6">
                      You agree to use this Site only for lawful purposes and in accordance with these Terms. You may not:
                    </p>
                    <ul className="space-y-3 text-corporate-gray-700">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Engage in any activity that disrupts or interferes with the operation or security of the Site.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Copy, modify, reproduce, distribute, or create derivative works from any part of the Site without prior written consent.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Use automated systems (bots, scrapers, crawlers) to access the Site.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">3. Intellectual Property</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      All content, trademarks, designs, text, graphics, software, and other materials on this Site are owned or licensed by SWAD Digital Solutions Ltd and are protected by intellectual property laws. Unauthorized use of any material is strictly prohibited.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">4. User Content</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        If you submit, upload, or transmit any content through the Site (e.g., feedback, comments, or data), you grant us a worldwide, royalty-free, non-exclusive, perpetual license to use, reproduce, and distribute that content for operational or promotional purposes.
                      </p>
                      <p>
                        You agree that any content you provide:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Does not violate any third-party rights or applicable law.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Is not defamatory, obscene, or misleading.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">5. Privacy</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      Your use of this Site is also governed by our Privacy Policy, available on the Site. By using the Site, you consent to our collection and use of personal data as described in that policy.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">6. Disclaimer of Warranties</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        The Site and all materials provided are made available &quot;as is&quot; and &quot;as available&quot; without warranty of any kind. We make no representation or guarantee regarding:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>The accuracy, completeness, or reliability of the content.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>Continuous or error-free operation of the Site.</span>
                        </li>
                      </ul>
                      <p className="font-semibold text-corporate-gray-900 mt-4">
                        You use this Site at your own risk.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">7. Limitation of Liability</h2>
                    <p className="text-corporate-gray-700 leading-relaxed mb-6">
                      To the fullest extent permitted by law, SWAD Digital Solutions Ltd, its affiliates, directors, and employees shall not be liable for any indirect, incidental, or consequential damages arising from:
                    </p>
                    <ul className="space-y-3 text-corporate-gray-700">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Use or inability to use the Site.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Reliance on any information contained herein.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Unauthorized access or alteration of your transmissions.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 8 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">8. Links to Third-Party Sites</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      The Site may contain links to external websites. We are not responsible for the content or privacy practices of those websites and do not endorse or control them.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">9. Changes to These Terms</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      We may modify or update these Terms at any time without prior notice. The &quot;Effective Date&quot; above will reflect the latest revision. Your continued use of the Site constitutes acceptance of the updated Terms.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">10. Termination</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      We reserve the right to suspend or terminate your access to the Site, without notice, for any conduct that violates these Terms or is otherwise harmful to the interests of SWAD Digital Solutions Ltd.
                    </p>
                  </div>

                  {/* Section 11 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">11. Governing Law</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.
                    </p>
                  </div>

                  {/* Section 12 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">12. Contact Information</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        For any questions or concerns about these Terms, please contact:
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
