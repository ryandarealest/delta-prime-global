import { products, site } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    slogan: site.slogan,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Da Nang",
      addressCountry: "VN",
    },
    areaServed: ["Vietnam", "United Arab Emirates", "Dubai", "Middle East"],
    knowsAbout: products.map((p) => p.name),
  };
}

export function productSchema(slug: string) {
  const product = products.find((item) => item.slug === slug);

  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} Export From Vietnam`,
    alternateName: product.vn,
    description: product.short,
    category: "Vietnam Export Product",
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    offers: {
      "@type": "Offer",
      url: `${site.url}/products/${product.slug}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Delta Prime Global export to Dubai and UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Delta Prime Global focuses on Dubai, UAE and Middle East buyers for Vietnamese artichoke tea, agarwood and bird nest.",
        },
      },
      {
        "@type": "Question",
        name: "Do you support OEM and private label?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The company supports buyer-specific packaging direction, English and Arabic label preparation, carton marks and retail-ready presentation.",
        },
      },
      {
        "@type": "Question",
        name: "What products are available for export?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The main export products are Vietnamese artichoke tea, agarwood and bird nest, with bulk, wholesale and private label options.",
        },
      },
    ],
  };
}
