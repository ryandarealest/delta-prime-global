const documents = [
  "Certificate of Origin support",
  "Commercial invoice and packing list",
  "OEM English / Arabic label direction",
  "Product specification sheet",
  "Carton marks for export shipment",
  "Health or quality document checklist",
];

export default function QualityDocuments() {
  return (
    <section className="qualitySection">
      <p className="eyebrow light">Quality & Documents</p>
      <h2>Export documentation starts before the shipment.</h2>

      <div className="qualityGrid">
        {documents.map((item) => (
          <article key={item}>{item}</article>
        ))}
      </div>
    </section>
  );
}
