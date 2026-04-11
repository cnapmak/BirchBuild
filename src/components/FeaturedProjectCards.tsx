"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Property } from "./ExpandablePropertyGrid";

const PropertyModal = dynamic(() => import("./PropertyModal"), { ssr: false });

interface FeaturedProject {
  name: string;
  neighborhood: string;
  type: string;
  slug: string;
  address: string;
  img: string;
  description: string;
  highlights: string[];
}

export default function FeaturedProjectCards({ projects }: { projects: FeaturedProject[] }) {
  const [active, setActive] = useState<Property | null>(null);

  return (
    <>
      <div className="space-y-6">
        {projects.map((p) => (
          <button
            key={p.name}
            onClick={() =>
              setActive({
                address: p.name,
                neighborhood: p.neighborhood,
                type: p.type,
                slug: p.slug,
                img: p.img,
                description: p.description,
              })
            }
            className="w-full text-left border border-[#B5CCE5] rounded-xl overflow-hidden grid md:grid-cols-[340px_1fr] hover:border-[#1A4F8A] hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="relative h-52 md:h-auto min-h-[200px]">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="bg-[#1A4F8A]/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {p.type}
                </span>
              </div>
            </div>
            <div className="p-7">
              <div className="text-xs text-[#4A82B5] font-semibold uppercase tracking-widest mb-1">
                {p.neighborhood}
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0B2A4A] mb-1">
                {p.name}
              </h2>
              <div className="text-xs text-[#2980B9] mb-3">{p.address}</div>
              <p className="text-sm text-[#1C3050] leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs bg-[#EEF4FB] text-[#1C3050] border border-[#B5CCE5] px-3 py-1 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <PropertyModal property={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
