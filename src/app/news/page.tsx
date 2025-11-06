import Image from 'next/image';
import Link from 'next/link';
import NewsList from '@/components/NewsList';
import AnimatedSection from '@/components/AnimatedSection';
import CorporateHero from '@/components/CorporateHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Insights - SWAD Digital Solutions',
  description: 'Stay updated with the latest trends in enterprise technology, industry insights, and company news from SWAD Digital Solutions.',
  openGraph: {
    title: 'News & Insights - SWAD Digital Solutions',
    description: 'Stay updated with the latest trends in enterprise technology, industry insights, and company news.',
    url: 'https://www.swaddigitalsolutions.com/news',
  },
};

export default function News() {
  return (
    <>
      {/* Hero Section */}
      <CorporateHero
        title="Insights & Updates"
        subtitle="News & Insights"
        description="Stay informed about the latest trends in enterprise technology, industry insights, and company news"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* News Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <NewsList />
        </div>
      </section>
    </>
  );
}
