import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | BirchBuild",
  description:
    "BirchBuild is a veteran-owned Chicago development and construction management firm with 38 completed projects across Wicker Park, Ukrainian Village, Noble Square, and Bucktown.",
};

const values = [
  {
    title: "Aligned Incentives",
    description:
      "Our CM fee is fixed. We don't mark up materials or take a cut from the GC.",
  },
  {
    title: "Transparency",
    description:
      "You know where the budget stands, where the schedule stands, and what's at risk.",
  },
  {
    title: "Neighborhood Fluency",
    description:
      "38 projects in a handful of zip codes. We know the ward offices, the inspectors, and which subcontractors deliver.",
  },
  {
    title: "Accountability",
    description:
      "When something goes wrong, we say so, explain why, and fix it.",
  },
];

const neighborhoods = [
  { name: "East Village", count: 8 },
  { name: "Noble Square", count: 7 },
  { name: "Ukrainian Village", count: 6 },
  { name: "Wicker Park", count: 5 },
  { name: "Roscoe Village", count: 3 },
  { name: "Bucktown", count: 2 },
  { name: "West Town", count: 2 },
  { name: "Humboldt Park", count: 2 },
  { name: "Old Town", count: 1 },
  { name: "Logan Square", count: 1 },
  { name: "Ravenswood", count: 1 },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#EEF4FB] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
            Who We Are
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#0B2A4A] mb-5">
            About BirchBuild
          </h1>
          <p className="text-lg text-[#1C3050] max-w-2xl leading-relaxed">
            A veteran-owned Chicago development and construction management firm.
            38 completed projects across the near-northwest side.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
              The Company
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0B2A4A] mb-5">
              Chicago-focused.<br />Deeply local.
            </h2>
            <div className="space-y-4 text-sm text-[#1C3050] leading-relaxed">
              <p>
                BirchBuild develops residential and mixed-use buildings on
                Chicago&apos;s near-northwest side — new construction, gut rehab,
                and condo conversion — and provides construction management for
                developers and investors building in the same neighborhoods.
              </p>
              <p>
                The concentration is deliberate: we know each neighborhood&apos;s
                zoning quirks, permitting history, and inspectors. And having
                developed 38 buildings ourselves, we manage client projects with
                the same rigor we apply to our own.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-5">
            {[
              { n: "38", label: "Completed projects across Chicago" },
              { n: "$66M+", label: "Construction value" },
              { n: "170+", label: "Residences delivered" },
              { n: "20+", label: "Years of experience" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-5 border border-[#B5CCE5] rounded-xl px-6 py-5"
              >
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1A4F8A] w-20 shrink-0">
                  {s.n}
                </div>
                <div className="text-sm text-[#1C3050]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#EEF4FB] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Leadership
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0B2A4A] mb-2">
                Eugene
              </h2>
              <div className="text-sm text-[#2980B9] mb-3">Founder &amp; Principal</div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B5CCE5] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#1A4F8A] mb-6">
                U.S. Marine Corps Veteran
              </div>

              <div className="space-y-4 text-sm text-[#1C3050] leading-relaxed">
                <p>
                  Eugene is a U.S. Marine Corps veteran with two decades of
                  Chicago development behind him. The Corps&apos; discipline and
                  accountability shape how every project is run.
                </p>
                <p>
                  Every project gets principal involvement — the same person who
                  took it on walks the site, reviews the draws, and calls the GC
                  when something doesn&apos;t add up.
                </p>
              </div>
            </div>

            {/* Neighborhood breakdown */}
            <div className="bg-white border border-[#B5CCE5] rounded-xl p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-6">
                Project Footprint by Neighborhood
              </div>
              <div className="space-y-3">
                {neighborhoods.map((n) => (
                  <div key={n.name} className="flex items-center gap-4">
                    <div className="text-sm text-[#0B2A4A] font-medium w-40 shrink-0">
                      {n.name}
                    </div>
                    <div className="flex-1 bg-[#EEF4FB] rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-[#1A4F8A] rounded-full"
                        style={{ width: `${(n.count / 8) * 100}%` }}
                      />
                    </div>
                    <div className="text-sm text-[#4A82B5] w-6 text-right shrink-0">
                      {n.count}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#EEF4FB] text-xs text-[#4A82B5]">
                {neighborhoods.reduce((a, n) => a + n.count, 0)} completed projects · Chicago, IL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
              How We Work
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0B2A4A]">
              What You Can Expect
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-[#B5CCE5] rounded-xl p-7"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0B2A4A] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#1C3050] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B2A4A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-[#7BB5D8] mb-8">
            Tell us about your project. We&apos;ll tell you how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2980B9] text-white px-8 py-4 rounded font-medium hover:bg-[#1565A0] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
