export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SWAD Digital Solutions Ltd.",
    "alternateName": "SWAD Tech",
    "url": "https://www.swaddigitalsolutions.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://swaddigitalsolutions.com/logo.png",
      "width": 1200,
      "height": 630
    },
    "description": "SWAD Digital Solutions delivers scalable enterprise software, cloud infrastructure, cybersecurity, and managed services to clients across emerging and developed markets.",
    "foundingDate": "2020",
    "numberOfEmployees": "50-200",
    "industry": "Information Technology",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "123 Digital Street",
        "addressLocality": "London",
        "addressRegion": "England",
        "postalCode": "SW1A 1AA",
        "addressCountry": "GB"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Landmark Towers",
        "addressLocality": "Victoria Island",
        "addressRegion": "Lagos",
        "addressCountry": "NG"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Dubai International Financial Centre",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Avenue",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-20-0000-0000",
        "contactType": "customer service",
        "email": "info@swadtec.com",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+234-701-191-4628",
        "contactType": "sales",
        "email": "sales@swadtec.com",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      // "https://linkedin.com/company/swad-digital-solutions",
      // "https://twitter.com/swadtech",
      // "https://facebook.com/swaddigital"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "SWAD Holdings Ltd.",
      "url": "https://swadholdings.com"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Enterprise Software Development",
        "description": "Custom applications that streamline operations and unlock data-driven decisions.",
        "provider": {
          "@type": "Organization",
          "name": "SWAD Digital Solutions Ltd."
        },
        "areaServed": ["Global"],
        "serviceType": "Software Development"
      },
      {
        "@type": "Service",
        "name": "Managed IT Services",
        "description": "24/7 monitoring, support, and proactive maintenance for uninterrupted operations.",
        "provider": {
          "@type": "Organization",
          "name": "SWAD Digital Solutions Ltd."
        },
        "areaServed": ["Global"],
        "serviceType": "IT Support"
      },
      {
        "@type": "Service",
        "name": "Cybersecurity & Data Protection",
        "description": "Holistic security programs that protect assets, users, and reputation.",
        "provider": {
          "@type": "Organization",
          "name": "SWAD Digital Solutions Ltd."
        },
        "areaServed": ["Global"],
        "serviceType": "Cybersecurity"
      },
      {
        "@type": "Service",
        "name": "Digital Infrastructure & Cloud",
        "description": "Scalable cloud platforms and hybrid infrastructure built for performance.",
        "provider": {
          "@type": "Organization",
          "name": "SWAD Digital Solutions Ltd."
        },
        "areaServed": ["Global"],
        "serviceType": "Cloud Computing"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Software Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed IT Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity & Data Protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Infrastructure & Cloud"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
