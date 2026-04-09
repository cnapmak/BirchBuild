"use client";

import dynamic from "next/dynamic";

const ImageGallery = dynamic(() => import("./ImageGallery"), { ssr: false });

export default function ImageGalleryClient({
  baseUrl,
  address,
  maxPhotos,
  extraImages,
}: {
  baseUrl: string;
  address: string;
  maxPhotos?: number;
  extraImages?: string[];
}) {
  return <ImageGallery baseUrl={baseUrl} address={address} maxPhotos={maxPhotos} extraImages={extraImages} />;
}
