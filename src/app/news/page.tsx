import Image from 'next/image';
import Link from 'next/link';
import NewsList from '@/components/NewsList';

export const metadata = {
  title: 'News & Insights - SWAD Digital Solutions',
  description: 'Stay updated with the latest trends in enterprise technology, industry insights, and company news from SWAD Digital Solutions.',
};


export default function News() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Stay informed about the latest trends in enterprise technology, industry insights, and company news
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container-max">
          <NewsList />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates in enterprise technology
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
