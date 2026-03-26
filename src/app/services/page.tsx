import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | BirchBuild",
  description:
    "Construction project management and owner's representation for Chicago developers and investors — from preconstruction through certificate of occupancy.",
};

const services = [
  {
    title: "Owner's Representation",
    tagline: "Someone in your corner who doesn't build the project.",
    description:
      "Most developers don't have an in-house construction director. BirchBuild fills that role — acting as your expert proxy across every meeting, decision, and dispute from design through closeout. We have no financial stake in the construction contract, which means our only obligation is to you: your budget, your schedule, and your outcome.",
    deliverables: [
      "Contractor and design team selection",
      "Contract review and negotiation support",
      "Change order review and approval on your behalf",
      "Pay application verification before funds are released",
      "Independent cost review and value engineering",
      "Progress monitoring with documented site visits",
      "Stakeholder communication and reporting",
    ],
  },
  {
    title: "Construction Project Management",
    tagline: "Boots on the ground. Hands on the schedule.",
    description:
      "We embed directly in your project and manage the day-to-day execution — coordinating the general contractor, subcontractors, architects, engineers, and inspectors. When a problem surfaces, we're already on site and already solving it. When a GC pushes a change order that doesn't hold up, we push back.",
    deliverables: [
      "Master schedule development and weekly tracking",
      "GC and subcontractor coordination",
      "RFI and submittal management",
      "Quality control inspections at key milestones",
      "Change order review and negotiation",
      "Owner reporting — budget vs. actual, schedule variance",
      "Punch list management and project closeout",
    ],
  },
  {
    title: "Preconstruction & Budget Development",
    tagline: "Where most projects are won or lost.",
    description:
      "The cheapest change you'll ever make is on paper. Before a permit is filed or a GC is hired, we work with your design team to build a realistic budget, identify scope gaps, and stress-test the schedule. We run a competitive bid process, pre-qualify contractors, and make sure the team you hire is the right team for your specific project in your specific neighborhood.",
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
      "Chicago's Department of Buildings averages 70-day permit review cycles — and an incomplete submission resets the clock. Mixed-use and residential projects often require multi-departmental sign-off across zoning, fire, and accessibility review. We know what each department flags, how to prepare a clean submission, and when to bring in a permit expediter. This is one of the highest-leverage places a project manager earns their fee.",
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
      "Hiring the wrong general contractor on a $1.5M gut rehab or new construction project can mean six-figure losses and a project that never recovers its schedule. We run a structured procurement process that ensures you're comparing apples to apples, that the contract protects you, and that your GC's accountability is built in from day one — not negotiated after problems arise.",
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
  {
    title: "Residential & Mixed-Use Development",
    tagline: "New construction, gut rehab, condo conversion — we know the work.",
    description:
      "BirchBuild's project history runs deep in Chicago's West Side neighborhoods — Wicker Park, Ukrainian Village, Noble Square, Bucktown, and East Village. Gut rehabs, new construction single-family and multi-unit, ground-floor commercial with residential above, condo conversions. We know how these projects are permitted, how they're built, which subcontractors deliver, and what inspectors look for in each ward.",
    deliverables: [
      "Gut rehab and full renovation management",
      "New construction — single-family and multi-unit",
      "Mixed-use development (commercial + residential)",
      "Condo conversion and unit buildout coordination",
      "Landmark and historic district compliance",
      "Neighborhood zoning and FAR analysis",
      "Lender draw request preparation and reporting",
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
            We act as your construction department — managing the people, budget, schedule,
            and paperwork so your project gets built right. No financial stake in the
            construction contract. Just accountability to you.
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
                You know how to find and capitalize deals. We know how to get them built on time
                and on budget without you managing a GC every day.
              </p>
            </div>
            <div className="bg-white border border-[#B5CCE5] rounded-xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Private Investors
              </div>
              <p className="text-sm text-[#1C3050] leading-relaxed">
                You&apos;re putting capital into a Chicago property. We protect that investment
                with independent oversight, lender reporting, and a clear picture of where
                the project stands at every milestone.
              </p>
            </div>
            <div className="bg-white border border-[#B5CCE5] rounded-xl p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
                Owner-Builders
              </div>
              <p className="text-sm text-[#1C3050] leading-relaxed">
                You want to manage your own project but need an experienced construction
                professional to structure the process, vet contractors, and flag problems
                before they become expensive.
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
            Most of our clients start with a conversation. Tell us what you&apos;re building
            and where you are in the process — we&apos;ll tell you where we can add the most value.
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
