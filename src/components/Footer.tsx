import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B2A4A] text-[#DDE9F7]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white mb-3">
            BirchBuild
          </div>
          <p className="text-sm text-[#7BB5D8] leading-relaxed max-w-xs">
            Chicago residential and mixed-use development. Construction management
            across the near-northwest side.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-4">
            Navigation
          </div>
          <ul className="space-y-2">
            {[
              { href: "/projects", label: "Projects" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#7BB5D8] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-4">
            Contact
          </div>
          <ul className="space-y-2 text-sm text-[#7BB5D8]">
            <li>hello@birchbuild.org</li>
            <li>birchbuild.org</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1A4F8A] max-w-6xl mx-auto px-6 py-5 text-xs text-[#4A82B5]">
        © {new Date().getFullYear()} BirchBuild. All rights reserved.
      </div>
    </footer>
  );
}
