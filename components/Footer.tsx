import Link from "next/link";
import { products, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerTop">

        {/* Company */}
        <div className="footerCompany">

          <div className="footerBrand">
            

            <div>
              <p className="eyebrow light">
                Vietnam → Middle East
              </p>

              <h2>Delta Prime Global</h2>
            </div>
          </div>

          <p className="footerDesc">
            Premium Vietnamese products prepared for importers,
            distributors, private label brands and premium retail
            markets across UAE, Saudi Arabia, Qatar, Kuwait,
            Oman and Bahrain.
          </p>
        </div>

        {/* Products */}
        <div className="footerColumn">
          <h4>Products</h4>

          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          ))}

          <Link href="/oem-private-label">
            OEM & Private Label
          </Link>
        </div>

        {/* Markets */}
        <div className="footerColumn">
          <h4>Markets</h4>

          <Link href="/export-to-dubai">
            Dubai
          </Link>

          <Link href="/export-to-dubai">
            United Arab Emirates
          </Link>

          <Link href="/export-to-dubai">
            Saudi Arabia
          </Link>

          <Link href="/export-to-dubai">
            GCC Region
          </Link>
        </div>

        {/* Contact */}
        <div className="footerColumn">
          <h4>Contact</h4>

          <a href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <a href="tel:+84901234567">
            +84 901 234 567
          </a>

          <span>
            Da Nang, Vietnam
          </span>

          <span>
            Mon - Fri | 08:00 - 17:30 GMT+7
          </span>
        </div>

      </div>

      <div className="footerBottom">
        <span>
          © 2026 {site.name}
        </span>

        <span>
          Exporting Premium Vietnamese Products Worldwide
        </span>
      </div>

    </footer>
  );
}