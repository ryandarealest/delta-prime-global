import RFQForm from "@/components/RFQForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM & Private Label",
  description:
    "OEM and private label packaging for Vietnamese artichoke tea, agarwood and bird nest export products.",
};

export default function OEMPage() {
  return (
    <main className="pageShell">
      <p className="eyebrow">OEM / Private Label</p>
      <h1>Packaging that speaks to international shelves.</h1>
      <p>
        We support buyer-specific labels, English and Arabic packaging
        direction, carton marks and retail-ready positioning for Dubai and
        Middle East markets.
      </p>

      <section className="threeColumns">
        <article>
          <span>01</span>
          <h2>Label</h2>
          <p>English, Arabic and custom buyer label direction.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Format</h2>
          <p>Tea boxes, incense packs, bird nest jars, cartons and gift boxes.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Retail</h2>
          <p>Premium layout direction for shelf, marketplace and gift channels.</p>
        </article>
      </section>

      <RFQForm />
    </main>
  );
}
