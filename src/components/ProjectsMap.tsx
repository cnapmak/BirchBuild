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
  const center: [number, number] = [41.905, -87.679];

  return (
    <div className="w-full h-[520px] rounded-xl overflow-hidden border border-[#B5CCE5]">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
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
