"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface CurrentProject {
  address: string;
  neighborhood: string;
  type: string;
  units: string;
  /** Progress photos, oldest first. The newest one is used as the card cover. */
  photos?: string[];
}

export default function CurrentProjectCards({ projects }: { projects: CurrentProject[] }) {
  const [open, setOpen] = useState<{ project: CurrentProject; index: number } | null>(null);

  useEffect(() => {
    if (!open) return;
    const photos = open.project.photos ?? [];
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft" && open.index > 0) setOpen({ ...open, index: open.index - 1 });
      if (e.key === "ArrowRight" && open.index < photos.length - 1)
        setOpen({ ...open, index: open.index + 1 });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {projects.map((p) => {
          const photos = p.photos ?? [];
          const cover = photos.length - 1;
          return (
            <div
              key={p.address}
              className="border border-[#B5CCE5] rounded-xl overflow-hidden"
            >
              {photos.length > 0 && (
                <button
                  onClick={() => setOpen({ project: p, index: cover })}
                  className="relative block w-full aspect-[4/3] overflow-hidden group"
                  aria-label={`View ${photos.length} progress photos of ${p.address}`}
                >
                  <Image
                    src={photos[cover]}
                    alt={`${p.address} — construction progress`}
                    fill
                    className="object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute bottom-3 right-3 text-xs font-medium text-white bg-black/50 px-2.5 py-1 rounded-full">
                    {photos.length} progress photos
                  </span>
                </button>
              )}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#2980B9] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#2980B9]">
                    Under Construction
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0B2A4A] mb-1">
                  {p.address}
                </h3>
                <div className="text-xs text-[#2980B9] mb-4">{p.neighborhood}, Chicago</div>
                <div className="text-sm text-[#1C3050]">{p.type}</div>
                <div className="text-sm font-medium text-[#0B2A4A] mt-1">{p.units}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {open && open.project.photos && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          {open.index > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => { e.stopPropagation(); setOpen({ ...open, index: open.index - 1 }); }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          <div
            className="relative z-10 w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={open.project.photos[open.index]}
              alt={`${open.project.address} — progress photo ${open.index + 1}`}
              fill
              className="object-contain"
              sizes="896px"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/50 px-3 py-1 rounded-full whitespace-nowrap">
              {open.project.address} · {open.index + 1} / {open.project.photos.length}
            </div>
          </div>

          {open.index < open.project.photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => { e.stopPropagation(); setOpen({ ...open, index: open.index + 1 }); }}
              aria-label="Next"
            >
              ›
            </button>
          )}

          <button
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
