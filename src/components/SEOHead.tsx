import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false,
}: SEOHeadProps) {
  const baseUrl = 'https://www.swaddigitalsolutions.com'; // Replace with your actual domain
  const fullTitle = title ? `${title} | SWAD Digital Solutions` : 'SWAD Digital Solutions - Powering the Future Through Technology';
  const fullDescription = description || 'SWAD Digital Solutions delivers scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients across emerging and developed markets.';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content="SWAD Digital Solutions" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="SWAD Digital Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:creator" content="@swadtech" />
      <meta name="twitter:site" content="@swadtech" />

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Language and Geo Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.5074;-0.1278" />
      <meta name="ICBM" content="51.5074, -0.1278" />

      {/* Business/Organization Tags */}
      <meta name="business:contact_data:street_address" content="123 Digital Street" />
      <meta name="business:contact_data:locality" content="London" />
      <meta name="business:contact_data:region" content="England" />
      <meta name="business:contact_data:postal_code" content="SW1A 1AA" />
      <meta name="business:contact_data:country_name" content="United Kingdom" />

      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
              },
              ...(title ? [{
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": fullCanonicalUrl
              }] : [])
            ]
          })
        }}
      />
    </Head>
  );
}
