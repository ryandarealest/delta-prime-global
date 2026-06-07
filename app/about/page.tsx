import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Delta Prime Global",
  description:
    "About Delta Prime Global, a Vietnam export house serving Dubai, UAE and Middle East buyers.",
};

export default function AboutPage() {
  return (
    <main className="pageShell">
      <p className="eyebrow">About</p>
      <h1>A Vietnam-based export house for premium Middle East trade.</h1>
      <p>
        Delta Prime Global is built for importers, distributors and private
        label brands seeking Vietnamese artichoke tea, agarwood and bird nest
        with a premium international presentation.
      </p>

      <section className="threeColumns">
        <article>
          <span>01</span>
          <h2>Source</h2>
          <p>Selected Vietnamese product lines with market-specific positioning.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Prepare</h2>
          <p>Packaging, labels, product information and export documentation.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Connect</h2>
          <p>Focused communication for Dubai, UAE and Middle East B2B buyers.</p>
        </article>
      </section>
    </main>
  );
}
