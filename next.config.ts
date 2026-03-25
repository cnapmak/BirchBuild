import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "resources.atproperties.com" },
      { protocol: "https", hostname: "pi.movoto.com" },
      { protocol: "https", hostname: "img.urbanre.com" },
      { protocol: "https", hostname: "d229qcohg01jma.cloudfront.net" },
      { protocol: "https", hostname: "www.312estates.com" },
    ],
  },
};

export default nextConfig;
