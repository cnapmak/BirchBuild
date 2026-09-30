"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const blueIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 14px;
    height: 14px;
    background: #1A4F8A;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    cursor: pointer;
    transition: transform 0.15s;
  " onmouseover="this.style.transform='scale(1.5)'" onmouseout="this.style.transform='scale(1)'"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

export interface MapPin {
  address: string;
  lat: number;
  lng: number;
  type?: string;
}

interface Props {
  pins: MapPin[];
  onPinClick: (address: string) => void;
}

export default function ProjectsMap({ pins, onPinClick }: Props) {
  // Frame every pin rather than a fixed center/zoom, so outlying projects aren't cut off.
  const bounds = L.latLngBounds(pins.map((p) => [p.lat, p.lng] as [number, number]));

  return (
    // `isolate` keeps Leaflet's z-indexed panes and controls (400–1000) below the sticky header.
    <div className="birch-map isolate w-full h-[520px] rounded-xl overflow-hidden border border-[#B5CCE5]">
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [24, 24] }}
        zoomSnap={0.25}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        {pins.map((pin) => (
          <Marker
            key={pin.address}
            position={[pin.lat, pin.lng]}
            icon={blueIcon}
            eventHandlers={{ click: () => onPinClick(pin.address) }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
