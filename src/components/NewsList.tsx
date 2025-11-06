'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const newsArticles = [
  {
    id: 1,
    slug: 'from-local-challenges-to-global-solutions-why-africas-innovations-have-universal-impact',
    title: 'From Local Challenges to Global Solutions: Why Africa\'s Innovations Have Universal Impact',
    date: 'October 2025',
    excerpt: 'Innovation born of necessity, designed for the world. African innovators have turned everyday challenges into globally relevant solutions that are now shaping the future of technology adoption worldwide.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    category: 'Innovation',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes'
  },
  {
    id: 2,
    slug: 'building-global-companies-from-africa-how-technology-is-enabling-borderless-scale',
    title: 'Building Global Companies from Africa: How Technology Is Enabling Borderless Scale',
    date: 'October 2025',
    excerpt: 'A new generation of African entrepreneurs is building for global relevance from day one, designing platforms with scalability and cross-border functionality baked in from inception.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop',
    category: 'Global Startups',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes'
  },
  {
    id: 3,
    slug: 'africa-rising-technology-innovation-and-the-next-frontier-of-global-growth',
    title: 'Africa Rising: Technology, Innovation, and the Next Frontier of Global Growth',
    date: 'October 2025',
    excerpt: 'Africa is no longer just a story of potential — it is a story of momentum. The continent\'s evolution from resource-driven to knowledge-driven economies represents one of the most profound investment opportunities of our time.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop',
    category: 'Emerging Markets',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes'
  },
  {
    id: 4,
    slug: 'investing-in-frontier-technologies-the-next-era-of-intelligent-capital',
    title: 'Investing in Frontier Technologies: The Next Era of Intelligent Capital',
    date: 'October 2025',
    excerpt: 'AI, blockchain, and quantum computing are reshaping the foundations of productivity and value creation. We view these frontier technologies as strategic assets that will define the next industrial revolution.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Frontier Tech',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '7 minutes'
  },
  {
    id: 5,
    slug: 'securing-the-digital-future-why-cybersecurity-is-the-cornerstone-of-digital-transformation',
    title: 'Securing the Digital Future: Why Cybersecurity Is the Cornerstone of Digital Transformation',
    date: 'October 2025',
    excerpt: 'In an era defined by data, cybersecurity has become the foundation of trust, resilience, and continuity. Without it, digital transformation cannot succeed — no matter how innovative the strategy.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Cybersecurity',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes'
  },
  {
    id: 6,
    slug: 'powering-progress-the-investment-case-for-renewable-energy-in-the-next-decade',
    title: 'Powering Progress: The Investment Case for Renewable Energy in the Next Decade',
    date: 'October 2025',
    excerpt: 'Renewable energy has evolved from a moral imperative to a strategic and financial opportunity. The intersection of clean energy and digital innovation is where the most significant value will be created.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Sustainability',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '5 minutes'
  },
  {
    id: 7,
    slug: 'the-strategic-edge-how-artificial-intelligence-is-redefining-competitive-advantage',
    title: 'The Strategic Edge: How Artificial Intelligence is Redefining Competitive Advantage',
    date: 'October 2025',
    excerpt: 'AI is no longer a concept confined to research labs. It has become the silent engine driving the next industrial revolution — transforming how businesses create value and make decisions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Artificial Intelligence',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '5 minutes'
  }
];

export default function NewsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);
  
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = newsArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {currentArticles.map((article, index) => (
          <AnimatedSection key={article.id} animation="fadeInUp" delay={index * 0.1}>
            <Link 
              href={`/news/${article.slug}`}
              className="group block h-full"
            >
              <article className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-corporate-gray-200 hover:border-primary/30 overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-500" />
                
                <div className="relative flex-shrink-0">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-gray-900/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-primary/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex flex-col flex-grow p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-corporate-gray-500">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-display font-bold text-corporate-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-corporate-gray-600 leading-relaxed line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-corporate-gray-200">
                    <div className="text-sm text-corporate-gray-500">
                      By {article.author}
                    </div>
                    
                    <div className="inline-flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Read more
                      <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <AnimatedSection animation="fadeInUp" delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-3 border-2 border-corporate-gray-300 rounded-xl text-corporate-gray-700 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold disabled:hover:border-corporate-gray-300 disabled:hover:text-corporate-gray-700"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-5 py-3 rounded-xl transition-all duration-300 font-semibold min-w-[48px] ${
                    page === currentPage
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'border-2 border-corporate-gray-300 text-corporate-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-3 border-2 border-corporate-gray-300 rounded-xl text-corporate-gray-700 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold disabled:hover:border-corporate-gray-300 disabled:hover:text-corporate-gray-700"
            >
              Next
            </button>
          </div>
        </AnimatedSection>
      )}
    </>
  );
}
