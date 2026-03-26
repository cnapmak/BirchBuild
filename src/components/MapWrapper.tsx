"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { MapPin } from "./ProjectsMap";
import type { Property } from "./ExpandablePropertyGrid";
import PropertyModal from "./PropertyModal";

const ProjectsMap = dynamic(() => import("./ProjectsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] rounded-xl border border-[#B5CCE5] bg-[#EEF4FB] flex items-center justify-center">
      <span className="text-sm text-[#4A82B5]">Loading map…</span>
    </div>
  ),
});

interface Props {
  pins: MapPin[];
  properties: Property[];
}

export default function MapWrapper({ pins, properties }: Props) {
  const [active, setActive] = useState<Property | null>(null);

  function handlePinClick(address: string) {
    const match = properties.find((p) =>
      p.address.toLowerCase().includes(address.split(",")[0].toLowerCase()) ||
      address.toLowerCase().includes(p.address.toLowerCase())
    );
    if (match) setActive(match);
  }

  return (
    <>
      <ProjectsMap pins={pins} onPinClick={handlePinClick} />
      {active && (
        <PropertyModal property={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
