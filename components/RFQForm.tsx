export default function RFQForm() {
  return (
    <form className="rfqForm">
      <label>
        Product Interest
        <select name="product">
          <option>Artichoke Tea</option>
          <option>Agarwood</option>
          <option>Bird Nest</option>
          <option>Mixed Products</option>
        </select>
      </label>

      <label>
        Target Quantity
        <input name="quantity" placeholder="Example: 1,000 boxes or 50 kg" />
      </label>

      <label>
        Destination Market
        <input name="market" placeholder="Example: Dubai, UAE" />
      </label>

      <label>
        Buyer Email
        <input name="email" type="email" placeholder="buyer@company.com" />
      </label>

      <label className="full">
        Requirements
        <textarea
          name="message"
          placeholder="Tell us packaging, label language, MOQ, destination port and product format."
        />
      </label>

      <button type="submit">Submit RFQ</button>
    </form>
  );
}
