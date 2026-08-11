export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://gmsintegra.com/#organization",
    "name": "GMS Integra",
    "alternateName": "GMS Integra - Ventanas y Mamparas en Huancayo",
    "url": "https://gmsintegra.com",
    "logo": "https://gmsintegra.com/gms-logo.webp",
    "image": "https://gmsintegra.com/opengraph-image",
    "description": "Especialistas en diseño, fabricación e instalación de ventanas y mamparas de aluminio y vidrio templado. Fachadas integrales, puertas, barandas, techos de policarbonato y drywall en Huancayo y el Valle del Mantaro.",
    "telephone": "+51958413806",
    "email": "gmsintegra21@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JR. HUANUCO NRO. 1389",
      "addressLocality": "Huancayo",
      "addressRegion": "Junín",
      "postalCode": "12001",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.06513,
      "longitude": -75.20486
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Huancayo" },
      { "@type": "City", "name": "El Tambo" },
      { "@type": "City", "name": "Chilca" },
      { "@type": "City", "name": "Concepción" },
      { "@type": "City", "name": "Jauja" },
      { "@type": "City", "name": "Chupaca" },
      { "@type": "City", "name": "San Jerónimo de Tunán" },
      { "@type": "City", "name": "Sicaya" },
      { "@type": "City", "name": "Pilcomayo" },
      { "@type": "AdministrativeArea", "name": "Valle del Mantaro" },
      { "@type": "AdministrativeArea", "name": "Junín" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Soluciones en Aluminio y Vidrio Templado",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ventanas de Aluminio",
            "description": "Fabricación e instalación de ventanas corredizas, proyectantes y fijas en perfiles de aluminio Serie 20, 25, 38, Nova."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mamparas de Vidrio Templado",
            "description": "Mamparas de baño y divisiones de ambientes en cristal templado de seguridad con acabado impecable."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fachadas Integrales y Muro Cortina",
            "description": "Diseño e instalación de fachadas integrales de vidrio y perfiles de aluminio estructurales."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Puertas y Barandas",
            "description": "Puertas de aluminio y vidrio templado, barandas para balcón y escaleras."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Techos de Policarbonato",
            "description": "Coberturas solares de policarbonato con estructuras metálicas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistema Drywall y Remodelaciones",
            "description": "Tabiquería seca en drywall, cielos rasos y acabados de remodelación integral."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿En qué zonas del Valle del Mantaro realizan instalaciones de ventanas y mamparas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brindamos atención e instalación directa en Huancayo, El Tambo, Chilca, Concepción, Jauja, Chupaca, San Jerónimo, Sicaya, Pilcomayo y en todo el departamento de Junín."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué garantía ofrecen en sus mamparas de vidrio templado y ventanas de aluminio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todos nuestros proyectos de ventanas, mamparas y fachadas integrales cuentan con hasta 5 años de garantía respaldada por GMS Integra."
        }
      },
      {
        "@type": "Question",
        "name": "¿Fabrican ventanas y mamparas a medida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, diseñamos y fabricamos soluciones 100% a medida para proyectos residenciales, comerciales e industriales según los requerimientos del cliente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué perfiles de aluminio y cristales utilizan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilizamos perfiles de aluminio de alta resistencia (Serie 20, 25, 38, Sistema Nova) y vidrios crudos, laminados o templados de seguridad de espesores desde 4mm hasta 10mm+."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://gmsintegra.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Productos y Servicios",
        "item": "https://gmsintegra.com/#productos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contacto y Cotizaciones Huancayo",
        "item": "https://gmsintegra.com/#contacto"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
