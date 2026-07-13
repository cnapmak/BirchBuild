import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "35+", label: "Projects Completed" },
  { value: "$50M+", label: "Construction Value" },
  { value: "8", label: "Chicago Neighborhoods" },
  { value: "20+", label: "Years Experience" },
];

const services = [
  {
    title: "Residential & Mixed-Use Development",
    description:
      "We develop our own multi-unit residential and mixed-use projects across Chicago's near-northwest side — from site acquisition through construction and delivery. Our portfolio includes 35+ completed buildings in Noble Square, Ukrainian Village, Wicker Park, and surrounding neighborhoods.",
    icon: "◉",
  },
  {
    title: "Construction Management",
    description:
      "For owners and investors building their own projects, we provide hands-on construction management — coordinating GCs, subcontractors, and design teams, reviewing every change order, and tracking the schedule so problems get solved before they compound.",
    icon: "◈",
  },
  {
    title: "Preconstruction & Budgeting",
    description:
      "The decisions you make before construction starts determine the outcome. We build your budget, assemble the right team, and review plans for constructability before a permit is filed.",
    icon: "◐",
  },
  {
    title: "Chicago Permitting & Entitlements",
    description:
      "Chicago's Department of Buildings moves on its own timeline. We know the process, the pitfalls, and the people — so your project doesn't lose months waiting on a plan review.",
    icon: "◑",
  },
];

const featuredProjects = [
  {
    name: "756 N. Leavitt St",
    type: "Mixed-Use",
    location: "Ukrainian Village, Chicago",
    status: "Completed",
    slug: "756-n-leavitt",
    description:
      "Boutique elevator building on a corner lot in Ukrainian Village, built in 2013. Extra-wide layouts over 23 ft across, hardwood floors, attached garage parking, and 500 sq ft private rooftop decks with skyline views.",
    img: "/projects/756-n-leavitt/main.jpg",
  },
  {
    name: "1756 W. Wabansia",
    type: "Residential",
    location: "Wicker Park, Chicago",
    status: "Completed",
    slug: "1756-w-wabansia",
    description:
      "New construction residence in Wicker Park built in 2016. The 3,500 sq ft main home features four bedrooms, a Gaggenau kitchen, white oak floors, custom floating stairs with glass railings, and specialty lighting throughout.",
    img: "/projects/1756-w-wabansia/facade.jpg",
  },
  {
    name: "2702-12 W. Chicago Ave",
    type: "Mixed-Use",
    location: "Ukrainian Village, Chicago",
    status: "Completed",
    slug: "2702-w-chicago",
    description:
      "Mixed-use development spanning 2702-2712 W. Chicago Ave with approximately 15 residential units and ground-floor commercial space. Built in 2007 with 9-10 ft ceilings, walnut cabinetry, and a shared rooftop deck.",
    img: "/projects/2702-w-chicago/main.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed image with overlay */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-wabansia.jpg"
          alt="1756 W. Wabansia interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e38]/90 via-[#0a1e38]/40 to-transparent" />
        {/* Green left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4A82B5] z-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-40 w-full grid md:grid-cols-2 gap-16 items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#7BB5D8] mb-5">
              Chicago Development & Construction Management
            </div>
            <p className="text-lg text-[#B5CCE5] leading-relaxed mb-8 max-w-lg">
              BirchBuild develops residential and mixed-use projects across
              Chicago&apos;s near-northwest side, and provides construction
              management for owners and investors building in the same neighborhoods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-[#1A4F8A] text-white px-7 py-3.5 rounded font-medium hover:bg-[#0B2A4A] transition-colors"
              >
                View Our Projects
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 text-white px-7 py-3.5 rounded font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#7BB5D8]">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#5AAED6] font-medium uppercase tracking-widest">
              West Town · Ukrainian Village · Wicker Park · Bucktown
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
              What We Do
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#0B2A4A]">
              Development &<br />Construction Management
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-[#B5CCE5] rounded-xl p-7 hover:border-[#1A4F8A] hover:shadow-sm transition-all"
              >
                <div className="text-2xl text-[#1A4F8A] mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg text-[#0B2A4A] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#1C3050] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-[#1A4F8A] hover:text-[#0B2A4A] underline underline-offset-4"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#EEF4FB] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
              Recent Work
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#0B2A4A]">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-5">
            {featuredProjects.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-[#B5CCE5] rounded-xl overflow-hidden grid md:grid-cols-[280px_1fr] hover:border-[#1A4F8A] hover:shadow-sm transition-all"
              >
                {/* Project image */}
                <div className="relative h-48 md:h-auto min-h-[180px]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>
                {/* Content */}
                <div className="p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-[#4A82B5] uppercase tracking-widest">
                        {p.type}
                      </span>
                      <span className="text-[#B5CCE5]">·</span>
                      <span className="text-xs text-[#2980B9]">{p.location}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0B2A4A] mb-2">
                      {p.name}
                    </h3>
                    <p className="text-sm text-[#1C3050] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs font-medium text-[#1A4F8A] uppercase tracking-widest">
                      {p.status}
                    </span>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#1A4F8A] hover:text-[#0B2A4A] transition-colors"
                    >
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#1A4F8A] text-white px-7 py-3.5 rounded font-medium hover:bg-[#0B2A4A] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0B2A4A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[#7BB5D8] text-lg mb-8">
            Tell us about your development. We&apos;ll tell you how we can get it
            built right.
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
