"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet's default marker icon broken by webpack
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [20, 32],
  iconAnchor: [10, 32],
  popupAnchor: [0, -34],
  shadowSize: [32, 32],
});

const greenIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 14px;
    height: 14px;
    background: #1A4F8A;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
});

export interface MapPin {
  address: string;
  lat: number;
  lng: number;
  type?: string;
}

interface Props {
  pins: MapPin[];
}

export default function ProjectsMap({ pins }: Props) {
  useEffect(() => {
    // Ensure Leaflet CSS is loaded
  }, []);

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
            icon={greenIcon}
          >
            <Popup>
              <div style={{ fontFamily: "Inter, sans-serif", minWidth: 140 }}>
                <div style={{ fontWeight: 600, color: "#0B2A4A", marginBottom: 2 }}>
                  {pin.address}
                </div>
                {pin.type && (
                  <div style={{ fontSize: 11, color: "#4A82B5", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {pin.type}
                  </div>
                )}
                <div style={{ fontSize: 11, color: "#2980B9", marginTop: 2 }}>
                  Chicago, IL
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
