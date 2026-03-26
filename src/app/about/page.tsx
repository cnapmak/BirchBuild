import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | BirchBuild",
  description:
    "BirchBuild is a Chicago construction project management firm with 35+ completed projects across Wicker Park, Ukrainian Village, Noble Square, and Bucktown.",
};

const values = [
  {
    title: "Owner-First Alignment",
    description:
      "We have no financial stake in the construction contract. No markup on materials. No side arrangement with the GC. Our fee is fixed, and our loyalty runs entirely to you.",
  },
  {
    title: "Transparency",
    description:
      "No surprises. You know where the budget stands, where the schedule stands, and what's at risk — not because we spin it, but because we give you the unfiltered picture.",
  },
  {
    title: "Neighborhood Fluency",
    description:
      "35+ projects concentrated in a handful of Chicago zip codes means we know the ward offices, the inspectors, the subcontractors who deliver, and the ones who don't.",
  },
  {
    title: "Accountability",
    description:
      "We own outcomes. When something goes wrong on a project we manage, we say so, explain why, and fix it. That's how you build a reputation project by project.",
  },
];

const neighborhoods = [
  { name: "Noble Square", count: 11 },
  { name: "Ukrainian Village", count: 9 },
  { name: "Wicker Park", count: 6 },
  { name: "Bucktown", count: 2 },
  { name: "Old Town", count: 2 },
  { name: "Roscoe Village", count: 2 },
  { name: "East Village", count: 1 },
  { name: "Lakeview", count: 1 },
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
            A construction project management firm built on one premise: the person
            writing the checks should have someone in their corner who isn&apos;t
            also building the project.
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
                BirchBuild manages construction projects for real estate developers
                and investors across Chicago&apos;s West Side and North Side neighborhoods.
                The work spans residential new construction, gut rehab, mixed-use
                development, and commercial buildout — all within a concentrated
                cluster of neighborhoods where we have deep, project-by-project
                experience.
              </p>
              <p>
                That concentration is deliberate. Knowing a neighborhood means knowing
                its zoning quirks, its permitting history, which GCs have operated
                there, and what inspectors consistently flag. That kind of
                ground-level knowledge isn&apos;t transferable from a spreadsheet.
                It&apos;s built one project at a time.
              </p>
              <p>
                We act as construction managers and owner&apos;s representatives — sitting
                on your side of the table, not the contractor&apos;s. We manage the
                people, the process, the budget, and the paperwork so you don&apos;t have
                to become a construction expert to protect your investment.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-5">
            {[
              { n: "35+", label: "Completed projects across Chicago" },
              { n: "$50M+", label: "Construction value managed" },
              { n: "8", label: "Chicago neighborhoods with completed projects" },
              { n: "98%", label: "On-time or early delivery rate" },
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
              <div className="text-sm text-[#2980B9] mb-6">Founder &amp; Principal</div>

              {/* Placeholder — fill in Eugene's actual background */}
              <div className="space-y-4 text-sm text-[#1C3050] leading-relaxed">
                <p>
                  Eugene founded BirchBuild to bring structured, owner-aligned project
                  management to Chicago&apos;s residential and mixed-use development market.
                  His approach is rooted in the reality that most developers working
                  on $500K–$5M projects don&apos;t have an in-house construction director —
                  and that gap is where projects go sideways.
                </p>
                <p>
                  Every BirchBuild project is managed with principal involvement. Not
                  a junior coordinator checking boxes — the same person who took on
                  your project is the one walking the site, reviewing the draw, and
                  on the phone with your GC when something doesn&apos;t add up.
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
                        style={{ width: `${(n.count / 11) * 100}%` }}
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
