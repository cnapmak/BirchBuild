"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const PropertyModal = dynamic(() => import("./PropertyModal"), { ssr: false });

export interface Property {
  address: string;
  neighborhood: string;
  type: string;
  img?: string;
  description?: string;
}

export default function ExpandablePropertyGrid({ properties }: { properties: Property[] }) {
  const [active, setActive] = useState<Property | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {properties.map((p) => (
          <button
            key={p.address}
            onClick={() => setActive(p)}
            className="bg-white border border-[#B5CCE5] rounded-lg px-4 py-3 flex items-start gap-3 hover:border-[#1A4F8A] hover:shadow-sm transition-all text-left w-full group"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A4F8A] mt-1 shrink-0 group-hover:scale-125 transition-transform" />
            <div className="min-w-0">
              <div className="text-sm font-medium text-[#0B2A4A] truncate">{p.address}</div>
              <div className="text-xs text-[#2980B9] mt-0.5">{p.neighborhood} · {p.type}</div>
            </div>
            <div className="ml-auto text-[#B5CCE5] group-hover:text-[#1A4F8A] transition-colors shrink-0 text-lg leading-none">
              ›
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
