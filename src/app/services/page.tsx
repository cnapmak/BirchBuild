import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/shared-metadata";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | BirchBuild",
  description:
    "Chicago residential and mixed-use development, plus construction management for owners and investors building on the near-northwest side.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | BirchBuild",
    description:
      "Residential and mixed-use development, plus construction management for owners and investors building in Chicago.",
    url: "/services",
    images: [OG_IMAGE],
  },
};

const services = [
  {
    title: "Development",
    subtitle: "Residential & Mixed-Use",
    description:
      "38 buildings across Chicago's near-northwest side — new construction, mixed-use, gut rehab, and condo conversion. 170+ residences delivered. $66M in construction value.",
  },
  {
    title: "Construction Management",
    subtitle: "For Owners & Investors",
    description:
      "We run your project the way we run our own: budget and schedule set before permits, competitive GC bids, every pay application verified, Chicago permitting end to end.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#EEF4FB] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
            What We Do
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#0B2A4A] mb-5">
            Services
          </h1>
          <p className="text-lg text-[#1C3050] max-w-2xl leading-relaxed">
            We develop our own buildings. We manage construction for owners
            building in the same neighborhoods.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-12 border-t border-[#B5CCE5] py-12"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0B2A4A]">
                  {s.title}
                </h2>
                <p className="text-sm text-[#2980B9] mt-1">{s.subtitle}</p>
              </div>
              <p className="text-lg text-[#1C3050] leading-relaxed self-center">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B2A4A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Tell us what you&apos;re building.
          </h2>
          <p className="text-[#7BB5D8] mb-8">
            Send the address and where you are in the process.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2980B9] text-white px-8 py-4 rounded font-medium hover:bg-[#1565A0] transition-colors"
          >
            Talk to BirchBuild
          </Link>
        </div>
      </section>
    </>
  );
}
