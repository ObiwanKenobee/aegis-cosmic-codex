import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export const SEOHead = ({
  title = "AEGIS: Regnum Terrae et Caelorum - Ethical Planetary Governance Platform",
  description = "Decentralized governance platform uniting royal wisdom, indigenous knowledge, and AI for planetary stewardship. Join the cosmic citizenship movement for Earth, Ocean, and Space.",
  keywords = [
    "planetary stewardship", "ethical governance", "indigenous wisdom", "royal houses",
    "climate action", "biodiversity conservation", "sustainable development", 
    "interplanetary colonization", "cosmic citizenship", "decentralized governance",
    "AI ethics", "environmental justice", "traditional ecological knowledge",
    "carbon credits", "bioregional planning", "space ethics", "ecological restoration",
    "community governance", "ancestral knowledge", "regenerative economics"
  ],
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://aegis-cosmic.com',
  ogImage = "/cosmic-hero-og.jpg",
  ogType = "website",
  noIndex = false,
  structuredData
}: SEOHeadProps) => {
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AEGIS: Regnum Terrae et Caelorum",
    "description": description,
    "url": canonicalUrl,
    "logo": "/cosmic-logo.png",
    "sameAs": [
      "https://twitter.com/aegis_cosmic",
      "https://linkedin.com/company/aegis-cosmic",
      "https://github.com/aegis-cosmic"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "French", "Arabic", "Mandarin", "Hindi", "Portuguese"]
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Global",
        "description": "Worldwide focus on climate-vulnerable regions, indigenous territories, and biodiversity hotspots"
      }
    ],
    "knowsAbout": [
      "Environmental Governance",
      "Indigenous Rights",
      "Climate Adaptation",
      "Biodiversity Conservation",
      "Sustainable Development",
      "Space Ethics",
      "Traditional Ecological Knowledge",
      "Community-Based Natural Resource Management"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AEGIS: Regnum Terrae et Caelorum" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@aegis_cosmic" />
      
      {/* Geographic Targeting */}
      <meta name="geo.region" content="Global" />
      <meta name="geo.placename" content="Earth" />
      <meta name="distribution" content="global" />
      
      {/* Language and Audience */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="audience" content="Environmental Leaders, Indigenous Communities, Policy Makers, Royal Houses, Climate Activists" />
      
      {/* Topic Categories for Regional Discovery */}
      <meta name="subject" content="Environmental Governance, Climate Action, Indigenous Rights, Sustainable Development" />
      <meta name="coverage" content="Worldwide" />
      <meta name="classification" content="Environmental, Political, Technology, Education" />
      
      {/* Regional SEO for High-Need Areas */}
      <meta name="geo.region" content="PF" /> {/* Pacific Islands */}
      <meta name="geo.region" content="MV" /> {/* Maldives */}
      <meta name="geo.region" content="BD" /> {/* Bangladesh */}
      <meta name="geo.region" content="PH" /> {/* Philippines */}
      <meta name="geo.region" content="ID" /> {/* Indonesia */}
      <meta name="geo.region" content="BR" /> {/* Brazil - Amazon */}
      <meta name="geo.region" content="CD" /> {/* Congo Basin */}
      <meta name="geo.region" content="IN" /> {/* India */}
      <meta name="geo.region" content="AU" /> {/* Australia - Indigenous */}
      <meta name="geo.region" content="CA" /> {/* Canada - Indigenous */}
      <meta name="geo.region" content="PE" /> {/* Peru - Amazon */}
      <meta name="geo.region" content="EC" /> {/* Ecuador - Biodiversity */}
      <meta name="geo.region" content="CO" /> {/* Colombia - Biodiversity */}
      <meta name="geo.region" content="MG" /> {/* Madagascar */}
      <meta name="geo.region" content="ZA" /> {/* South Africa */}
      <meta name="geo.region" content="KE" /> {/* Kenya */}
      <meta name="geo.region" content="TZ" /> {/* Tanzania */}
      <meta name="geo.region" content="NP" /> {/* Nepal - Himalayas */}
      <meta name="geo.region" content="BT" /> {/* Bhutan */}
      <meta name="geo.region" content="MY" /> {/* Malaysia - Borneo */}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Meta for Environmental Focus */}
      <meta name="environmental-focus" content="climate-vulnerable-regions,biodiversity-hotspots,indigenous-territories" />
      <meta name="sdg-alignment" content="SDG13,SDG14,SDG15,SDG16,SDG17" /> {/* UN Sustainable Development Goals */}
      
      {/* Space Industry Targeting */}
      <meta name="space-ethics" content="mars-colonization,lunar-governance,asteroid-mining-ethics" />
      <meta name="aerospace-regions" content="florida,california,texas,french-guiana,kazakhstan,india,china,japan" />
      
      {/* Alternative Languages for Global Reach */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es" href={`${canonicalUrl}?lang=es`} />
      <link rel="alternate" hrefLang="fr" href={`${canonicalUrl}?lang=fr`} />
      <link rel="alternate" hrefLang="ar" href={`${canonicalUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="zh" href={`${canonicalUrl}?lang=zh`} />
      <link rel="alternate" hrefLang="hi" href={`${canonicalUrl}?lang=hi`} />
      <link rel="alternate" hrefLang="pt" href={`${canonicalUrl}?lang=pt`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};