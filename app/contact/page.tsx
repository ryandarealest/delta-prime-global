import RFQForm from "@/components/RFQForm";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Quotation",
  description:
    "Request quotation from Delta Prime Global for Vietnamese export products.",
};

export default function ContactPage() {
  return (
    <main className="pageShell">
      <p className="eyebrow">Request Quotation</p>
      <h1>Tell us your product, quantity and destination market.</h1>
      <p>
        Send your product interest, target MOQ, packaging requirements and
        destination country. Our team will prepare the next export planning
        step.
      </p>

      <RFQForm />

      <section className="contactPanel">
        <strong>Email</strong>
        <span>{site.email}</span>
        <strong>Location</strong>
        <span>{site.address}</span>
      </section>
    </main>
  );
}
