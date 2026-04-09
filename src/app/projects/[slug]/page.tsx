import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ImageGalleryClient from "@/components/ImageGalleryClient";
import { allProperties } from "../page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProperties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = allProperties.find((p) => p.slug === slug);
  if (!property) return {};
  return {
    title: `${property.address} | BirchBuild`,
    description: `BirchBuild project at ${property.address}, ${property.neighborhood}, Chicago. ${property.type} construction and renovation.`,
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = allProperties.find((p) => p.slug === slug);
  if (!property) notFound();

  const p = property;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] bg-[#0B2A4A]">
        {p.img && (
          <Image
            src={p.img}
            alt={p.address}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-[#0B2A4A]/30 to-transparent" />

        {/* Back link */}
        <div className="absolute top-6 left-6 z-10 pt-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            ← All Projects
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#7BB5D8] mb-2">
            {p.neighborhood} · Chicago, IL
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-3">
            {p.address}
          </h1>
          <span className="inline-block bg-[#1A4F8A]/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {p.type}
          </span>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#EEF4FB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Left: description + gallery */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0B2A4A] mb-4">
                Project Overview
              </h2>
              <p className="text-[#1C3050] leading-relaxed mb-10">
                {p.description ??
                  `${p.type} project in ${p.neighborhood}, one of Chicago's most sought-after neighborhoods.`}
              </p>

              {p.img && (
                <>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0B2A4A] mb-5">
                    Photo Gallery
                  </h2>
                  <ImageGalleryClient baseUrl={p.img} address={p.address} maxPhotos={15} extraImages={p.extraImages} />
                </>
              )}
            </div>

            {/* Right: property details card */}
            <div className="lg:pt-2">
              <div className="bg-white border border-[#B5CCE5] rounded-xl p-6 sticky top-28">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-4">
                  Property Details
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs text-[#4A82B5] uppercase tracking-wider mb-0.5">Address</dt>
                    <dd className="font-medium text-[#0B2A4A]">{p.address}, Chicago, IL</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#4A82B5] uppercase tracking-wider mb-0.5">Neighborhood</dt>
                    <dd className="font-medium text-[#0B2A4A]">{p.neighborhood}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#4A82B5] uppercase tracking-wider mb-0.5">Project Type</dt>
                    <dd className="font-medium text-[#0B2A4A]">{p.type}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#4A82B5] uppercase tracking-wider mb-0.5">City</dt>
                    <dd className="font-medium text-[#0B2A4A]">Chicago, IL</dd>
                  </div>
                </dl>

                <div className="mt-8 pt-6 border-t border-[#EEF4FB]">
                  <p className="text-xs text-[#4A82B5] mb-4">
                    Interested in a similar project?
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-[#1A4F8A] text-white text-sm font-medium text-center px-5 py-3 rounded-lg hover:bg-[#0B2A4A] transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to portfolio */}
      <section className="bg-white py-12 border-t border-[#B5CCE5]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-[#4A82B5] font-semibold uppercase tracking-widest mb-1">
              BirchBuild Portfolio
            </div>
            <p className="text-sm text-[#1C3050]">35+ completed projects across Chicago</p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-[#1A4F8A] hover:text-[#0B2A4A] transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </>
  );
}
