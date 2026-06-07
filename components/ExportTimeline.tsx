const steps = [
  ["01", "Product selection", "Confirm product line, format, grade and buyer market."],
  ["02", "Quotation", "Review MOQ, carton specification, packaging and lead time."],
  ["03", "OEM direction", "Prepare buyer label, English/Arabic wording and retail presentation."],
  ["04", "Export coordination", "Support document checklist, packing list and logistics plan."],
];

export default function ExportTimeline() {
  return (
    <section className="timelineSection">
      <p className="eyebrow">Export Process</p>
      <h2>Structured for international procurement teams.</h2>

      <div className="timelineGrid">
        {steps.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
