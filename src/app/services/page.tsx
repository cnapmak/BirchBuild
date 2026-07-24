import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | BirchBuild",
  description:
    "Chicago residential and mixed-use development, plus construction management for developers and investors — from preconstruction through certificate of occupancy.",
};

const services = [
  {
    title: "Residential & Mixed-Use Development",
    tagline: "New construction, gut rehab, condo conversion — we know the work.",
    description:
      "38 completed buildings across Noble Square, Ukrainian Village, Wicker Park, and surrounding neighborhoods — multi-unit new construction, mixed-use, gut rehab, and condo conversion.",
    deliverables: [
      "New construction — single-family and multi-unit",
      "Mixed-use development (commercial + residential)",
      "Gut rehab and full renovation management",
      "Condo conversion and unit buildout coordination",
      "Landmark and historic district compliance",
      "Neighborhood zoning and FAR analysis",
      "Lender draw request preparation and reporting",
    ],
  },
  {
    title: "Construction Management",
    tagline: "Development experience applied to your project.",
    description:
      "Full oversight from contractor selection through closeout — every change order reviewed, every pay application verified, schedule and budget tracked. A developer's perspective on every decision.",
    deliverables: [
      "Contractor and design team selection",
      "Master schedule development and weekly tracking",
      "GC and subcontractor coordination",
      "Change order review and negotiation",
      "Pay application verification before funds are released",
      "Quality control inspections at key milestones",
      "Owner reporting — budget vs. actual, schedule variance",
      "Punch list management and project closeout",
    ],
  },
  {
    title: "Preconstruction & Budget Development",
    tagline: "Where most projects are won or lost.",
    description:
      "The cheapest change you'll ever make is on paper. We build a realistic budget, identify scope gaps, stress-test the schedule, and run a competitive bid process before a permit is filed.",
    deliverables: [
      "Conceptual and detailed construction budgeting",
      "Project schedule development",
      "Design review for constructability and code compliance",
      "Competitive bid solicitation and leveling",
      "Contractor prequalification and reference checks",
      "Phasing and site logistics planning",
      "Risk identification and contingency analysis",
    ],
  },
  {
    title: "Chicago Permitting & Entitlements",
    tagline: "Local knowledge that keeps projects moving.",
    description:
      "An incomplete submission resets Chicago's 70-day permit clock. We know what each department flags, how to prepare a clean submission, and when to bring in an expediter.",
    deliverables: [
      "Permit strategy and sequencing",
      "E-Plan submission preparation and coordination",
      "Multi-department review management (DOB, Zoning, Fire, Accessibility)",
      "Permit expediter coordination",
      "Zoning analysis and variance support",
      "Inspection scheduling and sign-off management",
      "Certificate of occupancy procurement",
    ],
  },
  {
    title: "GC Procurement & Oversight",
    tagline: "Hire the right contractor. Then hold them to it.",
    description:
      "The wrong GC can mean six-figure losses. Our structured procurement process makes bids comparable, the contract protective, and accountability built in from day one.",
    deliverables: [
      "Scope of work development for bidding",
      "Bid package preparation and distribution",
      "Bid leveling and contractor interviews",
      "GC contract review — scope, schedule, payment terms, retainage",
      "Subcontractor qualification review",
      "Ongoing performance monitoring against contract requirements",
      "Default and dispute documentation if needed",
    ],
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
            Our Services
          </h1>
          <p className="text-lg text-[#1C3050] max-w-2xl leading-relaxed">
            We develop our own buildings and manage construction for owners
            building in the same neighborhoods. Same team, same standards.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="grid md:grid-cols-[1fr_1.4fr] gap-8 border border-[#B5CCE5] rounded-xl p-8 hover:border-[#1A4F8A] hover:shadow-sm transition-all"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#0B2A4A] mb-2">
                  {s.title}
                </h2>
                <p className="text-sm italic text-[#2980B9] mb-4">{s.tagline}</p>
                <p className="text-sm text-[#1C3050] leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-4">
                  What&apos;s Included
                </div>
                <ul className="space-y-2.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#1C3050]">
                      <span className="text-[#1A4F8A] mt-0.5 shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-[#EEF4FB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#B5CCE5] rounded-xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Real Estate Developers
              </div>
              <p className="text-sm text-[#1C3050] leading-relaxed">
                You know how to find and capitalize deals. We know how to get them built
                without you managing a GC every day.
              </p>
            </div>
            <div className="bg-white border border-[#B5CCE5] rounded-xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Private Investors
              </div>
              <p className="text-sm text-[#1C3050] leading-relaxed">
                Independent oversight, lender reporting, and a clear picture of
                where your project stands at every milestone.
              </p>
            </div>
            <div className="bg-white border border-[#B5CCE5] rounded-xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Owner-Builders
              </div>
              <p className="text-sm text-[#1C3050] leading-relaxed">
                We structure the process, vet contractors, and flag problems
                before they get expensive — you stay in charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B2A4A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Not sure which service fits your project?
          </h2>
          <p className="text-[#7BB5D8] mb-8">
            Tell us what you&apos;re building and where you are in the process.
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
