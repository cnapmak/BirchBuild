"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EEF4FB]/95 backdrop-blur-sm border-b border-[#B5CCE5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <BirchLogo />
          <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0B2A4A] tracking-wide">
            BirchBuild
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-[#1A4F8A]"
                  : "text-[#1C3050] hover:text-[#1A4F8A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#1A4F8A] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#0B2A4A] transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1C3050]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#EEF4FB] border-t border-[#B5CCE5] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href ? "text-[#1A4F8A]" : "text-[#1C3050]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function BirchLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Birch tree silhouette */}
      <rect x="12.5" y="14" width="3" height="12" fill="#1C3050" rx="1" />
      <ellipse cx="14" cy="9" rx="7" ry="9" fill="#1A4F8A" />
      <ellipse cx="9" cy="13" rx="4" ry="5" fill="#4A82B5" />
      <ellipse cx="19" cy="13" rx="4" ry="5" fill="#4A82B5" />
      {/* Bark marks */}
      <rect x="13" y="16" width="2" height="1" fill="#DDE9F7" rx="0.5" opacity="0.6" />
      <rect x="13" y="19" width="2" height="1" fill="#DDE9F7" rx="0.5" opacity="0.6" />
    </svg>
  );
}
