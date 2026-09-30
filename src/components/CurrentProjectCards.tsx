"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

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

      {open && open.project.photos && (
        <Lightbox
          photos={open.project.photos}
          index={open.index}
          label={open.project.address}
          onIndexChange={(index) => setOpen({ ...open, index })}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
