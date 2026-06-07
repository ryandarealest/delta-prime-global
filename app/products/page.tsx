import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Products",
  description:
    "Vietnamese artichoke tea, agarwood and bird nest products for Dubai and Middle East buyers.",
};

export default function ProductsPage() {
  return (
    <main className="pageShell">
      <p className="eyebrow">Products</p>
      <h1>Premium Vietnamese products for wholesale, OEM and retail distribution.</h1>

      <div className="productsGrid standalone">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </main>
  );
}
