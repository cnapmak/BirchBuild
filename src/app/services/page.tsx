import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | BirchBuild",
  description:
    "Construction project management services for commercial real estate — from pre-construction planning to owner's representation.",
};

const services = [
  {
    title: "Project Management",
    tagline: "From groundbreaking to ribbon-cutting.",
    description:
      "We serve as the central coordinator for your project — managing architects, contractors, consultants, and vendors to deliver on schedule and within budget. Our team embeds directly with your development to provide daily oversight and proactive problem-solving.",
    deliverables: [
      "Master schedule development and tracking",
      "Contractor scope coordination",
      "RFI and submittal management",
      "Weekly owner reporting",
      "Budget tracking and change order review",
      "Punch list and project closeout",
    ],
  },
  {
    title: "Owner's Representation",
    tagline: "Your interests. Fully protected.",
    description:
      "When you need an expert in your corner, BirchBuild steps in as your owner's representative. We speak the language of contractors, architects, and municipalities — and we use it to protect your timeline, your capital, and your vision.",
    deliverables: [
      "Contractor and design team selection",
      "Contract negotiation support",
      "Independent cost review and value engineering",
      "Progress monitoring and site visits",
      "Risk identification and mitigation",
      "Stakeholder communication management",
    ],
  },
  {
    title: "Pre-Construction Planning",
    tagline: "The decisions you make before you build determine the outcome.",
    description:
      "The most valuable work happens before construction starts. Our pre-construction services set up projects for success through disciplined planning, accurate budgeting, and smart contractor selection.",
    deliverables: [
      "Conceptual and detailed budgeting",
      "Project schedule development",
      "Design review for constructability",
      "Contractor prequalification and bidding",
      "Permit and entitlement coordination",
      "Phasing and logistics planning",
    ],
  },
  {
    title: "Tenant Improvements",
    tagline: "Fast-track buildouts that keep tenants happy and leases signed.",
    description:
      "Commercial tenant improvement projects require speed, coordination, and deep knowledge of landlord-tenant dynamics. We manage TI projects with the urgency and precision that retail, office, and medical tenants demand.",
    deliverables: [
      "Tenant coordination and communication",
      "TI allowance budget management",
      "Contractor procurement and supervision",
      "Permit expediting",
      "Certificate of occupancy management",
      "Delivery milestone tracking",
    ],
  },
  {
    title: "Construction Audit & Risk Review",
    tagline: "Know exactly where your project stands.",
    description:
      "Brought in mid-project or before closing on an acquisition? We assess construction quality, schedule risk, and budget exposure — and give you a clear picture of what you're inheriting.",
    deliverables: [
      "Independent project status assessment",
      "Schedule and budget variance analysis",
      "Contractor performance evaluation",
      "Deficiency identification and documentation",
      "Recovery plan development",
      "Lender reporting support",
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
            We offer a complete suite of construction management services tailored to
            commercial real estate developers, owners, and investors.
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

      <section className="bg-[#0B2A4A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Not sure which service fits your project?
          </h2>
          <p className="text-[#7BB5D8] mb-8">
            We&apos;ll help you figure it out. Reach out for a no-pressure conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2980B9] text-white px-8 py-4 rounded font-medium hover:bg-[#1565A0] transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
