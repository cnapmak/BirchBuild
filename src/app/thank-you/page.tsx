import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | BirchBuild",
  description: "Your message has been sent to BirchBuild.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="bg-[#EEF4FB] pt-32 pb-24 min-h-[60vh]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
          Message Sent
        </div>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#0B2A4A] mb-5">
          Thank You
        </h1>
        <p className="text-lg text-[#1C3050] max-w-xl leading-relaxed mb-10">
          We received your message and will get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1A4F8A] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0B2A4A] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
