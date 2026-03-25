"use client";

import dynamic from "next/dynamic";
import type { MapPin } from "./ProjectsMap";

const ProjectsMap = dynamic(() => import("./ProjectsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] rounded-xl border border-[#B5CCE5] bg-[#EEF4FB] flex items-center justify-center">
      <span className="text-sm text-[#4A82B5]">Loading map…</span>
    </div>
  ),
});

export default function MapWrapper({ pins }: { pins: MapPin[] }) {
  return <ProjectsMap pins={pins} />;
}
