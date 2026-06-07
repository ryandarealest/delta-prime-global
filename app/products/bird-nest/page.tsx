import JsonLd from "@/components/JsonLd";
import RFQForm from "@/components/RFQForm";
import { productSchema } from "@/lib/schema";
import { products } from "@/lib/site";
import type { Metadata } from "next";

const product = products.find((item) => item.slug === "bird-nest")!;

export const metadata: Metadata = {
  title: `${product.name} Export From Vietnam`,
  description: product.short,
  keywords: product.keywords,
};

export default function ProductDetailPage() {
  return (
    <main className="pageShell">
      <JsonLd data={productSchema("bird-nest")!} />

      <p className="eyebrow">Product Specification</p>
      <h1>{product.name} Export From Vietnam</h1>
      <p>{product.short}</p>

      <section className="specGrid">
        <div><strong>Vietnamese Name</strong><span>{product.vn}</span></div>
        <div><strong>Origin</strong><span>{product.origin}</span></div>
        <div><strong>MOQ</strong><span>{product.moq}</span></div>
        <div><strong>Packaging</strong><span>{product.packaging}</span></div>
        <div><strong>Shelf Life</strong><span>{product.shelfLife}</span></div>
        <div><strong>Main Market</strong><span>Dubai, UAE and Middle East</span></div>
      </section>

      <section className="detailNarrative">
        <p className="eyebrow">B2B Buyer Notes</p>
        <h2>Prepared for importers, distributors and private label brands.</h2>
        <p>
          Send your target quantity, destination market, label language and
          preferred packaging format. Delta Prime Global will prepare the
          quotation direction and export planning details.
        </p>
      </section>

      <RFQForm />
    </main>
  );
}
