"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  baseUrl: string;
  address: string;
  maxPhotos?: number;
  extraImages?: string[];
}

/** Derives the URL for photo index N given a base URL (photo 1). */
function getNthPhotoUrl(baseUrl: string, n: number): string {
  // resources.atproperties.com pattern: …/{hash}/1.jpg
  // d229qcohg01jma.cloudfront.net pattern: …/{hash}/1.jpg
  if (
    baseUrl.includes("atproperties.com") ||
    baseUrl.includes("cloudfront.net")
  ) {
    return baseUrl.replace(/\/1\.jpg$/, `/${n}.jpg`);
  }

  // img.urbanre.com pattern: …/{slug}-0.jpg or …/{slug}-N.jpg
  if (baseUrl.includes("urbanre.com")) {
    return baseUrl.replace(/-0\.jpg$/, `-${n - 1}.jpg`);
  }

  // Movoto / other sources — can't reliably increment, skip
  return "";
}

export default function ImageGallery({ baseUrl, address, maxPhotos = 12, extraImages }: Props) {
  const [photos, setPhotos] = useState<string[]>([baseUrl]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!baseUrl) return;
    const candidates: string[] = [];
    for (let n = 2; n <= maxPhotos; n++) {
      const url = getNthPhotoUrl(baseUrl, n);
      if (url) candidates.push(url);
    }

    let active = true;
    const verified: string[] = [];
    let pending = candidates.length;

    if (pending === 0) {
      if (extraImages?.length) {
        setPhotos([baseUrl, ...extraImages]);
      }
      return;
    }

    candidates.forEach((url, idx) => {
      const img = new window.Image();
      img.onload = () => {
        if (!active) return;
        verified[idx] = url;
        pending--;
        if (pending === 0) {
          const extra = extraImages ?? [];
          setPhotos([baseUrl, ...verified.filter(Boolean), ...extra]);
        }
      };
      img.onerror = () => {
        if (!active) return;
        pending--;
        if (pending === 0) {
          const extra = extraImages ?? [];
          setPhotos([baseUrl, ...verified.filter(Boolean), ...extra]);
        }
      };
      img.src = url;
    });

    return () => {
      active = false;
    };
  }, [baseUrl, maxPhotos, extraImages]);

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((url, i) => (
          <button
            key={url}
            onClick={() => setLightbox(i)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#B5CCE5] hover:border-[#1A4F8A] hover:shadow-md transition-all group"
          >
            <Image
              src={url}
              alt={`${address} — photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          <div
            className="relative z-10 w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox]}
              alt={`${address} — photo ${lightbox + 1}`}
              fill
              className="object-cover"
              sizes="896px"
            />
            <div className="absolute bottom-3 right-4 text-xs text-white/70 bg-black/40 px-2 py-0.5 rounded-full">
              {lightbox + 1} / {photos.length}
            </div>
          </div>

          {/* Next */}
          {lightbox < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              aria-label="Next"
            >
              ›
            </button>
          )}

          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
