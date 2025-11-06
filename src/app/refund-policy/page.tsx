import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - SWAD Digital Solutions',
  description: 'Refund Policy for SWAD Digital Solutions Ltd. Effective Date: November 5, 2025.',
  openGraph: {
    title: 'Refund Policy - SWAD Digital Solutions',
    description: 'Refund Policy for SWAD Digital Solutions Ltd. Effective Date: November 5, 2025.',
    url: 'https://www.swaddigitalsolutions.com/refund-policy',
  },
};

export default function RefundPolicy() {
  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Refund Policy"
        subtitle="Payment Terms"
        description="Effective Date: November 5, 2025"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Refund Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-corporate-gray-700 leading-relaxed mb-12">
                  This Refund Policy applies to all digital products, services, and subscriptions provided by SWAD Digital Solutions Ltd (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By making a purchase or payment through our website or any related platform, you agree to the terms stated below.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">1. No Refund Policy</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        All payments made to SWAD Digital Solutions Ltd are final and non-refundable. Once a transaction is completed, it cannot be reversed, canceled, or refunded.
                      </p>
                      <p>
                        We operate on a strict no-refund basis for all products, services, subscriptions, and fees, whether paid in full or partially.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">2. Discretionary Refunds</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        In rare and exceptional circumstances, a refund may be granted solely at our discretion. Such decisions are final and are not subject to negotiation or appeal.
                      </p>
                      <p>
                        If a refund is granted, it will be processed using the original payment method within a reasonable timeframe.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">3. Non-Refundable Situations</h2>
                    <p className="text-corporate-gray-700 leading-relaxed mb-6">
                      Refunds will not be issued under the following conditions:
                    </p>
                    <ul className="space-y-3 text-corporate-gray-700">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Change of mind or user dissatisfaction after purchase.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Failure to use or access the product/service.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Misunderstanding of product functionality or scope.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Payment for services already rendered or partially completed.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span>Technical issues originating from the user&apos;s device, network, or third-party systems.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">4. Processed Payments</h2>
                    <p className="text-corporate-gray-700 leading-relaxed">
                      Once a payment is successfully processed, it is recorded as complete. Any dispute or reversal request through a payment processor or bank may result in suspension of service or legal action for breach of terms.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="card">
                    <h2 className="text-2xl font-display font-bold text-corporate-gray-900 mb-6">5. Contact Information</h2>
                    <div className="space-y-4 text-corporate-gray-700 leading-relaxed">
                      <p>
                        If you believe a refund may be warranted under exceptional circumstances, contact:
                      </p>
                      <div className="bg-corporate-gray-50 p-6 rounded-lg border border-corporate-gray-200">
                        <p className="font-display font-semibold text-corporate-gray-900 mb-3 text-lg">SWAD Digital Solutions Ltd</p>
                        <p>
                          Email: <a href="mailto:info@swaddigitalsolutions.com" className="text-primary hover:text-primary-light transition-colors font-medium">info@swaddigitalsolutions.com</a>
                        </p>
                      </div>
                      <p className="text-sm text-corporate-gray-600 italic">
                        All refund-related inquiries must include proof of payment and a clear explanation of the request.
                      </p>
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
