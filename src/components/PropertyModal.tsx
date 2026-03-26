"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Property } from "./ExpandablePropertyGrid";

interface Props {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property: p, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 sm:h-80 bg-[#DDE9F7]">
          {p.img ? (
            <>
              <Image
                src={p.img}
                alt={p.address}
                fill
                className="object-cover"
                sizes="768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-[#4A82B5]">Photo coming soon</span>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {/* Type badge */}
          <div className="absolute bottom-4 left-5">
            <span className="bg-[#1A4F8A]/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {p.type}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-7">
          <div className="text-xs text-[#4A82B5] font-semibold uppercase tracking-widest mb-1">
            {p.neighborhood}
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0B2A4A] mb-1">
            {p.address}
          </h2>
          <div className="text-xs text-[#2980B9] mb-4">Chicago, IL</div>
          <p className="text-sm text-[#1C3050] leading-relaxed mb-5">
            {p.description ??
              "Construction and renovation project completed by BirchBuild in one of Chicago's most sought-after neighborhoods."}
          </p>
          <Link
            href={`/projects/${p.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1A4F8A] hover:text-[#0B2A4A] transition-colors"
          >
            View Full Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
