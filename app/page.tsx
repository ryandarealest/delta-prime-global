import ExportTimeline from "@/components/ExportTimeline";
import JsonLd from "@/components/JsonLd";
import MarketPanel from "@/components/MarketPanel";
import ProductCard from "@/components/ProductCard";
import QualityDocuments from "@/components/QualityDocuments";
import { faqSchema, organizationSchema } from "@/lib/schema";
import { products } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema()} />

      <section className="hero">
        <p className="eyebrow">Luxury Export House</p>
        <h1>From Vietnam To The Middle East</h1>
        <p>
          Delta Prime Global supplies premium Vietnamese artichoke tea,
          agarwood and bird nest for Dubai, UAE and Middle East importers,
          distributors and private label brands.
        </p>

        <div className="heroActions">
          <Link href="/contact" className="btn primary">
            Request Quotation
          </Link>
          <Link href="/products" className="btn secondary">
            View Product Lines
          </Link>
        </div>
      </section>

      <section className="marquee">
        <span>Artichoke Tea</span>
        <span>Agarwood</span>
        <span>Bird Nest</span>
        <span>OEM Packaging</span>
        <span>Dubai Distribution</span>
      </section>

      <section className="editorialIntro">
        <p className="eyebrow">Brand Position</p>
        <h2>Vietnamese products, presented for premium international trade.</h2>
        <p>
          We combine sourcing, product specification, retail-ready packaging and
          market-focused export communication for buyers who need more than a
          supplier list.
        </p>
      </section>

      <section className="productsSection">
        <p className="eyebrow">Product Lines</p>
        <h2>Three export categories with premium market potential.</h2>
        <div className="productsGrid">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>

      <MarketPanel />
      <QualityDocuments />
      <ExportTimeline />
    </main>
  );
}
