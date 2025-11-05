'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const newsArticles = [
  {
    id: 1,
    title: 'From Local Challenges to Global Solutions: Why Africa\'s Innovations Have Universal Impact',
    date: 'October 2025',
    excerpt: 'Innovation born of necessity, designed for the world. African innovators have turned everyday challenges into globally relevant solutions that are now shaping the future of technology adoption worldwide.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Innovation',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes'
  },
  {
    id: 2,
    title: 'Building Global Companies from Africa: How Technology Is Enabling Borderless Scale',
    date: 'October 2025',
    excerpt: 'A new generation of African entrepreneurs is building for global relevance from day one, designing platforms with scalability and cross-border functionality baked in from inception.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    category: 'Global Startups',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes'
  },
  {
    id: 3,
    title: 'Africa Rising: Technology, Innovation, and the Next Frontier of Global Growth',
    date: 'October 2025',
    excerpt: 'Africa is no longer just a story of potential — it is a story of momentum. The continent\'s evolution from resource-driven to knowledge-driven economies represents one of the most profound investment opportunities of our time.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Emerging Markets',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes'
  },
  {
    id: 4,
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
  const articlesPerPage = 3;
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);
  
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = newsArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 stagger-container">
      {currentArticles.map((article, index) => (
        <article key={article.id} className="card hover:shadow-xl transition-all duration-300 hover-scale hover-tilt animate-fade-in-up flex flex-col h-full p-4 sm:p-6" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="relative mb-4 overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={250}
              className="w-full h-40 sm:h-48 object-cover rounded-lg hover-scale transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium hover-glow transition-all duration-300">
                {article.category}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col flex-grow space-y-3">
            <div className="flex items-center justify-between text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
              <span>{article.date}</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime}
              </span>
            </div>
            
            <h2 className="text-base sm:text-lg font-semibold text-primary leading-tight animate-fade-in-up line-clamp-3" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              {article.title}
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed animate-fade-in-up line-clamp-4 flex-grow" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
              {article.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto pt-4 space-y-2 sm:space-y-0">
              <div className="text-xs sm:text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                By {article.author}
              </div>
              
              <Link 
                href={`/news/${article.id}`}
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-all duration-300 hover-scale animate-fade-in-up text-sm sm:text-base whitespace-nowrap"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                Read more
                <svg className="w-4 h-4 ml-1 hover-rotate transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="col-span-full flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-scale text-sm sm:text-base"
          >
            Previous
          </button>
          
          <div className="flex space-x-1 sm:space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover-scale text-sm sm:text-base ${
                  page === currentPage
                    ? 'bg-primary text-white animate-pulse'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover-scale text-sm sm:text-base"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
