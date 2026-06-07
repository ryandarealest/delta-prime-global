import MarketPanel from "@/components/MarketPanel";
import RFQForm from "@/components/RFQForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vietnam Export To Dubai",
  description:
    "Delta Prime Global supports Vietnamese product export to Dubai, UAE and Middle East buyers.",
  keywords: [
    "Vietnam export to Dubai",
    "Vietnam supplier UAE",
    "Vietnam products Middle East",
    "Dubai import Vietnamese products",
  ],
};

export default function ExportToDubaiPage() {
  return (
    <main className="pageShell">
      <p className="eyebrow">Dubai Market Landing Page</p>
      <h1>Vietnamese premium products for Dubai importers.</h1>
      <p>
        Dubai is our primary gateway market for Middle East distribution. Delta
        Prime Global positions artichoke tea, agarwood and bird nest for buyers
        seeking premium Vietnamese products with clear B2B communication.
      </p>

      <MarketPanel />

      <section className="detailNarrative">
        <p className="eyebrow">Why Dubai</p>
        <h2>A regional hub for premium retail, gifting and wellness categories.</h2>
        <p>
          Our product categories are selected for premium retail, distributor
          catalogues, private label development and specialty gifting channels.
        </p>
      </section>

      <RFQForm />
    </main>
  );
}
