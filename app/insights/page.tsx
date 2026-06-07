import { insightPosts } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Insights",
  description:
    "Insights about Vietnamese products, Dubai import demand and Middle East private label opportunities.",
};

export default function InsightsPage() {
  return (
    <main className="pageShell">
      <p className="eyebrow">Insights</p>
      <h1>Market notes for buyers and distributors.</h1>

      <section className="insightGrid">
        {insightPosts.map((post) => (
          <article key={post.slug}>
            <p className="eyebrow">Trade Note</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
