"use client";

import { useEffect } from "react";
import Image from "next/image";

interface Props {
  photos: string[];
  index: number;
  /** Used for alt text and the caption. */
  label: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Full-screen photo viewer: Esc closes, arrow keys step, page scroll is locked while open. */
export default function Lightbox({ photos, index, label, onIndexChange, onClose }: Props) {
  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onIndexChange(index - 1);
      if (e.key === "ArrowRight" && hasNext) onIndexChange(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, hasPrev, hasNext, onIndexChange, onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${label} photos`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {hasPrev && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition-colors"
          onClick={(e) => { e.stopPropagation(); onIndexChange(index - 1); }}
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
          src={photos[index]}
          alt={`${label} — photo ${index + 1}`}
          fill
          className="object-contain"
          sizes="896px"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/50 px-3 py-1 rounded-full whitespace-nowrap">
          {label} · {index + 1} / {photos.length}
        </div>
      </div>

      {hasNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white text-2xl flex items-center justify-center hover:bg-black/70 transition-colors"
          onClick={(e) => { e.stopPropagation(); onIndexChange(index + 1); }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      <button
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
