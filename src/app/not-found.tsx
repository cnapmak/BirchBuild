import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | BirchBuild",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-[#EEF4FB] pt-32 pb-24 min-h-[60vh]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
          404
        </div>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#0B2A4A] mb-5">
          Page Not Found
        </h1>
        <p className="text-lg text-[#1C3050] max-w-xl leading-relaxed mb-10">
          That page doesn&apos;t exist or has moved. Our full portfolio is on the projects page.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-block bg-[#1A4F8A] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0B2A4A] transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/"
            className="inline-block border border-[#1A4F8A] text-[#1A4F8A] px-8 py-4 rounded-lg font-medium hover:bg-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
