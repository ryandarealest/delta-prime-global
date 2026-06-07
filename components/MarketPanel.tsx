import { markets } from "@/lib/site";

export default function MarketPanel() {
  return (
    <section className="marketPanel">
      <div>
        <p className="eyebrow light">Primary Market Focus</p>
        <h2>Dubai, UAE and the Middle East.</h2>
      </div>

      <div className="marketTags">
        {markets.map((market) => (
          <span key={market}>{market}</span>
        ))}
      </div>
    </section>
  );
}
