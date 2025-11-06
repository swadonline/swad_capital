import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CorporateHero from '@/components/CorporateHero';
import { generateArticleSchema, baseUrl } from '@/lib/seo';
import AnimatedSection from '@/components/AnimatedSection';

// Article data - in a real app, this would come from a CMS or database
const articles = {
  '1': {
    id: 1,
    title: 'From Local Challenges to Global Solutions: Why Africa\'s Innovations Have Universal Impact',
    date: 'October 2025',
    excerpt: 'Innovation born of necessity, designed for the world. African innovators have turned everyday challenges into globally relevant solutions that are now shaping the future of technology adoption worldwide.',
    image: '/news-1.jpg',
    category: 'Innovation',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes',
    content: `
      <h2>Innovation Born of Necessity, Designed for the World</h2>
      <p>Around the world, some of the most transformative innovations have come from places where constraints demanded creativity. Nowhere is this truer than in Africa — a continent where scarcity has consistently inspired radical problem-solving and scalable ingenuity.</p>
      
      <p>From mobile payments to decentralized energy systems, African innovators have turned everyday challenges into globally relevant solutions. What began as responses to local realities are now shaping the future of technology adoption, financial inclusion, and sustainable development worldwide.</p>
      
      <p>At SWAD Digital Solutions, we see Africa's innovators as global architects — building models that the rest of the world is learning from.</p>

      <h2>The Reverse Innovation Effect</h2>
      <p>Traditionally, technology flowed from developed to developing markets. That model is being rewritten.</p>
      
      <p>Today, "reverse innovation" — where solutions built for Africa's unique challenges are exported globally — is gaining traction across multiple sectors:</p>
      
      <ul>
        <li><strong>Fintech:</strong> Mobile payment systems perfected in Africa are influencing global digital banking frameworks.</li>
        <li><strong>Energy:</strong> Off-grid solar and microgrid technologies pioneered for rural Africa are now being adapted for disaster recovery and energy resilience in developed markets.</li>
        <li><strong>Healthcare:</strong> Lean, tech-enabled health platforms are inspiring new delivery models in cost-constrained systems worldwide.</li>
      </ul>
      
      <p>Africa's startups are not just catching up; they're leading in adaptability, efficiency, and affordability — three characteristics defining the next era of innovation.</p>

      <h2>The Power of Constraint-Based Design</h2>
      <p>African innovators operate in complex environments — limited capital, fragmented infrastructure, and diverse regulatory systems. Yet, these constraints force efficiency, simplicity, and inclusivity from day one.</p>
      
      <p>Solutions born under such conditions naturally scale beyond borders. They are:</p>
      
      <ul>
        <li><strong>Cost-effective:</strong> Designed to deliver maximum value with minimal waste.</li>
        <li><strong>Mobile-first:</strong> Built for accessibility, leveraging ubiquitous smartphone adoption.</li>
        <li><strong>Resilient:</strong> Engineered to function in environments of unpredictability.</li>
      </ul>
      
      <p>At SWAD Digital Solutions, we believe this constraint-based innovation is Africa's superpower — and a defining trait of future global leaders in technology.</p>

      <h2>Investment with Global Implications</h2>
      <p>Investing in African technology is not charity — it's strategic foresight. The problems being solved on the continent — energy access, healthcare, logistics, and digital payments — are the same ones facing the rest of the world, albeit in different forms.</p>
      
      <p>By supporting startups that address these challenges, SWAD Digital Solutions is investing in universal solutions with exponential scalability. Our approach is to identify, back, and co-build ventures that can compete globally while retaining the local intelligence that makes them distinct.</p>

      <h2>Our Perspective</h2>
      <p>Africa's innovations are global in origin, global in relevance, and global in destiny. At SWAD Digital Solutions, we believe the next generation of transformative technology companies will not just emerge from Africa — they will transform the world from Africa.</p>
      
      <p>By combining capital, technology, and long-term vision, we aim to amplify these stories and build a future where innovation knows no boundaries — and impact knows no borders.</p>
    `,
    tags: ['Africa Innovation', 'Global Technology', 'Venture Capital', 'Sustainability', 'Reverse Innovation', 'Emerging Markets']
  },
  '2': {
    id: 2,
    title: 'Building Global Companies from Africa: How Technology Is Enabling Borderless Scale',
    date: 'October 2025',
    excerpt: 'A new generation of African entrepreneurs is building for global relevance from day one, designing platforms with scalability and cross-border functionality baked in from inception.',
    image: '/news-2.jpg',
    category: 'Global Startups',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes',
    content: `
      <h2>Africa's Entrepreneurs Are Thinking Global from Day One</h2>
      <p>A new generation of African entrepreneurs is no longer building for local survival — they're building for global relevance. From Lagos to Nairobi, Cape Town to Accra, startups are designing platforms with scalability, interoperability, and cross-border functionality baked in from inception.</p>
      
      <p>These founders are part of a continental movement powered by technology, ambition, and access to global capital. For the first time in modern history, Africa is exporting not just commodities — but innovation, digital infrastructure, and intellectual capital.</p>
      
      <p>At SWAD Digital Solutions, we see Africa as the next hub of globally competitive innovation, where companies are designed to transcend borders from the very start.</p>

      <h2>Technology Removes Traditional Barriers</h2>
      <p>In the past, Africa's business landscape was limited by geography, regulation, and infrastructure. Today, technology dissolves those boundaries. Cloud infrastructure, digital payments, remote collaboration, and distributed logistics networks allow African startups to serve customers across continents without physical expansion.</p>
      
      <p>Companies can now:</p>
      <ul>
        <li>Deploy products instantly via the cloud.</li>
        <li>Access distributed teams and talent globally.</li>
        <li>Monetize services in multiple currencies through fintech integration.</li>
        <li>Scale across markets with minimal marginal cost.</li>
      </ul>
      
      <p>This borderless digital ecosystem is creating the conditions for Africa's first wave of truly global companies.</p>

      <h2>Capital and Capability Are Converging</h2>
      <p>Global investors are beginning to recognize Africa's asymmetric advantage: the combination of untapped markets, cost-efficient innovation, and digital-native talent. SWAD Digital Solutions is part of that convergence — bridging capital, product expertise, and strategic networks to help local founders scale globally.</p>
      
      <p>Through our Venture Studio, we co-create software and digital platforms capable of competing on the international stage, while our investment arm provides the patient growth capital required to scale sustainably.</p>
      
      <p>Our goal is not just to fund African innovation, but to build enduring companies with global utility and local soul.</p>

      <h2>Our Perspective</h2>
      <p>Africa's next decade will produce a generation of companies that are both proudly African and globally dominant. At SWAD Digital Solutions, we are building and investing in ventures that prove geography is no longer destiny — innovation can come from anywhere, and scale everywhere.</p>
      
      <p>We believe Africa's entrepreneurs are not catching up to the world; they are defining the future of global business. The companies emerging from this ecosystem will not only compete on the global stage — they will help shape it.</p>
    `,
    tags: ['Africa', 'Global Startups', 'Venture Capital', 'Borderless Technology', 'Emerging Markets', 'Digital Innovation']
  },
  '3': {
    id: 3,
    title: 'Africa Rising: Technology, Innovation, and the Next Frontier of Global Growth',
    date: 'October 2025',
    excerpt: 'Africa is no longer just a story of potential — it is a story of momentum. The continent\'s evolution from resource-driven to knowledge-driven economies represents one of the most profound investment opportunities of our time.',
    image: '/news-3.jpg',
    category: 'Emerging Markets',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes',
    content: `
      <h2>The Continent at the Center of a New Digital Era</h2>
      <p>Africa is no longer just a story of potential — it is a story of momentum. Across 54 nations, a new generation of founders, engineers, and investors is redefining what growth means in the 21st century.</p>
      
      <p>With a young, connected population and rapid urbanization, Africa is now the fastest-growing digital market on the planet. The continent's evolution from resource-driven to knowledge-driven economies represents one of the most profound investment opportunities of our time.</p>
      
      <p>At SWAD Digital Solutions, we believe technology will be the single greatest lever for inclusive growth across Africa — unlocking productivity, improving governance, and enabling sustainable prosperity.</p>

      <h2>Digital Transformation as Development</h2>
      <p>Mobile penetration and fintech innovation have already transformed financial access. Platforms such as mobile banking, digital payments, and micro-credit have brought millions into the formal economy for the first time.</p>
      
      <p>Yet this is only the beginning. The next wave of transformation will be powered by AI-enabled agriculture, e-health platforms, logistics optimization, renewable-energy systems, and smart-infrastructure networks — all built on Africa's unique blend of agility and necessity-driven creativity.</p>
      
      <p>As data connectivity improves and cloud infrastructure scales, digital transformation is becoming the default mode of development.</p>

      <h2>The Investor's Opportunity</h2>
      <p>Africa's startup ecosystem has matured from early-stage experimentation to scalable, investor-ready enterprises. Venture funding across key markets such as Nigeria, Kenya, South Africa, and Egypt continues to rise, with increasing participation from global funds and corporate venture arms.</p>
      
      <p>SWAD Digital Solutions invests selectively in technology companies building foundational infrastructure for the next decade — software that supports logistics, finance, energy, and healthcare. We also co-build products through our Venture Studio, applying global expertise to local challenges.</p>
      
      <p>The opportunity is not in quick exits, but in long-term value creation — in helping to build enduring companies that form the backbone of a modern digital economy.</p>

      <h2>Our Perspective</h2>
      <p>At SWAD Digital Solutions, we invest with conviction in Africa's digital future. Our approach blends patient capital, local partnerships, and deep technology expertise to accelerate transformative ventures.</p>
      
      <p>We believe Africa is not merely the next frontier — it is the center of global innovation's next chapter. The convergence of youth, creativity, and connectivity will define the continent's role in shaping the world's technological evolution.</p>
    `,
    tags: ['Africa Tech', 'Emerging Markets', 'Venture Investment', 'Digital Transformation', 'Sustainable Growth']
  },
  '4': {
    id: 4,
    title: 'Investing in Frontier Technologies: The Next Era of Intelligent Capital',
    date: 'October 2025',
    excerpt: 'AI, blockchain, and quantum computing are reshaping the foundations of productivity and value creation. We view these frontier technologies as strategic assets that will define the next industrial revolution.',
    image: '/news-4.jpg',
    category: 'Frontier Tech',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '7 minutes',
    content: `
      <h2>A New Age of Intelligent Capital</h2>
      <p>The global economy is undergoing a technological inflection point. Artificial intelligence, machine learning, blockchain, and quantum computing are no longer distant innovations — they are reshaping the foundations of productivity, commerce, and value creation.</p>
      
      <p>At SWAD Digital Solutions, we view these frontier technologies not as speculative frontiers but as strategic assets that will define the next industrial revolution. Our investment philosophy is grounded in understanding how these tools will converge to transform how humans interact with data, systems, and each other.</p>

      <h2>The Convergence That Changes Everything</h2>
      <p>For the first time in modern history, multiple exponential technologies are maturing simultaneously:</p>
      
      <ul>
        <li><strong>Artificial Intelligence and Machine Learning</strong> are automating decision-making and augmenting human creativity.</li>
        <li><strong>Blockchain and Decentralized Systems</strong> are enabling trustless, transparent transactions and redefining digital ownership.</li>
        <li><strong>Quantum Computing</strong>, though early, promises computation power that could make previously impossible breakthroughs routine.</li>
        <li><strong>IoT and Edge Computing</strong> are connecting the physical and digital worlds with real-time intelligence.</li>
      </ul>
      
      <p>The convergence of these technologies represents a shift from digital transformation to digital evolution — where businesses don't just adopt technology, they become technology.</p>

      <h2>Our Investment Lens</h2>
      <p>SWAD Digital Solutions's investment approach focuses on identifying companies and founders that operate at the intersection of innovation, scalability, and impact. We look for:</p>
      
      <ul>
        <li>AI-native companies leveraging automation and data intelligence to solve complex global problems.</li>
        <li>Machine Learning platforms that bring efficiency to legacy industries such as healthcare, logistics, and energy.</li>
        <li>Blockchain-driven solutions in supply chain transparency, digital identity, fintech infrastructure, and decentralized data management.</li>
        <li>Deep tech ventures developing breakthrough hardware, quantum algorithms, or edge AI models.</li>
      </ul>
      
      <p>We are sector-agnostic but thesis-driven: our goal is to back technologies with enduring strategic relevance — those that will still matter 50 years from now.</p>

      <h2>Our Perspective</h2>
      <p>The next decade will not belong to those who merely adapt, but to those who anticipate and invest in what comes next. Frontier technologies are no longer optional experiments — they are the foundation of the new global economy.</p>
      
      <p>At SWAD Digital Solutions, we continue to back visionary teams and technologies redefining how the world works, communicates, and grows. The frontier is not ahead of us — it's being built right now.</p>
    `,
    tags: ['Frontier Technology', 'Artificial Intelligence', 'Blockchain', 'Machine Learning', 'Deep Tech', 'Quantum Computing', 'Venture Investing']
  },
  '5': {
    id: 5,
    title: 'Securing the Digital Future: Why Cybersecurity Is the Cornerstone of Digital Transformation',
    date: 'October 2025',
    excerpt: 'In an era defined by data, cybersecurity has become the foundation of trust, resilience, and continuity. Without it, digital transformation cannot succeed — no matter how innovative the strategy.',
    image: '/news-3.jpg',
    category: 'Cybersecurity',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '6 minutes',
    content: `
      <h2>The Paradox of Progress</h2>
      <p>Every leap in digital transformation brings both promise and peril. As organizations embrace automation, cloud computing, and AI-driven systems, their exposure to cyber risk expands exponentially. The same technologies that enable global connectivity and efficiency also create new vectors for disruption.</p>
      
      <p>In an era defined by data, cybersecurity has become the foundation of trust, resilience, and continuity. Without it, digital transformation cannot succeed — no matter how innovative or ambitious the strategy.</p>
      
      <p>At SWAD Digital Solutions, we view cybersecurity not merely as a defensive necessity but as a strategic enabler of digital evolution.</p>

      <h2>The New Business Imperative</h2>
      <p>Cybersecurity has shifted from an IT issue to a boardroom priority. Attacks today target supply chains, financial systems, healthcare platforms, and even national infrastructure. The consequences are no longer limited to operational downtime — they now threaten brand credibility, investor confidence, and geopolitical stability.</p>
      
      <p>Organizations leading in digital transformation recognize that cybersecurity is integral to innovation. Building secure systems is not about compliance; it's about ensuring long-term scalability, customer trust, and strategic agility.</p>

      <h2>Evolving Threats, Smarter Defenses</h2>
      <p>The threat landscape is evolving rapidly. AI-generated phishing, deepfake fraud, and ransomware-as-a-service are redefining what defense means. In response, cybersecurity strategies must evolve from reactive protection to predictive resilience — identifying threats before they manifest.</p>
      
      <p>This is where artificial intelligence, automation, and data analytics converge with cybersecurity. AI can detect anomalies across massive datasets, automate response times, and continuously learn from new threats, enabling proactive defense mechanisms.</p>

      <h2>Our Perspective</h2>
      <p>Cybersecurity and digital transformation are two sides of the same coin. One drives innovation; the other safeguards it. Together, they define the trust architecture of the modern economy.</p>
      
      <p>In the next decade, the leaders who emerge strongest will be those who embed security into every layer of transformation — from strategy to execution, from the cloud to the code.</p>
      
      <p>SWAD Digital Solutions continues to back innovators building that secure digital future.</p>
    `,
    tags: ['Cybersecurity', 'Digital Transformation', 'Artificial Intelligence', 'Data Security', 'Innovation']
  },
  '6': {
    id: 6,
    title: 'Powering Progress: The Investment Case for Renewable Energy in the Next Decade',
    date: 'October 2025',
    excerpt: 'Renewable energy has evolved from a moral imperative to a strategic and financial opportunity. The intersection of clean energy and digital innovation is where the most significant value will be created.',
    image: '/news-5.jpg',
    category: 'Sustainability',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '5 minutes',
    content: `
      <h2>A Turning Point for Global Energy</h2>
      <p>The global energy landscape is undergoing a structural transformation. Once dominated by fossil fuels and centralized grids, the future is now defined by renewable systems, decentralized generation, and digital intelligence.</p>
      
      <p>As the world races toward net-zero targets, renewable energy has evolved from a moral imperative to a strategic and financial opportunity. For investors, innovators, and policymakers, the question is no longer if renewables will lead — but how fast the transition can be achieved.</p>
      
      <p>At SWAD Digital Solutions, we view renewable energy as the backbone of a new industrial economy — one powered by sustainability, efficiency, and technological convergence.</p>

      <h2>From Alternative to Mainstream</h2>
      <p>Over the past decade, solar and wind energy costs have declined by more than 80%, making renewables the most cost-competitive form of power generation in many markets. What was once considered "alternative" is now mainstream infrastructure.</p>
      
      <p>However, the transition goes beyond simply replacing carbon-intensive sources. The new frontier lies in smart energy systems — integrating renewables with AI, digital grids, and advanced storage solutions to create flexible, resilient, and data-driven energy ecosystems.</p>

      <h2>Technology as the Accelerator</h2>
      <p>The intersection of clean energy and digital innovation is where the most significant value will be created in the coming decade.</p>
      
      <p>AI-driven forecasting optimizes grid performance, while blockchain enables transparent energy trading. Cloud-based systems now allow real-time monitoring of generation and consumption, enabling precision control of distributed assets.</p>
      
      <p>Within SWAD Digital Solutions's portfolio and venture studio ecosystem, we are actively exploring technologies that bridge these domains — from green hydrogen production and battery storage to energy management platforms designed for industrial and urban networks.</p>

      <h2>Our Perspective</h2>
      <p>At SWAD Digital Solutions, we invest in and build ventures that accelerate this transition — from digital platforms optimizing energy operations to next-generation clean technology startups.</p>
      
      <p>Our philosophy is simple: sustainable innovation drives sustainable returns. By combining financial discipline with technological vision, we aim to catalyze solutions that power both progress and prosperity.</p>
    `,
    tags: ['Renewable Energy', 'Sustainability', 'Green Tech', 'Energy Transition', 'Emerging Markets']
  },
  '7': {
    id: 7,
    title: 'The Strategic Edge: How Artificial Intelligence is Redefining Competitive Advantage',
    date: 'October 2025',
    excerpt: 'AI is no longer a concept confined to research labs. It has become the silent engine driving the next industrial revolution — transforming how businesses create value and make decisions.',
    image: '/news-6.jpg',
    category: 'Artificial Intelligence',
    author: 'SWAD Digital Solutions Editorial Team',
    readTime: '5 minutes',
    content: `
      <h2>A New Industrial Era Powered by Intelligence</h2>
      <p>Artificial Intelligence (AI) is no longer a concept confined to research labs or big tech giants. It has become the silent engine driving the next industrial revolution — transforming how businesses create value, optimize operations, and make decisions.</p>
      
      <p>From predictive healthcare to autonomous logistics, AI is rewriting the rules of efficiency, scale, and innovation. At SWAD Digital Solutions, we view AI not simply as a technology, but as an economic catalyst — one that reshapes entire industries and redefines the boundaries of what's possible.</p>

      <h2>Beyond Automation: The Rise of Intelligent Infrastructure</h2>
      <p>The first wave of AI adoption focused on automation — replacing repetitive human tasks with machine precision. But the real transformation lies beyond automation.</p>
      
      <p>The next frontier is intelligent infrastructure — systems that learn, adapt, and improve autonomously. In manufacturing, energy, healthcare, and finance, AI-powered platforms are enabling continuous optimization. These systems don't just execute tasks; they learn from outcomes and feed those insights back into strategic decision-making.</p>
      
      <p>For organizations that master this integration, the payoff is exponential — faster innovation cycles, lower operational risk, and stronger customer intelligence.</p>

      <h2>AI in Enterprise Systems: The Quiet Revolution</h2>
      <p>While consumer-facing AI applications capture headlines, the most profound changes are happening inside enterprise systems — the digital backbones of global commerce.</p>
      
      <p>At SWAD Digital Solutions, our venture studio is actively embedding AI into the software platforms that power modern business operations:</p>
      
      <ul>
        <li><strong>Hospital Management (MedCore)</strong> — predictive analytics for patient outcomes and operational efficiency.</li>
        <li><strong>Hotel Management (Horizon HMS)</strong> — dynamic pricing and occupancy forecasting.</li>
        <li><strong>Retail & Inventory (RetailPro)</strong> — AI-driven demand forecasting and automated procurement.</li>
        <li><strong>Restaurant Operations (DineSuite)</strong> — intelligent menu optimization and customer sentiment analysis.</li>
      </ul>
      
      <p>Each of these solutions leverages data and machine learning to enhance decision quality, reduce waste, and deliver better experiences.</p>

      <h2>The Ethical Imperative</h2>
      <p>As AI becomes foundational to economic progress, its governance becomes equally vital. Responsible AI — systems that are transparent, fair, and secure — is not a moral afterthought; it's a strategic necessity.</p>
      
      <p>SWAD Digital Solutions champions an approach that balances innovation with accountability. We invest in ventures that design with ethics in mind — ensuring that AI augments human potential rather than replacing it.</p>

      <h2>Looking Ahead</h2>
      <p>Over the next decade, AI will evolve from a competitive differentiator to a prerequisite for survival. The firms that thrive will be those who view AI not as a tool, but as a mindset — embedding intelligence into every layer of their operations and culture.</p>
      
      <p>At SWAD Digital Solutions, we continue to partner with visionary entrepreneurs and enterprises who share this belief. Together, we are building the intelligent foundations of tomorrow's global economy.</p>
    `,
    tags: ['Artificial Intelligence', 'Innovation', 'Venture Studio', 'Emerging Technologies', 'Digital Transformation']
  }
};

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles[params.id as keyof typeof articles];
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const articleUrl = `${baseUrl}/news/${params.id}`;
  const articleImage = article.image.startsWith('http') ? article.image : `${baseUrl}${article.image}`;

  return {
    title: `${article.title} | SWAD Digital Solutions`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [articleImage],
      url: articleUrl,
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [articleImage],
      creator: '@swadtech',
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.id as keyof typeof articles];

  if (!article) {
    notFound();
  }

  // Generate article schema
  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    image: article.image,
    publishedTime: new Date().toISOString(),
    author: article.author,
    url: `/news/${params.id}`,
  });

  return (
    <>
      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Breadcrumbs */}
      <div className="container-max pt-8 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'News & Insights', url: '/news' },
            { name: article.title, url: `/news/${params.id}` },
          ]}
        />
      </div>

      {/* Article Header */}
      <CorporateHero
        title={article.title}
        subtitle={article.category}
        description={`${article.author} • ${article.date} • ${article.readTime}`}
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Article Image */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-gray-900/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border border-corporate-gray-200">
                <div 
                  className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-corporate-gray-900 prose-p:text-corporate-gray-700 prose-p:leading-relaxed prose-strong:text-corporate-gray-900 prose-ul:text-corporate-gray-700 prose-li:marker:text-primary max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                {/* Tags */}
                <div className="mt-16 pt-12 border-t border-corporate-gray-200">
                  <h3 className="text-xl font-display font-bold text-corporate-gray-900 mb-6">Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-corporate-gray-50 text-corporate-gray-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer border border-corporate-gray-200 hover:border-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="section-padding bg-corporate-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <Link 
                href="/news"
                className="group inline-flex items-center text-primary hover:text-primary-light font-semibold transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News & Insights
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
