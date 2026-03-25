import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | BirchBuild",
  description:
    "BirchBuild is a commercial real estate construction management firm built on precision, transparency, and long-term client relationships.",
};

const values = [
  {
    title: "Precision",
    description:
      "Construction is a discipline. We bring rigor to every schedule, every budget, and every decision — because loose management compounds into expensive problems.",
  },
  {
    title: "Transparency",
    description:
      "No surprises. Owners always know where their project stands — not because we tell them what they want to hear, but because we give them the facts.",
  },
  {
    title: "Accountability",
    description:
      "We own outcomes, not just effort. If something goes wrong, we say so, explain why, and get it fixed. That's how trust is built over years.",
  },
  {
    title: "Relationships",
    description:
      "The best projects come from repeat clients. We build long-term partnerships by doing exceptional work, every time — not just on the first engagement.",
  },
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
            A construction management firm built for commercial real estate developers
            who need more than a generalist — they need a partner.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
              Our Story
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0B2A4A] mb-5">
              Built from experience, not theory.
            </h2>
            <div className="space-y-4 text-sm text-[#1C3050] leading-relaxed">
              <p>
                BirchBuild was founded by construction professionals who spent years
                managing large-scale commercial projects for national developers —
                and saw firsthand how often owners were left in the dark about their
                own investments.
              </p>
              <p>
                We started BirchBuild to do it differently. With deeper owner
                alignment, cleaner reporting, and a team experienced enough to
                anticipate problems before they become line items.
              </p>
              <p>
                The name comes from the birch tree — a species known for its
                resilience, its clean lines, and its ability to thrive in demanding
                conditions. That&apos;s the kind of work we do.
              </p>
            </div>
          </div>

          {/* Decorative stats column */}
          <div className="space-y-5">
            {[
              { n: "20+", label: "Years of combined industry experience" },
              { n: "150+", label: "Commercial projects completed" },
              { n: "$2B+", label: "Total construction value managed" },
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

      {/* Values */}
      <section className="bg-[#EEF4FB] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
              How We Work
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0B2A4A]">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-[#B5CCE5] rounded-xl p-7"
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
            Reach out to start a conversation about your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2980B9] text-white px-8 py-4 rounded font-medium hover:bg-[#1565A0] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
