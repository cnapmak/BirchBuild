// Shared Open Graph card details.
//
// Next injects the generated opengraph-image automatically, but only into an
// `openGraph` object a page has NOT overridden. Any page that sets its own
// `openGraph` (for a per-page title/description) drops the inherited image, so
// those pages must list OG_IMAGE explicitly. Paths resolve against the
// `metadataBase` set in layout.tsx.

export const OG_ALT =
  "BirchBuild — Chicago development and construction management. 38 buildings, $66M in construction value, 170+ residences delivered.";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: OG_ALT,
};
